// All personal details live here. Edit this file to update the bio and contact info.
export const site = {
  name: 'Neil Robinson',
  shortName: 'Neil',
  brand: 'InsaneRide',
  title: 'Experience design leader',
  tagline: 'UX/UI · Research · Strategic planning',
  intro:
    'I turn ambiguous, complex requests into clear decisions, actionable plans and beautifully designed experiences.',
  // TODO(Neil): review this bio. It is condensed from the About page on the old site.
  bio: [
    'I love turning an idea into a product people want to use. I start from real user needs and let evidence guide the decisions, then bring teams together around a clear plan.',
    'I specialize in user-centered design grounded in critical thinking, across product design, UX research, interaction design, branding, web, animation and print. I have illustrated all my life, and today I lead the teams that do this work.',
  ],
  interests: ['Artist first', 'Illustrator', 'Brazilian jiu-jitsu', 'Mountain biking'],
  stats: [
    { value: '25+', label: 'Years of professional experience' },
    { value: '12', label: 'Projects on this site' },
  ],
  disciplines: ['User experience leadership', 'Application experience design', 'Marketing design', 'Illustration'],
  // Portrait lives at src/assets/portrait.png (transparent cut-out). Set false to hide it.
  hasPortrait: true,
  email: 'hyperionbox@gmail.com',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/insaneride/' },
    { label: 'Dribbble', url: 'https://dribbble.com/InsaneRide' },
    { label: 'Behance', url: 'https://www.behance.net/Jitsbreed' },
    { label: 'Instagram', url: 'https://www.instagram.com/insaneride/' },
    { label: 'Facebook', url: 'https://www.facebook.com/insaneride' },
  ],
  available: true,
};

export const disciplines = {
  ux: 'UX / UI',
  print: 'Print and packaging',
  illustration: 'Illustration and brand',
} as const;
export type Discipline = keyof typeof disciplines;
