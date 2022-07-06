import m from 'mithril';
import { CHOICE, Dashboards, DataModel, Technology } from '../models';
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
  technologyCategoryOptions,
} from '../utils';
import { render } from 'mithril-ui-form';

export const ComparisonPage: MeiosisComponent = () => {
  let isInitialized = false;
  let technologyLookup = {} as Record<string, { name: string; technology?: Technology }>;
  let autocompleteData = {} as Record<string, null>;

  const toName = (t: Technology) =>
    `${t.technology}: ${getOptionsLabel(mainCapabilityOptions, t.mainCap, false)}`;

  const initialize = (model: DataModel) => {
    const { technologies } = model;
    if (technologies.length === 0) return;
    technologies.forEach((cur) => {
      let counter = 1;
      let name = toName(cur);
      while (technologyLookup[name]) {
        name = `${toName(cur)} (${counter++})`;
      }
      technologyLookup[cur.id] = { name, technology: cur };
      technologyLookup[name] = { name: cur.id };
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
      const selectedTechnologies = compareList.map(
        (c) => technologyLookup[c].technology
      ) as Technology[];
      return m('.row.compare', { style: 'height: 92vh' }, [
        m('.col.s12', [
          m(Chips, {
            label: 'Selected for comparison',
            secondaryPlaceholder: 'Add a technology',
            autocompleteOptions: {
              data: autocompleteData,
              minLength: 3,
            },
            data: compareList.map((id) => ({ tag: technologyLookup[id].name })),
            onchange: (chips) => {
              console.log(chips);
              const ids = chips.filter((c) => c.tag).map((c) => technologyLookup[c.tag].name);
              if (ids.length !== compareList.length) setCompareList(ids);
            },
          }),
        ]),
        compareList.length > 0 &&
          m('table', [
            m('tr', [m('th', 'Aspect'), ...selectedTechnologies.map((t) => m('th', t.technology))]),
            m('tr', [
              m('td', m('b', 'Category')),
              ...selectedTechnologies.map((t) =>
                m('td', getOptionsLabel(technologyCategoryOptions, t.category, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Capability')),
              ...selectedTechnologies.map((t) =>
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
              ...selectedTechnologies.map((t) =>
                m('td', joinListWithAnd(optionsToTxt(t.specificCap, specificCapabilityOptions)))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Description')),
              ...selectedTechnologies.map((t) => m('td', t.desc)),
            ]),
            m('tr', [
              m('td', m('b', 'Invasive')),
              ...selectedTechnologies.map((t) =>
                m('td', getOptionsLabel(invasivenessOptions, t.invasive, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Maturity')),
              ...selectedTechnologies.map((t) =>
                m('td', getOptionsLabel(maturityOptions, t.maturity, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Booster')),
              ...selectedTechnologies.map((t) => m('td', t.booster ? 'Yes' : 'No')),
            ]),
            m('tr', [
              m('td', m('b', 'Side effects')),
              ...selectedTechnologies.map((t) =>
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
              ...selectedTechnologies.map((t) =>
                m('td', { className: t.hasIndDiff === CHOICE.YES && t.diff ? 'tooltip' : '' }, [
                  getOptionsLabel(NoYesUnknown, t.hasIndDiff, false),
                  t.diff && m('span.tooltiptext', render(t.diff, true)),
                ])
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Ethical')),
              ...selectedTechnologies.map((t) =>
                m('td', { className: t.hasEthical === CHOICE.YES && t.ethical ? 'tooltip' : '' }, [
                  getOptionsLabel(NoYesUnknown, t.hasEthical, false),
                  t.ethical && m('span.tooltiptext', render(t.ethical, true)),
                ])
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Evidence indication')),
              ...selectedTechnologies.map((t) =>
                m('td', getOptionsLabel(evidenceDirOptions, t.evidenceDir, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Quality of evidence')),
              ...selectedTechnologies.map((t) =>
                m('td', getOptionsLabel(evidenceLevelOptions, t.evidenceScore, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Availability')),
              ...selectedTechnologies.map((t) =>
                m('td', getOptionsLabel(availabilityOptions, t.availability, false))
              ),
            ]),
            m('tr', [
              m('td', m('b', 'Incubation')),
              ...selectedTechnologies.map((t) => m('td', t.incubation)),
            ]),
            m('tr', [
              m('td', m('b', 'Effect duration')),
              ...selectedTechnologies.map((t) => m('td', t.effectDuration)),
            ]),
            m('tr', [
              m('td', m('b', 'Examples')),
              ...selectedTechnologies.map((t) => m('td', t.examples)),
            ]),
            m('tr', [
              m('td', m('b', 'Practical')),
              ...selectedTechnologies.map((t) => m('td', t.practical)),
            ]),
          ]),
      ]);
    },
  };
};
