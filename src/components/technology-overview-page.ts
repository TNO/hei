import m from 'mithril';
import { FlatButton, Icon, ModalPanel, Switch, uniqueId } from 'mithril-materialized';
import { LayoutForm, UIForm } from 'mithril-ui-form';
import { resolveImg } from '../assets/images';
import {
  AVAILABILITY,
  CHOICE,
  Dashboards,
  EVIDENCE_DIRECTION,
  EVIDENCE_LEVEL,
  HPE_CLASSIFICATION,
  INVASIVENESS_OBTRUSIVENESS,
  MAIN_CAPABILITY,
  MATURITY,
  SPECIFIC_CAPABILITY,
  Technology,
  TECHNOLOGY_CATEGORY,
  YES_NO,
} from '../models';
import { MeiosisComponent, routingSvc } from '../services';
import {
  availabilityOptions,
  boosterOptions,
  ethicalConsiderationsOptions,
  evidenceDirOptions,
  evidenceLevelOptions,
  getOptionsLabel,
  hpeClassificationOptions,
  invasivenessOptions,
  isUnique,
  mainCapabilityOptions,
  maturityOptions,
  NoYesUnknown,
  specificCapabilityOptions,
  specificCognitiveCapabilityOptions,
  specificMentalCapabilityOptions,
  specificPersonalityCapabilityOptions,
  specificPhysicalCapabilityOptions,
  specificSocialCapabilityOptions,
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
  const ethicalOpt = toOptions(ethicalConsiderationsOptions);
  const evidenceDirOpt = toOptions(evidenceDirOptions);
  const evidenceQualityOpt = toOptions(evidenceLevelOptions);
  const boosterOpt = toOptions(boosterOptions);

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
          specificCap = [],
          hasEthical,
          evidenceDir,
          evidenceScore,
        } = cur;
        const key = technology;
        if (acc.hasOwnProperty(key)) {
          acc[key].id.push(id);
          mechanism && acc[key].mechanism.push(mechanism);
          desc && acc[key].desc.push(desc);
          keywords && acc[key].desc.push(...keywords);
          booster && acc[key].booster.push(booster);
          mainCap && acc[key].mainCap.push(mainCap);
          specificCap && specificCap instanceof Array && acc[key].specificCap.push(...specificCap);
          hpeClassification && acc[key].hpeClassification.push(hpeClassification);
          category && acc[key].category.push(category);
          invasive && acc[key].invasive.push(invasive);
          availability && acc[key].availability.push(availability);
          maturity && acc[key].maturity.push(maturity);
          hasEthical && acc[key].ethicalConsiderations.push(hasEthical);
          evidenceDir && acc[key].evidenceDir.push(evidenceDir);
          evidenceScore && acc[key].evidenceScore.push(evidenceScore);
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
            specificCap: specificCap instanceof Array ? specificCap : [specificCap],
            hpeClassification: [hpeClassification],
            category: [category],
            invasive: [invasive],
            availability: [availability],
            maturity: [maturity],
            ethicalConsiderations: [],
            evidenceDir: [],
            evidenceScore: [],
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
    specificCap: SPECIFIC_CAPABILITY[];
    hpeClassification: HPE_CLASSIFICATION[];
    category: TECHNOLOGY_CATEGORY[];
    invasive: INVASIVENESS_OBTRUSIVENESS[];
    maturity: MATURITY[];
    availability: AVAILABILITY[];
    ethicalConsiderations: CHOICE[];
    evidenceDir: EVIDENCE_DIRECTION[];
    evidenceScore: EVIDENCE_LEVEL[];
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
      setPage(Dashboards.TECHNOLOGIES);
    },
    // onupdate: () => {
    //   const elems = document.querySelectorAll('.tooltipped');
    //   M.Tooltip.init(elems);
    // },
    view: ({
      attrs: {
        state: { model, curUser, bookmarks = [], compareList = [], searchFilters },
        actions: { setTechnology, saveModel, changePage, bookmark, compare, setSearchFilters },
      },
    }) => {
      if (technologies.length === 0) {
        const { technologies: allTech } = model;
        technologies = toTechnologies(allTech);
      }
      const {
        searchFilter,
        mainCapFilter,
        specificCapFilter,
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
        if (bookmarked && t.id.every((id) => bookmarks.indexOf(id) < 0)) return false;
        if (
          (boosterFilter && boosterFilter === 1 && !t.booster) ||
          (boosterFilter === 2 && t.booster)
        )
          return false;
        if (mainCapFilter && !t.mainCap.some((c) => c === mainCapFilter)) {
          return false;
        }
        if (specificCapFilter && !t.specificCap.some((c) => c === specificCapFilter)) {
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
        if (
          boosterFilter &&
          !t.booster.some(
            (c) => (boosterFilter === YES_NO.YES && c) || (boosterFilter === YES_NO.NO && !c)
          )
        ) {
          return false;
        }
        if (ethicalFilter && !t.ethicalConsiderations.some((c) => c === ethicalFilter)) {
          return false;
        }
        if (evidenceDirFilter && !t.evidenceDir.some((c) => c === evidenceDirFilter)) {
          return false;
        }
        if (evidenceQualityFilter && !t.evidenceScore.some((c) => c === evidenceQualityFilter)) {
          return false;
        }
        return true;
      });
      const hasFilters = filteredTechnologies.length !== technologies.length;

      return [
        m('.row.technology-overview-page', { style: 'height: 95vh' }, [
          m(
            '.col.s12',
            m(
              '.row.search-filters',
              m(
                '.col.s12.m4',
                {
                  style: 'height: 81px',
                },
                m(TextInputWithClear, {
                  label: 'Search',
                  iconName: 'search',
                  className: 'bottom-margin0',
                  initialValue: searchFilter,
                  oninput: (s) => {
                    searchFilters.searchFilter = s || '';
                    setSearchFilters(searchFilters);
                    // m.redraw();
                  },
                })
              ),
              m(
                '.col.s6.m2',
                {
                  style: 'height: 81px',
                },
                m(FlatButton, {
                  modalId: 'search',
                  iconName: 'manage_search',
                  label: 'Adv.search',
                })
              ),
              m('.col.s6.m3', [
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
          hasFilters && [
            m('.col.s12.filters', [
              m(
                'span',
                `${filteredTechnologies.length} search result${
                  filteredTechnologies.length === 1 ? '' : 's'
                }: `
              ),
              mainCapFilter > 0 &&
                m('.chip', [
                  `Capability: ${getOptionsLabel(mainCapabilityOptions, mainCapFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    { onclick: () => setSearchFilters({ ...searchFilters, mainCapFilter: 0 }) },
                    'close'
                  ),
                ]),
              specificCapFilter > 0 &&
                m('.chip', [
                  `Spec.cap.: ${getOptionsLabel(
                    specificCapabilityOptions,
                    specificCapFilter,
                    false
                  )}`,
                  m(
                    'i.close.material-icons',
                    { onclick: () => setSearchFilters({ ...searchFilters, specificCapFilter: 0 }) },
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
              boosterFilter > 0 &&
                m('.chip', [
                  `Booster: ${getOptionsLabel(boosterOptions, boosterFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () => setSearchFilters({ ...searchFilters, boosterFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
              ethicalFilter > 0 &&
                m('.chip', [
                  `Ethical: ${getOptionsLabel(NoYesUnknown, ethicalFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () => setSearchFilters({ ...searchFilters, ethicalFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
              evidenceDirFilter > 0 &&
                m('.chip', [
                  `Evidence indication: ${getOptionsLabel(
                    evidenceDirOptions,
                    evidenceDirFilter,
                    false
                  )}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () => setSearchFilters({ ...searchFilters, evidenceDirFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
              evidenceQualityFilter > 0 &&
                m('.chip', [
                  `Evidence quality: ${getOptionsLabel(
                    evidenceLevelOptions,
                    evidenceQualityFilter,
                    false
                  )}`,
                  m(
                    'i.close.material-icons',
                    {
                      onclick: () =>
                        setSearchFilters({ ...searchFilters, evidenceQualityFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
            ]),
          ],
          filteredTechnologies.map((t) => {
            const isBookmarked = t.id.some((id) => bookmarks.indexOf(id) >= 0);
            const selectedForComparison = t.id.some((id) => compareList.indexOf(id) >= 0);
            return m(
              '.col.s12.m6.l4.xl3',
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
                        { className: 'black-text' },
                        // { className: isBookmarked ? 'amber-text' : 'black-text' },
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
                    'a.tooltip',
                    // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=SHOW]',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${t.id[0]}`),
                      onclick: () => setTechnology(t.curTech),
                    },
                    m(Icon, { iconName: 'visibility' }),
                    m('span.tooltiptext', 'SHOW')
                  ),
                  m(
                    'a.tooltip',
                    // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=BOOKMARK]',
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
                      className: isBookmarked ? 'amber-text' : '',
                    }),
                    m('span.tooltiptext', isBookmarked ? 'BOOKMARKED' : 'BOOKMARK')
                  ),
                  m(
                    'a.tooltip',
                    // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=COMPARE]',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGIES),
                      onclick: () => {
                        if (selectedForComparison) {
                          t.id.forEach((id) => {
                            if (compareList.indexOf(id) >= 0) compare(id);
                          });
                        } else {
                          compare(t.id[0]);
                        }
                      },
                    },
                    m(Icon, {
                      iconName: 'balance',
                      className: selectedForComparison ? 'amber-text' : '',
                    }),
                    m('span.tooltiptext', selectedForComparison ? 'COMPARING' : 'COMPARE')
                  )
                ),
              ])
            );
          }),
        ]),
        m(ModalPanel, {
          id: 'search',
          title: 'Advanced search',
          description: m(
            '.row',
            {
              style: 'max-height: 100%; height: calc(100% - 56px); overflow-y: scroll',
            },
            m(LayoutForm, {
              form: [
                {
                  id: 'mainCapFilter',
                  label: 'Main capability',
                  className: 'col s12 m6 l3',
                  options: mainCapOpt,
                  description: mainCapFilter
                    ? mainCapOpt.filter((o) => +o.id === mainCapFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific capabilities',
                  type: 'select',
                  options: specificCapabilityOptions,
                  className: 'col s12 m6 l3',
                  disabled: true,
                  show: ['mainCapFilter = 0', '!mainCapFilter'],
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific cognitive capabilities',
                  type: 'select',
                  options: specificCognitiveCapabilityOptions,
                  className: 'col s12 m6 l3',
                  show: 'mainCapFilter = 1',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific physical capabilities',
                  type: 'select',
                  options: specificPhysicalCapabilityOptions,
                  className: 'col s12 m6 l3',
                  show: 'mainCapFilter = 2',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific mental capabilities',
                  type: 'select',
                  options: specificMentalCapabilityOptions,
                  className: 'col s12 m6 l3',
                  show: 'mainCapFilter = 3',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific social capabilities',
                  type: 'select',
                  options: specificSocialCapabilityOptions,
                  className: 'col s12 m6 l3',
                  show: 'mainCapFilter = 4',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific personality capabilities',
                  type: 'select',
                  options: specificPersonalityCapabilityOptions,
                  className: 'col s12 m6 l3',
                  show: 'mainCapFilter = 5',
                },
                {
                  id: 'categoryFilter',
                  label: 'Category',
                  className: 'col s12 m6 l3',
                  options: techCatOpt,
                  description: categoryFilter
                    ? techCatOpt.filter((o) => +o.id === categoryFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'invasivenessFilter',
                  label: 'Invasiveness',
                  className: 'col s12 m6 l3',
                  options: invasivenessOpt,
                  description: invasivenessFilter
                    ? invasivenessOpt.filter((o) => +o.id === invasivenessFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'maturityFilter',
                  label: 'Maturity',
                  className: 'col s12 m6 l3',
                  options: maturityOpt,
                  description: maturityFilter
                    ? maturityOpt.filter((o) => +o.id === maturityFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'availabilityFilter',
                  label: 'Availability',
                  className: 'col s12 m6 l3',
                  options: availabilityOpt,
                  // description: availabilityFilter
                  //   ? availabilityOpt.filter((o) => o.id === availabilityFilter).shift()?.title
                  //   : undefined,
                },
                {
                  id: 'boosterFilter',
                  label: 'Booster',
                  className: 'col s12 m6 l3',
                  options: boosterOpt,
                  // description: boosterFilter
                  //   ? availabilityOpt.filter((o) => o.id === boosterFilter).shift()?.title
                  //   : undefined,
                },
                {
                  id: 'ethicalFilter',
                  label: 'Ethical considerations',
                  className: 'col s12 m6 l3',
                  options: ethicalOpt,
                  description: ethicalFilter
                    ? ethicalOpt.filter((o) => +o.id === ethicalFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'evidenceDirFilter',
                  label: 'Evidence indication',
                  className: 'col s12 m6 l3',
                  options: evidenceDirOpt,
                  description: evidenceDirFilter
                    ? evidenceDirOpt.filter((o) => +o.id === evidenceDirFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'evidenceQualityFilter',
                  label: 'Evidence quality',
                  className: 'col s12 m6 l3',
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
