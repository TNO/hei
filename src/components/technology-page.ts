import m from 'mithril';
import { FlatButton, Icon } from 'mithril-materialized';
import { UIForm, LayoutForm } from 'mithril-ui-form';
import { resolveImg } from '../assets/images';
import { Dashboards, defaultModel, Technology, User } from '../models';
import { MeiosisComponent, routingSvc } from '../services';
import {
  availabilityOptions,
  evidenceDirOptions,
  evidenceLevelOptions,
  getOptionsLabel,
  hpeClassificationOptions,
  invasivenessOptions,
  joinListWithAnd,
  mainCapabilityOptions,
  maturityOptions,
  statusOptions,
  technologyCategoryOptions,
  technologyForm,
  resolveRefs,
  resolveChoice,
  optionsToTxt,
  specificCapabilityOptions,
} from '../utils';

export const TechnologyPage: MeiosisComponent = () => {
  const initTechForm = (technologies: Technology[], id: string, users: User[]) => {
    const technologyOptions = technologies
      .filter((t) => t.id !== id)
      .map((t) => ({ id: t.id, label: t.technology }));
    return technologyForm(users, technologyOptions);
  };

  let id = '';
  let isEditting = false;
  let form: UIForm = [];
  let allTechnologies = [] as Technology[];
  let isBookmarked = false;

  return {
    oninit: ({
      attrs: {
        state: { model, curTech = {} as Technology },
        actions: { setPage, setTechnology },
      },
    }) => {
      const { technologies = [], users = [] } = model;
      setPage(Dashboards.TECHNOLOGY);
      id = m.route.param('id') || curTech.id || '';
      isEditting = (m.route.param('edit') as unknown as boolean) === true ? true : false;
      form = initTechForm(technologies, id, users);
      const found =
        id === curTech.id
          ? curTech
          : technologies.filter((t) => t.id === id).shift() || technologies[0];
      allTechnologies = found ? technologies.filter((t) => t.technology === found.technology) : [];
      if (found !== curTech) setTechnology(found);
    },
    view: ({
      attrs: {
        state: {
          curTech = {} as Technology,
          bookmarks,
          compareList = [],
          model = defaultModel,
          curUser,
        },
        actions: { saveModel, changePage, setTechnology, bookmark, compare },
      },
    }) => {
      const { users, technologies } = model;
      if (!curTech.id) {
        form = initTechForm(technologies, id, users);
        const found = technologies.filter((t) => t.id === id).shift() || technologies[0];
        if (found) {
          allTechnologies = technologies.filter((t) => t.technology === found.technology);
          setTechnology(found);
        }
        return;
      }
      isBookmarked = bookmarks.indexOf(curTech.id) >= 0;
      const selectedForComparison = compareList.indexOf(curTech.id) >= 0;
      const ownerId = curTech.owner;
      const updated = curTech.updated ? new Date(curTech.updated) : undefined;
      const owner = users.filter((u) => u.id === ownerId).shift();
      const usedLiterature = curTech.literature;

      const { md2html: md } = resolveRefs(curTech.literature);
      const mailtoLink =
        owner && `mailto:${owner.email}?subject=${curTech.technology.replace(/ /g, '%20')}`;
      const similarTech =
        curTech.similar &&
        curTech.similar.length > 0 &&
        technologies.filter((t) => curTech.similar.indexOf(t.id) >= 0);

      return [
        m(
          '.row.technology-page',
          { style: 'height: 95vh' },
          curUser &&
            curUser === 'admin' && [
              m(FlatButton, {
                className: 'right no-print',
                label: isEditting ? 'Stop editting' : 'Edit',
                iconName: 'edit',
                onclick: () => (isEditting = !isEditting),
              }),
              isEditting &&
                m(FlatButton, {
                  className: 'right',
                  label: 'Delete',
                  iconName: 'delete',
                  onclick: () => {
                    model.technologies = model.technologies.filter((t) => t.id !== curTech.id);
                    saveModel(model);
                    changePage(Dashboards.TECHNOLOGIES);
                  },
                }),
            ],
          isEditting
            ? m(
                '.col.s12',
                m(LayoutForm, {
                  form,
                  obj: curTech,
                  onchange: () => {
                    model.technologies = model.technologies.map((t) =>
                      t.id === curTech.id ? curTech : t
                    );
                    saveModel(model);
                  },
                })
              )
            : [
                m('h3', [
                  curTech.technology,
                  m(
                    'a.btn-flat.btn-large.clean',
                    {
                      style: 'padding: 0 5px',
                      onclick: () => bookmark(curTech.id),
                    },
                    m(Icon, {
                      iconName: isBookmarked ? 'star' : 'star_border',
                      className: isBookmarked ? 'amber-text white' : 'white',
                    })
                  ),
                  m(
                    'a.btn-flat.btn-large.clean',
                    {
                      style: 'padding: 0 5px',
                      onclick: () => compare(curTech.id),
                    },
                    m(Icon, {
                      iconName: 'compare',
                      className: selectedForComparison ? 'amber-text white' : 'white',
                    })
                  ),
                ]),
                curTech.application && m('h4', md(curTech.application)),
                m(
                  '.col.s12.m6',
                  m(
                    '.row.bottom-margin0',
                    allTechnologies.length === 1
                      ? m('h5.separator', 'Description')
                      : m('h5.separator.button-row', [
                          'Description',
                          ...allTechnologies.map((t, i) =>
                            m(FlatButton, {
                              className:
                                t.id === curTech.id ? 'bold grey lighten-3' : 'grey lighten-3',
                              label:
                                getOptionsLabel(mainCapabilityOptions, t.mainCap, false) ||
                                `v${i + 1}`,
                              onclick: () => setTechnology(t),
                            })
                          ),
                        ]),
                    m('section', [
                      curTech.desc && m('p', curTech.desc),
                      curTech.category &&
                        m('p', [
                          m('span.bold', 'Category: '),
                          getOptionsLabel(technologyCategoryOptions, curTech.category),
                        ]),
                      curTech.mainCap &&
                        m('p', [
                          m('span.bold', 'Main capability: '),
                          `${getOptionsLabel(
                            mainCapabilityOptions,
                            curTech.mainCap,
                            false
                          )} ${getOptionsLabel(
                            hpeClassificationOptions,
                            curTech.hpeClassification,
                            false
                          )}`,
                        ]),
                      curTech.specificCap &&
                        m('p', [
                          m('span.bold', 'Specific capability: '),
                          joinListWithAnd(
                            optionsToTxt(curTech.specificCap, specificCapabilityOptions)
                          ) + '.',
                        ]),
                      curTech.invasive &&
                        m('p', [
                          m('span.bold', 'Invasive: '),
                          getOptionsLabel(invasivenessOptions, curTech.invasive) + '.',
                        ]),
                      curTech.maturity &&
                        m('p', [
                          m('span.bold', 'Maturity: '),
                          getOptionsLabel(maturityOptions, curTech.maturity) + '.',
                        ]),
                      typeof curTech.booster !== 'undefined' &&
                        m('p', [
                          m('span.bold', 'Can be used as booster: '),
                          `${curTech.booster ? 'Yes' : 'No'}.`,
                        ]),
                    ])
                  )
                ),
                curTech.url &&
                  m(
                    '.col.s6.m6',
                    m('img.responsive-img', {
                      src: resolveImg(curTech.url, curTech.img),
                      alt: curTech.technology,
                    })
                  ),
                m(
                  '.col.s12',
                  m('.row.bottom-margin0', [
                    m('h5.separator', 'How it works'),
                    curTech.mechanism &&
                      m('p', [m('span.bold', 'Mechanism: '), md(curTech.mechanism)]),
                    curTech.examples &&
                      m('p', [m('span.bold', 'Examples: '), md(curTech.examples)]),
                    curTech.incubation &&
                      m('p', [m('span.bold', 'Incubation: '), md(curTech.incubation)]),
                    curTech.effectDuration &&
                      m('p', [m('span.bold', 'Effect duration: '), md(curTech.effectDuration)]),
                    m('h5.separator', 'Keep in mind'),
                    curTech.practical &&
                      m('p', [
                        m(
                          'span.bold[title=This information is not medical advice, please read the disclaimer!]',
                          m.trust('Practical execution<sup class="red-text">*</sup>: ')
                        ),
                        md(curTech.practical),
                      ]),
                    curTech.sideEffects &&
                      m('p', [
                        m('span.bold', 'Side-effects: '),
                        md(resolveChoice(curTech.hasSideEffects, curTech.sideEffects)),
                      ]),
                    curTech.diff &&
                      m('p', [
                        m('span.bold', 'Individual differences: '),
                        md(resolveChoice(curTech.hasIndDiff, curTech.diff)),
                      ]),
                    curTech.ethical &&
                      m('p', [
                        m('span.bold', 'Ethical considerations: '),
                        md(resolveChoice(curTech.hasEthical, curTech.ethical)),
                      ]),
                    similarTech &&
                      m(
                        'p',
                        m(
                          'span.bold',
                          `Similar technolog${similarTech.length > 1 ? 'ies' : 'y'}: `
                        ),
                        similarTech.map((s, i) =>
                          m(
                            'a',
                            {
                              href: routingSvc.href(Dashboards.TECHNOLOGY, `?id=${s.id}`),
                            },
                            s.technology + (i < similarTech.length - 1 ? ', ' : '.')
                          )
                        )
                      ),
                    curTech.evidenceDir &&
                      m('p', [
                        m('span.bold', 'Evidence direction: '),
                        getOptionsLabel(evidenceDirOptions, curTech.evidenceDir) + '.',
                      ]),
                    curTech.evidenceScore &&
                      m('p', [
                        m('span.bold', 'Quality of evidence: '),
                        getOptionsLabel(evidenceLevelOptions, curTech.evidenceScore) + '.',
                      ]),
                    curTech.availability &&
                      m('p', [
                        m('span.bold', 'Availability: '),
                        getOptionsLabel(availabilityOptions, curTech.availability) + '.',
                      ]),
                    m('h5.separator', 'References'),
                  ])
                ),
                m(
                  '.col.s6.m8',
                  m('.row', [
                    usedLiterature && [
                      m(
                        'ol.browser-default',
                        usedLiterature.map((l) =>
                          m(
                            'li',
                            m(
                              'a',
                              {
                                href: l.doi,
                                alt: l.title,
                                target: '_blank',
                              },
                              l.title
                            )
                          )
                        )
                      ),
                    ],
                  ])
                ),
                owner &&
                  m(
                    '.col.s6.m4',
                    m('.card', [
                      owner.url &&
                        m('.card-image.waves-effect.waves-block.waves-light', [
                          m(
                            'a',
                            owner &&
                              owner.url &&
                              m('img.activator', { src: owner.url, alt: owner.name })
                          ),
                        ]),
                      m(
                        '.card-content',
                        m(
                          'p',
                          m(
                            'span.card-title.activator',
                            owner.name,
                            m('i.material-icons.right', 'more_vert')
                          ),
                          m('ul', [
                            owner.phone &&
                              m('li', [
                                m(Icon, {
                                  iconName: 'phone',
                                  className: 'tiny',
                                }),
                                m('a', { href: `tel:${owner.phone}` }, ' ' + owner.phone),
                              ]),
                            m('li', [
                              m(Icon, {
                                iconName: 'email',
                                className: 'tiny',
                              }),
                              m('a', { href: mailtoLink }, ' ' + owner.email),
                            ]),
                          ])
                        )
                      ),
                      m('.card-action', m('a', { href: mailtoLink }, 'Email')),
                      m('.card-reveal', [
                        m(
                          'span.card-title.bold',
                          owner.name,
                          m(Icon, { iconName: 'close', className: 'right' })
                        ),
                        updated &&
                          m('p', [m('span.bold', `Last update: ${updated.toDateString()}`)]),
                        m('p', [
                          m('span.bold', 'Status: '),
                          getOptionsLabel(statusOptions, curTech.status) + '.',
                        ]),
                      ]),
                    ])
                  ),
              ]
        ),
      ];
    },
  };
};
