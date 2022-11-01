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
  INTERVENTION_CATEGORY,
  User,
  Intervention,
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
  id?: T,
  showTitle = true
) => {
  if (!id) {
    return '';
  }
  const found = options.filter((o) => o.id === id).shift();
  return found
    ? showTitle
      ? `${found.label}${found.title ? ` (${found.title.replace(/\.\s*$/, '')})` : ''}`
      : found.label
    : '';
};

/** Join a list of items with a comma, and use AND for the last item in the list. */
export const joinListWithAnd = (arr: string[] = [], and = 'and', prefix = '') => {
  const terms = arr.filter((term) => term);
  return terms.length === 0
    ? ''
    : prefix +
        (terms.length === 1
          ? terms[0]
          : `${terms
              .slice(0, terms.length - 1)
              .map((t, i) => (i === 0 || typeof t === 'undefined' ? t : t.toLowerCase()))
              .join(', ')} ${and} ${terms[terms.length - 1].toLowerCase()}`);
};

/** Convert a list of options to text (label + title?) */
export const optionsToTxt = <T extends string | number>(
  selectedIds: T | T[],
  options: Array<{ id: T; label: string; title?: string }>,
  showTitle = true
) => {
  if (!selectedIds || (selectedIds instanceof Array && selectedIds.length === 0)) return ['−'];
  const ids = selectedIds instanceof Array ? selectedIds : [selectedIds];
  const lookup = options.reduce((acc, cur) => {
    acc[cur.id] = `${cur.label}${showTitle && cur.title ? ` (${cur.title})` : ''}`;
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

export const interventionCategoryOptions = [
  { id: INTERVENTION_CATEGORY.HARDWARE, label: 'Hardware', title: '' },
  { id: INTERVENTION_CATEGORY.BIO_ENHANCEMENT, label: 'Bio-enhancement', title: '' },
  {
    id: INTERVENTION_CATEGORY.PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION,
    label: 'Pharmacological substances, supplements and nutrition',
    title: '',
  },
  { id: INTERVENTION_CATEGORY.TRAINING, label: 'Training', title: '' },
  { id: INTERVENTION_CATEGORY.SELF_REGULATION, label: 'Self-regulation', title: '' },
  { id: INTERVENTION_CATEGORY.NUTRITION, label: 'Nutrition', title: '' },
  { id: INTERVENTION_CATEGORY.OTHER, label: 'Other', title: '' },
];

export const hpeClassificationOptions = [
  {
    id: HPE_CLASSIFICATION.OPTIMIZATION,
    label: 'Optimization',
    title:
      'The intervention improves human performance on a specific capability within biological limits',
  },
  {
    id: HPE_CLASSIFICATION.ENHANCEMENT,
    label: 'Enhancement',
    title:
      'The intervention improves human performance on a specific capability above biological limits',
  },
  {
    id: HPE_CLASSIFICATION.DEGRADATION,
    label: 'Degradation',
    title: 'The intervention decreases human performance on a specific capability',
  },
];

export const mainCapabilityOptions = [
  {
    id: MAIN_CAPABILITY.COGNITION,
    label: 'Cognition',
    title:
      'The capability to perform intellectual functions and activities such as thinking, planning, maintaining situation awareness, vigilance, perception and memory',
  },
  {
    id: MAIN_CAPABILITY.PHYSICAL,
    label: 'Physical',
    title:
      'The capability to perform body movements at, for instance, high speed, accuracy, strength or with long endurance',
  },
  {
    id: MAIN_CAPABILITY.MENTAL,
    label: 'Mental',
    title:
      'The capability to achieve an optimal emotional and motivational state, for instance through self-confidence or mental thoughness',
  },
  {
    id: MAIN_CAPABILITY.SOCIAL,
    label: 'Social',
    title:
      'The capability to achieve goals with others, for instance through leadership, team situational awareness, or connectedness',
  },
  {
    id: MAIN_CAPABILITY.PERSONALITY,
    label: 'Personality',
    title:
      'Having an optimal, long-term, style of thinking, feeling and behaving. Examples include dispositional optimism, internal locus of control, self-regulation, and anxiety sensitivity',
  },
];

export const specificCapabilityOptions = [
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.SITUATION_AWARENESS,
    label: 'Improved situation awareness',
    title:
      'The perception of environmental elements and events with respect to time or space, the comprehension of their meaning, and the projection of their future status',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.EXECUTIVE_FUNCTIONS,
    label: 'Improved executive functions',
    title:
      'Executive functions (collectively referred to as executive function and cognitive control) are a set of cognitive processes that are necessary for the cognitive control of behavior: selecting and successfully monitoring behaviors that facilitate the attainment of chosen goals. Executive functions include basic cognitive processes such as attentional control, cognitive inhibition, inhibitory control, working memory, and cognitive flexibility',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.LONG_TERM_MEMORY,
    label: 'Increased long-term memory',
    title:
      'Long-term memory allows us to store information for long periods of time. This information may be retrieved consciously (explicit memory) or unconsciously (implicit memory)',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.SHORT_TERM_MEMORY,
    label: 'Increased short-term memory',
    title:
      'Short-term memory refers to the information processed by the individual in a short period of time. Working memory performs this processing',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.DECLARATIVE_MEMORY,
    label: 'Increased declarative memory',
    title:
      'What defines declarative memory is the ability to consciously recollect the situation in which you learned something new',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.VIGILANCE,
    label: 'Increased vigilance',
    title: 'Vigilance is devoted attentiveness or watchfulness',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.PSYCHOMOTOR,
    label: 'Increased psychomotor ability',
    title:
      'Psychomotor abilities are skills such as hand-eye coordination, balance, and reaction time that arise from a unity of cognitive and physical functions',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.ATTENTION,
    label: 'Increased attention',
    title:
      'Attention is the ability to focus and maintain interest in a given task or idea while avoiding distractions',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.SPEECH,
    label: 'Improved speech',
    title: 'The delivery of language through the mouth',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.LEARNING,
    label: 'Increased learning',
    title: 'The acquisition of knowledge or skills through study, experience, or being taught',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.ARITHMETIC,
    label: 'Increased arithmetic ability',
    title:
      'The ability to perform numerical calculations, such as addition, subtraction, multiplication, and division',
  },
  {
    mc: MAIN_CAPABILITY.COGNITION,
    id: SPECIFIC_CAPABILITY.WORKING_MEMORY,
    label: 'Increased working memory',
    title:
      'Working memory is the small amount of information that can be held briefly in the mind and is used in the execution of cognitive tasks',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.STRENGTH,
    label: 'Increased strength',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.ENDURANCE,
    label: 'Increased endurance',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.RECOVERY,
    label: 'Increased recovery',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.STRUCTURAL_TOUGHNESS,
    label: 'Increased structural toughness',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.THERMO_REGULATION,
    label: 'Increased thermoregulation',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.BLOOD_PRESSURE_REGULATION,
    label: 'Improved blood pressure regulation',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.IMMUNITY,
    label: 'Inreased immunity',
    title: '',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.PAIN,
    label: 'Decreased pain',
    title:
      'Potentially damaging mechanical, thermal, and chemical stimuli are detected by nerve endings called nociceptors, which are found in the skin, on internal surfaces such as the periosteum, joint surfaces, and in some internal organs',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.VISUAL_PERCEPTION,
    label: 'Increased visual perception',
    title:
      'Visual perception is the ability to perceive our surroundings through the light that enters our eyes',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.AUDITORY_PERCEPTION,
    label: 'Increased auditory perception',
    title:
      'Auditory perception could be defined as the ability to receive and interpret information that reached the ears through audible frequency waves transmitted through the air or other means.',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.TACTILE_PERCEPTION,
    label: 'Increased tactile perception',
    title: 'The ability to perceive objects or judge sensations through the sense of touch.',
  },
  {
    mc: MAIN_CAPABILITY.PHYSICAL,
    id: SPECIFIC_CAPABILITY.INC_EXPLOSIVENESS,
    label: 'Increased explosiveness',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.EMOTION_REGULATION,
    label: 'Improved mood',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.INC_TRANQUILITY,
    label: 'Increased tranquility',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.STRESS,
    label: 'Decreased stress',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.RESILIENCE,
    label: 'Improved resilience',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.MOTIVATION,
    label: 'Increased motivation',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.SELF_ESTEEM,
    label: 'Increased self-esteem',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.SENSE_OF_FATIGUE,
    label: 'Decreased sense of fatigue',
  },
  {
    mc: MAIN_CAPABILITY.MENTAL,
    id: SPECIFIC_CAPABILITY.DEC_PAIN_PERCEPTION,
    label: 'Decreased pain perception',
  },
  {
    mc: MAIN_CAPABILITY.SOCIAL,
    id: SPECIFIC_CAPABILITY.COLLABORATION,
    label: 'Increased collaboration',
  },
  {
    mc: MAIN_CAPABILITY.SOCIAL,
    id: SPECIFIC_CAPABILITY.COMMUNICATION,
    label: 'Improved communication',
  },
  {
    mc: MAIN_CAPABILITY.SOCIAL,
    id: SPECIFIC_CAPABILITY.SOCIAL_INTELLIGENCE,
    label: 'Improved social intelligence',
  },
  {
    mc: MAIN_CAPABILITY.SOCIAL,
    id: SPECIFIC_CAPABILITY.SOCIAL_INTERACTION,
    label: 'Social interaction',
  },
  {
    mc: MAIN_CAPABILITY.SOCIAL,
    id: SPECIFIC_CAPABILITY.EMPATHY,
    label: 'Increased empathy',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.LEADERSHIP,
    label: 'Improved leadership',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.OBEDIENCE,
    label: 'Increased obedience',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.RISK_TAKING,
    label: 'Increased risk-taking',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.PERSISTANCE,
    label: 'Increased persistance',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.CONSCIENSCIOUSNESS,
    label: 'Consciensciousness',
    title:
      'Conscientiousness is the personality trait of being careful, or diligent. Conscientiousness implies a desire to do a task well, and to take obligations to others seriously',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.OPENNESS,
    label: 'Openness',
    title:
      'Openness involves: active imagination (fantasy), aesthetic sensitivity, attentiveness to inner feelings, preference for variety (adventurousness), intellectual curiosity, and challenging authority (psychological liberalism)',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.EXTRAVERSION,
    label: 'Extraversion',
    title:
      'Extraversion is defined by the general tendency to experience positive emotions, as well as by traits such as sociable, lively, and active',
  },
  {
    mc: MAIN_CAPABILITY.PERSONALITY,
    id: SPECIFIC_CAPABILITY.NEUROTICISM,
    label: 'Neuroticism',
    title:
      'Neuroticism is the trait disposition to experience negative affects, including anger, anxiety, self‐consciousness, irritability, emotional instability, and depression',
  },
];

export const specificCognitiveCapabilityOptions = specificCapabilityOptions.filter(
  ({ mc }) => mc === MAIN_CAPABILITY.COGNITION
);

export const specificPhysicalCapabilityOptions = specificCapabilityOptions.filter(
  ({ mc }) => mc === MAIN_CAPABILITY.PHYSICAL
);

export const specificMentalCapabilityOptions = specificCapabilityOptions.filter(
  ({ mc }) => mc === MAIN_CAPABILITY.MENTAL
);

export const specificSocialCapabilityOptions = specificCapabilityOptions.filter(
  ({ mc }) => mc === MAIN_CAPABILITY.SOCIAL
);

export const specificPersonalityCapabilityOptions = specificCapabilityOptions.filter(
  ({ mc }) => mc === MAIN_CAPABILITY.PERSONALITY
);

export const invasivenessOptions = [
  {
    id: INVASIVENESS_OBTRUSIVENESS.LOW,
    label: 'Low',
    title: 'No physical substance enters the body',
  },
  {
    id: INVASIVENESS_OBTRUSIVENESS.MEDIUM,
    label: 'Medium',
    title: 'Supplement, heavy training, intervention with low risk',
  },
  {
    id: INVASIVENESS_OBTRUSIVENESS.HIGH,
    label: 'High',
    title: 'High-impact pharma, implant, body modification, intervention with high risk or pain',
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
      'A small body of research exists indicating effectiveness of the intervention. Low TRL level applications',
  },
  {
    id: MATURITY.HIGH,
    label: 'High',
    title:
      'One or more meta-analyses indicate effectiveness. The intervention is already applied in practice',
  },
];

export const effectDirectionOptions = [
  {
    id: EFFECT_DIRECTION.NEGATIVE,
    label: 'Negative',
    title: 'The intervention decreases a subjects capability level',
  },
  {
    id: EFFECT_DIRECTION.POSITIVE,
    label: 'Positive',
    title: 'The intervention increases a subjects capability level',
  },
];

export const ethicalConsiderationsOptions = [
  {
    id: CHOICE.NONE,
    label: 'None',
    title: 'No ethical considerations known',
  },
  {
    id: CHOICE.YES,
    label: 'Yes',
    title: 'Ethical considerations exist',
  },
  {
    id: CHOICE.UNKNOWN,
    label: 'Unknown',
    title: 'Unclear about ethical considerations',
  },
];

export const evidenceDirOptions = [
  {
    id: EVIDENCE_DIRECTION.GENERALLY_IN_FAVOR,
    label: 'Effect present',
    title: 'Evidence generally indicates the presence of an effect',
  },
  {
    id: EVIDENCE_DIRECTION.GENERALLY_AGAINST,
    label: 'Effect absent',
    title: 'Evidence generally indicates the absence of an effect',
  },
  {
    id: EVIDENCE_DIRECTION.UNDECIDED,
    label: 'Undecided',
    title: 'Evidence indicates neither presence nor absence of an effect',
  },
];

export const evidenceLevelOptions = [
  {
    id: EVIDENCE_LEVEL.GOOD,
    label: 'High',
    title:
      'Based on good quality research: meta-analyses, large sample sizes, randomized controlled trials, controlled environments, peer-reviewed',
  },
  {
    id: EVIDENCE_LEVEL.MEDIUM,
    label: 'Medium',
    title: 'Based on limited-quality research: smaller sample sizes, explorative studies, pilots',
  },
  { id: EVIDENCE_LEVEL.LOW, label: 'Low', title: 'Based on consensus, usual practice, opinion' },
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

export const boosterOptions = [
  { id: 1, label: 'Yes', title: 'The intervention can be applied quickly (approx. < 1 hour)' },
  { id: 2, label: 'No', title: 'The intervention can not be applied quickly (approx. < 1 hour)' },
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
] as UIForm<Literature>;

export const interventionForm = (
  users: User[],
  interventionOptions: Array<{ id: string; label: string }>
) => {
  return [
    { id: 'id', type: 'none', autogenerate: 'id' },
    { id: 'updated', type: 'none', autogenerate: 'timestamp' },
    {
      id: 'intervention',
      label: 'Intervention title',
      required: true,
      type: 'text',
      className: 'col s6 m8',
    },
    {
      id: 'category',
      label: 'Category',
      type: 'select',
      multiple: true,
      options: interventionCategoryOptions,
      className: 'col s6 m4',
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
    // {
    //   id: 'owner',
    //   label: 'Owner',
    //   type: 'select',
    //   options: users.map((u) => ({ id: u.id, label: u.name })),
    //   className: 'col s12',
    // },
    // {
    //   id: 'status',
    //   label: 'Status',
    //   type: 'select',
    //   options: statusOptions,
    //   className: 'col s4',
    // },
    // {
    //   id: 'reviewer',
    //   label: 'Reviewer',
    //   type: 'select',
    //   multiple: true,
    //   options: users.map((u) => ({ id: u.id, label: u.name })),
    //   className: 'col s4',
    // },
    {
      id: 'mainCap',
      label: 'Main capability',
      required: true,
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
      label: 'Specific cognitive capabilities',
      type: 'options',
      multiple: true,
      options: specificCognitiveCapabilityOptions,
      className: 'col s12',
      checkboxClass: 'col s4',
      show: 'mainCap = 1',
    },
    {
      id: 'specificCap',
      label: 'Specific physical capabilities',
      type: 'options',
      multiple: true,
      options: specificPhysicalCapabilityOptions,
      className: 'col s12',
      checkboxClass: 'col s4',
      show: 'mainCap = 2',
    },
    {
      id: 'specificCap',
      label: 'Specific mental capabilities',
      type: 'options',
      multiple: true,
      options: specificMentalCapabilityOptions,
      className: 'col s12',
      checkboxClass: 'col s4',
      show: 'mainCap = 3',
    },
    {
      id: 'specificCap',
      label: 'Specific social capabilities',
      type: 'options',
      multiple: true,
      options: specificSocialCapabilityOptions,
      className: 'col s12',
      checkboxClass: 'col s4',
      show: 'mainCap = 4',
    },
    {
      id: 'specificCap',
      label: 'Specific personality capabilities',
      type: 'options',
      multiple: true,
      options: specificPersonalityCapabilityOptions,
      className: 'col s12',
      checkboxClass: 'col s4',
      show: 'mainCap = 5',
    },
    {
      id: 'similar',
      label: 'Similar interventions',
      type: 'select',
      multiple: true,
      options: interventionOptions,
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
      show: 'hasIndDiff > 2',
    },
    {
      id: 'sideEffects',
      label: 'Side effects',
      type: 'textarea',
      className: 'col s12',
      show: 'hasSideEffects > 2',
    },
    {
      id: 'ethical',
      label: 'Ethical considerations',
      type: 'textarea',
      className: 'col s12',
      show: 'hasEthical > 2',
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
      label: 'Evidence indication',
      type: 'select',
      className: 'col s12 m2',
      options: evidenceDirOptions,
    },
    {
      id: 'evidenceScore',
      label: 'Evidence quality',
      type: 'select',
      className: 'col s12 m2',
      options: evidenceLevelOptions,
    },
    {
      id: 'owner',
      label: 'Owner',
      type: 'select',
      options: users.map((u) => ({ id: u.id, label: u.name })),
      className: 'col s12 m3',
    },

    // {
    //   id: 'evidenceScore',
    //   label: 'Quality of evidence',
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
        { id: 'pharma', label: 'Pharma/supplement' },
        { id: 'beverage', label: 'Beverage' },
        { id: 'upload', label: 'Upload your own' },
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
  ] as UIForm<Intervention>;
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
