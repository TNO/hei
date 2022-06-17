import m from 'mithril';
import { padLeft } from 'mithril-materialized';
import { render, UIForm } from 'mithril-ui-form';
import {
  AVAILABILITY,
  CHOICE,
  EFFECT_DIRECTION,
  EVIDENCE_DIRECTION,
  EVIDENCE_LEVEL,
  HPE_CLASSIFICATION,
  INVASIVENESS_OBTRUSIVENESS,
  Literature,
  LITERATURE_TYPE,
  MAIN_CAPABILITY,
  MATURITY,
  SPECIFIC_CAPABILITY,
  STATUS,
  TECHNOLOGY_CATEGORY,
  User,
} from '../models';

const supRegex = /\^([^_ ]+)(_|$|\s)/g;
const subRegex = /\_([^\^ ]+)(\^|$|\s)/g;

/** Expand markdown notation by converting A_1 to subscript and x^2 to superscript. */
export const subSup = (s: string) =>
  s ? s.replace(supRegex, `<sup>$1</sup>`).replace(subRegex, `<sub>$1</sub>`) : s;

export const capitalize = (s?: string) => s && s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Debounce function wrapper, i.e. between consecutive calls of the wrapped function,
 * there will be at least TIMEOUT milliseconds.
 * @param func Function to execute
 * @param timeout Timeout in milliseconds
 * @returns
 */
