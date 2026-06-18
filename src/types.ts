export type Lang = 'en' | 'uk' | 'ru'

export interface HeroHook {
  n: string
  text: string
}

export interface CapItem {
  n: string
  tag: string
  headline: string
  body: string
  pl: string
  pt: string
}

export interface StepItem {
  n: string
  title: string
  body: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FooterCol {
  h: string
  l: string[]
}

export interface Translations {
  navLinks: [string, string][]
  navLogin: string
  navCta: string
  heroBadge: string
  heroH1a: string
  heroH1b: string
  heroSub: string
  heroCta: string
  heroAlt: string
  heroT1: string
  heroT2: string
  heroT3: string
  noticeLabel: string
  notice: string
  exEyebrow: string
  exH2a: string
  exH2b: string
  exSub: string
  exLink: string
  exNote: string
  exGen: string
  tabs: string[]
  exHooksTitle: string
  exScriptTitle: string
  exCampaignTitle: string
  exPromptsTitle: string
  exPlanTitle: string
  capEyebrow: string
  capH2a: string
  capH2b: string
  howEyebrow: string
  howH2a: string
  howH2b: string
  accEyebrow: string
  accH2: string
  accBody: string
  accCta: string
  accNote: string
  accFeatures: string[]
  faqEyebrow: string
  faqH2a: string
  faqH2b: string
  faqSub: string
  faqCta: string
  faqs: FaqItem[]
  ctaH2a: string
  ctaH2b: string
  ctaSub: string
  ctaBtn: string
  ctaT1: string
  ctaT2: string
  ctaT3: string
  ftTagline: string
  ftCols: FooterCol[]
  ftCopy: string
  ftSub: string
  heroMsg: string
  heroReplyLabel: string
  heroHooks: HeroHook[]
  heroFooter: string
  caps: CapItem[]
  steps: StepItem[]
  marqueeItems: string[]
  exampleMsgs: string[]
}

// Example output types
export interface NumberedOutput {
  type: 'numbered'
  title: string
  items: string[]
}

export interface ScriptScene {
  time: string
  label: string
  text: string
  note: string
}

export interface ScriptOutput {
  type: 'script'
  title: string
  scenes: ScriptScene[]
}

export interface CampaignItem {
  label: string
  text: string
}

export interface CampaignOutput {
  type: 'campaign'
  title: string
  items: CampaignItem[]
}

export interface PromptItem {
  tool: string
  text: string
}

export interface PromptsOutput {
  type: 'prompts'
  title: string
  items: PromptItem[]
}

export interface PlanDay {
  day: string
  format: string
  idea: string
}

export interface PlanWeek {
  label: string
  days: PlanDay[]
}

export interface PlanOutput {
  type: 'plan'
  title: string
  weeks: PlanWeek[]
}

export type ExampleOutputData = NumberedOutput | ScriptOutput | CampaignOutput | PromptsOutput | PlanOutput

export interface ExampleItem {
  id: string
  userMsg?: string
  output: ExampleOutputData
}
