// src/data/authors.ts — Individual author profiles for E-E-A-T
// EDIT: Replace names, bios, and photos with your real team members.
// The placeholder names below follow the personas described on the About page.
// Just fill them in with real names — the infrastructure is ready.

export interface Author {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  since: string;        // year started in Xi'an
  photo?: string;       // path to avatar image
  specialties: string[]; // content categories
}

export const authors: Author[] = [
  {
    id: 'li-wei',
    name: 'Li Wei',
    role: 'History & Culture Writer',
    expertise: [
      'Chinese history (Zhou, Qin, Han, Tang dynasties)',
      'Archaeology and museum curation',
      'Silk Road history',
      'Xi\'an district navigation'
    ],
    bio: 'Li Wei has lived in Xi\'an since 2019 and has visited every major museum and historical site in Shaanxi province at least three times. He spends his weekends exploring forgotten Tang dynasty ruins and reading Ming-era city maps. Before writing travel guides, he worked as a research assistant at the Shaanxi History Museum.',
    since: '2019',
    specialties: ['attractions', 'itineraries', 'day-trips', 'history']
  },
  {
    id: 'wang-fang',
    name: 'Wang Fang',
    role: 'Food & Culture Writer',
    expertise: [
      'Xi\'an street food and regional cuisine',
      'Hui Muslim culinary traditions',
      'Chinese tea culture',
      'Budget travel and local markets'
    ],
    bio: 'Wang Fang grew up in Xi\'an\'s Beilin District, inside the city walls. She has eaten at over 300 restaurants and street stalls across the city since 2020, keeping detailed notes on which shops are still good, which have declined, and which new spots deserve a visit. Her food recommendations come from paid visits, never from sponsored meals.',
    since: '2020',
    specialties: ['food', 'nightlife', 'shopping', 'phrasebook']
  },
  {
    id: 'chen-yu',
    name: 'Chen Yu',
    role: 'Photography & Practical Guides Writer',
    expertise: [
      'Travel photography (architecture, landscapes, street)',
      'China transportation logistics',
      'Digital payments and SIM cards for tourists',
      'Outdoor hiking and Mount Huashan'
    ],
    bio: 'Chen Yu is a Xi\'an-based photographer who has shot the Terracotta Warriors in every season and lighting condition since 2021. He handles all the practical infrastructure content — transportation, payments, SIM cards, visa guides — because he has personally test-run every route and setup process described on this site.',
    since: '2021',
    specialties: ['photography', 'transportation', 'payment-guide', 'china-sim-card-tourist', 'china-240-hour-transit-visa']
  }
];

export function getAuthor(id: string): Author | undefined {
  return authors.find(a => a.id === id);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(a => a.name === name);
}
