import m from 'mithril';
import { FlatButton, Icon, ModalPanel, uniqueId } from 'mithril-materialized';
import { ILayoutForm, LayoutForm, UIForm } from 'mithril-ui-form';
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
  Intervention,
  INTERVENTION_CATEGORY,
  YES_NO,
  SearchFilter,
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
  interventionCategoryOptions,
} from '../utils';
import { TextInputWithClear } from './ui';

export const InterventionOverviewPage: MeiosisComponent = () => {
  const toOptions = (opt: Array<{ id: number; label: string; title?: string }>) =>
    [{ id: 0, label: '-', title: '' }, ...opt] as unknown as Array<{
      id: string;
      label: string;
      title?: string;
    }>;
  const mainCapOpt = toOptions(mainCapabilityOptions);
  const techCatOpt = toOptions(interventionCategoryOptions);
  const invasivenessOpt = toOptions(invasivenessOptions);
  const maturityOpt = toOptions(maturityOptions);
  const availabilityOpt = toOptions(availabilityOptions);
  const ethicalOpt = toOptions(ethicalConsiderationsOptions);
  const evidenceDirOpt = toOptions(evidenceDirOptions);
  const evidenceQualityOpt = toOptions(evidenceLevelOptions);
  const boosterOpt = toOptions(boosterOptions);
  const specificCognitiveCapabilityOpt = toOptions(specificCognitiveCapabilityOptions);
  const specificPhysicalCapabilityOpt = toOptions(specificPhysicalCapabilityOptions);
  const specificMentalCapabilityOpt = toOptions(specificMentalCapabilityOptions);
  const specificSocialCapabilityOpt = toOptions(specificSocialCapabilityOptions);
  const specificPersonalityCapabilityOpt = toOptions(specificPersonalityCapabilityOptions);

  const toInterventions = (allInterventions: Intervention[]) =>
    Object.values(
      allInterventions.reduce((acc, cur) => {
        const {
          id,
          img,
          url,
          intervention,
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
        const key = intervention;

        const sc = specificCap instanceof Array ? specificCap : [specificCap];
        const search = `${intervention} ${desc} ${getOptionsLabel(
          mainCapabilityOptions,
          mainCap
        )} ${mechanism} ${keywords && keywords.length ? keywords.join(' ') : ''} ${getOptionsLabel(
          interventionCategoryOptions,
          category
        )} ${sc.map((c) => getOptionsLabel(specificCapabilityOptions, c)).join(' ')}`;

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
          acc[key].search += ` ${search}`;
        } else {
          acc[key] = {
            id: [id],
            intervention,
            img,
            url,
            mechanism: [mechanism],
            desc: desc ? [desc] : [],
            keywords: keywords && keywords.length ? [...keywords] : [],
            booster: [booster],
            mainCap: [mainCap],
            specificCap: specificCap instanceof Array ? [...specificCap] : [specificCap],
            hpeClassification: [hpeClassification],
            category: [category],
            invasive: [invasive],
            availability: [availability],
            maturity: [maturity],
            ethicalConsiderations: [],
            evidenceDir: [],
            evidenceScore: [],
            search,
          };
        }
        return acc;
      }, {} as Record<string, INTERVENTION_COMBINATION>)
    );

  type INTERVENTION_COMBINATION = {
    id: string[];
    intervention: string;
    url: string;
    img: string;
    mechanism: string[];
    desc: string[];
    keywords: string[];
    booster: boolean[];
    mainCap: MAIN_CAPABILITY[];
    specificCap: SPECIFIC_CAPABILITY[];
    hpeClassification: HPE_CLASSIFICATION[];
    category: INTERVENTION_CATEGORY[];
    invasive: INVASIVENESS_OBTRUSIVENESS[];
    maturity: MATURITY[];
    availability: AVAILABILITY[];
    ethicalConsiderations: CHOICE[];
    evidenceDir: EVIDENCE_DIRECTION[];
    evidenceScore: EVIDENCE_LEVEL[];
    search: string;
  };

  let interventions = [] as INTERVENTION_COMBINATION[];

  return {
    oninit: ({
      attrs: {
        state: { model },
        actions: { setPage },
      },
    }) => {
      const { interventions: allInterventions = [] } = model;
      interventions = toInterventions(allInterventions);
      setPage(Dashboards.INTERVENTIONS);
    },
    view: ({
      attrs: {
        state: { model, curUser, bookmarks = [], compareList = [], searchFilters },
        actions: { saveModel, changePage, bookmark, compare, setSearchFilters },
      },
    }) => {
      if (interventions.length === 0) {
        const { interventions: allInterventions } = model;
        interventions = toInterventions(allInterventions);
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
      const filteredInterventions = interventions.filter((t) => {
        if (searchRegex && !searchRegex.test(t.search || '')) {
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
      const hasFilters = filteredInterventions.length !== interventions.length;

      return [
        m('.row.intervention-overview-page', { style: 'height: 95vh' }, [
          m(
            '.col.s12',
            m(
              '.row.search-filters',
              m(
                '.col.s12.m3',
                {
                  style: 'height: 81px',
                },
                m(TextInputWithClear, {
                  key: searchFilter || 'searchKey',
                  label: 'Search',
                  iconName: 'search',
                  className: 'bottom-margin0',
                  initialValue: searchFilter,
                  oninput: (s) => {
                    setSearchFilters({ searchFilter: s || '' });
                    // m.redraw();
                  },
                })
              ),
              m(
                '.col.s6.m3',
                m(FlatButton, {
                  modalId: 'search',
                  iconName: 'manage_search',
                  iconClass: 'large-icon',
                  label: 'Adv.search',
                  onclick: () => {
                    setSearchFilters({ searchFilter: '' });
                  },
                })
              ),
              m(FlatButton, {
                label: 'Bookmarked',
                className: 'col s6 m3',
                iconName: bookmarked ? 'star' : 'star_border',
                iconClass: 'large-icon amber-text',
                onclick: () => {
                  setSearchFilters({ bookmarked: !bookmarked });
                },
              }),
              // m(InputCheckbox, {
              //   label: 'Bookmarked',
              //   className: 'col s6 m3',
              //   onchange: (v) => {
              //     setSearchFilters({ bookmarked: v });
              //   },
              // }),
              curUser &&
                curUser === 'admin' &&
                m(
                  '.right-align',
                  m(FlatButton, {
                    label: 'Add new intervention',
                    iconName: 'add',
                    className: 'small',
                    onclick: () => {
                      const newTech = { id: uniqueId() } as Intervention;
                      model.interventions.push(newTech);
                      saveModel(model);
                      changePage(Dashboards.INTERVENTION, { id: newTech.id, edit: 'true' });
                    },
                  })
                )
            )
          ),
          hasFilters && [
            m('.col.s12.filters', [
              m(
                'span',
                `${filteredInterventions.length} search result${
                  filteredInterventions.length === 1 ? '' : 's'
                }: `
              ),
              mainCapFilter > 0 &&
                m('.chip', [
                  `Capability: ${getOptionsLabel(mainCapabilityOptions, mainCapFilter, false)}`,
                  m(
                    'i.close.material-icons',
                    { onclick: () => setSearchFilters({ mainCapFilter: 0 }) },
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
                    { onclick: () => setSearchFilters({ specificCapFilter: 0 }) },
                    'close'
                  ),
                ]),
              categoryFilter > 0 &&
                m('.chip', [
                  `Category: ${getOptionsLabel(
                    interventionCategoryOptions,
                    categoryFilter,
                    false
                  )}`,
                  m(
                    'i.close.material-icons',
                    { onclick: () => setSearchFilters({ categoryFilter: 0 }) },
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
                      onclick: () => setSearchFilters({ invasivenessFilter: 0 }),
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
                      onclick: () => setSearchFilters({ maturityFilter: 0 }),
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
                      onclick: () => setSearchFilters({ availabilityFilter: 0 }),
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
                      onclick: () => setSearchFilters({ boosterFilter: 0 }),
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
                      onclick: () => setSearchFilters({ ethicalFilter: 0 }),
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
                      onclick: () => setSearchFilters({ evidenceDirFilter: 0 }),
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
                      onclick: () => setSearchFilters({ evidenceQualityFilter: 0 }),
                    },
                    'close'
                  ),
                ]),
            ]),
          ],
          filteredInterventions.map((t) => {
            const isBookmarked = t.id.some((id) => bookmarks.indexOf(id) >= 0);
            const selectedForComparison = t.id.some((id) => compareList.indexOf(id) >= 0);
            return m(
              '.col.s12.m6.l4.xl3',
              m('.card.medium', [
                m('.card-image', [
                  m(
                    'a',
                    {
                      href: routingSvc.href(Dashboards.INTERVENTION, `?id=${t.id[0]}`),
                    },
                    [
                      m('img', {
                        src: resolveImg(t.url, t.img),
                        alt: t.intervention,
                      }),
                      m(
                        'span.card-title.bold.sharpen.black-text',
                        { title: t.intervention },
                        // { className: isBookmarked ? 'amber-text' : 'black-text' },
                        t.intervention
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
                      href: routingSvc.href(Dashboards.INTERVENTION, `?id=${t.id[0]}`),
                    },
                    m(Icon, { iconName: 'visibility' }),
                    m('span.tooltiptext', 'SHOW')
                  ),
                  m(
                    'a.tooltip',
                    // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=BOOKMARK]',
                    {
                      href: routingSvc.href(Dashboards.INTERVENTIONS),
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
                      href: routingSvc.href(Dashboards.INTERVENTIONS),
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
            '#adv-search.row',
            m(LayoutForm, {
              form: [
                {
                  id: 'mainCapFilter',
                  label: 'Main capability',
                  className: 'col s12 m6 l4',
                  options: mainCapOpt,
                  description: mainCapFilter
                    ? mainCapOpt.filter((o) => +o.id === mainCapFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific capabilities',
                  placeholder: 'Choose main capability first',
                  type: 'select',
                  options: specificCapabilityOptions,
                  className: 'col s12 m6 l4',
                  disabled: true,
                  show: ['mainCapFilter = 0', '!mainCapFilter'],
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific cognitive capabilities',
                  type: 'select',
                  options: specificCognitiveCapabilityOpt,
                  className: 'col s12 m6 l4',
                  show: 'mainCapFilter = 1',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific physical capabilities',
                  type: 'select',
                  options: specificPhysicalCapabilityOpt,
                  className: 'col s12 m6 l4',
                  show: 'mainCapFilter = 2',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific mental capabilities',
                  type: 'select',
                  options: specificMentalCapabilityOpt,
                  className: 'col s12 m6 l4',
                  show: 'mainCapFilter = 3',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific social capabilities',
                  type: 'select',
                  options: specificSocialCapabilityOpt,
                  className: 'col s12 m6 l4',
                  show: 'mainCapFilter = 4',
                },
                {
                  id: 'specificCapFilter',
                  label: 'Specific personality capabilities',
                  type: 'select',
                  options: specificPersonalityCapabilityOpt,
                  className: 'col s12 m6 l4',
                  show: 'mainCapFilter = 5',
                },
                {
                  id: 'categoryFilter',
                  label: 'Category',
                  className: 'col s12 m6 l4',
                  options: techCatOpt,
                  description: categoryFilter
                    ? techCatOpt.filter((o) => +o.id === categoryFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'invasivenessFilter',
                  label: 'Invasiveness',
                  className: 'col s12 m6 l4',
                  options: invasivenessOpt,
                  description: invasivenessFilter
                    ? invasivenessOpt.filter((o) => +o.id === invasivenessFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'maturityFilter',
                  label: 'Maturity',
                  className: 'col s12 m6 l4',
                  options: maturityOpt,
                  description: maturityFilter
                    ? maturityOpt.filter((o) => +o.id === maturityFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'availabilityFilter',
                  label: 'Availability',
                  className: 'col s12 m6 l4',
                  options: availabilityOpt,
                  // description: availabilityFilter
                  //   ? availabilityOpt.filter((o) => o.id === availabilityFilter).shift()?.title
                  //   : undefined,
                },
                {
                  id: 'boosterFilter',
                  label: 'Booster',
                  className: 'col s12 m6 l4',
                  options: boosterOpt,
                  // description: boosterFilter
                  //   ? availabilityOpt.filter((o) => o.id === boosterFilter).shift()?.title
                  //   : undefined,
                },
                {
                  id: 'ethicalFilter',
                  label: 'Ethical considerations',
                  className: 'col s12 m6 l4',
                  options: ethicalOpt,
                  description: ethicalFilter
                    ? ethicalOpt.filter((o) => +o.id === ethicalFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'evidenceDirFilter',
                  label: 'Evidence indication',
                  className: 'col s12 m6 l4',
                  options: evidenceDirOpt,
                  description: evidenceDirFilter
                    ? evidenceDirOpt.filter((o) => +o.id === evidenceDirFilter).shift()?.title
                    : undefined,
                },
                {
                  id: 'evidenceQualityFilter',
                  label: 'Evidence quality',
                  className: 'col s12 m6 l4',
                  options: evidenceQualityOpt,
                  description: evidenceQualityFilter
                    ? evidenceQualityOpt.filter((o) => +o.id === evidenceQualityFilter).shift()
                        ?.title
                    : undefined,
                },
              ] as UIForm<SearchFilter>,
              obj: searchFilters,
              onchange: () => setSearchFilters(searchFilters),
            } as ILayoutForm<SearchFilter>)
          ),
          bottomSheet: true,
          fixedFooter: true,
          buttons: [{ label: 'DONE' }],
        }),
      ];
    },
  };
};
