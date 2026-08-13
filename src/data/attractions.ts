export interface AttractionData {
  name: string;
  slug: string;
  price: number;
  duration: string;
  bestTime: string;
  crowdLevel: number;  // 1-5
  walkability: string;
  historicalPeriod: string;
  photoScore: number;  // 1-5
  familyFriendly: boolean;
  description: string;
  highlights: string[];
}

export const attractions: AttractionData[] = [
  {
    name: "Terracotta Warriors",
    slug: "terracotta-warriors",
    price: 18,
    duration: "3-4 hours",
    bestTime: "8:30 AM (empty before 10 AM)",
    crowdLevel: 5,
    walkability: "Easy, flat museum floors",
    historicalPeriod: "Qin Dynasty (210 BC)",
    photoScore: 5,
    familyFriendly: true,
    description: "8,000 life-sized soldiers buried with China's first emperor. UNESCO World Heritage Site and one of the greatest archaeological discoveries of the 20th century.",
    highlights: ["Pit 1 with 2,000+ warriors in formation", "Bronze chariot exhibition", "Individual facial features up close in Pit 2"]
  },
  {
    name: "Ancient City Wall",
    slug: "city-wall",
    price: 8,
    duration: "1.5-2 hours cycling",
    bestTime: "4 PM for sunset",
    crowdLevel: 3,
    walkability: "Easy, flat 14km loop",
    historicalPeriod: "Ming Dynasty (1370-1378)",
    photoScore: 4,
    familyFriendly: true,
    description: "China's best-preserved ancient city wall. 14 kilometers of cycling with panoramic views of old Xi'an on one side and the modern city on the other.",
    highlights: ["Cycle the full 14km loop", "Sunset views from the southwest corner", "Red lantern illumination after dark"]
  },
  {
    name: "Muslim Quarter",
    slug: "muslim-quarter",
    price: 0,
    duration: "2-3 hours (eating)",
    bestTime: "After 7 PM",
    crowdLevel: 4,
    walkability: "Easy, narrow walking streets",
    historicalPeriod: "Tang Dynasty (1,300 years ago)",
    photoScore: 4,
    familyFriendly: true,
    description: "1,300-year-old Muslim neighborhood famous for street food. The best place in Northwest China to eat biangbiang noodles, lamb skewers, and yangrou paomo.",
    highlights: ["Biangbiang noodles on Sajinqiao street", "Night market atmosphere after 7 PM", "Persimmon cakes fresh off the griddle"]
  },
  {
    name: "Big Wild Goose Pagoda",
    slug: "big-wild-goose-pagoda",
    price: 6,
    duration: "1-2 hours",
    bestTime: "Sunset (climb for golden hour)",
    crowdLevel: 3,
    walkability: "Easy, pagoda has narrow stairs",
    historicalPeriod: "Tang Dynasty (652 AD)",
    photoScore: 4,
    familyFriendly: true,
    description: "1,300-year-old Buddhist pagoda built to house scriptures from India. Climb the 7 floors for city views and stay for the free musical fountain show.",
    highlights: ["Panoramic views from the top", "Free musical fountain show at 8 PM", "Great Tang All Day Mall at night"]
  },
  {
    name: "Shaanxi History Museum",
    slug: "shaanxi-history-museum",
    price: 0,
    duration: "3-4 hours",
    bestTime: "8:30 AM (book weeks ahead)",
    crowdLevel: 4,
    walkability: "Easy, indoor museum",
    historicalPeriod: "All dynasties (1.1 million years of artifacts)",
    photoScore: 3,
    familyFriendly: true,
    description: "China's best provincial museum with 1.7 million artifacts. Free entry but you must book online in advance. The Tang Dynasty collection is world-class.",
    highlights: ["Tang Dynasty gold and jade (Hall 3)", "Han Dynasty jade burial suits", "Silk Road trade artifacts"]
  },
  {
    name: "Mount Huashan",
    slug: "mount-huashan",
    price: 24,
    duration: "Full day (8-10 hours roundtrip)",
    bestTime: "Early morning from Xi'an (7 AM train)",
    crowdLevel: 4,
    walkability: "Strenuous, steep staircases",
    historicalPeriod: "Sacred Daoist mountain (2,000+ years)",
    photoScore: 5,
    familyFriendly: false,
    description: "One of China's Five Great Mountains with dramatic granite cliffs and the famous Plank Walk bolted to a vertical cliff face 2,000m up.",
    highlights: ["The Plank Walk (terrifying, unforgettable)", "Five peaks connected by cliffside paths", "Sunrise from East Peak"]
  },
  {
    name: "Huaqing Hot Springs",
    slug: "huaqing-pool",
    price: 18,
    duration: "2-3 hours",
    bestTime: "Winter (steam rising in cold air)",
    crowdLevel: 3,
    walkability: "Easy, flat palace grounds",
    historicalPeriod: "Tang Dynasty (3,000 years of hot spring use)",
    photoScore: 3,
    familyFriendly: true,
    description: "Tang Dynasty imperial bathing palace where Emperor Xuanzong and Yang Guifei's love story unfolded. Combine with the Terracotta Warriors (10 min away).",
    highlights: ["Imperial bathing pools (43°C natural springs)", "The Song of Everlasting Sorrow night show", "Mount Li cable car views"]
  },
  {
    name: "Han Yangling Mausoleum",
    slug: "han-yangling",
    price: 10,
    duration: "2-3 hours",
    bestTime: "Weekday mornings (often empty)",
    crowdLevel: 1,
    walkability: "Easy, modern museum building",
    historicalPeriod: "Han Dynasty (188-141 BC)",
    photoScore: 4,
    familyFriendly: true,
    description: "Han Dynasty emperor's tomb with thousands of miniature terracotta figurines. Walk above them on glass-floored museum walkways in near solitude.",
    highlights: ["Glass-floored museum walkways", "Miniature figurines (60cm, wearing silk)", "Almost zero crowds on weekdays"]
  },
  {
    name: "Bell & Drum Towers",
    slug: "bell-drum-tower",
    price: 7,
    duration: "1-1.5 hours",
    bestTime: "Dusk (when lanterns turn on)",
    crowdLevel: 3,
    walkability: "Easy, use underground passage to cross",
    historicalPeriod: "Ming Dynasty (1384)",
    photoScore: 4,
    familyFriendly: true,
    description: "Two Ming Dynasty towers at the absolute center of Xi'an. The Bell Tower offers 360-degree views of the old city and the Drum Tower hosts live drum performances.",
    highlights: ["360-degree view from Bell Tower top", "Live drum performances daily", "Gateway to the Muslim Quarter"]
  },
  {
    name: "Tang Paradise",
    slug: "tang-paradise",
    price: 18,
    duration: "3-4 hours (best after 5 PM)",
    bestTime: "Evening (park transforms after dark)",
    crowdLevel: 3,
    walkability: "Moderate, huge park (100 hectares)",
    historicalPeriod: "Tang Dynasty recreation",
    photoScore: 4,
    familyFriendly: true,
    description: "Massive Tang Dynasty cultural theme park with lake, gardens, and nightly water show. Best visited after dusk when the entire park glows with golden lights.",
    highlights: ["Nightly water and light show on the lake", "Lantern-lit gardens after dark", "Tang Dynasty costume rentals for photos"]
  },
];
