import type { PillarId } from './pillars';

export interface Source {
  label: string;
  detail: string;
}

export interface ArticleBlock {
  type: 'paragraph' | 'heading' | 'quote';
  text: string;
}

export interface Article {
  slug: string;
  pillar: PillarId;
  title: string;
  excerpt: string;
  thesis: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: number;
  cover: string;
  featured?: boolean;
  size?: 'large' | 'wide' | 'tall' | 'small';
  body: ArticleBlock[] | string;
  sources: Source[];
}

const placeholderBody: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: "Le texte complet de cet article sera inséré ici.",
  },
];

const placeholderSources: Source[] = [
  { label: 'À compléter', detail: 'Références à ajouter.' },
];

export const articles: Article[] = [
  {
    slug: 'universalisme-europeen',
    pillar: 'R3',
    title: "L'universalisme européen ou quand l'Europe se prend pour l'humanité",
    excerpt:
      "Examen critique de l'universalisme européen comme dispositif de pouvoir, et de ses effets sur la pensée et la politique.",
    thesis:
      "Le piège de l'universalisme européen n'est pas qu'il impose des valeurs étrangères, mais qu'il rend toute alternative illisible — présentée non pas comme une voie différente, mais comme un retard, une déviance ou une barbarie.",
    author: 'Yohann-André IRIE',
    authorRole: 'Analyste & essayiste politique',
    date: '2025-02-18',
    readingTime: 15,
    cover: '/image-universalisme.jpeg',
    featured: true,
    size: 'large',
    body: `## 1. Tension d’ouverture

Prenons un exemple précis. Quand les juristes européens du XIXe siècle ont cartographié l’Afrique pour en légitimer la colonisation, ils n’ont pas dit que les royaumes Ashanti, l’empire du Mali ou les structures de gouvernances igbo étaient inférieurs. Ils ont dit qu’ils n’existaient tout simplement pas. Ni en tant qu'États, ni en tant que systèmes politiques légitimes. Ce vide n’était pas tant dans nos territoires que dans les catégories juridiques européennes, qui ne reconnaissaient comme « État » que ce qui ressemble à un État européen. C’est sur cette réflexion biaisée, ce vide fabriqué, que repose la doctrine de la *terra nullius* —la terre de personne[^1].

Le même mécanisme a été utilisé sur les savoirs. Les langues africaines ont été requalifiées en « dialectes » —des idiomes incapables, par définition, de penser la philosophie, le droit ou la science. Les systèmes de transmission orale ont été, quant à eux, reclassés en folklore. Les médecines locales sont devenues, au mieux, des croyances, au pire, de la sorcellerie. C’était une décision implicite sur le statut: ce qui vient d’ici est universel et rationnel, ce qui vient d’ailleurs est local et relatif.

L’Europe a réussi quelque chose de beaucoup plus durable que la conquête militaire. Elle a universalisé sa propre histoire provinciale. Ses révolutions, ses traités de Westphalie, ses Lumières, sa révolution industrielle sont devenus les étapes obligatoires du développement humain[^2]. Les sociétés qui n’ont pas traversé ces séquences, ou quelque chose qui s’y apparente, sont tout bonnement considérées comme « en retard ». Le calendrier européen est devenu le calendrier de l’humanité. Et quiconque conteste ce calendrier se place lui-même hors de la raison.

Ce déplacement — des canons aux catégories, de l'occupation physique au contrôle invisible des cadres de pensée — constitue la plus grande victoire de l'universalisme européen. Pour retrouver notre souveraineté, l'urgence n'est plus seulement de récupérer nos terres, mais de briser les miroirs déformants à travers lesquels nous nous regardons. S’affranchir de la captivité de l'esprit.

## 2. La conquête par les catégories — Comment l'Europe a construit son universalisme.

Contrairement à beaucoup d’idées reçues, l’universalisme européen n’est pas une philosophie qui s’est ensuite appliquée à la colonisation. Il en est la forme intellectuelle, que la colonisation a prise pour se légitimer. Avant d’envoyer ses soldats et ses missionnaires, l’Europe a produit et construit un cadre de pensée qui rendait leur « mission » non seulement justifiable, mais moralement nécessaire.

Ce cadre a un nom précis dans l’histoire de la philosophie. En 1830, Hegel publie ses Leçons sur la philosophie de l'histoire dans lesquelles il affirme que l’Afrique est « la terre de l'enfance », un continent sans histoire, sans État, sans conscience de soi [^3]. Cette affirmation, loin de n’être qu’une opinion personnelle glissée en marge de la société, est l’aboutissement logique d’un système philosophique présenté comme la description rationnelle du réel. Dans la philosophie hégélienne, l’histoire — avec un H majuscule — désigne le mouvement de l’Esprit humain vers sa propre réalisation. L’Europe est, toujours selon lui,  l’aboutissement de ce mouvement. L’Afrique, n’y participant pas, se trouve exclue de l’humanité historique [^4]. Hegel efface l’Afrique, et il le fait au nom de la raison universelle, pas au nom de quelques fallacieux préjugés raciaux.

C’est là que réside la force du dispositif. Un préjugé peut être contesté, une hiérarchie peut être renversée, mais une vérité philosophique présentée comme universelle place son contradicteur dans une position impossible: pour la contester, il faut d’abord accepter le terrain sur lequel elle se pose. Aimé Césaire développe dans *Discours sur le colonialisme* l’idée selon laquelle la colonisation n’est pas le fait de “barbares inconscients”, mais celui de sociétés européennes barbares qui ont construit un cadre intellectuel leur permettant de se percevoir comme civilisées[^5].

Ces outils ont fonctionné à plusieurs niveaux, de façon simultanée. 

Au niveau juridique, d’abord. Le droit international moderne s’est construit aux XVIIe et XVIIIe siècles autour d’un point central qui est la souveraineté étatique. Cette souveraineté était réservée aux entités qui correspondaient au modèle de l’État européen. Entre autres, un territoire délimité, un gouvernement centralisé, une administration formalisée. Les empires africains, les royaumes à gouvernance décentralisée, les systèmes de régulation par le consensus communautaire ne correspondant pas à ce modèle, ont donc été déclarés absents du champ du droit international. Le juriste britannique John Westlake écrivait en 1894 que là où il n’y a pas de gouvernement organisé selon les standards européens, il n’y a pas de société internationale reconnue[^6]. Cette position, loin d’être marginale, était la doctrine dominante qui a servi de base légale à la conférence de Berlin, lors de laquelle des puissances européennes se sont partagé l’Afrique sans qu’un seul représentant africain ne soit présent à la table.  
Au niveau éducatif, ensuite. Le système scolaire colonial ne s’est pas uniquement contenté de focaliser l’attention sur le fait européen, il a dévalorisé tout ce qui existait avant lui. En Afrique francophone, les enfants apprenaient que leurs ancêtres étaient des gaulois[^7]. Cette formule, souvent citée comme une absurdité anecdotique, était en réalité la mise en oeuvre cohérente d’une logique selon laquelle il n’existe qu’une seule histoire, l’histoire européenne, et les peuples colonisés n’y entrent qu’au moment où l’Europe les y fait entrer. 

Dans plusieurs récits d’anciens élèves de l’école coloniale en Afrique de l’Ouest, l’usage des langues maternelles/paternelles en classe pouvait également être sanctionné par des dispositifs humiliants (comme le port d’un “symbole” autour du cou), visant à imposer le français comme unique langue légitime d’expression[^8].

Au niveau des pratiques culturelles, enfin. L’administration coloniale a systématiquement criminalisé des pratiques africaines — rites initiatiques, systèmes de résolution des conflits, pratiques médicales — non pas au nom d’un tort qu’elles causaient, mais au nom de leur incompatibilité avec le modèle de civilisation importé[^9]. V.Y.Mudimbe a montré dans *L’invention de l’Afrique* que cette disqualification des pratiques locales n’était pas séparable de la production du savoir occidental sur l’Afrique. L’anthropologie coloniale a construit l’Africain comme objet d’étude, jamais comme sujet producteur de connaissance.

Le résultat de ces trois niveaux combinés est un verrouillage intellectuel. A titre d’exemple complémentaire, l’ouvrage *L’Orientalisme,* de Edward Said, démontre comment ce mécanisme a fonctionné pour le monde arabe. Il y explique que l’Orient produit par le discours occidental n’est qu’une construction qui rend l’Orient réel illisible en dehors des catégories occidentales[^10]. Le même processus a été utilisé sur l’Afrique, avec la même structure et les mêmes effets. La colonisation a pris fin, juridiquement, dans les années 1960\. Le cadre intellectuel qui l'a rendue possible, lui, n'a jamais été démantelé, ni même exposé comme sujet qui mériterait qu’on y porte notre attention.

## 3. Le mécanisme — Comment une culture efface ses propres traces.

L'universalisme européen ne fonctionne pas comme une idéologie déclarée. Il opère comme une infrastructure de la pensée — invisible, souterraine, et d'autant plus efficace qu'elle n'a pas besoin de se défendre. Une idéologie peut être contestée. Une infrastructure, elle, est le sol sur lequel la contestation elle-même doit se tenir.

Les valeurs produites par une histoire particulière — celle de l'Europe entre le XVIIe et le XIXe siècle — ont été progressivement rebaptisées. Elles ne s'appellent plus « conception européenne du droit » ou « modèle politique occidental ». Elles s'appellent « les droits de l'homme », « la démocratie », « la science », « la modernité »[^11]. Le changement de nom opère un glissement décisif : une position historiquement et géographiquement située devient le baromètre à partir duquel toutes les autres positions sont désormais évaluées. L'aboutissement de ce processus réside dans l'effacement total de sa propre traçabilité. L'universalisme européen s'impose en feignant l'absence de position et en se décrétant neutralité absolue.

Il en résulte une asymétrie absurde. Les valeurs européennes accèdent au statut de données rationnelles universelles. Quant à celles des autres cultures, elles deviennent d'emblée des données culturelles relatives — des « traditions », des « coutumes », des « croyances ». La différence entre ces deux statuts est déterminante. Une croyance peut être tolérée. Une vérité universelle exige l'adhésion. Une tradition mérite le respect. Une donnée rationnelle s'impose. La domination ne réside pas tant dans le contenu des normes que dans la hiérarchie invisible entre les types de savoirs — et dans le fait que cette hiérarchie n'est jamais mise à l'ordre du jour.

La conception individualiste du sujet de droit illustre très bien ce mécanisme. L'idée que le sujet juridique fondamentale est l'individu, porteur de droits inaliénables, est un produit historique daté. Elle émerge de la philosophie européenne du XVIIe siècle, dans un contexte économique et politique spécifique : montée du capitalisme marchand, désintégration des structures féodales, Réforme protestante. Cette conception a été ensuite exportée et installée comme fondement universel du droit international des droits humains. Les systèmes juridiques africains, en comparaison, étaient organisés autour de l'unité familiale, lignagère ou communautaire, représentant une architecture juridique complètement différente, fondée sur une autre conception de ce que le droit doit protéger. Le droit international, sans même chercher à les comprendre, les a invalidés, relégués au rang de coutumes locales, pour s'assurer qu'aucune autre conception de la justice ne puisse rivaliser avec la sienne[^12].

Le modèle électoral multipartite fonctionne selon la même logique. Institué comme étalon universel de la légitimité politique, il est en réalité une technologie de gouvernement produite dans un contexte historique toujours bien défini, avec des présupposés culturels identifiables et des défaillances documentées. En face, des systèmes de délibération collective, de rotation du pouvoir, de représentation par fonctions sociales ou par communautés ont dirigé des sociétés africaines pendant des siècles. Ces systèmes ne sont pas reconnus comme des formes de démocratie, ni même de système politique “viable”. Ils sont classés hors du champ de la légitimité politique, non pas parce qu'ils ont échoué à gouverner, mais parce qu'ils ne ressemblent pas à un certain modèle[^13].

La captivité intellectuelle trouve son arme la plus redoutable dans la langue. Cette dernière est l’infrastructure même de la pensée, le moule dans lequel une société se pense, se conçoit, nomme ses valeurs et structure son droit,. Dès lors, imposer les langues coloniales comme uniques vecteurs de l’administration, de la justice et de l’éducation revient à déformer le système même de pensée d’une population[^14]. Penser le politique ou le juste uniquement à travers des mots importés, c'est accepter que ce qui n'a pas de nom dans la langue du colonisateur n'existe pas. On condamne ainsi les philosophies politiques africaines à l'invisible, reléguées au rang de "traditions" intraduisibles, incapables de concurrencer les concepts de la modernité occidentale. 

Des disciplines entières ont été construites pour rendre ce dispositif opérationnel. L'anthropologie coloniale, la science politique comparative, l'économie du développement partagent une structure commune : elles produisent un savoir sur les sociétés non-européennes en utilisant des catégories extérieures à ces sociétés, sans jamais soumettre ces catégories elles-mêmes à l'examen[^15]. Le savoir produit n'est pas nécessairement faux au sens factuel. Il est construit de telle manière que la question de son origine géographique et historique ne se pose jamais. C'est un appareil scientifique méthodique au service d'un transfert de souveraineté intellectuelle — organisé, durable, et présenté comme de la connaissance pure et du bon sens.

## 4. LA DÉCOLONISATION INACHEVÉE

Les indépendances africaines des années 1960 ont produit des États juridiquement souverains, mais n’ont pas brisé le cadre intellectuel ayant permis la colonisation. Les drapeaux ont changé pour certains, les noms pour d’autres, mais les constitutions, les codes civils et les systèmes judiciaires, eux, sont restés immaculés, calqués sur des modèles produits « là-bas», pour gouverner « ici ».

Cette continuité représente quasiment un héritage. Les puissances coloniales ont patiemment bâti des ministères, des tribunaux et des universités pour formater une relève locale capable de gérer la machine coloniale après le départ des colons. Ces structures ont survécu au départ des gouverneurs parce qu’elles étaient les seules clés disponibles pour faire tourner les nouveaux Etats, et parce que les nouvelles élites au pouvoir n’avaient aucun intérêt à saboter les système qui les légitimait. 

La conférence de Brazzaville de 1944 avait d’ailleurs déjà fixé les règles du jeu. En affirmant que l’émancipation des colonies se ferait uniquement par leur intégration progressive au modèle républicain français, la métropole traçait déjà les frontières de la seule liberté jugée acceptable — une autonomie sous surveillance, exclusive de toute rupture réelle[^16]. Les indépendances elles-mêmes se sont jouées dans ce périmètre. Kwame Nkrumah disait déjà : obtenir les clés du pouvoir politique en conservant les structures économiques et intellectuelles de l’ancien maître, c’est simplement changer de gardien sans changer de cage[^17].

Le mimétisme constitutionnel en est la preuve la plus flagrante. À l'indépendance, la quasi-totalité des nouveaux États africains ont calqué leurs textes fondamentaux sur les modèles français, britannique ou belge. Ces copies-conformes imposent d'emblée une vision occidentale du droit, de la séparation des pouvoirs et des libertés individuelles. Face à ce rouleau compresseur, les modes de gouvernance africains précoloniaux — qu'il s'agisse des conseils d’anciens, de la médiation communautaire ou des assemblées de consensus — ont été balayés. On les a relégués au rang de simples « coutumes locales », tolérées à la marge, mais jugées indignes de fonder un ordre constitutionnel moderne.

L'université africaine a prolongé ce grand sommeil. Les programmes scolaires sont restés piégés dans leur logiciel d’origine : l’histoire se regarde depuis l’Europe, la littérature se mesure aux canons parisiens ou londoniens, et l’économie s'enseigne à travers des modèles mathématiques inventés pour de vieilles puissances industrielles. En 1961, Frantz Fanon mettait déjà le doigt sur cette imposture : la bourgeoisie nationale africaine ne renverse pas l'ordre colonial, elle s'installe dans ses meubles. Elle reproduit ses codes parce que ce sont ces mêmes codes qui lui ont donné ses diplômes, son prestige et sa légitimité[^18]. C'est un piège parfait. On ne s'évade pas d'une prison intellectuelle tant qu'on refuse d'en voir les murs.

C'est sans doute la réalité la plus inconfortable de notre siècle. Notre domination — celle de l’Afrique — n'a plus besoin de colons pour fonctionner, elle dispose de ses propres gestionnaires locaux. Un économiste africain formé à la *London School of Economics* ou à l'Université de Chicago va penser le développement de sa propre terre avec le logiciel qu'on lui installé en occident, par l’occident et pour l’occident. Il va plaquer des théories de croissance conçues pour l'Angleterre du XIXe siècle sur des réalités agricoles, climatiques et communautaires qui n'ont strictement rien à voir. La cage n'a plus besoin de barreaux visibles car elle s'auto-entretient par le jeu des diplômes, des certifications et de la reconnaissance internationale.

Les médias ferment la marche de ce grand verrouillage. Aujourd'hui encore, les grandes agences de presse occidentales comme Reuters, l'AFP ou Associated Press dictent aux rédactions africaines la façon dont elles doivent lire l'actualité de leur propre continent[^19]. L'information africaine est triée, calibrée et interprétée depuis Paris, Londres ou New York. Un sursaut de souveraineté en Afrique de l'Ouest sera immédiatement étiqueté comme un « recul démocratique » ; une nationalisation ou une rupture monétaire légitime sera qualifiée de « menace pour la stabilité des marchés ». Ces choix de mots dictent un verdict, sur le continent africain, produit par des bureaux extérieurs qui, eux, n'ont aucun compte à rendre aux populations africaines.

Ce grand verrouillage se prolonge aujourd’hui à travers un chantage permanent. Des plans d’Ajustement Structurel (P.A.S) du FMI aux notations des agences de gouvernance, l’expertise technique sert de paravent à la mise sous tutelle. Toute trajectoire africaine singulière se retrouve ainsi disqualifiée avant même d’avoir pu s’exprimer. En cas d’échec, le dogme occidental n’est jamais remis en cause; on accuse simplement l’exécutant africain d’avoir mal appliqué la leçon. C’est la réussite suprême de ce dispositif, imposer un étalon unique et pousser les peuples dominés à évaluer leur propre liberté avec les critères de l’ancien maître. 



> ### 5. NOTRE LECTURE CHEZ SANKU KAMA 
> Le colonialisme a réussi. Complètement. Sur l'essentiel. A notre sens.
>
> Pas pour avoir pris les terres — les terres, on peut les reprendre. Pas pour avoir imposé des langues étrangères — les langues, on peut les réapprendre. Il a réussi le jour où ses victimes ont commencé à penser leur propre infériorité dans les catégories de ceux qui ont organisé cette fameuse « infériorité ». Ce jour-là, les fouets sont devenus inutiles. La machine tournait déjà toute seule — et même mieux qu’avant.
>
> Regardons les choses en face. Aujourd'hui, un intellectuel africain qui analyse le "retard" de son continent utilise un mot — retard — qui présuppose une direction, un agenda ou une ligne d'arrivée. Cette ligne d'arrivée, il ne l'a pas fixée. Elle lui a été livrée avec son diplôme, ses lectures obligatoires et ses jurys de thèse. Il pense — naïvement — avec les outils de ceux qui ont construit le problème qu'il prétend résoudre. Et il appelle ça — fièrement — de la rigueur intellectuelle.
>
> C'est d'une élégance remarquable, il faut l'admettre.
>
> Construire un système de domination si bien ajusté que ses victimes le défendent, l'enseignent et l'exportent — sans y voir malice, sans y voir chaînes, parfois avec conviction et bonne foi — c'est une performance historique sans équivalent. L'esclavage avait besoin de fers. La colonisation avait besoin de fusils. L'universalisme européen, lui, a besoin de bourses d'études, de classements universitaires, de prix Nobel — et de toujours plus de candidats prêts à courir chercher la validation extérieure. Le budget est plus propre. Le résultat est comparable.
>
> Chez Sanku Kama, on se pose une question simple. Si les catégories dans lesquelles une société se pense — le développement, la démocratie, la modernité, le progrès — ont été produites par ceux qui avaient — et qui ont vraisemblablement toujours — intérêt à ce que cette société se perçoive comme inférieure, que vaut une analyse qui utilise ces catégories sans les interroger ? Elle vaut ce qu'elle coûte, et elle reproduit ce qu'elle prétend examiner.
>
> La souveraineté politique sans souveraineté intellectuelle est une mascarade. On change les acteurs, mais le texte reste le même. Les gouvernements africains passent, mais les constitutions restent. Les présidents changent — quand la mort ou la prison daigne bien nous délivrer d’eux — mais le modèle de gouvernance reste. Les discours d'indépendance se succèdent, mais le budget continue d’être défini par l’extérieur. Le spectacle est plus que convaincant. 
>
> Briser ce dispositif est un projet politique — le plus radical qui soit. Parce qu'il ne s'attaque pas à un gouvernement, à une institution, ou à un vulgaire traité. Il s'attaque aux catégories dans lesquelles on pense ces gouvernements, ces institutions et ces traités. C'est infiniment plus difficile. Et infiniment plus menaçant pour ceux qui bénéficient du statu quo — y compris, et surtout, parmi les élites africaines elles-mêmes.
>
> La question n'est pas de savoir si l'Afrique est capable de produire ses propres cadres de pensée. Elle l'a fait pendant des millénaires avant que quiconque ne lui explique qu'elle ne savait pas penser. La question est de savoir combien de temps encore ses héritiers choisiront le confort d'une cage bien décorée à l'inconfort d'en sortir par peur de l’inconnu.
>
> La porte n'est pas fermée à clé. Elle l'a rarement été. C'est l'habitude de ne pas la chercher qui nous condamne à y rester.


[^1]:  La doctrine de la *terra nullius* — littéralement « terre de personne » — a été utilisée pour justifier l'appropriation coloniale de territoires habités et gouvernés. Son application en Afrique est analysée dans : Antony Anghie, *Imperialism, Sovereignty and the Making of International Law*, Cambridge, Cambridge University Press, 2004\.

[^2]:  Immanuel Wallerstein, *L'Universalisme européen — De la colonisation au droit d'ingérence*, Paris, Demopolis, 2008\.

[^3]:  Georg Wilhelm Friedrich Hegel, *Leçons sur la philosophie de l'histoire*, trad. J. Gibelin, Paris, Vrin, 1987 \[1830\]. Hegel écrit : « L'Afrique \[…\] n'a pas d'histoire à proprement parler. Ce que nous entendons par Afrique, c'est l'esprit aphistorique, l'esprit non développé, encore enveloppé dans les conditions de la nature. »

[^4]:  Achille Mbembe, *Critique de la raison nègre*, Paris, La Découverte, 2013\.

[^5]:  Aimé Césaire, *Discours sur le colonialisme*, Paris, Présence Africaine, 1955\.

[^6]:  John Westlake, *Chapters on the Principles of International Law*, Cambridge, Cambridge University Press, 1894\.

[^7]:  Cette formule est attestée dans les manuels scolaires utilisés en Afrique-Occidentale française jusqu'aux années 1950\. Voir : Pascale Barthélémy, *Africaines et diplômées à l'époque coloniale*, Rennes, Presses Universitaires de Rennes, 2010\.

[^8]:  Ouattara, D.Z.Y. (2022) The Peripherization of Ivorian Indigenous Languages: Shared Blame, What Can Be Done?. *Open Access Library Journal.*

[^9]:  Mamadou Diouf, *Histoire du Sénégal — Le modèle islamo-wolof et ses périphéries*, Paris, Maisonneuve et Larose, 2001\.

[^10]:  Edward Said, *L'Orientalisme*, Paris, Seuil, 1980\.

[^11]:  Immanuel Wallerstein, *L'Universalisme européen — De la colonisation au droit d'ingérence*, Paris, Demopolis, 2008

[^12]:  John Mbiti, *African Religions and Philosophy*, Oxford, Heinemann, 1990 \[1969\].

[^13]:  Achille Mbembe, *De la postcolonie — Essai sur l'imagination politique dans l'Afrique contemporaine*, Paris, Karthala, 2000\.

[^14]:  Ngũgĩ wa Thiong'o, *Décoloniser l'esprit*, Paris, La Fabrique, 2011 \[1986\].

[^15]:  V.Y. Mudimbe, *L'Invention de l'Afrique — Gnose, philosophie et ordre de la connaissance*, Paris, Présence Africaine, 2013 \[1988\].

[^16]:  Frederick Cooper, *Français et Africains ? Être citoyen au temps de la décolonisation*, Paris, Payot, 2014\.

[^17]:  Kwame Nkrumah, *Le Néo-colonialisme — Dernier stade de l'impérialisme*, Paris, Présence Africaine, 1973 \[1965\].

[^18]:  Frantz Fanon, *Les Damnés de la terre*, Paris, La Découverte, 2002 \[1961\].

[^19]:  Franck Kuwonu, « Reclaiming the African Narrative », *Afrique Renouveau*, Nations Unies, décembre 2019\.`,
    sources: [
      {
        label: "Antony Anghie",
        detail: "Imperialism, Sovereignty and the Making of International Law. Cambridge : Cambridge University Press, 2004."
      },
      {
        label: "Ngũgĩ wa Thiong'o",
        detail: "Décoloniser l'esprit. Paris : La Fabrique, 2011 [1986]."
      },
      {
        label: "Immanuel Wallerstein",
        detail: "L'Universalisme européen — De la colonisation au droit d'ingérence. Paris : Demopolis, 2008."
      },
      {
        label: "Pascale Barthélémy",
        detail: "Africaines et diplômées à l'époque coloniale. Rennes : Presses Universitaires de Rennes, 2010."
      },
      {
        label: "Aimé Césaire",
        detail: "Discours sur le colonialisme. Paris : Présence Africaine, 1955."
      },
      {
        label: "Mamadou Diouf",
        detail: "Histoire du Sénégal — Le modèle islamo-wolof et ses périphéries. Paris : Maisonneuve et Larose, 2001."
      },
      {
        label: "Georg Wilhelm Friedrich Hegel",
        detail: "Leçons sur la philosophie de l'histoire. Trad. J. Gibelin. Paris : Vrin, 1987 [1830]."
      },
      {
        label: "Achille Mbembe",
        detail: "Critique de la raison nègre. Paris : La Découverte, 2013."
      },
      {
        label: "V.Y. Mudimbe",
        detail: "L'Invention de l'Afrique — Gnose, philosophie et ordre de la connaissance. Paris : Présence Africaine, 2013 [1988]."
      },
      {
        label: "Edward Said",
        detail: "L'Orientalisme — L'Orient créé par l'Occident. Paris : Seuil, 1980 [1978]."
      },
      {
        label: "John Westlake",
        detail: "Chapters on the Principles of International Law. Cambridge : Cambridge University Press, 1894."
      },
      {
        label: "Achille Mbembe",
        detail: "De la postcolonie — Essai sur l'imagination politique dans l'Afrique contemporaine. Paris : Karthala, 2000."
      },
      {
        label: "John Mbiti",
        detail: "African Religions and Philosophy. Oxford : Heinemann, 1990 [1969]."
      },
      {
        label: "Sylvia Wynter",
        detail: "« Unsettling the Coloniality of Being/Power/Truth/Freedom ». CR : The New Centennial Review, vol. 3, n° 3, 2003."
      },
      {
        label: "Frederick Cooper",
        detail: "Français et Africains ? Être citoyen au temps de la décolonisation. Paris : Payot, 2014."
      },
      {
        label: "Frantz Fanon",
        detail: "Les Damnés de la terre. Paris : La Découverte, 2002 [1961]."
      },
      {
        label: "Franck Kuwonu",
        detail: "« Reclaiming the African Narrative ». Afrique Renouveau. Nations Unies, décembre 2019."
      },
      {
        label: "Kwame Nkrumah",
        detail: "Le Néo-colonialisme — Dernier stade de l'impérialisme. Paris : Présence Africaine, 1973."
      }
    ],
  },
  {
    slug: 'femmes-africaines-resistances-coloniales',
    pillar: 'R1',
    title: 'Les femmes africaines dans les résistances coloniales',
    excerpt:
      "Récit et analyse du rôle central des femmes africaines dans les luttes de résistance contre la domination coloniale.",
    thesis:
      "Le problème n’est pas l’absence des femmes dans l’histoire des résistances africaines, mais l’incapacité des catégories utilisées à reconnaître leur rôle réel.",
    author: 'Yohann-André IRIE',
    authorRole: 'Analyste & essayiste politique',
    date: '2025-02-10',
    readingTime: 12,
    cover: '/article-femme.png',
    featured: true,
    size: 'tall',
    body: `### 1. Tension d’ouverture 
Les archives coloniales françaises, britanniques, et plus largement européennes, partagent une caractéristique commune qui est qu’elles enregistrent les résistances africaines à travers les rapports militaires, les correspondances entre gouverneurs et les comptes rendus d'opérations de pacification. Ce sont des documents produits par des hommes, adressés à des hommes, pour décrire des affrontements entre hommes. La société civile africaine — et les femmes en particulier — n'y apparaît que lorsqu'elle perturbe suffisamment l'ordre colonial zpour forcer une mention administrative[^1]. Ce filtre a  durablement déformé la façon dont l'historiographie a construit le récit des résistances. En outre, comme une simple succession de batailles, de chefs vaincus, de soulèvements réprimés, sdans laquelle les femmes occupent, au mieux, une place anecdotique[^2].

C'est dans cet écart entre la réalité des résistances et leur mise en récit que se situe le problème analytique central de cet article. La Guerre des Femmes igbo de 1929, au Nigeria, en est une illustration parmi d'autres : des dizaines de milliers de femmes coordonnées à travers des centaines de villages ont paralysé les circuits commerciaux et contraint l'administration britannique à revoir son organisation fiscale[^3]. L'événement est documenté, certes, mais il reste traité comme une anomalie, un épisode, plutôt que comme la preuve d'une capacité d'organisation politique réelle. Ce traitement dit moins quelque chose sur les femmes igbo que sur les catégories utilisées pour lire les résistances africaines.

Ces catégories ont produit une distorsion durable. Les femmes ne constituent pas un appui périphérique des résistances africaines. Elles en participent à la structuration organique en mobilisant des ressources économiques, en maintenant les réseaux logistiques, en exerçant des commandements directs et en assurant les bases sociales sans lesquelles aucune résistance durable n'est possible[^4]. Sans intégration de cette réalité, la compréhension des résistances africaines — en Afrique subsaharienne comme au Maghreb, de la fin du XIXe siècle jusqu'aux indépendances — reste analytiquement incomplète.

L'absence des femmes dans le récit historique dominant produit clairement une lecture erronée de la nature même du conflit colonial.

### 2. LA FABRIQUE DE L'ANGLE MORT : CONDITIONS DE L'INVISIBILISATION

Le récit dominant des résistances africaines est construit sur un critère militaire: des chefs africains face à des armées coloniales; des batailles; des traités signés sous contrainte. Ce cadre définit ce qui compte comme “résistance” et, dans la même veine, qui compte comme résistant. Les formes d’opposition majoritairement exercées par les femmes — contrôle des marchés, refus du travail forcé, transmission clandestine d’informations, maintien des structures sociales sous pression — en sont exclues par construction.

Les archives coloniales, contrairement à ce que l’on peut penser, n’ont pas été produites pour décrire les sociétés africaines, mais pour les administrer. Cette finalité détermine ce qui est “enregistré”. Les colons, issus de sociétés où les femmes étaient légalement incapables et politiquement exclues, ont interrogé des interlocuteurs masculins et projeté sur les sociétés africaines leur propre structure patriarcale[^5]. Le résultat n’est pas tant une description incomplète, mais plutôt une description orientée qui valide l’ordre colonial en représentant l’entièreté des sociétés africaines comme des structures hiérarchiques masculines auxquelles l’administration peut s’adresser directement. Les femmes n’y apparaissent que lorsqu’elles constituent un problème administratif:  perturbation de marché, agitation villageoise. Elles n’entrent dans l’archive qu’à l’instant exact où elles dérangent l'ordre, réduisant ainsi leurs stratégies de résistance à de simples incidents de parcours, déconnectés de leur rôle social et politique profond[^6]. Le rapport Savineau de 1938, produit à partir d’enquêtes directes auprès des femmes en AOF, reste une exception précisément parce qu’il rompt avec cette logique[^7]. 

Valoriser le militaire comme critère de résistance légitime est également un choix politique qui déplace la résistance du terrain social vers le terrain militaire, là où l’administration coloniale disposait d’une supériorité évidente[^8]. Ce déplacement produit un double effet. D’une part, il réduit la résistance africaine à une série de défaites militaires, occultant une opposition sociale permanente et diffuse que l’armée coloniale ne pouvait pas réprimer frontalement. Elikia M’Bokolo, en parlant des femmes, l’a formulé très distinctement en ces termes: « Leur rôle fut même souvent décisif, mais nous sommes victimes du regard des colonisateurs qui préféraient taire les affrontements avec les femmes »[^9] .

Les nouvelles élites au pouvoir après les indépendances ont hérité des structures administratives coloniales et de leur rapport au savoir historique. La construction des récits nationaux a valorisé les figures masculines de la lutte armée, et ce parce que ces figures légitiment un ordre politique dans lequel les femmes restent exclues des positions de pouvoir — en effaçant la preuve historique qu’elles les avaient occupées. Quoi de mieux pour illustrer cette dynamique que le cas algérien. En 1958, *El Moudjahid* proclamait que « l'Algérienne est déjà libre parce qu'elle a participé à la guerre de libération » ; au moment de l’indépendance, Mohamed Khider, l’un des chefs du FLN, répondait à une militante que « les femmes doivent revenir à leur couscous ». [^10] La reconnaissance symbolique a fonctionné comme substitut à la reconnaissance politique réelle.

Les différents mécanismes décrits précédemment — filtre documentaire, critère militaire et reproduction après les indépendances — forment un système cohérent, avec des éléments interdépendants. Chacun alimente les deux autres. Les archives orientées fournissent la matière du récit militarisé, et le récit militarisé fournit la légitimité des nouvelles élites qui perpétuent l’effacement. Loin d’être une série innocente de biais isolés, c’est une infrastructure de (re)production de l’invisibilité, dont les effets sur la compréhension des résistances coloniales sont aussi réels que ceux d’une censure explicite.

### 3. Anatomie des mécanismes de résistance structurelle

Dans les économies coloniales, les marchés locaux constituent un nœud stratégique en ceci qu’ils assurent la circulation des denrées, le paiement des taxes et l’approvisionnement des garnisons. Les femmes en contrôlent massivement les flux dans une grande partie de l’Afrique subsaharienne, parce que cette position leur confère une autonomie économique que le système colonial a échoué à démanteler, faute d'avoir pris la pleine mesure de ce pouvoir qu'il jugeait, par biais patriarcal, subalterne. Cette position devient un levier de résistance dès lors que les femmes choisissent de l’activer collectivement. Lorsque les marchandes de Lomé en 1933 ou celles d’Accra utilisent leur poids économique pour contester les patentes et l’impôt, elles coupent des revenus fiscaux dont l’administration coloniale dépend pour financer son fonctionnement local[^11]. Le marché devient, au-delà d’un simple espace économique, un contre-pouvoir, précisément parce que l’administration coloniale en était l’otage économique.

Cette dernière a, par ailleurs, produit ses propres angles morts en appliquant ses préjugés de genre à l’organisation de la surveillance. Les femmes, jugées politiquement inoffensives, circulaient dans des zones interdites aux hommes suspects, franchissaient des barrages militaires sous couvert d’activités domestiques, et assuraient des fonctions de liaison que les réseaux masculins ne pouvaient pas remplir sans s’exposer[^12]. Les moussebilates algériennes en fournissent l’exemple le plus documenté: agents de liaison, collectrices de fonds, hébergeuses de combattants, elles opèrent depuis leur domicile, que l’armée française ne peut soumettre à contrôle permanent sans admettre qu’elle surveille des foyers civils — ce qui contredirait le discours colonial sur la “mission civilisatrice”. Réprimer ces réseaux impliquait de rendre visible leur existence, donc d’admettre que la résistance était socialement enracinée et non limitée à quelques combattants isolés[^13].

Yaa Asantewaa, reine-mère de l'Ejisu, prend le commandement de la résistance ashanti en 1900\. Son ascension survient au moment critique où les chefs masculins, paralysés par la peur, refusent de s'opposer à l'ultimatum britannique exigeant la remise du Trône d'Or — l'âme même de la nation. Au Niger, c'est la reine-sorcière et chef politique des Azna, Sarraounia Mangou, qui organise la résistance contre la colonne Voulet-Chanoine en 1899 — une expédition militaire française d'une brutalité sans précédent visant à relier le fleuve Niger au lac Tchad . Elle incarne le dernier rempart de dignité alors que les structures de pouvoir masculines environnantes ont capitulé ou fui. Ces deux cas ont en commun que le leadership féminin émerge non comme substitut symbolique, mais comme réponse fonctionnelle à une défaillance des structures de commandement masculines face à la pression coloniale[^14]. Réponse uniquement rendue possible car les femmes possédaient une “intelligence de guerre” différente, plus horizontale, que le colon était quasiment incapable de décoder.  Ce basculement modifie la nature du conflit. Ya Asantewaa transforme ce qui aurait été une reddition négociée en guerre de siège de plusieurs mois, forçant l’armée britannique à engager des renforts massifs[^15]. Sarraounia, quant à elle, en refusant l’affrontement frontal pour une stratégie de harcèlement et de repli, impose à la colonne Voulet-Chanoine un coût opérationnel qu’elle n’avait pas anticipé. Dans les deux cas, le passage d’un affrontement frontal à une guerre sociétale est directement lié à un mode de commandement féminin qui n’obéit pas aux logiques militaires classiques que le colon sait lire et contrer.

Ces mécanismes — qu'ils soient économiques, logistiques ou militaires — ne sont pas des appendices de l'Histoire : ils en sont le cœur battant. En réalité, le levier financier des marchés alimentait les réseaux de l’ombre, tandis que le leadership de rupture des femmes sauvait la dignité là où les fusils s’étaient tus. Continuer à présenter ces actions comme des "contributions d'appoint" à une résistance masculine est une erreur de lecture, ou pire, un mensonge historique. C’est refuser de voir que la résistance n'était pas un acte isolé, mais un système total, une guerre sociétale dont les femmes étaient, par la force des choses, les véritables stratèges.

### 4. L'effacement comme technologie de pouvoir

   ***L'impérialisme du savoir***

L'histoire des femmes africaines a été produite, jusqu'aux années 1970, quasi exclusivement par des sources extérieures : missionnaires, anthropologues coloniaux, administrateurs. Ces sources opèrent depuis une grille qui définit l'Africaine comme mineure permanente, incapable d'action politique autonome, assignée à des fonctions biologiques et domestiques[^16]. Ifi Amadiume a montré que cette grille a systématiquement effacé les structures de pouvoir féminin — chefferies, titres politiques, rôles rituels — en les réinterprétant comme des fonctions symboliques sans portée réelle[^17]. Le résultat est une histoire fabriquée, qui substitue à la réalité des sociétés africaines une projection des catégories européennes de genre sur des structures qui ne les reconnaissaient pas.

***La colonialité du genre***

María Lugones a nommé ce processus « colonialité du genre » : l'imposition d'un modèle binaire eurocentrique qui ne décrit pas les sociétés colonisées mais les réorganise[^18]. Dans l’ Afrique des souverainetés\*, les catégories de genre ne recoupaient pas nécessairement les catégories biologiques dans plusieurs sociétés de l’Afrique des souverainetés, et les fonctions politiques n'étaient pas systématiquement distribuées selon le sexe. L'administration coloniale, en imposant des interlocuteurs masculins et en légalisant des structures patriarcales locales qu'elle contribuait parfois à créer ou renforcer, a produit une reconfiguration réelle des rapports de pouvoir au sein des sociétés africaines — avant même que l'historiographie n'en efface la trace. Cette reconfiguration ne concerne pas uniquement les institutions. Elle touche également la manière dont les sociétés colonisées se perçoivent et s’organisent. Achille Mbembe l'a formulé en termes plus larges : « la colonisation n'a pas seulement dominé des territoires, elle a réorganisé les subjectivités et les structures sociales selon ses propres besoins de gouvernement »[^19].

***La conséquence analytique***

Effacer le rôle des femmes dans les résistances africaines produit un effet précis sur la lecture du conflit colonial : il transforme une opposition sociale totale et durable en une série de défaites militaires ponctuelles[^20]. Une résistance réduite à ses dimensions armées est une résistance qui a perdu. C'est une lecture qui arrange le vainqueur, car elle lui permet de dater sa domination. Une résistance lue dans sa dimension sociale, économique et organisationnelle est une résistance qui a maintenu des structures de survie collective pendant des décennies, contraint l'administration coloniale à des coûts permanents et préparé les conditions politiques des indépendances[^21]. Ce n'est pas la même histoire. Ce n'est pas le même rapport de force. Et ce n'est pas la même leçon sur la capacité organisationnelle des sociétés africaines[^22].

Toyin Falola et Adam Paddock ont montré que les mouvements de résistance les plus durables en Afrique subsaharienne sont précisément ceux qui ont intégré les femmes comme acteurs centraux — pas comme auxiliaires — parce que cela leur conférait une profondeur sociale que la répression militaire coloniale ne pouvait pas atteindre directement[^23]. Restaurer ce rôle dans le récit historique n'est pas un geste mémoriel ou identitaire. C'est une condition pour produire une analyse correcte du rapport de forces entre les sociétés africaines et le fait colonial.

>### 5.  Notre lecture chez Sanku Kama
>
>L'histoire africaine à ses généraux, ses trafiquants, ses présidents incompétents et ses diplomates hypocrites. Les livres d'histoire ont retenu leurs noms et continueront de le faire —que cela soit vérité ou non. Dans cette mise en récit, les femmes apparaissent souvent —trop souvent— à la périphérie. Épouses de combattants, mères de martyrs, présence secondaire dans une guerre qui aurait été menée par d'autres. Pourtant, plus l'on regarde les structures réelles de nos résistances, plus cette grille de lecture nous apparaît réellement pour ce qu'elle est. Vide de sens.
>
>Car derrière les armées, il existait une architecture sans laquelle aucune résistance durable n'aurait pu survivre. Et le visage de cette architecture était féminin — n'en déplaise à l'ego de certains. En réduisant la résistance africaine à sa seule face masculine, on accepte l’idée que nous avons été « vaincus » dès lors que les fusils se sont tus. On accepte de dater notre domination à partir de la chute des derniers bastions militaires.
>
>Nous, chez Sanku Kama, voyons autre chose, que l’hypocrisie et la mauvaise foi de nos élites les empêchent de voir. Nous voyons que le projet colonial n’a jamais réussi à dompter la profondeur sociale de nos empires. Tant que les femmes contrôlaient les marchés, tant qu’elles assuraient les liaisons, tant qu’elles maintenaient une économie que le colon ne pouvait qu’observer avec impuissance, la souveraineté africaine n’était pas morte: elle était diffuse. Notre souveraineté était partout, partout où l'œil étriqué et stéréotypé du colon ne savait pas regarder.
>
>Au-delà d’être politique, le drame des indépendances est également épistémologique. Les nouvelles élites ont non seulement récupéré les clés de l'administration coloniale, mais leur ont — apparemment — volé leurs lunettes de vue.  Elles ont maintenu cette « colonialité du genre » parce qu’elle leur servait de garde-fou. Pour régner, il fallait transformer la femme africaine. Il fallait la faire passer d’actrice politique, de stratège, d’autorité rituelle, à une vulgaire « vitrine » à protéger ou à domestiquer. Dire à une femme de « retourner à son couscous » est —au delà d’être profondément sexiste et démonstratif d’une certaine petitesse d’esprit —un acte de contre-révolution à part entière. C’est démanteler le système de résistance totale qui a rendu l’indépendance possible pour le remplacer par une hiérarchie verticale, facile à contrôler, et plus facile à corrompre — même s’il ne nécessite pas énormément d’effort pour pousser nos élites actuelles à piquer dans les caisses.  
>
>Nous devons sortir de ce que Maria Lugones appelle le modèle binaire eurocentré. Cette sottise continue de nous faire croire que la politique ne se passait —et ne se passe — que dans les palais et les «parle-et-ments». Mensonge\! Ce refus dédaigneux de reconnaître le rôle structurel des femmes dans nos résistances n’est rien d’autre qu’une minable technologie de maintien du statu quo. Si l’on admet que les femmes ont été  des stratèges, on doit admettre que le pouvoir actuel n’est qu’une fraction de ce que devrait être notre souveraineté. On doit admettre que nous avons amputé une bonne partie de notre capacité organisationnelle au profit d’un leadership masculin qui, trop souvent, ne sait plus que singer son ancien maître. Et autant dire que ça en ferait craquer le costume de plus d’un de nos politicards. 
>
>Restaurer ce rôle dans notre récit, dans notre histoire, va au delà du simple sentimentalisme comme certains archétype du nègre de maison veulent bien nous le faire croire. C’est une nécessité vitale pour comprendre que notre force à l’époque n’a jamais résidé dans notre capacité à copier les armées européennes — ou quoi que ce soit d’européen d’ailleurs — mais dans notre capacité à rendre nos sociétés ingouvernables pour quiconque voulait les piller. La souveraineté de demain ne se construira pas sur les ruines du patriarcat colonial. La souveraineté ne réside pas juste dans l’économie ou dans la guerre, même si cela peut être le cas outre méditerranée. Nous estimons, nous, avoir passé le cap où l’ “Homme” ne se définit que par sa capacité à  « taper plus fort» que le voisin. Restaurer la grandeur de nos femmes fait partie de ces pierres là qui nous permettront, à terme, d’ériger le mur d’une réelle souveraineté.
>
>Chez Sanku Kama, nous ne cherchons pas juste à rajouter des noms dans les marges de l’histoire coloniale. Sinon, cet article aurait pû prendre la forme d’une banale “liste de femmes qui se sont battus”. Nous cherchons à brûler la marge pour réécrire milles pages. Car tant que nous ne verrons pas les femmes comme les architectes de notre résilience, nous resterons condamnés à lire notre l’histoire avec les yeux de ceux qui ont tout fait pour crever les nôtres. ,


[^1]:  Lucas Nicole, Ohana Danielle, *Femmes à l'épreuve de la colonisation et des indépendances*, Paris, Éditions Le Manuscrit, 2023\.

[^2]:  Hugon Anne (dir.), *Histoire des femmes en situation coloniale, Afrique et Asie, XXe siècle*, Paris, Karthala, 2004\.

[^3]:  Judith Van Allen, *"Aba Riots" or Igbo "Women's War"? Ideology, Stratification, and the Invisibility of Women*, 1976

[^4]:  Coquery-Vidrovitch Catherine, *Les Africaines, Histoire des femmes d'Afrique noire, du XIXe au XXe siècle*, Paris, La Découverte, 2013\.

[^5]:  Hugon, op. cit.

[^6]:  Lucas, Ohana, op. cit.

[^7]:  Denise Savineau, *La famille en Afrique Occidentale Française et la condition de la femme*, Rapport présenté au Gouverneur général de l’AOF, 1938\.

[^8]:  Bouilly Emmanuelle, Rillon Ophélie, « Relire les décolonisations d'Afrique francophone au prisme du genre », *Le Mouvement Social*, 2016/2, n° 255\.

[^9]:  Elikia M’Bokolo, cité dans Lucas Nicole, Ohana Danielle, *Femmes à l'épreuve de la colonisation et des indépendances*, 2023\.

[^10]:  Lucas, Ohana, op. cit., citant Khaoula Taleb Ibrahimi et la déclaration de Mohamed Khider.

[^11]:  Lucas, Ohana, op. cit.

[^12]:  ibid

[^13]:  Branche Raphaëlle, *La torture et l’armée pendant la guerre d’Algérie,* Paris, Gallimard, 2016\.

[^14]:  Bouilly, Rillon, op. cit.

[^15]:  Coquery-Vidrovitch, op. cit.

[^16]:  Gautier, op. cit.

[^17]:  Amadiume, Ifi. *Male Daughters, Female Husbands : Gender and Sex in an African Society*. Londres : Zed Books, 1987\.

[^18]:  Lugones, María. « Heterosexualism and the Colonial/Modern Gender System ». *Hypatia*, vol. 22, n° 1, 2007\.

[^19]:  Mbembe, Achille. *De la postcolonie : essai sur l'imagination politique dans l'Afrique contemporaine*. Paris : Karthala, 2000, p. 12\.

[^20]:  Bouilly, Rillon, op. cit.

[^21]:  Falola, Toyin, et Paddock, Adam. *The Women's War of 1929 : A History of Anti-Colonial Resistance in Eastern Nigeria*. Durham : Carolina Academic Press, 2011\.

[^22]:  Coquery-Vidrovitch, op. cit.

[^23]:  Falola, Paddock, op. cit.`,
   sources: [
  {
    label: "Catherine Coquery-Vidrovitch (2013)",
    detail: "Les Africaines, Histoire des femmes d'Afrique noire, du XIXe au XXe siècle. Paris : La Découverte."
  },
  {
    label: "Anne Hugon (dir.) (2004)",
    detail: "Histoire des femmes en situation coloniale, Afrique et Asie, XXe siècle. Paris : Karthala."
  },
  {
    label: "Nicole Lucas & Danielle Ohana (2023)",
    detail: "Femmes à l'épreuve de la colonisation et des indépendances. Paris : Éditions Le Manuscrit."
  },
  {
    label: "Judith Van Allen (1976)",
    detail: "'Aba Riots' or Igbo 'Women's War'? Ideology, Stratification, and the Invisibility of Women."
  },
  {
    label: "Denise Savineau (1938)",
    detail: "La famille en Afrique Occidentale Française et la condition de la femme. Rapport présenté au Gouverneur général de l'AOF, Dakar."
  },
  {
    label: "Emmanuelle Bouilly & Ophélie Rillon (2016)",
    detail: "« Relire les décolonisations d'Afrique francophone au prisme du genre ». Le Mouvement Social."
  },
  {
    label: "Raphaëlle Branche (2016)",
    detail: "La torture et l'armée pendant la guerre d'Algérie. Paris : Gallimard."
  },
  {
    label: "Arlette Gautier (2004)",
    detail: "« Femmes et colonialisme ». In Marc Ferro (dir.), Le livre noir du colonialisme. Paris : Robert Laffont."
  },
  {
    label: "Ifi Amadiume (1987)",
    detail: "Male Daughters, Female Husbands : Gender and Sex in an African Society. Londres : Zed Books."
  },
  {
    label: "Toyin Falola & Adam Paddock (2011)",
    detail: "The Women's War of 1929 : A History of Anti-Colonial Resistance in Eastern Nigeria. Durham : Carolina Academic Press."
  },
  {
    label: "María Lugones (2007)",
    detail: "« Heterosexualism and the Colonial/Modern Gender System ». Hypatia, vol. 22, n° 1."
  },
  {
    label: "Achille Mbembe (2000)",
    detail: "De la postcolonie : essai sur l'imagination politique dans l'Afrique contemporaine. Paris : Karthala."
  }
  ]
  }
  ];

