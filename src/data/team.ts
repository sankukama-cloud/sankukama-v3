export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  focus: string;
}

export const team: TeamMember[] = [
  {
    name: 'Yohann-André IRIE',
    role: 'Fondateur & Rédacteur en chef',
    bio: `Étudiant en relations internationales (23 ans), je co-fonde Sanku Kâma pour redonner à l'histoire africaine toute sa rigueur et sa profondeur. Mon travail se concentre sur l'analyse des institutions, des dynamiques de pouvoir et de la souveraineté africaine, afin d'offrir une lecture éclairée des enjeux contemporains du continent.`,
    focus: 'Politique · Géopolitique',
    photo: '',
  },
  {
    name: 'Nadia Ayoub',
    role: 'Chercheuse & Rédactrice',
    bio: "",
    focus: 'Histoire · Études postcoloniales',
    photo: '',
  },
];
