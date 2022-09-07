import m from 'mithril';
import { FlatButton, Icon, ModalPanel, uuid4 } from 'mithril-materialized';
import { UIForm, LayoutForm } from 'mithril-ui-form';
import { resolveImg } from '../assets/images';
import { Dashboards, defaultModel, Intervention, User } from '../models';
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
  interventionCategoryOptions,
  interventionForm,
  resolveRefs,
  resolveChoice,
  optionsToTxt,
  specificCapabilityOptions,
} from '../utils';

export const InterventionPage: MeiosisComponent = () => {
  const initInterventionForm = (interventions: Intervention[], id: string, users: User[]) => {
    const interventionOptions = interventions
      .filter((t) => t.id !== id)
      .map((t) => ({ id: t.id, label: t.intervention }));
    return interventionForm(users, interventionOptions);
  };

  let id = '';
  let isEditing = false;
  let form: UIForm = [];
  let allInterventions = [] as Intervention[];
  let isBookmarked = false;
  let formValid = false;

  return {
    oninit: ({
      attrs: {
        state: { model, curTech = {} as Intervention },
        actions: { setPage, setIntervention },
      },
    }) => {
      const { interventions: technologies = [], users = [] } = model;
      setPage(Dashboards.INTERVENTION);
      id = m.route.param('id') || curTech.id || '';
      isEditing = (m.route.param('edit') as unknown as boolean) === true ? true : false;
      form = initInterventionForm(technologies, id, users);
      const found =
        id === curTech.id
          ? curTech
          : technologies.filter((t) => t.id === id).shift() || technologies[0];
      allInterventions = found
        ? technologies.filter((t) => t.intervention === found.intervention)
        : [];
      if (found !== curTech) setIntervention(found);
      window.scrollTo({ top: 0, left: 0 });
    },
    view: ({
      attrs: {
        state: {
          curTech = {} as Intervention,
          bookmarks,
          compareList = [],
          model = defaultModel,
          curUser,
        },
        actions: { saveModel, changePage, setIntervention, bookmark, compare },
      },
    }) => {
      const { users, interventions: technologies } = model;
      if (!curTech.id) {
        form = initInterventionForm(technologies, id, users);
        const found = technologies.filter((t) => t.id === id).shift() || technologies[0];
        if (found) {
          allInterventions = technologies.filter((t) => t.intervention === found.intervention);
          setIntervention(found);
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
        owner && `mailto:${owner.email}?subject=${curTech.intervention.replace(/ /g, '%20')}`;
      const similarTech =
        curTech.similar &&
        curTech.similar.length > 0 &&
        technologies.filter((t) => curTech.similar.indexOf(t.id) >= 0);

      const filteredSpecCapOpt = specificCapabilityOptions.filter((c) => c.mc === curTech.mainCap);

      return [
        m(
          '.row.intervention-page',
          { style: 'height: 95vh' },
          curUser &&
            curUser === 'admin' && [
              m(FlatButton, {
                className: 'right no-print',
                label: isEditing ? 'Save' : 'Edit',
                disabled: isEditing && !formValid,
                iconName: isEditing ? 'save' : 'edit',
                onclick: () => (isEditing = !isEditing),
              }),

              isEditing
                ? m(FlatButton, {
                    className: 'right',
                    label: 'Delete',
                    iconName: 'delete',
                    modalId: 'deleteIntervention',
                  })
                : m(FlatButton, {
                    className: 'right no-print',
                    label: 'Duplicate',
                    iconName: 'content_copy',
                    onclick: () => {
                      const clone = JSON.parse(JSON.stringify(curTech)) as Intervention;
                      clone.intervention += ' (COPY)';
                      clone.id = uuid4();
                      model.interventions.push(clone);
                      isEditing = true;
                      setIntervention(clone);
                      changePage(Dashboards.INTERVENTION, { id: clone.id });
                    },
                  }),
            ],
          isEditing
            ? m(
                '.col.s12',
                m(LayoutForm, {
                  form,
                  obj: curTech,
                  onchange: (isValid) => {
                    formValid = isValid;
                    if (!isValid) {
                      return;
                    }
                    model.interventions = model.interventions.map((t) =>
                      t.id === curTech.id ? curTech : t
                    );
                    saveModel(model);
                  },
                })
              )
            : [
                m('h3', [
                  curTech.intervention,
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
                      iconName: 'balance',
                      className: selectedForComparison ? 'amber-text white' : 'white',
                    })
                  ),
                ]),
                curTech.application && m('h4', md(curTech.application)),
                m(
                  '.col.s12.m6',
                  m(
                    '.row.bottom-margin0',
                    allInterventions.length === 1
                      ? m('h5.separator', 'Description')
                      : m('h5.separator.button-row', [
                          'Description',
                          ...allInterventions.map((t, i) =>
                            m(FlatButton, {
                              className:
                                t.id === curTech.id ? 'bold grey lighten-3' : 'grey lighten-3',
                              label:
                                getOptionsLabel(mainCapabilityOptions, t.mainCap, false) ||
                                `v${i + 1}`,
                              onclick: () => setIntervention(t),
                            })
                          ),
                        ]),
                    m('section', [
                      curTech.desc && m('p', curTech.desc),
                      curTech.category &&
                        m('p', [
                          m('span.bold', 'Category: '),
                          getOptionsLabel(interventionCategoryOptions, curTech.category),
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
                            optionsToTxt(curTech.specificCap, filteredSpecCapOpt, false)
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
                          `${
                            curTech.booster
                              ? 'Yes, the intervention can be applied quickly (approx. < 1 hour)'
                              : 'No, the intervention can not be applied quickly (approx. < 1 hour)'
                          }.`,
                        ]),
                    ])
                  )
                ),
                curTech.url &&
                  m(
                    '.col.s6.m6',
                    m('img.responsive-img', {
                      src: resolveImg(curTech.url, curTech.img),
                      alt: curTech.intervention,
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
                        m('span.bold', 'Possible side-effects: '),
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
                          `Similar intervention${similarTech.length > 1 ? 's' : ''}: `
                        ),
                        similarTech.map((s, i) =>
                          m(
                            'a',
                            {
                              href: routingSvc.href(Dashboards.INTERVENTION, `?id=${s.id}`),
                            },
                            s.intervention + (i < similarTech.length - 1 ? ', ' : '.')
                          )
                        )
                      ),
                    curTech.evidenceDir &&
                      m('p', [
                        m('span.bold', 'Evidence indication: '),
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
                  '.col.s12.m8',
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
                    '.col.s12.m4',
                    m('p', [m('span.bold', 'Expert: '), owner.name + '.']),
                    m('p', [m('span.bold', 'Email: '), m('a', { href: mailtoLink }, owner.email)]),
                    owner.phone &&
                      m('p', [
                        m('span.bold', 'Phone: '),
                        m('a', { href: `tel:${owner.phone}` }, owner.phone),
                      ]),
                    updated &&
                      m('p', [m('span.bold', 'Last update: '), updated.toDateString() + '.'])
                  ),
              ]
        ),
        m(ModalPanel, {
          id: 'deleteIntervention',
          title: `Delete ${curTech.intervention}?`,
          description: `Are you sure that you want to delete ${curTech.intervention}?`,
          buttons: [
            {
              label: 'Yes',
              iconName: 'delete',
              onclick: () => {
                model.interventions = model.interventions.filter((t) => t.id !== curTech.id);
                saveModel(model);
                changePage(Dashboards.INTERVENTIONS);
              },
            },
            { label: 'No', iconName: 'cancel' },
          ],
        }),
      ];
    },
  };
};
