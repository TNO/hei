import m from 'mithril';
import { FlatButton, Icon, ModalPanel, Switch, uniqueId } from 'mithril-materialized';
import { LayoutForm, UIForm } from 'mithril-ui-form';
import { resolveImg } from '../assets/images';
import {
  AVAILABILITY,
  Dashboards,
  HPE_CLASSIFICATION,
  INVASIVENESS_OBTRUSIVENESS,
  MAIN_CAPABILITY,
  MATURITY,
  SPECIFIC_CAPABILITY,
  Technology,
  TECHNOLOGY_CATEGORY,
} from '../models';
import { MeiosisComponent, routingSvc } from '../services';
import {
  availabilityOptions,
  evidenceDirOptions,
  evidenceLevelOptions,
  getOptionsLabel,
  hpeClassificationOptions,
  invasivenessOptions,
  isUnique,
  mainCapabilityOptions,
  maturityOptions,
  NoYesUnknown,
  technologyCategoryOptions,
} from '../utils';
import { TextInputWithClear } from './ui';

export const TechnologyOverviewPage: MeiosisComponent = () => {
  const toOptions = (opt: Array<{ id: number; label: string; title?: string }>) =>
    [{ id: 0, label: '-', title: '' }, ...opt] as unknown as Array<{
      id: string;
      label: string;
      title?: string;
    }>;
  const mainCapOpt = toOptions(mainCapabilityOptions);
  const techCatOpt = toOptions(technologyCategoryOptions);
  const invasivenessOpt = toOptions(invasivenessOptions);
  const maturityOpt = toOptions(maturityOptions);
  const availabilityOpt = toOptions(availabilityOptions);
  const ethicalOpt = toOptions(NoYesUnknown);
  const evidenceDirOpt = toOptions(evidenceDirOptions);
  const evidenceQualityOpt = toOptions(evidenceLevelOptions);
  const boosterOpt = [
    { id: 0, label: '-' },
    { id: 1, label: 'Yes' },
    { id: 2, label: 'No' },
  ];

  const toTechnologies = (allTech: Technology[]) =>
    Object.values(
      allTech.reduce((acc, cur) => {
        const {
          id,
          img,
          url,
          technology,
          mechanism,
          desc,
          keywords,
          booster,
          mainCap,
          hpeClassification,
          category,
          invasive,
          availability,
          maturity,
          specificCap,
        } = cur;
        const key = technology;
        if (acc.hasOwnProperty(key)) {
          acc[key].id.push(id);
          acc[key].mechanism.push(mechanism);
          desc && acc[key].desc.push(desc);
          keywords && acc[key].desc.push(...keywords);
          acc[key].booster.push(booster);
          acc[key].mainCap.push(mainCap);
          acc[key].hpeClassification.push(hpeClassification);
          acc[key].category.push(category);
          acc[key].invasive.push(invasive);
          acc[key].availability.push(availability);
          acc[key].maturity.push(maturity);
          acc[key].capabilities.push(specificCap);
        } else {
          acc[key] = {
            curTech: cur,
            id: [id],
            technology,
            img,
            url,
            mechanism: [mechanism],
            desc: desc ? [desc] : [],
            keywords: keywords && keywords.length ? [...keywords] : [],
            booster: [booster],
            mainCap: [mainCap],
            hpeClassification: [hpeClassification],
            category: [category],
            invasive: [invasive],
            availability: [availability],
            maturity: [maturity],
            capabilities: [specificCap],
          };
        }
        return acc;
      }, {} as Record<string, TECHNOLOGY_COMBINATION>)
    );

  type TECHNOLOGY_COMBINATION = {
    curTech: Technology;
    id: string[];
    technology: string;
    url: string;
    img: string;
    mechanism: string[];
    desc: string[];
    keywords: string[];
    booster: boolean[];
    mainCap: MAIN_CAPABILITY[];
    hpeClassification: HPE_CLASSIFICATION[];
    category: TECHNOLOGY_CATEGORY[];
    invasive: INVASIVENESS_OBTRUSIVENESS[];
    maturity: MATURITY[];
    availability: AVAILABILITY[];
    capabilities: SPECIFIC_CAPABILITY[];
  };

  let technologies = [] as TECHNOLOGY_COMBINATION[];

  return {
    oninit: ({
      attrs: {
        state: { model },
        actions: { setPage },
      },
    }) => {
      const { technologies: allTech = [] } = model;
      technologies = toTechnologies(allTech);
      console.log(technologies);
      setPage(Dashboards.TECHNOLOGIES);
    },
    view: ({
      attrs: {
        state: { model, curUser, bookmarks = [], searchFilters },
        actions: { setTechnology, saveModel, changePage, bookmark, setSearchFilters },
      },
    }) => {
      if (technologies.length === 0) {
        const { technologies: allTech } = model;
        technologies = toTechnologies(allTech);
      }
      const {
        searchFilter,
        mainCapFilter,
        categoryFilter,
        invasivenessFilter,
        maturityFilter,
        availabilityFilter,
        boosterFilter,
        ethicalFilter,
        evidenceDirFilter,
        evidenceQualityFilter,
        bookmarked,
      } = searchFilters;

      const searchRegex = searchFilter ? new RegExp(searchFilter, 'i') : undefined;
      const filteredTechnologies = technologies.filter((t) => {
        if (
          searchRegex &&
          !(
            searchRegex.test(t.technology || '') ||
            t.mechanism.some((m) => searchRegex.test(m)) ||
            t.desc.some((m) => searchRegex.test(m)) ||
            t.keywords.some((kw) => searchRegex.test(kw))
          )
        ) {
          return false;
        }
        if (bookmarked && bookmarks.indexOf(t.technology) < 0) return false;
        if (
          (boosterFilter && boosterFilter === 1 && !t.booster) ||
          (boosterFilter === 2 && t.booster)
        )
          return false;
        if (mainCapFilter && !t.mainCap.some((c) => c === mainCapFilter)) {
          return false;
        }
        if (categoryFilter && !t.category.some((c) => c === categoryFilter)) {
          return false;
        }
        if (invasivenessFilter && !t.invasive.some((c) => c === invasivenessFilter)) {
          return false;
        }
        if (maturityFilter && !t.maturity.some((c) => c === maturityFilter)) {
          return false;
        }
        if (availabilityFilter && !t.availability.some((c) => c === availabilityFilter)) {
          return false;
        }
        return true;
      });
      const hasFilters = true; // Object.keys(searchFilters).some((f) => !f);

      return [
        m('.row.technology-overview-page', { style: 'height: 95vh' }, [
          m(
            '.col.s12',
            m(
              '.row.search-filters',
              m(
                '.col.s6.m3.xl2',
                {
                  style: 'height: 81px',
                },
                m(TextInputWithClear, {
                  label: 'Search',
                  iconName: 'search',
                  className: 'bottom-margin0',
                  oninput: (s) => {
                    searchFilters.searchFilter = s || '';
                    setSearchFilters(searchFilters);
                    // m.redraw();
                  },
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(FlatButton, { modalId: 'search', label: 'Specify search parameters' })
              ),
              m('.col.s6.m3.xl2', [
                m(Switch, {
                  label: 'Bookmarked?',
                  right: 'Yes',
                  onchange: (v) => {
                    searchFilters.bookmarked = v;
                    setSearchFilters(searchFilters);
                  },
                }),
              ]),
              curUser &&
                curUser === 'admin' &&
                m(
                  '.right-align',
                  m(FlatButton, {
                    label: 'Add technology',
                    iconName: 'add',
                    className: 'small',
                    onclick: () => {
                      const newTech = { id: uniqueId() } as Technology;
                      model.technologies.push(newTech);
                      saveModel(model);
                      changePage(Dashboards.TECHNOLOGY, { id: newTech.id, edit: 'true' });
                    },
                  })
                )
            )
          ),
          hasFilters &&
            m('.col.s12.filters', [
              mainCapFilter > 0 &&
                m('.chip', [
                  `Capability: ${getOptionsLabel(mainCapabilityOptions, mainCapFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    { onclick: () => setSearchFilters({ ...searchFilters, mainCapFilter: 0 }) },
                    'close'
                  ),
                ]),
              categoryFilter > 0 &&
                m('.chip', [
                  `Category: ${getOptionsLabel(technologyCategoryOptions, categoryFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    { onclick: () => setSearchFilters({ ...searchFilters, categoryFilter: 0 }) },
                    'close'
                  ),
                ]),
              invasivenessFilter > 0 &&
                m('.chip', [
                  `Invasiveness: ${getOptionsLabel(
                    invasivenessOptions,
                    invasivenessFilter,
                    false
                  )}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () => setSearchFilters({ ...searchFilters, invasivenessFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
              maturityFilter > 0 &&
                m('.chip', [
                  `Maturity: ${getOptionsLabel(maturityOptions, maturityFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () => setSearchFilters({ ...searchFilters, maturityFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
              availabilityFilter > 0 &&
                m('.chip', [
                  `Availability: ${getOptionsLabel(
                    availabilityOptions,
                    availabilityFilter,
                    false
                  )}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () => setSearchFilters({ ...searchFilters, availabilityFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
            ]),
          filteredTechnologies.map((t) => {
            const isBookmarked = t.id.some((id) => bookmarks.indexOf(id) >= 0);
            return m(
              '.col.s12.m6.l3.xl2',
              m('.card.medium', [
                m('.card-image', [
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${t.id[0]}`),
                    },
                    [
                      m('img', { src: resolveImg(t.url, t.img), alt: t.technology }),
                      m(
                        'span.card-title.bold.sharpen',
                        { className: isBookmarked ? 'amber-text' : 'black-text' },
                        t.technology
                      ),
                    ]
                  ),
                ]),
                m('.card-content', [
                  m(
                    'span.bold',
                    t.mainCap
                      .map((c, i) =>
                        `${getOptionsLabel(mainCapabilityOptions, c, false)} ${getOptionsLabel(
                          hpeClassificationOptions,
                          t.hpeClassification[i],
                          false
                        )}`.toUpperCase()
                      )
                      .filter(isUnique)
                      .join(', ')
                  ),
                  m('p.overflow', t.desc),
                ]),
                m(
                  '.card-action',
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${t.id[0]}`),
                      onclick: () => setTechnology(t.curTech),
                    },
                    m(Icon, { iconName: 'visibility' })
                  ),
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGIES),
                      onclick: () => {
                        if (isBookmarked) {
                          t.id.forEach((id) => {
                            if (bookmarks.indexOf(id) >= 0) bookmark(id);
                          });
                        } else {
                          bookmark(t.id[0]);
                        }
                      },
                    },
                    m(Icon, {
                      iconName: isBookmarked ? 'star' : 'star_border',
                    })
                  )
                ),
              ])
            );
          }),
        ]),
        m(ModalPanel, {
          id: 'search',
          title: 'Specify search parameters',
          description: m(
            '.row',
            m(LayoutForm, {
              form: [
                {
                  id: 'mainCapFilter',
                  label: 'Main capability',
                  className: 'col s12 m6',
                  options: mainCapOpt,
                  description: mainCapFilter
                    ? mainCapOpt.filter((o) => +o.id === mainCapFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'categoryFilter',
                  label: 'Category',
                  className: 'col s12 m6',
                  options: techCatOpt,
                  description: categoryFilter
                    ? techCatOpt.filter((o) => +o.id === categoryFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'invasivenessFilter',
                  label: 'Invasiveness',
                  className: 'col s12 m6',
                  options: invasivenessOpt,
                  description: invasivenessFilter
                    ? invasivenessOpt.filter((o) => +o.id === invasivenessFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'maturityFilter',
                  label: 'Maturity',
                  className: 'col s12 m6',
                  options: maturityOpt,
                  description: maturityFilter
                    ? maturityOpt.filter((o) => +o.id === maturityFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'availabilityFilter',
                  label: 'Availability',
                  className: 'col s12 m6',
                  options: availabilityOpt,
                  // description: availabilityFilter
                  //   ? availabilityOpt.filter((o) => o.id === availabilityFilter).shift()?.title
                  //   : undefined,
                },
                {
                  id: 'boosterFilter',
                  label: 'Booster',
                  className: 'col s12 m6',
                  options: boosterOpt,
                  // description: boosterFilter
                  //   ? availabilityOpt.filter((o) => o.id === boosterFilter).shift()?.title
                  //   : undefined,
                },
                {
                  id: 'ethicalFilter',
                  label: 'Ethical considerations',
                  className: 'col s12 m6',
                  options: ethicalOpt,
                  description: ethicalFilter
                    ? ethicalOpt.filter((o) => +o.id === ethicalFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'evidenceDirFilter',
                  label: 'Evidence direction',
                  className: 'col s12 m6',
                  options: evidenceDirOpt,
                  description: evidenceDirFilter
                    ? evidenceDirOpt.filter((o) => +o.id === evidenceDirFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'evidenceQualityFilter',
                  label: 'Evidence quality',
                  className: 'col s12 m6',
                  options: evidenceQualityOpt,
                  description: evidenceQualityFilter
                    ? evidenceQualityOpt.filter((o) => +o.id === evidenceQualityFilter).shift()
                        ?.title
                    : undefined,
                },
              ] as UIForm,
              obj: searchFilters,
              onchange: () => setSearchFilters(searchFilters),
            })
          ),
          bottomSheet: true,
          fixedFooter: true,
          buttons: [{ label: 'DONE' }],
        }),
      ];
    },
  };
};
