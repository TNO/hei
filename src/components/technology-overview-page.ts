import m from 'mithril';
import { FlatButton, Icon, Select, Switch, uniqueId } from 'mithril-materialized';
import { resolveImg } from '../assets/images';
import { Dashboards, Technology } from '../models';
import { MeiosisComponent, routingSvc } from '../services';
import {
  availabilityOptions,
  getOptionsLabel,
  invasivenessOptions,
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

  let searchFilter = '';
  let mainCapFilter = 0;
  let categoryFilter = 0;
  let invasivenessFilter = 0;
  let maturityFilter = 0;
  let availabilityFilter = 0;
  let boosterFilter = 0;
  let bookmarked = false;

  return {
    oninit: ({
      attrs: {
        actions: { setPage },
      },
    }) => setPage(Dashboards.TECHNOLOGIES),
    view: ({
      attrs: {
        state: { model, curUser, bookmarks = [] },
        actions: { setTechnology, saveModel, changePage, bookmark },
      },
    }) => {
      const { technologies } = model;

      const searchRegex = searchFilter ? new RegExp(searchFilter, 'i') : undefined;
      console.table({ mainCapFilter, categoryFilter, searchFilter });
      const filteredTechnologies = technologies.filter((t) => {
        if (
          searchRegex &&
          !(
            searchRegex.test(t.technology || '') ||
            searchRegex.test(t.mechanism || '') ||
            searchRegex.test(t.desc || '') ||
            (t.keywords || []).some((kw) => searchRegex.test(kw))
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
        if (mainCapFilter && t.mainCap !== mainCapFilter) {
          return false;
        }
        if (categoryFilter && t.category !== categoryFilter) {
          return false;
        }
        if (invasivenessFilter && t.invasive !== invasivenessFilter) {
          return false;
        }
        if (maturityFilter && t.maturity !== maturityFilter) {
          return false;
        }
        if (availabilityFilter && t.availability !== availabilityFilter) {
          return false;
        }
        return true;
      });

      return [
        m('.row.technology-overview-page', { style: 'height: 95vh' }, [
          m(
            '.col.s12',
            m(
              '.row',
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
                    getOptionsLabel(technologyCategoryOptions, t.category).toUpperCase()
                  ),
                  m('p.overflow', t.desc),
                ]),
                m(
                  '.card-action',
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${t.id}`),
                      onclick: () => setTechnology(t),
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
