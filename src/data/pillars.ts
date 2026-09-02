export type PillarId = 'R1' | 'R2' | 'R3' | 'R4' | 'R5';

export interface Pillar {
  id: PillarId;
  label: string;
  short: string;
  description: string;
  accent: 'mauve' | 'navy' | 'lime' | 'anthracite';
}

export const pillars: Pillar[] = [
  {
    id: 'R1',
    label: 'Histoire & Mémoire',
    short: 'Histoire',
    description:
      'Restituer les grands récits, les empires et les mémoires effacées du continent africain.',
    accent: 'mauve',
  },
  {
    id: 'R2',
    label: 'Culture & Identités',
    short: 'Culture',
    description:
      'Langues, spiritualités, arts et symboles : les fondations vivantes des identités africaines.',
    accent: 'anthracite',
  },
  {
    id: 'R3',
    label: 'Politique & Souveraineté',
    short: 'Politique',
    description:
      'Analyses des pouvoirs, des institutions et des luttes pour la souveraineté africaine.',
    accent: 'navy',
  },
  {
    id: 'R4',
    label: 'Économie & Développement',
    short: 'Économie',
    description:
      'Ressources, monnaies, industrialisation et modèles de développement endogènes.',
    accent: 'lime',
  },
  {
    id: 'R5',
    label: 'Colonisation & Néocolonialisme',
    short: 'Colonisation',
    description:
      'Esclavage, colonisation et mécanismes néocoloniaux : comprendre pour se réapproprier.',
    accent: 'mauve',
  },
];

export const pillarById = (id: PillarId): Pillar =>
  pillars.find((p) => p.id === id) as Pillar;