export const articleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const featuredArticles = articles.filter((a) => a.featured);
// Type pour une source globale avec l'article d'origine (optionnel mais pratique)
export interface GlobalSource {
  label: string;
  detail: string;
  articleTitle?: string;
  articleSlug?: string;
}

/// Type pour adapter dynamiquement la source à ton composant Sources.tsx
export interface DynamicSourceEntry {
  id: string;
  title: string;
  author: string;
  type: 'Ouvrage' | 'Article' | 'Archive' | 'Rapport' | 'Site';
  pillar: string;
  year: number | string;
  url?: string;
}

export const getDynamicSources = (): DynamicSourceEntry[] => {
  const dynamicSources: DynamicSourceEntry[] = [];
  const seenKeys = new Set<string>();

  articles.forEach((article) => {
    if (article.sources && article.sources.length > 0) {
      article.sources.forEach((source, index) => {
        // Clé unique pour éviter les doublons
        const key = `${source.label.toLowerCase()}-${source.detail.toLowerCase()}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);

          // Extraction de l'année (ex: "(2013)" ou "2013")
          const yearMatch = source.label.match(/\b(18|19|20)\d{2}\b/);
          const year = yearMatch ? yearMatch[0] : '—';

          // Nettoyage de l'auteur (enlève l'année entre parenthèses)
          const author = source.label.replace(/\s*\(\d{4}\)/, '').trim();

          dynamicSources.push({
            id: `${article.slug}-${index}`,
            title: source.detail,
            author: author || 'Auteur inconnu',
            type: 'Ouvrage', // Type par défaut
            pillar: article.pillar || 'Général',
            year: year,
          });
        }
      });
    }
  });

  return dynamicSources;
};