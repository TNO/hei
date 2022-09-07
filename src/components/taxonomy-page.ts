import m from 'mithril';
import { render } from 'mithril-ui-form';
import { Dashboards } from '../models';
import { MeiosisComponent } from '../services';
import {
  ethicalConsiderationsOptions,
  invasivenessOptions,
  mainCapabilityOptions,
  maturityOptions,
  specificCapabilityOptions,
  subSup,
} from '../utils';
import { TextInputWithClear } from './ui';

const md = `#### Definition of terms`;

const toLexicon = (arr: Array<{ label: string; title?: string }>, header?: string) =>
  arr
    .filter((c) => c.title)
    .map(({ label, title }) => ({
      a: `${header ? `${header}: ${label}` : label}`,
      b: title + '.',
    }));

const lexicon = [
  ...toLexicon(mainCapabilityOptions, 'Main capability'),
  ...toLexicon(specificCapabilityOptions, 'Specific capability'),
  // ...toLexicon(technologyCategoryOptions),
  ...toLexicon(invasivenessOptions, 'Invasiveness'),
  ...toLexicon(maturityOptions, 'Maturity'),
  ...toLexicon(ethicalConsiderationsOptions, 'Ethical considerations'),
  { a: 'Booster', b: 'The technology can be applied quickly (approx. < 1 hour).' },
  { a: 'Booster', b: 'The technology can be applied quickly (approx. < 1 hour).' },
  {
    a: 'Quality of evidence',
    b: 'Is based on what the type of research, e.g. meta-analyses, large or small sample sizes, randomized controlled trials, controlled environments, peer-reviewed.',
  },
  { a: 'Evidence indication', b: 'Whether an effect is present, absent, or undecided.' },
  {
    a: 'Effect direction',
    b: 'Whether the technology increases or decreases a subjects capability level.',
  },
  {
    a: 'HCSE',
    b: 'Human Capability & Survivability Enhancement.',
  },
].sort((a, b) => a.a.localeCompare(b.a)) as Array<{
  a: string;
  b: string;
  ref?: string;
  url?: string;
}>;

let textFilter = '';

export const AllWordsPage: MeiosisComponent = () => ({
  oninit: ({
    attrs: {
      actions: { setPage },
    },
  }) => setPage(Dashboards.TAXONOMY),
  view: () => {
    const regexFilter = textFilter && new RegExp(textFilter.toLowerCase(), 'i');
    const filteredLexicon = regexFilter
      ? lexicon.filter((l) => regexFilter.test(l.a) || regexFilter.test(l.b))
      : lexicon;

    return [
      m('.row', { style: 'height: 100vh' }, [
        m(TextInputWithClear, {
          label: 'Search for a definition',
          id: 'filter',
          initialValue: textFilter,
          placeholder: 'Part of a word...',
          iconName: 'filter_list',
          oninput: (v?: string) => {
            textFilter = v ? v : '';
            m.redraw();
          },
          style: 'margin-bottom: -4rem',
          className: 'col s6 offset-m8 m4',
        }),
        m('.intro.col.s12', m.trust(render(md, false))),
        filteredLexicon &&
          m('table.highlight', { style: 'margin-bottom: 3rem' }, [
            m(
              'thead',
              m('tr', [
                m('th', 'Term'),
                m('th', 'Definition'),
                // m('th.hide-on-med-and-down', 'Reference'),
              ])
            ),
            m(
              'tbody',
              filteredLexicon.map((l) =>
                m('tr', [
                  m('td', m.trust(render(subSup(l.a)))),
                  m('td', m.trust(render(subSup(l.b)))),
                  // l.ref &&
                  //   m(
                  //     'td.hide-on-med-and-down',
                  //     l.url ? m('a', { target: '_', alt: l.ref, href: l.url }, l.ref) : l.ref
                  //   ),
                ])
              )
            ),
          ]),
      ]),
    ];
  },
});
