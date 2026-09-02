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
    role: 'Chargée de communication & Créatrice de contenu',
    bio: ` Étudiante en Brand Management et Marketing, je suis passionnée par la création digitale et le design. D'origines guinéenne et libanaise, rejoindre SANKU KÂMA est pour moi une démarche personnelle forte : réapprendre, me reconnecter à mes racines et valoriser les cultures ouest-africaines. À travers mon rôle, j'apporte une vision créative et accessible pour transmettre cet héritage et toucher le public avec authenticité.`,
    focus: 'Histoire · Études postcoloniales',
    photo: '',
  },
];
