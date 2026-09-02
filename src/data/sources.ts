export interface SourceEntry {
  id: string;
  title: string;
  author: string;
  type: 'Ouvrage' | 'Article' | 'Archive' | 'Rapport' | 'Site';
  year: string;
  pillar: string;
  url?: string;
}

export const sources: SourceEntry[] = [
  {
    id: 's1',
    title: 'Nations nègres et culture',
    author: 'Cheikh Anta Diop',
    type: 'Ouvrage',
    year: '1954',
    pillar: 'Histoire & Mémoire',
  },
  {
    id: 's2',
    title: 'Histoire de l\'Afrique noire',
    author: 'Joseph Ki-Zerbo',
    type: 'Ouvrage',
    year: '1978',
    pillar: 'Histoire & Mémoire',
  },
  {
    id: 's3',
    title: 'Histoire générale de l\'Afrique (8 vol.)',
    author: 'UNESCO',
    type: 'Ouvrage',
    year: '1980–1999',
    pillar: 'Histoire & Mémoire',
  },
  {
    id: 's4',
    title: 'The Destruction of Black Civilization',
    author: 'Chancellor Williams',
    type: 'Ouvrage',
    year: '1987',
    pillar: 'Histoire & Mémoire',
  },
  {
    id: 's5',
    title: 'L\'invention de l\'Afrique',
    author: 'V. Y. Mudimbe',
    type: 'Ouvrage',
    year: '1988',
    pillar: 'Colonisation & Néocolonialisme',
  },
  {
    id: 's6',
    title: 'How Europe Underdeveloped Africa',
    author: 'Walter Rodney',
    type: 'Ouvrage',
    year: '1972',
    pillar: 'Économie & Développement',
  },
  {
    id: 's7',
    title: 'Afrotopia',
    author: 'Felwine Sarr',
    type: 'Ouvrage',
    year: '2016',
    pillar: 'Culture & Identités',
  },
  {
    id: 's8',
    title: 'Écriture sur le silence : Afrique et postcolonie',
    author: 'Achille Mbembe',
    type: 'Ouvrage',
    year: '2020',
    pillar: 'Politique & Souveraineté',
  },
  {
    id: 's9',
    title: 'Restitution du patrimoine africain — Rapport',
    author: 'Felwine Sarr & Bénédicte Savoy',
    type: 'Rapport',
    year: '2018',
    pillar: 'Colonisation & Néocolonialisme',
  },
  {
    id: 's10',
    title: 'Archives nationales du Sénégal',
    author: 'Archives nationales',
    type: 'Archive',
    year: '—',
    pillar: 'Histoire & Mémoire',
  },
  {
    id: 's11',
    title: 'African Development Bank — Outlook 2025',
    author: 'BAD',
    type: 'Rapport',
    year: '2025',
    pillar: 'Économie & Développement',
  },
  {
    id: 's12',
    title: 'JSTOR — African Studies collection',
    author: 'JSTOR',
    type: 'Site',
    year: '—',
    pillar: 'Tous piliers',
    url: 'https://www.jstor.org',
  },
];
