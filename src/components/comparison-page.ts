import m from 'mithril';
import { CHOICE, Dashboards, DataModel, Intervention } from '../models';
import { MeiosisComponent } from '../services';
import { Chips } from 'mithril-materialized';
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
  NoYesUnknown,
  optionsToTxt,
  specificCapabilityOptions,
  interventionCategoryOptions,
} from '../utils';
import { render } from 'mithril-ui-form';

export const ComparisonPage: MeiosisComponent = () => {
  let isInitialized = false;
  let interventionLookup = {} as Record<string, { name: string; technology?: Intervention }>;
  let autocompleteData = {} as Record<string, null>;

  const toName = (t: Intervention) =>
    `${t.intervention}: ${getOptionsLabel(mainCapabilityOptions, t.mainCap, false)}`;

  const initialize = (model: DataModel) => {
    const { interventions: technologies } = model;
    if (technologies.length === 0) return;
    technologies.forEach((cur) => {
      let counter = 1;
      let name = toName(cur);
      while (interventionLookup[name]) {
        name = `${toName(cur)} (${counter++})`;
      }
      interventionLookup[cur.id] = { name, technology: cur };
      interventionLookup[name] = { name: cur.id };
      autocompleteData[name] = null;
    });
    isInitialized = true;
  };

  return {
    oninit: ({
      attrs: {
        actions: { setPage },
      },
    }) => {
      setPage(Dashboards.COMPARE);
    },
    view: ({
      attrs: {
        state: { compareList = [], model },
        actions: { setCompareList },
      },
    }) => {
      if (!isInitialized) initialize(model);
      const selectedInterventions = compareList.map(
        (c) => interventionLookup[c].technology
      ) as Intervention[];
      return m('.row.compare', { style: 'height: 85vh' }, [
        m('.col.s12', [
          m(Chips, {
            label: 'Selected for comparison',
            secondaryPlaceholder: 'Add an intervention',
            autocompleteOptions: {
              data: autocompleteData,
              minLength: 3,
            },
            data: compareList.map((id) => ({ tag: interventionLookup[id].name })),
            onchange: (chips) => {
              console.log(chips);
              const ids = chips.filter((c) => c.tag).map((c) => interventionLookup[c.tag].name);
              setCompareList(ids);
            },
          }),
        ]),
        compareList.length > 0 &&
          m('table', [
            m('tr', [
              m('th', 'Aspect'),
              ...selectedInterventions.map((t) => m('th', t.intervention)),
            ]),
            m('tr', [
              m('td', m('b', 'Category')),
              ...selectedInterventions.map((t) =>
                m('td', getOptionsLabel(interventionCategoryOptions, t.category, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Capability')),
              ...selectedInterventions.map((t) =>
                m(
                  'td',
                  `${getOptionsLabel(mainCapabilityOptions, t.mainCap, false)} ${getOptionsLabel(
                    hpeClassificationOptions,
                    t.hpeClassification,
                    false
                  )}`
                )
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Specific cap.')),
              ...selectedInterventions.map((t) =>
                m(
                  'td',
                  joinListWithAnd(optionsToTxt(t.specificCap, specificCapabilityOptions, false))
                )
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Description')),
              ...selectedInterventions.map((t) => m('td', t.desc)),
            ]),
            m('tr', [
              m('td', m('b', 'Invasive')),
              ...selectedInterventions.map((t) =>
                m('td', getOptionsLabel(invasivenessOptions, t.invasive, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Maturity')),
              ...selectedInterventions.map((t) =>
                m('td', getOptionsLabel(maturityOptions, t.maturity, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Booster')),
              ...selectedInterventions.map((t) => m('td', t.booster ? 'Yes' : 'No')),
            ]),
            m('tr', [
              m('td', m('b', 'Side effects')),
              ...selectedInterventions.map((t) =>
                m(
                  'td',
                  { className: t.hasSideEffects === CHOICE.YES && t.sideEffects ? 'tooltip' : '' },
                  [
                    getOptionsLabel(NoYesUnknown, t.hasSideEffects, false),
                    t.sideEffects && m('span.tooltiptext', render(t.sideEffects, true)),
                  ]
                )
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Ind. diff.')),
              ...selectedInterventions.map((t) =>
                m('td', { className: t.hasIndDiff === CHOICE.YES && t.diff ? 'tooltip' : '' }, [
                  getOptionsLabel(NoYesUnknown, t.hasIndDiff, false),
                  t.diff && m('span.tooltiptext', render(t.diff, true)),
                ])
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Ethical')),
              ...selectedInterventions.map((t) =>
                m('td', { className: t.hasEthical === CHOICE.YES && t.ethical ? 'tooltip' : '' }, [
                  getOptionsLabel(NoYesUnknown, t.hasEthical, false),
                  t.ethical && m('span.tooltiptext', render(t.ethical, true)),
                ])
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Evidence indication')),
              ...selectedInterventions.map((t) =>
                m('td', getOptionsLabel(evidenceDirOptions, t.evidenceDir, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Quality of evidence')),
              ...selectedInterventions.map((t) =>
                m('td', getOptionsLabel(evidenceLevelOptions, t.evidenceScore, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Availability')),
              ...selectedInterventions.map((t) =>
                m('td', getOptionsLabel(availabilityOptions, t.availability, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Incubation')),
              ...selectedInterventions.map((t) => m('td', t.incubation)),
            ]),
            m('tr', [
              m('td', m('b', 'Effect duration')),
              ...selectedInterventions.map((t) => m('td', t.effectDuration)),
            ]),
            m('tr', [
              m('td', m('b', 'Examples')),
              ...selectedInterventions.map((t) => m('td', t.examples)),
            ]),
            m('tr', [
              m('td', m('b', 'Practical')),
              ...selectedInterventions.map((t) => m('td', t.practical)),
            ]),
          ]),
      ]);
    },
  };
};
