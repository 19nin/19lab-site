export type Product = {
  slug: string;
  number: string;
  name: string;
  nameJa?: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  url?: string;
  // Placeholder gradient (used until thumbnail image is added).
  placeholder: {
    from: string;
    to: string;
  };
  thumbnail?: string;
};

export const products: Product[] = [
  {
    slug: 'cheerly',
    number: '01',
    name: 'Cheerly',
    nameJa: 'チアリー',
    year: '2026',
    category: 'iOS App',
    tagline: '小さなご褒美で、毎日に灯をともす。',
    description:
      '日々のささやかな達成にスタンプを集めるセルフリワードアプリ。完璧な日でなくても、自分にやさしい一歩を。',
    placeholder: { from: '#d8c8b3', to: '#a89377' },
  },
  {
    slug: 'atsumaro',
    number: '02',
    name: 'あつまろ',
    nameJa: 'Atsumaro',
    year: '2026',
    category: 'PWA / Web',
    tagline: 'みんなで集まる、その瞬間まで。',
    description:
      '幹事の負担を、そっと減らす。シンプルで気持ちのいい、イベント告知のための小さな道具。',
    placeholder: { from: '#e7d2cc', to: '#b58880' },
  },
  {
    slug: 'cotoba',
    number: '03',
    name: 'Cotoba',
    nameJa: 'ことば',
    year: '2026',
    category: 'Web Service',
    tagline: 'ことばを愛でる、毎日のしるべ。',
    description:
      'やさしい日本語の言葉と意味に出会うブログ・Webサービス。読むほどに、自分のことばが整っていく。',
    url: 'https://cotoba.app',
    placeholder: { from: '#c9d3c0', to: '#7d8d72' },
  },
];
