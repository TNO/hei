import m from 'mithril';
import { FlatButton, Icon, Select, Switch, uniqueId } from 'mithril-materialized';
import { resolveImg } from '../assets/images';
import {
  AVAILABILITY,
  Dashboards,
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
  getOptionsLabel,
  invasivenessOptions,
  isUnique,
  mainCapabilityOptions,
  maturityOptions,
  technologyCategoryOptions,
} from '../utils';
import { TextInputWithClear } from './ui';

export const TechnologyOverviewPage: MeiosisComponent = () => {
  const mainCapOptions = [{ id: 0, label: '-', title: '' }, ...mainCapabilityOptions];
  const techCatOptions = [{ id: 0, label: '-', title: '' }, ...technologyCategoryOptions];
  const invasivenessOpt = [{ id: 0, label: '-', title: '' }, ...invasivenessOptions];
  const maturityOpt = [{ id: 0, label: '-', title: '' }, ...maturityOptions];
  const availabilityOpt = [{ id: 0, label: '-', title: '' }, ...availabilityOptions];
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
          category,
          invasive,
          availability,
          maturity,
          specificCap,
        } = cur;
        const key = technology;
        if (acc.hasOwnProperty(key)) {
          acc[key].mechanism.push(mechanism);
          desc && acc[key].desc.push(desc);
          keywords && acc[key].desc.push(...keywords);
          acc[key].booster.push(booster);
          acc[key].mainCap.push(mainCap);
          acc[key].category.push(category);
          acc[key].invasive.push(invasive);
          acc[key].availability.push(availability);
          acc[key].maturity.push(maturity);
          acc[key].capabilities.push(specificCap);
        } else {
          acc[key] = {
            curTech: cur,
            id: id,
            technology,
            img,
            url,
            mechanism: [mechanism],
            desc: desc ? [desc] : [],
            keywords: keywords && keywords.length ? [...keywords] : [],
            booster: [booster],
            mainCap: [mainCap],
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

  let searchFilter = '';
  let mainCapFilter = 0;
  let categoryFilter = 0;
  let invasivenessFilter = 0;
  let maturityFilter = 0;
  let availabilityFilter = 0;
  let boosterFilter = 0;
  let bookmarked = false;

  type TECHNOLOGY_COMBINATION = {
    curTech: Technology;
    id: string;
    technology: string;
    url: string;
    img: string;
    mechanism: string[];
    desc: string[];
    keywords: string[];
    booster: boolean[];
    mainCap: MAIN_CAPABILITY[];
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
        state: { model, curUser, bookmarks = [] },
        actions: { setTechnology, saveModel, changePage, bookmark },
      },
    }) => {
      if (technologies.length === 0) {
        const { technologies: allTech } = model;
        technologies = toTechnologies(allTech);
      }

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
                    searchFilter = s || '';
                    m.redraw();
                  },
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(Select, {
                  label: 'Main capability',
                  options: mainCapOptions,
                  initialValue: mainCapFilter,
                  helperText: mainCapFilter
                    ? mainCapOptions.filter((o) => o.id === mainCapFilter).shift()?.title
                    : undefined,
                  onchange: (c) => (mainCapFilter = +c),
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(Select, {
                  label: 'Category',
                  options: techCatOptions,
                  helperText: categoryFilter
                    ? techCatOptions.filter((o) => o.id === categoryFilter).shift()?.title
                    : undefined,
                  onchange: (c) => (categoryFilter = +c),
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(Select, {
                  label: 'Invasiveness',
                  options: invasivenessOpt,
                  helperText: invasivenessFilter
                    ? invasivenessOpt.filter((o) => o.id === invasivenessFilter).shift()?.title
                    : undefined,
                  onchange: (c) => (invasivenessFilter = +c),
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(Select, {
                  label: 'Maturity',
                  options: maturityOpt,
                  helperText: maturityFilter
                    ? maturityOpt.filter((o) => o.id === maturityFilter).shift()?.title
                    : undefined,
                  onchange: (c) => (maturityFilter = +c),
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(Select, {
                  label: 'Availability',
                  options: availabilityOpt,
                  onchange: (c) => (availabilityFilter = +c),
                })
              ),
              m(
                '.col.s6.m3.xl2',
                m(Select, {
                  label: 'Booster',
                  options: boosterOpt,
                  onchange: (c) => (boosterFilter = +c),
                })
              ),
              m('.col.s6.m3.xl2', [
                m(Switch, {
                  label: 'Bookmarked?',
                  right: 'Yes',
                  onchange: (v) => (bookmarked = v),
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
          filteredTechnologies.map((t) => {
            const isBookmarked = bookmarks.indexOf(t.id) >= 0;
            return m(
              '.col.s12.m6.l3.xl2',
              m('.card.medium', [
                m('.card-image', [
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${t.id}`),
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
                    t.category
                      .filter(isUnique)
                      .map((c) => getOptionsLabel(technologyCategoryOptions, c).toUpperCase())
                      .join(', ')
                  ),
                  m('p.overflow', t.desc),
                ]),
                m(
                  '.card-action',
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${t.id}`),
                      onclick: () => setTechnology(t.curTech),
                    },
                    m(Icon, { iconName: 'visibility' })
                  ),
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGIES),
                      onclick: () => bookmark(t.id),
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
      ];
    },
  };
};
