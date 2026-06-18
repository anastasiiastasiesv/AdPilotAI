import type { ExampleItem } from '../types'

export const EXAMPLES_EN: ExampleItem[] = [
  {
    id: 'hooks',
    output: {
      type: 'numbered',
      title: '10 Hooks — Fitness App',
      items: [
        '"I work 60-hour weeks. Here\'s the only workout that actually fits."',
        '"You don\'t need an hour. You need 18 minutes and a plan."',
        '"The excuse I kept making — and what finally changed it."',
        '"Everyone has 18 minutes. The question is what you do with them."',
        '"I stopped skipping workouts when I stopped planning long ones."',
        '"Your calendar is full. Your gym routine doesn\'t have to be."',
        '"The CEO morning routine that fitness apps won\'t show you."',
        '"I was 3 months into \'I\'ll start Monday.\' Then I tried this."',
        '"No gym. No 5am alarm. No excuses left."',
        '"What happens when you compress a fitness routine to 20 minutes."',
      ],
    },
  },
  {
    id: 'script',
    output: {
      type: 'script',
      title: '30-Second Reels Script — Organic Coffee',
      scenes: [
        { time: '0–3s', label: 'HOOK', text: '"Most people don\'t know what their coffee is actually made of."', note: 'Close-up of hands holding a ceramic mug. Soft morning light.' },
        { time: '3–10s', label: 'BUILD', text: '"Conventional coffee is one of the most pesticide-heavy crops in the world. We chose differently."', note: 'B-roll: coffee farm, hands picking cherries, close-up of beans.' },
        { time: '10–22s', label: 'PRODUCT', text: '"Every bag is single-origin, certified organic, and roasted the week it ships."', note: 'Product reveal. Pour shot. Steam in slow motion.' },
        { time: '22–30s', label: 'CTA', text: '"Your morning ritual deserves better than average."', note: 'Logo fade-in. Link in bio. No hard sell.' },
      ],
    },
  },
  {
    id: 'campaign',
    output: {
      type: 'campaign',
      title: 'Campaign: "The Sleep Debt" — DTC Sleep Supplement',
      items: [
        { label: 'Core Insight', text: "Modern professionals don't have a sleep problem — they have a recovery problem. Sleep debt compounds like financial debt." },
        { label: 'Campaign Theme', text: '"Pay it back." — Position the product as a recovery tool, not a sleep aid. Clinical, results-oriented.' },
        { label: 'Hero Ad (Meta)', text: "15s video. Timelapse: city at 2am → person waking sharp at 6am. VO: 'You've been running a deficit. Tonight, you pay it back.'" },
        { label: 'TikTok UGC Series', text: '3-part creator series: Night 1 / Night 7 / Night 30. Raw, unscripted. Product visible but not forced.' },
        { label: 'Retargeting', text: 'Carousel: education → product → CTA. Each frame earns the next.' },
        { label: 'Budget Split', text: '$8K Meta, $5K TikTok, $2K creative production.' },
      ],
    },
  },
  {
    id: 'prompts',
    output: {
      type: 'prompts',
      title: 'Midjourney Prompts — Luxury Skincare',
      items: [
        { tool: 'MJ v6', text: 'a single glass serum bottle on polished white marble, soft morning window light casting long shadows, editorial fashion photography, f/2.8 85mm, desaturated warm tones, ultra clean minimal composition --ar 4:5 --v 6 --style raw' },
        { tool: 'MJ v6', text: 'luxury skincare product flatlay, cream and sage palette, dried botanicals, white linen texture, top-down view, Vogue beauty editorial, natural diffused light, film grain --ar 1:1 --v 6 --style raw' },
        { tool: 'MJ v6', text: 'frosted glass skincare jar on wet black stone, morning fog, luxury fragrance commercial aesthetic, cinematic grade muted teal and amber, no people --ar 3:4 --v 6 --style raw' },
      ],
    },
  },
  {
    id: 'plan',
    output: {
      type: 'plan',
      title: '2-Week TikTok Plan — Sustainable Fashion',
      weeks: [
        {
          label: 'Week 1 — Awareness',
          days: [
            { day: 'Mon', format: 'Hook video', idea: '"Fast fashion brands won\'t show you this" — ethical vs conventional manufacturing in 45 seconds.' },
            { day: 'Wed', format: 'Educational', idea: '"What \'sustainable\' actually means on a clothing label" — cut through greenwashing.' },
            { day: 'Fri', format: 'Product', idea: 'GRWM using only the collection. Soft light, no voiceover. Let the clothes carry it.' },
          ],
        },
        {
          label: 'Week 2 — Conversion',
          days: [
            { day: 'Mon', format: 'Behind scenes', idea: 'Factory floor walkthrough. Show the hands that made it. No script.' },
            { day: 'Wed', format: 'UGC repost', idea: "Reshare best customer post + on-screen: 'This is what wearing your values looks like.'" },
            { day: 'Fri', format: 'Offer', idea: '"We made 200 units. When they\'re gone, they\'re gone." Urgency without pressure.' },
          ],
        },
      ],
    },
  },
]