export const debounce = (func: (...args: any) => void, timeout: number) => {
  let timer: number;
  return (...args: any) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export const formatDate = (date: number | Date = new Date()) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${padLeft(d.getMonth() + 1)}-${padLeft(d.getDate())}`;
};

/**
 * Get a color that is clearly visible against a background color
 * @param backgroundColor Background color, e.g. #99AABB
 * @returns
 */
export const getTextColorFromBackground = (backgroundColor?: string) => {
  if (!backgroundColor) {
    return 'black-text';
  }
  const c = backgroundColor.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 105 ? 'white-text' : 'black-text';
};

export const getOptionsLabel = <T>(
  options: Array<{ id: T; label: string; title?: string }>,
  id?: T
) => {
  if (!id) {
    return '';
  }
  const found = options.filter((o) => o.id === id).shift();
  return found
    ? `${found.label}${found.title ? ` (${found.title.replace(/\.\s*$/, '')})` : ''}`
    : '';
};

/** Join a list of items with a comma, and use AND for the last item in the list. */
export const joinListWithAnd = (arr: string[] = [], and = 'and', prefix = '') =>
  arr.length === 0
    ? ''
    : prefix +
      (arr.length === 1
        ? arr[0]
        : `${arr.slice(0, arr.length - 1).join(', ')} ${and} ${arr[arr.length - 1]}`);

/** Convert a list of options to text (label + title?) */
export const optionsToTxt = <T extends string | number>(
  selectedIds: T | T[],
  options: Array<{ id: T; label: string; title?: string }>
) => {
  if (!selectedIds || (selectedIds instanceof Array && selectedIds.length === 0)) return [''];
  const ids = selectedIds instanceof Array ? selectedIds : [selectedIds];
  const lookup = options.reduce((acc, cur) => {
    acc[cur.id] = `${cur.label}${cur.title ? ` (${cur.title})` : ''}`;
    return acc;
  }, {} as Record<T, string>);
  return ids.map((id) => lookup[id]);
};

export const statusOptions = [
  { id: STATUS.FIRST_DRAFT, label: 'First draft' },
  { id: STATUS.READY_FOR_REVIEW, label: 'Ready for review' },
  { id: STATUS.UNDER_REVIEW, label: 'Under review' },
  { id: STATUS.REVIEWED, label: 'Reviewed' },
  { id: STATUS.FINISHED, label: 'Finished' },
];

export const NoYesUnknown = [
  { id: CHOICE.NONE, label: 'None' },
  { id: CHOICE.UNKNOWN, label: 'Unknown' },
  { id: CHOICE.YES, label: 'Yes' },
];

export const resolveChoice = (choice?: CHOICE, text?: string) =>
  !choice || choice === CHOICE.NONE
    ? NoYesUnknown[0].label
    : choice === CHOICE.UNKNOWN
    ? NoYesUnknown[1].label
    : text;

export const technologyCategoryOptions = [
  { id: TECHNOLOGY_CATEGORY.HARDWARE, label: 'Hardware', title: '' },
  { id: TECHNOLOGY_CATEGORY.BIO_ENHANCEMENT, label: 'Bio-enhancement', title: '' },
  {
    id: TECHNOLOGY_CATEGORY.PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION,
    label: 'Pharmacological substances, supplements and nutrition',
    title: '',
  },
  { id: TECHNOLOGY_CATEGORY.TRAINING, label: 'Training', title: '' },
  { id: TECHNOLOGY_CATEGORY.SELF_REGULATION, label: 'Self-regulation', title: '' },
  { id: TECHNOLOGY_CATEGORY.NUTRITION, label: 'Nutrition', title: '' },
  { id: TECHNOLOGY_CATEGORY.OTHER, label: 'Other', title: '' },
];

export const hpeClassificationOptions = [
  {
    id: HPE_CLASSIFICATION.OPTIMIZATION,
    label: 'Optimization',
    title:
      'The technology improves human performance on a specific capability within biological limits',
  },
  {
    id: HPE_CLASSIFICATION.ENHANCEMENT,
    label: 'Enhancement',
    title:
      'The technology improves human performance on a specific capability above biological limits',
  },
  {
    id: HPE_CLASSIFICATION.DEGRADATION,
    label: 'Degradation',
    title: 'The technology decreases human performance on a specific capability',
  },
];

export const mainCapabilityOptions = [
  {
    id: MAIN_CAPABILITY.COGNITION,
    label: 'Cognition',
    title:
      'The capability to perform intellectual functions and activities such as thinking, planning, maintaining situation awareness, vigilance, perception and memory.',
  },
  {
    id: MAIN_CAPABILITY.PHYSICAL,
    label: 'Physical',
    title:
      'The capability to perform body movements at, for instance, high speed, accuracy, strength or with long endurance. ',
  },
  {
    id: MAIN_CAPABILITY.MENTAL,
    label: 'Mental',
    title:
      'The capability to achieve an optimal emotional and motivational state, for instance through self-confidence or mental thoughness.',
  },
  {
    id: MAIN_CAPABILITY.SOCIAL,
    label: 'Social',
    title:
      'The capability to achieve goals with others, for instance through leadership, team situational awareness, or connectedness.',
  },
  {
    id: MAIN_CAPABILITY.PERSONALITY,
    label: 'Personality',
    title:
      'Having an optimal, long-term, style of thinking, feeling and behaving. Examples include dispositional optimism, internal locus of control, self-regulation, and anxiety sensitivity.',
  },
];

export const specificCapabilityOptions = [
  {
    id: SPECIFIC_CAPABILITY.SITUATION_AWARENESS,
    label: 'Situation awareness',
    title:
      'The perception of environmental elements and events with respect to time or space, the comprehension of their meaning, and the projection of their future status.',
  },
  {
    id: SPECIFIC_CAPABILITY.EXECUTIVE_FUNCTIONS,
    label: 'Executive functions',
    title:
      'Executive functions (collectively referred to as executive function and cognitive control) are a set of cognitive processes that are necessary for the cognitive control of behavior: selecting and successfully monitoring behaviors that facilitate the attainment of chosen goals. Executive functions include basic cognitive processes such as attentional control, cognitive inhibition, inhibitory control, working memory, and cognitive flexibility.',
  },
  {
    id: SPECIFIC_CAPABILITY.LONG_TERM_MEMORY,
    label: 'Long term memory',
    title:
      'Long-term memory allows us to store information for long periods of time. This information may be retrieved consciously (explicit memory) or unconsciously (implicit memory).',
  },
  {
    id: SPECIFIC_CAPABILITY.SHORT_TERM_MEMORY,
    label: 'Short term memory',
    title:
      'Short-term memory refers to the information processed by the individual in a short period of time. Working memory performs this processing.',
  },
  {
    id: SPECIFIC_CAPABILITY.DECLARATIVE_MEMORY,
    label: 'Declarative memory',
    title:
      'What defines declarative memory is the ability to consciously recollect the situation in which you learned something new. ',
  },
  {
    id: SPECIFIC_CAPABILITY.VIGILANCE,
    label: 'Vigilance',
    title: 'Vigilance is devoted attentiveness or watchfulness.',
  },
  {
    id: SPECIFIC_CAPABILITY.PSYCHOMOTOR,
    label: 'Psychomotor',
    title:
      'any ability (e.g., handwriting, drawing, driving a car) whose performance draws on a combined and coordinated set of cognitive and motor processes',
  },
  {
    id: SPECIFIC_CAPABILITY.VISUAL_PERCEPTION,
    label: 'Visual perception',
    title:
      'Visual perception is the ability to perceive our surroundings through the light that enters our eyes',
  },
  {
    id: SPECIFIC_CAPABILITY.AUDITORY_PERCEPTION,
    label: 'Auditory perception',
    title:
      'Auditory perception could be defined as the ability to receive and interpret information that reached the ears through audible frequency waves transmitted through the air or other means.',
  },
  {
    id: SPECIFIC_CAPABILITY.TACTILE_PERCEPTION,
    label: 'Tactile perception',
    title: 'the ability to perceive objects or judge sensations through the sense of touch.',
  },
  {
    id: SPECIFIC_CAPABILITY.PAIN,
    label: 'Pain',
    title:
      'Potentially damaging mechanical, thermal, and chemical stimuli are detected by nerve endings called nociceptors, which are found in the skin, on internal surfaces such as the periosteum, joint surfaces, and in some internal organs. ',
  },
  {
    id: SPECIFIC_CAPABILITY.ATTENTION,
    label: 'Attention',
    title:
      'attention is the ability to focus and maintain interest in a given task or idea while avoiding distractions.',
  },
  {
    id: SPECIFIC_CAPABILITY.SPEECH,
    label: 'Speech',
    title: 'The delivering of language through the mouth',
  },
  {
    id: SPECIFIC_CAPABILITY.LEARNING,
    label: 'Learning',
    title: 'the acquisition of knowledge or skills through study, experience, or being taught.',
  },
  {
    id: SPECIFIC_CAPABILITY.ARITHMETIC,
    label: 'Arithmetic',
    title:
      'the branch of mathematics concerned with numerical calculations, such as addition, subtraction, multiplication, and division',
  },
  {
    id: SPECIFIC_CAPABILITY.SOCIAL_INTERACTION,
    label: 'Social interaction',
    title:
      'A social skill is any competence facilitating interaction and communication with others where social rules and relations are created, communicated, and changed in verbal and nonverbal ways',
  },
  { id: SPECIFIC_CAPABILITY.RECOVERY, label: 'Recovery', title: '' },
  {
    id: SPECIFIC_CAPABILITY.WORKING_MEMORY,
    label: 'Working memory',
    title: 'memory as it is used to plan and carry out behavior.',
  },
];

export const invasivenessOptions = [
  {
    id: INVASIVENESS_OBTRUSIVENESS.LOW,
    label: 'Low',
    title: 'No physical substance enters the body',
  },
  {
    id: INVASIVENESS_OBTRUSIVENESS.MEDIUM,
    label: 'Medium',
    title: 'Supplements, heavy training, interventions with low risk',
  },
  {
    id: INVASIVENESS_OBTRUSIVENESS.HIGH,
    label: 'High',
    title: 'High-impact pharma, implants, body modifications, interventions with high risk or pain',
  },
];

export const maturityOptions = [
  {
    id: MATURITY.LOW,
    label: 'Low',
    title:
      'Little to no research has been performed on the intervention. Existing research is inconclusive about the effectiveness',
  },
  {
    id: MATURITY.MEDIUM,
    label: 'Medium',
    title:
      'A small body of research exists indicating effectiveness of the technology. Low TRL level applications',
  },
  {
    id: MATURITY.HIGH,
    label: 'High',
    title:
      'One or more meta-analyses indicate effectiveness. The technology is already applied in practice',
  },
];

export const effectDirectionOptions = [
  {
    id: EFFECT_DIRECTION.NEGATIVE,
    label: 'Negative',
    title: 'The technology descreases a subjects capability level',
  },
  {
    id: EFFECT_DIRECTION.POSITIVE,
    label: 'Positive',
    title: 'The technology increases a subjects capability level',
  },
];

export const evidenceDirOptions = [
  {
    id: EVIDENCE_DIRECTION.GENERALLY_IN_FAVOR,
    label: '(Generally) in favor',
    title: 'Evidence generally indicates the presence of an effect',
  },
  {
    id: EVIDENCE_DIRECTION.GENERALLY_AGAINST,
    label: '(Generally) against',
    title: 'Evidence generally indicates the absence of an effect (evidence is very mixed)',
  },
  {
    id: EVIDENCE_DIRECTION.UNDECIDED,
    label: 'Undecided',
    title: 'Not enough evidence to suggest the presence or absence of an effect',
  },
];

export const evidenceLevelOptions = [
  {
    id: EVIDENCE_LEVEL.GOOD,
    label: 'Good',
    title: 'Based on consistent and good quality evidence',
  },
  {
    id: EVIDENCE_LEVEL.MEDIUM,
    label: 'Medium',
    title: 'Based on inconsistent or limited-quality evidence',
  },
  { id: EVIDENCE_LEVEL.LOW, label: 'Low', title: 'Based on consensus, usual practice, opinion.' },
];

export const availabilityOptions = [
  {
    id: AVAILABILITY.YES_WITHIN_THE_NETHERLANDS,
    label: 'Yes, within The Netherlands',
  },
  { id: AVAILABILITY.YES_WITHIN_THE_EU, label: 'Yes, within the EU' },
  { id: AVAILABILITY.YES_OUTSIDE_THE_EU, label: 'Yes, outside the EU' },
  { id: AVAILABILITY.NO, label: 'No' },
  { id: AVAILABILITY.UNKNOWN, label: 'Unknown' },
];

const literatureTypeOptions = [
  { id: LITERATURE_TYPE.CASE_STUDY, label: 'Case study' },
  { id: LITERATURE_TYPE.THESIS, label: 'Thesis' },
  { id: LITERATURE_TYPE.REPORT, label: 'Report' },
  { id: LITERATURE_TYPE.TECHNICAL_REPORT, label: 'Technical report' },
  { id: LITERATURE_TYPE.PRODUCER_WEBSITE, label: 'Producer website' },
  { id: LITERATURE_TYPE.WHITE_PAPER, label: 'White paper' },
  { id: LITERATURE_TYPE.CONFERENCE_PROCEEDING, label: 'Conference proceedings' },
  { id: LITERATURE_TYPE.PATENT, label: 'Patent' },
  { id: LITERATURE_TYPE.POPULAR_MEDIA, label: 'Popular media' },
  { id: LITERATURE_TYPE.CONSENSUS_STATEMENT, label: 'Consensus statement' },
  { id: LITERATURE_TYPE.EMPERICAL_PR, label: 'Emperical (Peer Reviewed)' },
  { id: LITERATURE_TYPE.REVIEW_PR, label: 'Review (Peer Reviewed)' },
  {
    id: LITERATURE_TYPE.SYSTEMATIC_REVIEW_PR,
    label: 'Systematic review (Peer Reviewed)',
  },
  {
    id: LITERATURE_TYPE.META_ANALYSIS_PR,
    label: 'Meta analysis (Peer Reviewed)',
  },
];

const literatureForm = [
  {
    id: 'title',
    label: 'Title',
    required: true,
    type: 'text',
    className: 'col s12 m4',
  },
  { id: 'doi', label: 'DOI', required: true, type: 'text', className: 'col s8 m5' },
  {
    id: 'type',
    label: 'Type',
    required: true,
    type: 'select',
    options: literatureTypeOptions,
    className: 'col s4 m3',
  },
] as UIForm;

export const technologyForm = (
  users: User[],
  technologyOptions: Array<{ id: string; label: string }>
) => {
  return [
    { id: 'id', type: 'none', autogenerate: 'id' },
    { id: 'updated', type: 'none', autogenerate: 'timestamp' },
    {
      id: 'technology',
      label: 'Technology title',
      type: 'text',
      className: 'col s8 m6',
    },
    {
      id: 'status',
      label: 'Status',
      type: 'select',
      options: statusOptions,
      className: 'col s12 m2',
    },
    {
      id: 'category',
      label: 'Category',
      type: 'select',
      multiple: true,
      options: technologyCategoryOptions,
      className: 'col s4',
    },
    {
      id: 'desc',
      label: 'Description',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'keywords',
      label: 'Synonyms and keywords',
      type: 'tags',
      className: 'col s12',
    },
    {
      id: 'owner',
      label: 'Owner',
      type: 'select',
      options: users.map((u) => ({ id: u.id, label: u.name })),
      className: 'col s4',
    },
    // {
    //   id: 'reviewer',
    //   label: 'Reviewer',
    //   type: 'select',
    //   multiple: true,
    //   options: users.map((u) => ({ id: u.id, label: u.name })),
    //   className: 'col s4',
    // },
    {
      id: 'merge',
      label: 'Merge with',
      type: 'select',
      multiple: true,
      options: technologyOptions,
      className: 'col s8',
    },
    {
      id: 'application',
      label: 'Specific application',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'mainCap',
      label: 'Main capability',
      type: 'select',
      className: 'col s6 m3',
      options: mainCapabilityOptions,
    },
    {
      id: 'hpeClassification',
      label: 'HPE classification',
      type: 'select',
      className: 'col s6 m3',
      options: hpeClassificationOptions,
    },
    {
      id: 'invasive',
      label: 'Invasive?',
      type: 'select',
      className: 'col s6 m2',
      options: invasivenessOptions,
    },
    {
      id: 'booster',
      label: 'Can be applied as booster?',
      type: 'checkbox',
      className: 'col s6 m4',
    },
    {
      id: 'specificCap',
      label: 'Specific capability',
      type: 'select',
      multiple: true,
      options: specificCapabilityOptions,
      className: 'col s12',
    },
    {
      id: 'similar',
      label: 'Similar technologies',
      type: 'select',
      multiple: true,
      options: technologyOptions,
      className: 'col s12',
    },
    {
      id: 'mechanism',
      label: 'How it works',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'effectDuration',
      label: 'Effect duration',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'incubation',
      label: 'Effect incubation',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'practical',
      label: 'Practical execution',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'hasIndDiff',
      label: 'Has individual differences?',
      type: 'select',
      options: NoYesUnknown,
      className: 'col s4',
    },
    {
      id: 'hasSideEffects',
      label: 'Has side effects?',
      type: 'select',
      options: NoYesUnknown,
      className: 'col s4',
    },
    {
      id: 'hasEthical',
      label: 'Has ethical considerations?',
      type: 'select',
      options: NoYesUnknown,
      className: 'col s4',
    },
    {
      id: 'diff',
      label: 'Individual differences',
      type: 'textarea',
      className: 'col s12',
      show: 'hasIndDiff > 1',
    },
    {
      id: 'sideEffects',
      label: 'Side effects',
      type: 'textarea',
      className: 'col s12',
      show: 'hasSideEffects > 1',
    },
    {
      id: 'ethical',
      label: 'Ethical considerations',
      type: 'textarea',
      className: 'col s12',
      show: 'hasEthical > 1',
    },
    {
      id: 'examples',
      label: 'Examples of the intervention being used in practice',
      type: 'textarea',
      className: 'col s12',
    },
    {
      id: 'maturity',
      label: 'Maturity',
      type: 'select',
      className: 'col s6 m2',
      options: maturityOptions,
    },
    {
      id: 'availability',
      label: 'Availability',
      type: 'select',
      className: 'col s12 m3',
      options: availabilityOptions,
    },
    {
      id: 'evidenceDir',
      label: 'Evidence direction',
      type: 'select',
      className: 'col s12 m2',
      options: evidenceDirOptions,
    },
    {
      id: 'evidenceScore',
      label: 'Evidence quality',
      type: 'select',
      className: 'col s12 m5',
      options: evidenceLevelOptions,
    },
    // {
    //   id: 'evidenceScore',
    //   label: 'Evidence score',
    //   type: 'radio',
    //   checkboxClass: 'col s4',
    //   className: 'col s12',
    //   options: evidenceLevelOptions,
    // },

    {
      id: 'url',
      label: 'Use default image',
      type: 'select',
      className: 'col s3',
      options: [
        { id: 'nutrition', label: 'Nutrition' },
        { id: 'pharma', label: 'Pharma' },
        { id: 'supplement', label: 'Supplement' },
        { id: 'upload', label: 'Upload' },
      ],
    },
    { id: 'img', label: 'Upload image', type: 'base64', className: 'col s9', show: 'url=upload' },
    {
      id: 'literature',
      label: 'Literature',
      className: 'col s12',
      repeat: true,
      pageSize: 20,
      type: literatureForm,
    },
  ] as UIForm;
};

/** Convert markdown text to HTML */
export const markdown2html = (markdown = '') => m.trust(render(markdown, true, true));

/** RegExp for references of type [vullings2022] */
export const refRegex = /\[(\d*)\]/gi;

export type ReferenceType = {
  id: number;
  title: string;
  url?: string;
  type: 'LIT' | 'MEA';
};

/** Convert markdown text to HTML after resolving all references. */
export const resolveRefs = (literature: Literature[] = []) => {
  const ids = [
    ...literature.map(
      (lit, i) => ({ id: i + 1, title: lit.title, url: lit.doi, type: 'LIT' } as ReferenceType)
    ),
  ].reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<string, ReferenceType>);
  return {
    ids,
    md2html: (markdown = '') => {
      const md = markdown.replace(refRegex, (replaceValue) => {
        const reference = ids[replaceValue.replace(/\[|\]/g, '')];
        // console.log(replaceValue);
        return reference
          ? `<a href="${reference.url}" target="_blank" alt="${reference.title}" title="${reference.title}">${replaceValue}</a>`
          : `<span class="red-text">${replaceValue}</span>`;
      });
      return markdown2html(md);
    },
  };
};

export const isUnique = <T>(item: T, pos: number, arr: T[]) => arr.indexOf(item) == pos;
