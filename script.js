const STORAGE_KEY = "sailor-piece-custom-items";

const baseWikiDatabase = [
  {
    name: "Starter Island",
    type: "Île",
    category: "île",
    level: "0-50",
    location: "Commence ici pour les quetes de base et les premiers niveaux.",
    action: "Fais toutes les quetes de départ puis bouge vers Sailor Island quand le gain d'XP ralentit.",
    tip: "Ne gaspille pas tes ressources trop tot. L'objectif est surtout de sortir rapidement du tout debut de jeu.",
    summary: "Zone de départ de Sailor Piece pour apprendre les bases avant la vraie progression.",
    keywords: ["starter island", "starter", "debut", "level 0", "quetes"]
  },
  {
    name: "Sailor Island",
    type: "Île",
    category: "île",
    level: "50-500",
    location: "Île hub centrale accessible via les portails violets.",
    action: "Va y faire ton leveling early game, rouler des fruits, gerer tes rerolls et tenter Jinwoo ou Alucard.",
    tip: "C'est une île cle du jeu: garde-la en tete pour les dealers de fruits, l'ascension et plusieurs PNJ utiles.",
    summary: "Hub principal de Sailor Piece avec dealers de fruits, ascension, rerolls, Boss Rush et boss importants.",
    keywords: ["sailor island", "hub", "fruit dealer", "jinwoo", "alucard", "boss rush"]
  },
  {
    name: "Jungle Island",
    type: "Île",
    category: "île",
    level: "250+",
    location: "Île de progression early game a enchainer après les premieres zones.",
    action: "Reste sur les quetes rapides tant que les ennemis restent dans ta tranche de niveau.",
    tip: "Change d'île avant que les mobs deviennent trop faciles, sinon ton rendement XP baisse.",
    summary: "Île de progression du debut de jeu utile pour continuer ton leveling après Starter et Sailor Island.",
    keywords: ["jungle island", "jungle", "xp", "progression"]
  },
  {
    name: "Desert Island",
    type: "Île",
    category: "île",
    level: "750+",
    location: "Île de progression mid-game ou tu peux aussi débloquer Observation Haki.",
    action: "Monte ton niveau ici puis passe voir le maître d'Observation Haki si tu as les prerequis.",
    tip: "Observation Haki devient un vrai palier de confort pour les combats et la progression.",
    summary: "Île de progression connue pour l'Observation Haki et la suite du leveling mid-game.",
    keywords: ["desert island", "desert", "observation haki", "750", "mid game"]
  },
  {
    name: "Snow Island",
    type: "Île",
    category: "île",
    level: "1500+",
    location: "Île mid-game importante pour Armament Haki et certaines fonctions d'upgrade.",
    action: "Progresse ici si tu es pret pour un vrai cap de build, puis débloqué Armament Haki des que possible.",
    tip: "Armament Haki est un gros bond de puissance pour la suite du contenu.",
    summary: "Île mid-game importante pour Armament Haki, upgrades et progression plus serieuse.",
    keywords: ["snow island", "snow", "armament haki", "1500", "upgrade"]
  },
  {
    name: "Light Fruit",
    type: "Fruit",
    category: "fruit",
    level: "Tous niveaux",
    location: "Se roule chez le Coin Fruit Dealer ou le Gems Fruit Dealer sur Sailor Island.",
    action: "Utilise-le si tu veux un très bon fruit de farm avec une mobilite forte grace au vol.",
    tip: "Sa mobilite et ses zones le rendent très recherche pour le farm.",
    summary: "Fruit legendaire a 2% de chance avec 5 capacites, très apprecie pour la mobilite et le farm.",
    keywords: ["light fruit", "light", "legendary", "2%", "fruit", "fly"]
  },
  {
    name: "Quake Fruit",
    type: "Fruit",
    category: "fruit",
    level: "Tous niveaux",
    location: "Disponible via les dealers de fruits sur Sailor Island.",
    action: "Choisis-le si tu veux de grosses zones de degats pour nettoyer des groupes d'ennemis.",
    tip: "Très bon fruit si tu privilegies l'AOE et les attaques qui touchent large.",
    summary: "Fruit epic a 5% de chance avec 3 capacites, utile pour ses grosses zones et son potentiel de farm.",
    keywords: ["quake fruit", "quake", "epic", "5%", "tsunami", "aoe"]
  },
  {
    name: "Flame Fruit",
    type: "Fruit",
    category: "fruit",
    level: "Tous niveaux",
    location: "Se roule egalement sur Sailor Island chez les dealers de fruits.",
    action: "Bon choix plus accessible pour commencer avec un fruit offensif sans viser directement les plus rares.",
    tip: "Si tu n'as pas Light ou Quake, Flame reste une option plus simple et correcte pour debuter.",
    summary: "Fruit rare a 13% de chance, plus accessible pour un debut de build autour d'un fruit.",
    keywords: ["flame fruit", "flame", "rare", "13%", "fruit"]
  },
  {
    name: "Human",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Race de départ ou résultat possible via Race Reroll.",
    action: "A reroll rapidement si tu cherches un bonus utile pour ton build.",
    tip: "Human n'apporte pas de bonus. C'est surtout une base de départ.",
    summary: "Race commune sans bonus supplementaire.",
    keywords: ["human", "race", "common", "race reroll"]
  },
  {
    name: "Skypea",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Interessante si tu veux plus de mobilite verticale.",
    tip: "Son bonus principal est +2 jumps.",
    summary: "Race uncommon qui donne +2 sauts supplementaires.",
    keywords: ["skypea", "race", "jumps", "uncommon"]
  },
  {
    name: "Fishman",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Bonne race pour accelerer ta progression economique et ton XP.",
    tip: "Elle donne +15% XP et +15% Cash.",
    summary: "Race uncommon utile pour gagner plus d'XP et d'argent.",
    keywords: ["fishman", "race", "xp", "cash", "uncommon"]
  },
  {
    name: "Mink",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Pratique si tu privilegies la vitesse de deplacement.",
    tip: "Elle apporte +20% sprint speed et +20% jump height.",
    summary: "Race rare axee sur la mobilite avec vitesse et saut augmentes.",
    keywords: ["mink", "race", "speed", "jump", "rare"]
  },
  {
    name: "Orc",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Bon choix simple si tu veux plus de survie et de degats bruts.",
    tip: "Elle donne +15% HP et +15% Damage.",
    summary: "Race rare avec un bonus equilibre en vie et degats.",
    keywords: ["orc", "race", "hp", "damage", "rare"]
  },
  {
    name: "Demon",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Race solide pour monter en puissance de facon simple.",
    tip: "Source verifiee: +35% Max HP. D'autres bonus existent selon les guides communautaires.",
    summary: "Race epic orientee puissance avec gros bonus de HP.",
    keywords: ["demon", "race", "epic", "hp"]
  },
  {
    name: "Vampire",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très utile si tu veux sustain et degats reguliers.",
    tip: "Bonus principaux: +30% HP, +25% Damage, +5% Lifesteal.",
    summary: "Race epic avec lifesteal et bons bonus offensifs.",
    keywords: ["vampire", "race", "lifesteal", "epic", "alucard"]
  },
  {
    name: "Vessel",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "A conserver si tu joues autour de Sukuna ou d'un build pur damage.",
    tip: "Donne +20% Sukuna damage, +35% Total Damage et +40% HP.",
    summary: "Race legendary avec bonus specifiques Sukuna et gros degats.",
    keywords: ["vessel", "race", "legendary", "sukuna", "damage"]
  },
  {
    name: "Limitless",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Bonne option si ton build profite des bonus lies a Gojo.",
    tip: "Donne +25% Gojo damage, +30% Total Damage et +40% HP.",
    summary: "Race legendary avec bonus pour Gojo et bon package offensif.",
    keywords: ["limitless", "race", "legendary", "gojo", "damage"]
  },
  {
    name: "Player",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très interessante si tu joues autour de Jinwoo.",
    tip: "Donne +20% Jinwoo damage, +40% Total Damage et +45% HP.",
    summary: "Race legendary avec bonus pour Jinwoo et gros stats globales.",
    keywords: ["player", "race", "legendary", "jinwoo", "damage"]
  },
  {
    name: "Shinigami",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "A garder si tu vises certaines armes ou quetes liees a cette race.",
    tip: "Elle est importante pour le Manipulator Questline d'après la doc.",
    summary: "Race legendary utilisee dans certaines progressions et builds specifiques.",
    keywords: ["shinigami", "race", "legendary", "manipulator", "aizen"]
  },
  {
    name: "Shadowborn",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très utile si tu joues autour de Shadow ou de builds sombres.",
    tip: "Elle est requise pour le Shadow Trainer d'après la doc.",
    summary: "Race legendary liee aux builds Shadow avec gros bonus de HP.",
    keywords: ["shadowborn", "race", "legendary", "shadow"]
  },
  {
    name: "Hollow",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Bonne race offensive pour les joueurs qui veulent beaucoup de stats globales.",
    tip: "Donne +20% Ichigo damage, +50% Total Damage et +60% HP.",
    summary: "Race legendary avec très gros bonus de damage et de HP.",
    keywords: ["hollow", "race", "legendary", "ichigo", "damage"]
  },
  {
    name: "Oni",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très bon choix si tu veux une race mythique puissante et resistante.",
    tip: "La doc verifiee indique surtout un gros bonus de HP; les guides lui attribuent aussi beaucoup de damage.",
    summary: "Race mythique très puissante orientee survie et pression offensive.",
    keywords: ["oni", "race", "mythical", "hp", "damage"]
  },
  {
    name: "Kitsune",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Excellente pour les builds qui veulent luck plus bonus melee et sword.",
    tip: "Elle donne notamment +25% Luck et des bonus melee/sword.",
    summary: "Race mythique polyvalente avec chance, HP et bonus d'armes.",
    keywords: ["kitsune", "race", "mythical", "luck", "sword", "melee"]
  },
  {
    name: "Leviathan",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Forte option pour les builds sword avec sustain.",
    tip: "Donne +17% Sword Multi, +60% Damage, +65% HP et +5% Lifesteal.",
    summary: "Race mythique avec bons bonus sword et lifesteal.",
    keywords: ["leviathan", "race", "mythical", "sword", "lifesteal"]
  },
  {
    name: "Slime",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "A garder si tu vises Rimuru Mastery ou une race très complete.",
    tip: "Associe HP, damage, sword multi, lifesteal et damage reduction.",
    summary: "Race mythique très complete, requise pour Rimuru Mastery.",
    keywords: ["slime", "race", "mythical", "rimuru", "dr", "lifesteal"]
  },
  {
    name: "Servant",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très bonne race melee si tu joues autour de Babylon Key Crafter.",
    tip: "Associe HP, damage, melee multi, lifesteal et damage reduction.",
    summary: "Race mythique puissante, liee a Babylon Key Crafter.",
    keywords: ["servant", "race", "mythical", "babylon", "melee", "dr"]
  },
  {
    name: "Galevorn",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très forte race melee/endgame, surtout pour les builds agressifs.",
    tip: "Bonus verifiees: +80% HP, +75% Damage, +20% Melee Multi, +3% Lifesteal, +10% DR.",
    summary: "Race mythique haut de gamme pour builds melee très offensifs.",
    keywords: ["galevorn", "race", "mythical", "melee", "lifesteal", "dr"]
  },
  {
    name: "Swordblessed",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "A conserver absolument si tu veux jouer Yamato ou un build sword fort.",
    tip: "Elle est requise pour Yamato Trainer et donne un gros Sword Multi.",
    summary: "Race mythique majeure pour les builds sword et Yamato.",
    keywords: ["swordblessed", "race", "mythical", "yamato", "sword"]
  },
  {
    name: "Sunborn",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Excellente si tu veux une race sword mythique sans prerequis particulier connu.",
    tip: "Bonus verifiees: +80% HP, +70% Damage, +20% Sword Multi, +3% Lifesteal, +10% DR.",
    summary: "Race mythique sword avec gros package HP, damage et sustain.",
    keywords: ["sunborn", "race", "mythical", "sword", "lifesteal"]
  },
  {
    name: "Warlord",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très bon choix si tu joues melee et vises Strongest Shinobi Mastery.",
    tip: "Elle est liee a The Strongest Shinobi Mastery d'après la doc.",
    summary: "Race mythique melee avec gros HP, damage et sustain.",
    keywords: ["warlord", "race", "mythical", "shinobi", "melee"]
  },
  {
    name: "Luckborn",
    type: "Race",
    category: "race",
    level: "Tous niveaux",
    location: "Obtenable via Race Reroll depuis l'inventaire.",
    action: "Très interessante pour maximiser la chance tout en gardant de grosses stats.",
    tip: "La doc verifiee indique +90% HP et +35% Luck, avec bonus offensifs selon les guides.",
    summary: "Race mythique orientee chance avec enorme bonus de HP.",
    keywords: ["luckborn", "race", "mythical", "luck", "hp"]
  },
  {
    name: "Observation Haki",
    type: "Système",
    category: "system",
    level: "750+",
    location: "A apprendre sur Desert Island aupres du maître correspondant.",
    action: "Débloqué-le des que tu peux pour rendre les combats plus confortables et mieux gerer les patterns.",
    tip: "C'est un excellent palier de progression: il rend beaucoup de combats plus lisibles.",
    summary: "Haki a débloquer sur Desert Island, important pour la progression mid-game.",
    keywords: ["observation haki", "observation", "haki", "desert island", "750"]
  },
  {
    name: "Armament Haki",
    type: "Système",
    category: "system",
    level: "1500+",
    location: "A apprendre sur Snow Island après avoir atteint le palier de progression correspondant.",
    action: "Cherche a l'obtenir rapidement si tu veux mieux tenir le contenu mid-game et au-dela.",
    tip: "Armament Haki est l'un des meilleurs investissements de progression quand tu atteins Snow Island.",
    summary: "Haki a débloquer sur Snow Island, important pour renforcer ton build en milieu de jeu.",
    keywords: ["armament haki", "armament", "haki", "snow island", "1500"]
  },
  {
    name: "Jinwoo",
    type: "Boss",
    category: "boss",
    level: "Early game",
    location: "Boss present sur Sailor Island.",
    action: "Essaie-le quand ton build early game est stable et que tu tiens deja bien les quetes de l'île.",
    tip: "Bon boss pour commencer a apprendre les timings de boss sans partir trop loin dans le endgame.",
    summary: "Boss important de Sailor Island, souvent l'un des premiers vrais repaires de progression.",
    keywords: ["jinwoo", "boss", "sailor island"]
  },
  {
    name: "Alucard",
    type: "Boss",
    category: "boss",
    level: "Early game+",
    location: "Boss present sur Sailor Island.",
    action: "Tente-le quand tu veux pousser un peu plus le farm de la zone hub et tester ton build.",
    tip: "Comme pour les autres boss, commence par observer les patterns avant de forcer le combat.",
    summary: "Boss de Sailor Island utile pour approfondir la progression autour de la zone centrale.",
    keywords: ["alucard", "boss", "sailor island"]
  },
  {
    name: "Jinwoo Boss",
    type: "Boss",
    category: "boss",
    level: "Open world",
    location: "Sailor Island.",
    action: "Spawn naturel. A farmer pour rerolls, Boss Tickets et materiaux Shadow.",
    tip: "Drops importants: Abyss Edge 17.5%, Dark Ring 7%, Shadow Heart 2%, Jinwoo Cape 3%, Shadow Monarch Title 3%.",
    summary: "Boss open world de Sailor Island avec rerolls, tickets et drops utiles pour la route Shadow.",
    keywords: ["jinwoo boss", "sailor island", "abyss edge", "dark ring", "shadow heart", "shadow monarch"]
  },
  {
    name: "Alucard Boss",
    type: "Boss",
    category: "boss",
    level: "Open world",
    location: "Sailor Island.",
    action: "Spawn naturel. A farmer surtout pour Race Reroll, Trait Reroll et drops vampires.",
    tip: "Drops importants: Soul Amulet 8%, Casull 2%, Blood Ring 2%, Alucard Coat 3%, Vampire King Title 2.5%.",
    summary: "Boss open world de Sailor Island très utile pour rerolls et quelques drops vampires.",
    keywords: ["alucard boss", "sailor island", "soul amulet", "casull", "blood ring", "vampire king"]
  },
  {
    name: "Aizen Boss",
    type: "Boss",
    category: "boss",
    level: "Open world",
    location: "Hueco Mundo / Hollow Island selon les sources.",
    action: "Spawn naturel. A farmer pour Haki Color Reroll garanti et materiaux de route Aizen.",
    tip: "Drops importants: Mirage Pendant 20%, Illusion Prism 8%, Reiatsu Core 3%, Hogyoku Fragment 1.2%, Aizen Haori 2%.",
    summary: "Boss open world majeur pour rerolls et materiaux Manipulator / True Aizen.",
    keywords: ["aizen boss", "hueco mundo", "hollow island", "mirage pendant", "hogyoku fragment", "aizen haori"]
  },
  {
    name: "Gojo Boss",
    type: "Boss",
    category: "boss",
    level: "Open world",
    location: "Shibuya Station.",
    action: "A farmer pour obtenir Limitless Key et preparer Strongest of Today.",
    tip: "Drops importants: Limitless Key 30%, Void Fragment 20%, Limitless Ring 8%, Infinity Core 3%, Gojo Blindfold 5%.",
    summary: "Boss open world de Shibuya Station, source principale de Limitless Key.",
    keywords: ["gojo boss", "shibuya station", "limitless key", "void fragment", "infinity core", "blindfold"]
  },
  {
    name: "Sukuna Boss",
    type: "Boss",
    category: "boss",
    level: "Open world",
    location: "Shibuya Station.",
    action: "A farmer pour Malevolent Key et la route Strongest in History.",
    tip: "Drops importants: Malevolent Key 30%, Cursed Finger 20%, Dismantle Fang 8%, Crimson Heart 2.5%, Sukuna Collar 4%.",
    summary: "Boss open world de Shibuya Station, source principale de Malevolent Key.",
    keywords: ["sukuna boss", "shibuya station", "malevolent key", "cursed finger", "dismantle fang", "crimson heart"]
  },
  {
    name: "Madoka Boss",
    type: "Boss",
    category: "boss",
    level: "Late game",
    location: "Valentine Island.",
    action: "A farmer pour Race Reroll, Trait Reroll et ressources de Valentine.",
    tip: "Drops importants: Divine Fragment 6%, Sacred Bow 4%, Radiant Core 2%, Pink Gem 0.75%, Ultimate Wings 1.5%.",
    summary: "Boss open world late game avec rerolls garantis et plusieurs drops rares.",
    keywords: ["madoka boss", "valentine island", "divine fragment", "sacred bow", "radiant core", "pink gem"]
  },
  {
    name: "Strongest Shinobi Boss",
    type: "Boss",
    category: "boss",
    level: "Endgame",
    location: "Ninja Island.",
    action: "A farmer pour rerolls garantis, Void Reaver et materiaux endgame.",
    tip: "Drops importants: Power Remnant 5.11%, Battle Sigil 2.94%, Eternal Core 1.40%, Path Fragment 0.56%, Battlefield Warlord Title 1.5%.",
    summary: "Boss endgame très rentable avec plusieurs drops garantis et materiaux rares.",
    keywords: ["strongest shinobi boss", "ninja island", "void reaver", "power remnant", "battle sigil", "path fragment"]
  },
  {
    name: "Yamato Boss",
    type: "Boss",
    category: "boss",
    level: "Open world",
    location: "Judgement Island.",
    action: "A farmer pour la route Yamato et des tickets/keys.",
    tip: "Drops importants: Frozen Will 4.25%, Yamato Essence 2.5%, Silent Storm 1.15%, Azure Heart 0.5%, Imperial Outfit 0.9%.",
    summary: "Boss open world de Judgement Island utile pour les materiaux Yamato.",
    keywords: ["yamato boss", "judgement island", "frozen will", "yamato essence", "silent storm", "azure heart"]
  },
  {
    name: "Saber Boss",
    type: "Boss",
    category: "boss",
    level: "Summon",
    location: "Boss Island.",
    action: "A invoquer avec 1 Boss Key, 100,000 Cash et 175 Gems.",
    tip: "Drops importants: Boss Ticket 100%, Dungeon Key 10-12%, Saber/Excalibur 2%, Saber Armor 5%, Blade Master Title 5%.",
    summary: "Boss summon de Boss Island ideal pour Boss Tickets et route Excalibur.",
    keywords: ["saber boss", "boss island", "excalibur", "saber armor", "blade master", "boss ticket"]
  },
  {
    name: "Qin Shi Boss",
    type: "Boss",
    category: "boss",
    level: "Summon",
    location: "Boss Island.",
    action: "A invoquer avec 3 Boss Keys, 250,000 Cash et 400 Gems.",
    tip: "Drops importants: Jade Tablet 6%, Imperial Seal 2%, Qin Shi Blindfold 2.5%, King of Beginning Title 1.5%.",
    summary: "Boss summon intermediaire de Boss Island avec drops imperiaux.",
    keywords: ["qin shi boss", "boss island", "jade tablet", "imperial seal", "blindfold"]
  },
  {
    name: "Ichigo Boss",
    type: "Boss",
    category: "boss",
    level: "Summon",
    location: "Boss Island.",
    action: "A invoquer avec 5 Boss Keys, 350,000 Cash et 600 Gems.",
    tip: "Drops importants: Soul Fragment 6%, Spiritual Core 1.75%, Soul Flame 0.7%, Hollow Mask 2%, Soul Reaper Title 1%.",
    summary: "Boss summon avec drops lies a la route Soul / Hollow.",
    keywords: ["ichigo boss", "boss island", "soul fragment", "spiritual core", "soul flame", "hollow mask"]
  },
  {
    name: "Atomic Boss",
    type: "Boss",
    category: "boss",
    level: "Scaling summon",
    location: "Lawless Island.",
    action: "A invoquer avec 1 Abyss Sigil. Les taux montent selon la difficulté.",
    tip: "Drops importants: Magic Shard 8.75-13.12%, Shadow Remnant 2.85-4.5%, Atomic Outfit 0.75-1.3%, Eminence Essence 0.7-1.15%, Atomic Omen 0.3-0.6%.",
    summary: "Boss scaling de Lawless Island avec drops Eminence et taux variables selon la difficulté.",
    keywords: ["atomic boss", "lawless island", "magic shard", "shadow remnant", "atomic outfit", "eminence essence"]
  },
  {
    name: "Ice Queen Boss",
    type: "Boss",
    category: "boss",
    level: "Summon",
    location: "Boss Island.",
    action: "A invoquer avec 1 Frost Relic, 750,000 Money et 750 Gems.",
    tip: "Drops importants: Battle Shard 16.20%, Glacier Remnant 5.37%, Ice Queen Outfit 1.42%, Frost Brand 1.21%, Ice Core 0.53%, Frost Empress Title 0.65%.",
    summary: "Boss summon haut niveau lie a Frostbane et Ice Queen.",
    keywords: ["ice queen boss", "boss island", "battle shard", "glacier remnant", "frost brand", "ice core"]
  },
  {
    name: "Abyss Edge",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Jinwoo Boss a Sailor Island.",
    action: "Va tuer Jinwoo sur Sailor Island.",
    tip: "Taux de drop documente: 17.5%.",
    summary: "Objet obtenu sur Jinwoo Boss a Sailor Island.",
    keywords: ["abyss edge", "jinwoo", "boss drop", "17.5%"]
  },
  {
    name: "Dark Ring",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Jinwoo Boss a Sailor Island.",
    action: "Va tuer Jinwoo sur Sailor Island.",
    tip: "Taux de drop documente: 7%.",
    summary: "Objet obtenu sur Jinwoo Boss a Sailor Island.",
    keywords: ["dark ring", "jinwoo", "boss drop", "7%"]
  },
  {
    name: "Shadow Heart",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Jinwoo Boss a Sailor Island.",
    action: "Va tuer Jinwoo sur Sailor Island.",
    tip: "Taux de drop documente: 2%.",
    summary: "Objet obtenu sur Jinwoo Boss a Sailor Island.",
    keywords: ["shadow heart", "jinwoo", "boss drop", "2%"]
  },
  {
    name: "Soul Amulet",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Alucard Boss a Sailor Island.",
    action: "Va tuer Alucard sur Sailor Island.",
    tip: "Taux de drop documente: 8%.",
    summary: "Objet obtenu sur Alucard Boss a Sailor Island.",
    keywords: ["soul amulet", "alucard", "boss drop", "8%"]
  },
  {
    name: "Casull",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Alucard Boss a Sailor Island.",
    action: "Va tuer Alucard sur Sailor Island.",
    tip: "Taux de drop documente: 2%.",
    summary: "Objet obtenu sur Alucard Boss a Sailor Island.",
    keywords: ["casull", "alucard", "boss drop", "2%"]
  },
  {
    name: "Blood Ring",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Alucard Boss a Sailor Island.",
    action: "Va tuer Alucard sur Sailor Island.",
    tip: "Taux de drop documente: 2%.",
    summary: "Objet obtenu sur Alucard Boss a Sailor Island.",
    keywords: ["blood ring", "alucard", "boss drop", "2%"]
  },
  {
    name: "Limitless Key",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gojo Boss a Shibuya Station.",
    action: "Va tuer Gojo sur Shibuya Station.",
    tip: "Taux de drop documente: 30%. Utilise ensuite pour Strongest of Today.",
    summary: "Cle obtenue sur Gojo Boss pour invoquer Strongest of Today.",
    keywords: ["limitless key", "gojo", "strongest of today", "30%"]
  },
  {
    name: "Malevolent Key",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Sukuna Boss a Shibuya Station.",
    action: "Va tuer Sukuna sur Shibuya Station.",
    tip: "Taux de drop documente: 30%. Utilise ensuite pour Strongest in History.",
    summary: "Cle obtenue sur Sukuna Boss pour invoquer Strongest in History.",
    keywords: ["malevolent key", "sukuna", "strongest in history", "30%"]
  },
  {
    name: "Hogyoku Fragment",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Aizen Boss a Hueco Mundo / Hollow Island.",
    action: "Va tuer Aizen sur sa zone.",
    tip: "Taux de drop documente: 1.2%.",
    summary: "Objet rare obtenu sur Aizen Boss.",
    keywords: ["hogyoku fragment", "aizen", "1.2%", "boss drop"]
  },
  {
    name: "Divine Fragment",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Madoka Boss a Valentine Island.",
    action: "Va tuer Madoka sur Valentine Island.",
    tip: "Taux de drop documente: 6%.",
    summary: "Objet obtenu sur Madoka Boss a Valentine Island.",
    keywords: ["divine fragment", "madoka", "6%", "boss drop"]
  },
  {
    name: "Pink Gem",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Madoka Boss a Valentine Island.",
    action: "Va tuer Madoka sur Valentine Island.",
    tip: "Taux de drop documente: 0.75%.",
    summary: "Objet très rare obtenu sur Madoka Boss a Valentine Island.",
    keywords: ["pink gem", "madoka", "0.75%", "boss drop"]
  },
  {
    name: "Power Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest Shinobi Boss a Ninja Island.",
    action: "Va tuer Strongest Shinobi sur Ninja Island.",
    tip: "Taux de drop documente: 5.11%.",
    summary: "Objet obtenu sur Strongest Shinobi Boss a Ninja Island.",
    keywords: ["power remnant", "strongest shinobi", "5.11%", "boss drop"]
  },
  {
    name: "Path Fragment",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest Shinobi Boss a Ninja Island.",
    action: "Va tuer Strongest Shinobi sur Ninja Island.",
    tip: "Taux de drop documente: 0.56%.",
    summary: "Objet très rare obtenu sur Strongest Shinobi Boss a Ninja Island.",
    keywords: ["path fragment", "strongest shinobi", "0.56%", "boss drop"]
  },
  {
    name: "Frozen Will",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yamato Boss a Judgement Island.",
    action: "Va tuer Yamato sur Judgement Island.",
    tip: "Taux de drop documente: 4.25%.",
    summary: "Objet obtenu sur Yamato Boss a Judgement Island.",
    keywords: ["frozen will", "yamato boss", "4.25%", "boss drop"]
  },
  {
    name: "Yamato Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yamato Boss a Judgement Island.",
    action: "Va tuer Yamato sur Judgement Island.",
    tip: "Taux de drop documente: 2.5%.",
    summary: "Objet obtenu sur Yamato Boss a Judgement Island.",
    keywords: ["yamato essence", "yamato boss", "2.5%", "boss drop"]
  },
  {
    name: "Excalibur",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Saber Boss a Boss Island.",
    action: "Invoque Saber avec 1 Boss Key, 100,000 Cash et 175 Gems.",
    tip: "Taux de drop documente: 2%.",
    summary: "Epee obtenue sur Saber Boss a Boss Island.",
    keywords: ["excalibur", "saber boss", "2%", "boss island"]
  },
  {
    name: "Jade Tablet",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Qin Shi Boss a Boss Island.",
    action: "Invoque Qin Shi avec 3 Boss Keys, 250,000 Cash et 400 Gems.",
    tip: "Taux de drop documente: 6%.",
    summary: "Objet obtenu sur Qin Shi Boss a Boss Island.",
    keywords: ["jade tablet", "qin shi", "6%", "boss drop"]
  },
  {
    name: "Soul Fragment",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ichigo Boss a Boss Island.",
    action: "Invoque Ichigo avec 5 Boss Keys, 350,000 Cash et 600 Gems.",
    tip: "Taux de drop documente: 6%.",
    summary: "Objet obtenu sur Ichigo Boss a Boss Island.",
    keywords: ["soul fragment", "ichigo boss", "6%", "boss drop"]
  },
  {
    name: "Magic Shard",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Atomic Boss a Lawless Island.",
    action: "Invoque Atomic avec 1 Abyss Sigil.",
    tip: "Taux de drop documente: environ 8.75% a 13.12% selon la difficulté.",
    summary: "Objet obtenu sur Atomic Boss a Lawless Island.",
    keywords: ["magic shard", "atomic boss", "lawless island", "abyss sigil"]
  },
  {
    name: "Eminence Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Atomic Boss a Lawless Island.",
    action: "Invoque Atomic avec 1 Abyss Sigil.",
    tip: "Taux de drop documente: environ 0.7% a 1.15% selon la difficulté.",
    summary: "Objet rare obtenu sur Atomic Boss a Lawless Island.",
    keywords: ["eminence essence", "atomic boss", "0.7%", "1.15%", "boss drop"]
  },
  {
    name: "Battle Shard",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island.",
    action: "Invoque Ice Queen avec 1 Frost Relic, 750,000 Money et 750 Gems.",
    tip: "Taux de drop documente: 16.20%.",
    summary: "Objet obtenu sur Ice Queen Boss a Boss Island.",
    keywords: ["battle shard", "ice queen", "16.20%", "boss drop"]
  },
  {
    name: "Frost Brand",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island.",
    action: "Invoque Ice Queen avec 1 Frost Relic, 750,000 Money et 750 Gems.",
    tip: "Taux de drop documente: 1.21%.",
    summary: "Objet obtenu sur Ice Queen Boss a Boss Island.",
    keywords: ["frost brand", "ice queen", "1.21%", "boss drop"]
  },
  {
    name: "Jinwoo Cape",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Jinwoo Boss a Sailor Island.",
    action: "Va tuer Jinwoo sur Sailor Island.",
    tip: "Taux de drop documente: 3%.",
    summary: "Cape obtenue sur Jinwoo Boss, cosmetique de la route Shadow.",
    keywords: ["jinwoo cape", "jinwoo", "boss drop", "3%", "cape"]
  },
  {
    name: "Haki Color Reroll",
    type: "Objet",
    category: "item",
    level: "Tous niveaux",
    location: "Drop de nombreux boss, notamment Aizen (100%), Jinwoo (80%), Gojo (50%).",
    action: "Utilise-le pour changer la couleur de ton Haki.",
    tip: "Aizen est la meilleure source avec 100% de chance de drop.",
    summary: "Consommable permettant de reroller la couleur de ton Haki.",
    keywords: ["haki color reroll", "haki", "reroll", "couleur", "aizen", "jinwoo"]
  },
  {
    name: "Race Reroll",
    type: "Objet",
    category: "item",
    level: "Tous niveaux",
    location: "Drop de nombreux boss. Aussi disponible via l'inventaire.",
    action: "Utilise-le pour changer ta race.",
    tip: "Alucard donne 85% de chance, Madoka et Strongest Shinobi donnent 100%.",
    summary: "Consommable permettant de reroller ta race.",
    keywords: ["race reroll", "reroll", "race", "alucard", "madoka"]
  },
  {
    name: "Trait Reroll",
    type: "Objet",
    category: "item",
    level: "Tous niveaux",
    location: "Drop de nombreux boss. Aussi disponible via l'inventaire.",
    action: "Utilise-le pour changer ton trait.",
    tip: "Madoka et Strongest Shinobi donnent 100% de chance de drop.",
    summary: "Consommable permettant de reroller ton trait.",
    keywords: ["trait reroll", "reroll", "trait", "madoka"]
  },
  {
    name: "Boss Ticket",
    type: "Objet",
    category: "item",
    level: "Tous niveaux",
    location: "Drop de nombreux boss. Saber Boss donne 100% de chance.",
    action: "Utilise-le pour accéder au Boss Rush sur Sailor Island.",
    tip: "Saber Boss est la meilleure source avec 100% de drop garanti.",
    summary: "Ticket permettant d'accéder au Boss Rush de Sailor Island.",
    keywords: ["boss ticket", "ticket", "boss rush", "saber", "sailor island"]
  },
  {
    name: "Dungeon Key",
    type: "Objet",
    category: "item",
    level: "Tous niveaux",
    location: "Drop de nombreux boss avec des taux variables.",
    action: "Utilise-le pour entrer dans un donjon.",
    tip: "Strongest Shinobi et Madoka donnent 100% de chance de drop.",
    summary: "Cle permettant d'accéder aux donjons du jeu.",
    keywords: ["dungeon key", "cle", "donjon", "dungeon"]
  },
  {
    name: "Energy Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yuji Boss a Shibuya Station.",
    action: "Va tuer Yuji sur Shibuya Station.",
    tip: "Taux de drop documente: 25%.",
    summary: "Composant obtenu sur Yuji Boss a Shibuya Station.",
    keywords: ["energy core", "yuji", "shibuya station", "25%", "boss drop"]
  },
  {
    name: "Flash Impact",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yuji Boss a Shibuya Station.",
    action: "Va tuer Yuji sur Shibuya Station.",
    tip: "Taux de drop documente: 9%.",
    summary: "Objet obtenu sur Yuji Boss a Shibuya Station.",
    keywords: ["flash impact", "yuji", "9%", "boss drop"]
  },
  {
    name: "Divergent Pulse",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yuji Boss a Shibuya Station.",
    action: "Va tuer Yuji sur Shibuya Station.",
    tip: "Taux de drop documente: 4%.",
    summary: "Objet rare obtenu sur Yuji Boss a Shibuya Station.",
    keywords: ["divergent pulse", "yuji", "4%", "boss drop"]
  },
  {
    name: "Yuji Hair",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yuji Boss a Shibuya Station.",
    action: "Va tuer Yuji sur Shibuya Station.",
    tip: "Taux de drop documente: 5%. Cosmetique.",
    summary: "Cosmetique obtenu sur Yuji Boss a Shibuya Station.",
    keywords: ["yuji hair", "yuji", "5%", "cosmetique", "boss drop"]
  },
  {
    name: "Void Fragment",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gojo Boss a Shibuya Station.",
    action: "Va tuer Gojo sur Shibuya Station.",
    tip: "Taux de drop documente: 20%.",
    summary: "Composant obtenu sur Gojo Boss a Shibuya Station.",
    keywords: ["void fragment", "gojo", "20%", "boss drop"]
  },
  {
    name: "Limitless Ring",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gojo Boss a Shibuya Station.",
    action: "Va tuer Gojo sur Shibuya Station.",
    tip: "Taux de drop documente: 8%.",
    summary: "Objet obtenu sur Gojo Boss a Shibuya Station.",
    keywords: ["limitless ring", "gojo", "8%", "boss drop"]
  },
  {
    name: "Infinity Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gojo Boss a Shibuya Station.",
    action: "Va tuer Gojo sur Shibuya Station.",
    tip: "Taux de drop documente: 3%.",
    summary: "Objet rare obtenu sur Gojo Boss a Shibuya Station.",
    keywords: ["infinity core", "gojo", "3%", "boss drop"]
  },
  {
    name: "Gojo Blindfold",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gojo Boss a Shibuya Station.",
    action: "Va tuer Gojo sur Shibuya Station.",
    tip: "Taux de drop documente: 5%. Cosmetique.",
    summary: "Cosmetique obtenu sur Gojo Boss a Shibuya Station.",
    keywords: ["gojo blindfold", "gojo", "5%", "cosmetique", "boss drop"]
  },
  {
    name: "Cursed Finger",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Sukuna Boss a Shibuya Station.",
    action: "Va tuer Sukuna sur Shibuya Station.",
    tip: "Taux de drop documente: 20%.",
    summary: "Composant obtenu sur Sukuna Boss a Shibuya Station.",
    keywords: ["cursed finger", "sukuna", "20%", "boss drop"]
  },
  {
    name: "Dismantle Fang",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Sukuna Boss a Shibuya Station.",
    action: "Va tuer Sukuna sur Shibuya Station.",
    tip: "Taux de drop documente: 8%.",
    summary: "Objet obtenu sur Sukuna Boss a Shibuya Station.",
    keywords: ["dismantle fang", "sukuna", "8%", "boss drop"]
  },
  {
    name: "Crimson Heart",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Sukuna Boss a Shibuya Station.",
    action: "Va tuer Sukuna sur Shibuya Station.",
    tip: "Taux de drop documente: 2.5%.",
    summary: "Objet rare obtenu sur Sukuna Boss a Shibuya Station.",
    keywords: ["crimson heart", "sukuna", "2.5%", "boss drop"]
  },
  {
    name: "Sukuna Collar",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Sukuna Boss a Shibuya Station.",
    action: "Va tuer Sukuna sur Shibuya Station.",
    tip: "Taux de drop documente: 4%. Cosmetique.",
    summary: "Cosmetique obtenu sur Sukuna Boss a Shibuya Station.",
    keywords: ["sukuna collar", "sukuna", "4%", "cosmetique", "boss drop"]
  },
  {
    name: "Mirage Pendant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Aizen Boss a Hueco Mundo / Hollow Island.",
    action: "Va tuer Aizen sur sa zone.",
    tip: "Taux de drop documente: 20%.",
    summary: "Composant obtenu sur Aizen Boss.",
    keywords: ["mirage pendant", "aizen", "20%", "boss drop"]
  },
  {
    name: "Illusion Prism",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Aizen Boss a Hueco Mundo / Hollow Island.",
    action: "Va tuer Aizen sur sa zone.",
    tip: "Taux de drop documente: 8%.",
    summary: "Objet obtenu sur Aizen Boss.",
    keywords: ["illusion prism", "aizen", "8%", "boss drop"]
  },
  {
    name: "Reiatsu Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Aizen Boss a Hueco Mundo / Hollow Island.",
    action: "Va tuer Aizen sur sa zone.",
    tip: "Taux de drop documente: 3%.",
    summary: "Composant rare obtenu sur Aizen Boss.",
    keywords: ["reiatsu core", "aizen", "3%", "boss drop"]
  },
  {
    name: "Aizen Haori",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Aizen Boss a Hueco Mundo / Hollow Island.",
    action: "Va tuer Aizen sur sa zone.",
    tip: "Taux de drop documente: 2%. Cosmetique.",
    summary: "Cosmetique obtenu sur Aizen Boss.",
    keywords: ["aizen haori", "aizen", "2%", "cosmetique", "boss drop"]
  },
  {
    name: "Sacred Bow",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Madoka Boss a Valentine Island.",
    action: "Va tuer Madoka sur Valentine Island.",
    tip: "Taux de drop documente: 4%.",
    summary: "Objet obtenu sur Madoka Boss a Valentine Island.",
    keywords: ["sacred bow", "madoka", "4%", "boss drop"]
  },
  {
    name: "Radiant Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Madoka Boss a Valentine Island.",
    action: "Va tuer Madoka sur Valentine Island.",
    tip: "Taux de drop documente: 2%.",
    summary: "Composant obtenu sur Madoka Boss a Valentine Island.",
    keywords: ["radiant core", "madoka", "2%", "boss drop"]
  },
  {
    name: "Ultimate Wings",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Madoka Boss a Valentine Island.",
    action: "Va tuer Madoka sur Valentine Island.",
    tip: "Taux de drop documente: 1.5%. Cosmetique.",
    summary: "Cosmetique obtenu sur Madoka Boss a Valentine Island.",
    keywords: ["ultimate wings", "madoka", "1.5%", "cosmetique", "boss drop"]
  },
  {
    name: "Void Reaver Artifact",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest Shinobi Boss a Ninja Island (100%).",
    action: "Va tuer Strongest Shinobi sur Ninja Island.",
    tip: "Drop garanti a 100%.",
    summary: "Artefact obtenu sur Strongest Shinobi Boss, drop garanti.",
    keywords: ["void reaver artifact", "void reaver", "strongest shinobi", "100%", "boss drop"]
  },
  {
    name: "Battle Sigil",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest Shinobi Boss a Ninja Island.",
    action: "Va tuer Strongest Shinobi sur Ninja Island.",
    tip: "Taux de drop documente: 2.94%.",
    summary: "Objet obtenu sur Strongest Shinobi Boss a Ninja Island.",
    keywords: ["battle sigil", "strongest shinobi", "2.94%", "boss drop"]
  },
  {
    name: "Eternal Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest Shinobi Boss a Ninja Island.",
    action: "Va tuer Strongest Shinobi sur Ninja Island.",
    tip: "Taux de drop documente: 1.40%.",
    summary: "Composant rare obtenu sur Strongest Shinobi Boss.",
    keywords: ["eternal core", "strongest shinobi", "1.40%", "boss drop"]
  },
  {
    name: "Silent Storm",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yamato Boss a Judgement Island.",
    action: "Va tuer Yamato sur Judgement Island.",
    tip: "Taux de drop documente: 1.15%.",
    summary: "Objet obtenu sur Yamato Boss a Judgement Island.",
    keywords: ["silent storm", "yamato boss", "1.15%", "boss drop"]
  },
  {
    name: "Azure Heart",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yamato Boss a Judgement Island.",
    action: "Va tuer Yamato sur Judgement Island.",
    tip: "Taux de drop documente: 0.5%.",
    summary: "Objet très rare obtenu sur Yamato Boss a Judgement Island.",
    keywords: ["azure heart", "yamato boss", "0.5%", "boss drop"]
  },
  {
    name: "Imperial Outfit",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Yamato Boss a Judgement Island.",
    action: "Va tuer Yamato sur Judgement Island.",
    tip: "Taux de drop documente: 0.9%. Cosmetique.",
    summary: "Cosmetique obtenu sur Yamato Boss a Judgement Island.",
    keywords: ["imperial outfit", "yamato boss", "0.9%", "cosmetique", "boss drop"]
  },
  {
    name: "Saber Armor",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Saber Boss a Boss Island.",
    action: "Invoque Saber avec 1 Boss Key, 100,000 Cash et 175 Gems.",
    tip: "Taux de drop documente: 5%. Cosmetique.",
    summary: "Armure cosmetique obtenue sur Saber Boss a Boss Island.",
    keywords: ["saber armor", "saber boss", "5%", "cosmetique", "boss drop"]
  },
  {
    name: "Imperial Seal",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Qin Shi Boss a Boss Island.",
    action: "Invoque Qin Shi avec 3 Boss Keys, 250,000 Cash et 400 Gems.",
    tip: "Taux de drop documente: 2%.",
    summary: "Objet obtenu sur Qin Shi Boss a Boss Island.",
    keywords: ["imperial seal", "qin shi", "2%", "boss drop"]
  },
  {
    name: "Qin Shi Blindfold",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Qin Shi Boss a Boss Island.",
    action: "Invoque Qin Shi avec 3 Boss Keys, 250,000 Cash et 400 Gems.",
    tip: "Taux de drop documente: 2.5%. Cosmetique.",
    summary: "Cosmetique obtenu sur Qin Shi Boss a Boss Island.",
    keywords: ["qin shi blindfold", "qin shi", "2.5%", "cosmetique", "boss drop"]
  },
  {
    name: "Soul Flame",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ichigo Boss a Boss Island.",
    action: "Invoque Ichigo avec 5 Boss Keys, 350,000 Cash et 600 Gems.",
    tip: "Taux de drop documente: 0.7%.",
    summary: "Objet très rare obtenu sur Ichigo Boss a Boss Island.",
    keywords: ["soul flame", "ichigo boss", "0.7%", "boss drop"]
  },
  {
    name: "Hollow Mask",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ichigo Boss a Boss Island.",
    action: "Invoque Ichigo avec 5 Boss Keys, 350,000 Cash et 600 Gems.",
    tip: "Taux de drop documente: 2%. Cosmetique.",
    summary: "Cosmetique obtenu sur Ichigo Boss a Boss Island.",
    keywords: ["hollow mask", "ichigo boss", "2%", "cosmetique", "boss drop"]
  },
  {
    name: "Spiritual Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ichigo Boss a Boss Island.",
    action: "Invoque Ichigo avec 5 Boss Keys, 350,000 Cash et 600 Gems.",
    tip: "Taux de drop documente: 1.75%.",
    summary: "Composant obtenu sur Ichigo Boss a Boss Island.",
    keywords: ["spiritual core", "ichigo boss", "1.75%", "boss drop"]
  },
  {
    name: "Throne Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gilgamesh Boss a Boss Island.",
    action: "Invoque Gilgamesh avec 1 Divine Grail, 500,000 Cash et 500 Gems.",
    tip: "Taux de drop documente: 11.5%.",
    summary: "Composant obtenu sur Gilgamesh Boss a Boss Island.",
    keywords: ["throne remnant", "gilgamesh", "11.5%", "boss drop"]
  },
  {
    name: "Ancient Shard",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gilgamesh Boss a Boss Island.",
    action: "Invoque Gilgamesh avec 1 Divine Grail, 500,000 Cash et 500 Gems.",
    tip: "Taux de drop documente: 4.5%.",
    summary: "Objet obtenu sur Gilgamesh Boss a Boss Island.",
    keywords: ["ancient shard", "gilgamesh", "4.5%", "boss drop"]
  },
  {
    name: "Golden Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gilgamesh Boss a Boss Island.",
    action: "Invoque Gilgamesh avec 1 Divine Grail, 500,000 Cash et 500 Gems.",
    tip: "Taux de drop documente: 1.5%.",
    summary: "Composant rare obtenu sur Gilgamesh Boss.",
    keywords: ["golden essence", "gilgamesh", "1.5%", "boss drop"]
  },
  {
    name: "Phantasm Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gilgamesh Boss a Boss Island.",
    action: "Invoque Gilgamesh avec 1 Divine Grail, 500,000 Cash et 500 Gems.",
    tip: "Taux de drop documente: 0.5%.",
    summary: "Objet très rare obtenu sur Gilgamesh Boss.",
    keywords: ["phantasm core", "gilgamesh", "0.5%", "boss drop"]
  },
  {
    name: "Gilgamesh Armor",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Gilgamesh Boss a Boss Island.",
    action: "Invoque Gilgamesh avec 1 Divine Grail, 500,000 Cash et 500 Gems.",
    tip: "Taux de drop documente: 1.15%. Cosmetique.",
    summary: "Armure cosmetique obtenue sur Gilgamesh Boss.",
    keywords: ["gilgamesh armor", "gilgamesh", "1.15%", "cosmetique", "boss drop"]
  },
  {
    name: "Morgan Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Corrupted Knight Boss a Boss Island.",
    action: "Invoque Corrupted Knight avec 1 Dark Grail, 650,000 Money et 650 Gems.",
    tip: "Taux de drop documente: 15%.",
    summary: "Composant obtenu sur Corrupted Knight Boss.",
    keywords: ["morgan remnant", "corrupted knight", "15%", "boss drop"]
  },
  {
    name: "Alter Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Corrupted Knight Boss a Boss Island.",
    action: "Invoque Corrupted Knight avec 1 Dark Grail, 650,000 Money et 650 Gems.",
    tip: "Taux de drop documente: 5%.",
    summary: "Composant obtenu sur Corrupted Knight Boss.",
    keywords: ["alter essence", "corrupted knight", "5%", "boss drop"]
  },
  {
    name: "Corruption Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Corrupted Knight Boss a Boss Island.",
    action: "Invoque Corrupted Knight avec 1 Dark Grail, 650,000 Money et 650 Gems.",
    tip: "Taux de drop documente: 1.3%.",
    summary: "Composant rare obtenu sur Corrupted Knight Boss.",
    keywords: ["corruption core", "corrupted knight", "1.3%", "boss drop"]
  },
  {
    name: "Alter Armor",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Corrupted Knight Boss a Boss Island.",
    action: "Invoque Corrupted Knight avec 1 Dark Grail, 650,000 Money et 650 Gems.",
    tip: "Taux de drop documente: 1.5%. Cosmetique.",
    summary: "Armure cosmetique obtenue sur Corrupted Knight Boss.",
    keywords: ["alter armor", "corrupted knight", "1.5%", "cosmetique", "boss drop"]
  },
  {
    name: "Reversal Pulse",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest of Today a Shinjuku Island.",
    action: "Invoque avec 1 Limitless Key.",
    tip: "Taux de drop documente: 15%.",
    summary: "Composant obtenu sur Strongest of Today a Shinjuku Island.",
    keywords: ["reversal pulse", "strongest of today", "gojo", "15%", "boss drop"]
  },
  {
    name: "Six Eye",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest of Today a Shinjuku Island.",
    action: "Invoque avec 1 Limitless Key.",
    tip: "Taux de drop documente: 6%.",
    summary: "Objet obtenu sur Strongest of Today a Shinjuku Island.",
    keywords: ["six eye", "strongest of today", "gojo", "6%", "boss drop"]
  },
  {
    name: "Blue Singularity",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest of Today a Shinjuku Island.",
    action: "Invoque avec 1 Limitless Key.",
    tip: "Taux de drop documente: 2%.",
    summary: "Objet rare obtenu sur Strongest of Today.",
    keywords: ["blue singularity", "strongest of today", "2%", "boss drop"]
  },
  {
    name: "Infinity Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest of Today a Shinjuku Island.",
    action: "Invoque avec 1 Limitless Key.",
    tip: "Taux de drop documente: 0.65%.",
    summary: "Objet très rare obtenu sur Strongest of Today.",
    keywords: ["infinity essence", "strongest of today", "0.65%", "boss drop"]
  },
  {
    name: "Gojo Haori",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest of Today a Shinjuku Island.",
    action: "Invoque avec 1 Limitless Key.",
    tip: "Taux de drop documente: 1.15%. Cosmetique.",
    summary: "Cosmetique obtenu sur Strongest of Today.",
    keywords: ["gojo haori", "strongest of today", "1.15%", "cosmetique", "boss drop"]
  },
  {
    name: "Awakened Cursed Finger",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest in History a Shinjuku Island.",
    action: "Invoque avec 1 Malevolent Key.",
    tip: "Taux de drop documente: 15%.",
    summary: "Composant obtenu sur Strongest in History.",
    keywords: ["awakened cursed finger", "strongest in history", "sukuna", "15%", "boss drop"]
  },
  {
    name: "Vessel Ring",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest in History a Shinjuku Island.",
    action: "Invoque avec 1 Malevolent Key.",
    tip: "Taux de drop documente: 6%.",
    summary: "Objet obtenu sur Strongest in History.",
    keywords: ["vessel ring", "strongest in history", "6%", "boss drop"]
  },
  {
    name: "Malevolent Soul",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest in History a Shinjuku Island.",
    action: "Invoque avec 1 Malevolent Key.",
    tip: "Taux de drop documente: 2%.",
    summary: "Objet rare obtenu sur Strongest in History.",
    keywords: ["malevolent soul", "strongest in history", "2%", "boss drop"]
  },
  {
    name: "Cursed Flesh",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Strongest in History a Shinjuku Island.",
    action: "Invoque avec 1 Malevolent Key.",
    tip: "Taux de drop documente: 0.65%.",
    summary: "Objet très rare obtenu sur Strongest in History.",
    keywords: ["cursed flesh", "strongest in history", "0.65%", "boss drop"]
  },
  {
    name: "Sage Pulse",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Rimuru Boss a Slime Island.",
    action: "Invoque avec 1 Slime Key.",
    tip: "Taux de drop documente: 13.5%.",
    summary: "Composant obtenu sur Rimuru Boss a Slime Island.",
    keywords: ["sage pulse", "rimuru", "slime island", "13.5%", "boss drop"]
  },
  {
    name: "Tempest Seal",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Rimuru Boss a Slime Island.",
    action: "Invoque avec 1 Slime Key.",
    tip: "Taux de drop documente: 5.5%.",
    summary: "Objet obtenu sur Rimuru Boss a Slime Island.",
    keywords: ["tempest seal", "rimuru", "5.5%", "boss drop"]
  },
  {
    name: "Slime Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Rimuru Boss a Slime Island.",
    action: "Invoque avec 1 Slime Key.",
    tip: "Taux de drop documente: 1.75%.",
    summary: "Composant obtenu sur Rimuru Boss a Slime Island.",
    keywords: ["slime remnant", "rimuru", "1.75%", "boss drop"]
  },
  {
    name: "Slime Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Rimuru Boss a Slime Island.",
    action: "Invoque avec 1 Slime Key.",
    tip: "Taux de drop documente: 0.55%.",
    summary: "Objet très rare obtenu sur Rimuru Boss.",
    keywords: ["slime core", "rimuru", "0.55%", "boss drop"]
  },
  {
    name: "Slime Wings",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Rimuru Boss a Slime Island.",
    action: "Invoque avec 1 Slime Key.",
    tip: "Taux de drop documente: 1.25%. Cosmetique.",
    summary: "Cosmetique obtenu sur Rimuru Boss a Slime Island.",
    keywords: ["slime wings", "rimuru", "1.25%", "cosmetique", "boss drop"]
  },
  {
    name: "Demonic Fragment",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Anos Boss a Academy Island.",
    action: "Invoque avec 1 Calamity Seal.",
    tip: "Taux de drop documente: 11.5%.",
    summary: "Composant obtenu sur Anos Boss a Academy Island.",
    keywords: ["demonic fragment", "anos", "academy island", "11.5%", "boss drop"]
  },
  {
    name: "Demonic Shard",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Anos Boss a Academy Island.",
    action: "Invoque avec 1 Calamity Seal.",
    tip: "Taux de drop documente: 4.5%.",
    summary: "Objet obtenu sur Anos Boss a Academy Island.",
    keywords: ["demonic shard", "anos", "4.5%", "boss drop"]
  },
  {
    name: "Destruction Eye",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Anos Boss a Academy Island.",
    action: "Invoque avec 1 Calamity Seal.",
    tip: "Taux de drop documente: 1%.",
    summary: "Objet rare obtenu sur Anos Boss.",
    keywords: ["destruction eye", "anos", "1%", "boss drop"]
  },
  {
    name: "Shadow Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Atomic Boss a Lawless Island.",
    action: "Invoque Atomic avec 1 Abyss Sigil.",
    tip: "Taux de drop documente: 2.85% a 4.5% selon la difficulté.",
    summary: "Composant obtenu sur Atomic Boss a Lawless Island.",
    keywords: ["shadow remnant", "atomic boss", "lawless island", "boss drop"]
  },
  {
    name: "Atomic Outfit",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Atomic Boss a Lawless Island.",
    action: "Invoque Atomic avec 1 Abyss Sigil.",
    tip: "Taux de drop documente: 0.75% a 1.3% selon la difficulté. Cosmetique.",
    summary: "Cosmetique obtenu sur Atomic Boss a Lawless Island.",
    keywords: ["atomic outfit", "atomic boss", "cosmetique", "boss drop"]
  },
  {
    name: "Demon Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Moon Slayer Boss a Boss Island.",
    action: "Invoque Moon Slayer avec 1 Upper Seal, 700,000 Money et 700 Gems.",
    tip: "Taux de drop documente: 13.41%.",
    summary: "Composant obtenu sur Moon Slayer Boss a Boss Island.",
    keywords: ["demon remnant", "moon slayer", "13.41%", "boss drop"]
  },
  {
    name: "Lunar Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Moon Slayer Boss a Boss Island.",
    action: "Invoque Moon Slayer avec 1 Upper Seal, 700,000 Money et 700 Gems.",
    tip: "Taux de drop documente: 4.63%.",
    summary: "Composant obtenu sur Moon Slayer Boss.",
    keywords: ["lunar essence", "moon slayer", "4.63%", "boss drop"]
  },
  {
    name: "Moon Outfit",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Moon Slayer Boss a Boss Island.",
    action: "Invoque Moon Slayer avec 1 Upper Seal, 700,000 Money et 700 Gems.",
    tip: "Taux de drop documente: 1.22%. Cosmetique.",
    summary: "Cosmetique obtenu sur Moon Slayer Boss.",
    keywords: ["moon outfit", "moon slayer", "1.22%", "cosmetique", "boss drop"]
  },
  {
    name: "Crescent Shard",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Moon Slayer Boss a Boss Island.",
    action: "Invoque Moon Slayer avec 1 Upper Seal, 700,000 Money et 700 Gems.",
    tip: "Taux de drop documente: 1.06%.",
    summary: "Objet obtenu sur Moon Slayer Boss.",
    keywords: ["crescent shard", "moon slayer", "1.06%", "boss drop"]
  },
  {
    name: "Moon Crest",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Moon Slayer Boss a Boss Island.",
    action: "Invoque Moon Slayer avec 1 Upper Seal, 700,000 Money et 700 Gems.",
    tip: "Taux de drop documente: 0.45%.",
    summary: "Objet très rare obtenu sur Moon Slayer Boss.",
    keywords: ["moon crest", "moon slayer", "0.45%", "boss drop"]
  },
  {
    name: "Glacier Remnant",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island.",
    action: "Invoque Ice Queen avec 1 Frost Relic, 750,000 Money et 750 Gems.",
    tip: "Taux de drop documente: 5.37%.",
    summary: "Composant obtenu sur Ice Queen Boss.",
    keywords: ["glacier remnant", "ice queen", "5.37%", "boss drop"]
  },
  {
    name: "Ice Queen Outfit",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island.",
    action: "Invoque Ice Queen avec 1 Frost Relic, 750,000 Money et 750 Gems.",
    tip: "Taux de drop documente: 1.42%. Cosmetique.",
    summary: "Cosmetique obtenu sur Ice Queen Boss.",
    keywords: ["ice queen outfit", "ice queen", "1.42%", "cosmetique", "boss drop"]
  },
  {
    name: "Ice Core",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island.",
    action: "Invoque Ice Queen avec 1 Frost Relic, 750,000 Money et 750 Gems.",
    tip: "Taux de drop documente: 0.53%.",
    summary: "Objet très rare obtenu sur Ice Queen Boss.",
    keywords: ["ice core", "ice queen", "0.53%", "boss drop"]
  },
  {
    name: "Bloodline Stone",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Sea Serpent et Kraken en Open Sea / Deep Sea.",
    action: "Reste en mer avec au moins 500,000 bounty, loin des îles.",
    tip: "Utile pour les routes de progression liees aux clans.",
    summary: "Objet obtenu sur les boss de mer Sea Serpent et Kraken.",
    keywords: ["bloodline stone", "sea serpent", "kraken", "open sea", "boss drop"]
  },
  {
    name: "Clan Reroll",
    type: "Objet",
    category: "item",
    level: "Tous niveaux",
    location: "Drop de Sea Serpent et Kraken en Open Sea / Deep Sea.",
    action: "Utilise-le pour changer ton clan.",
    tip: "Les boss de mer sont la source principale de Clan Reroll.",
    summary: "Consommable permettant de reroller ton clan, obtenu sur les boss de mer.",
    keywords: ["clan reroll", "reroll", "clan", "sea serpent", "kraken"]
  },
  {
    name: "Cosmic Essence",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Cosmic Being a Punch Island (Sea 2).",
    action: "Attends le spawn du World Boss sur timer serveur d'environ 30 minutes.",
    tip: "World Boss, taux exacts non confirmes publiquement.",
    summary: "Composant obtenu sur Cosmic Being, le World Boss de Sea 2.",
    keywords: ["cosmic essence", "cosmic being", "punch island", "sea 2", "world boss"]
  },
  {
    name: "Star Mark",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Cosmic Being a Punch Island (Sea 2).",
    action: "Attends le spawn du World Boss sur timer serveur.",
    tip: "World Boss, taux exacts non confirmes publiquement.",
    summary: "Objet obtenu sur Cosmic Being a Punch Island.",
    keywords: ["star mark", "cosmic being", "punch island", "boss drop"]
  },
  {
    name: "Galaxy Shard",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Cosmic Being a Punch Island (Sea 2).",
    action: "Attends le spawn du World Boss sur timer serveur.",
    tip: "World Boss, taux exacts non confirmes publiquement.",
    summary: "Objet obtenu sur Cosmic Being a Punch Island.",
    keywords: ["galaxy shard", "cosmic being", "punch island", "boss drop"]
  },
  {
    name: "Monster Pulse",
    type: "Objet",
    category: "item",
    level: "Boss drop",
    location: "Se drop sur Cosmic Being a Punch Island (Sea 2).",
    action: "Attends le spawn du World Boss sur timer serveur.",
    tip: "World Boss, taux exacts non confirmes publiquement.",
    summary: "Objet obtenu sur Cosmic Being a Punch Island.",
    keywords: ["monster pulse", "cosmic being", "punch island", "boss drop"]
  },
  // ── ARMES ──
  {
    name: "Katana",
    type: "Arme",
    category: "arme",
    level: "Debutant",
    location: "Achetable chez les marchands d'armes sur plusieurs îles.",
    action: "Bonne arme de départ pour les builds sword.",
    tip: "A remplacer rapidement par une arme plus puissante.",
    summary: "Arme de départ pour les builds sword, accessible et simple.",
    keywords: ["katana", "sword", "arme", "debutant"]
  },
  {
    name: "Excalibur",
    type: "Arme",
    category: "arme",
    level: "Summon drop",
    location: "Se drop sur Saber Boss a Boss Island (2%).",
    action: "Invoque Saber avec 1 Boss Key, 100,000 Cash et 175 Gems.",
    tip: "Arme sword puissante pour les builds mid-game a endgame.",
    summary: "Epee legendaire droppable sur Saber Boss, excellente pour les builds sword.",
    keywords: ["excalibur", "saber", "arme", "sword", "boss island", "2%"]
  },
  {
    name: "Frost Brand Weapon",
    type: "Arme",
    category: "arme",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island (1.21%).",
    action: "Invoque Ice Queen avec 1 Frost Relic.",
    tip: "Arme sword de la route Ice Queen / Frostbane.",
    summary: "Arme sword obtenue sur Ice Queen Boss a Boss Island.",
    keywords: ["frost brand weapon", "arme", "sword", "ice queen", "1.21%"]
  },

  // ── MASTERIES ──
  {
    name: "Shadow Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Shadow Trainer sur Sailor Island. Nécessite race Shadowborn.",
    action: "Obtiens la race Shadowborn d'abord, puis trouve le Shadow Trainer.",
    tip: "L'une des masteries les plus puissantes du jeu pour les builds shadow.",
    summary: "Mastery endgame necessitant la race Shadowborn, obtenue via le Shadow Trainer.",
    keywords: ["shadow mastery", "shadow", "mastery", "shadowborn", "sailor island"]
  },
  {
    name: "Yamato Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Yamato Trainer. Nécessite la race Swordblessed.",
    action: "Obtiens la race Swordblessed, puis trouve le Yamato Trainer.",
    tip: "Mastery sword très puissante, nécessite Swordblessed.",
    summary: "Mastery sword endgame liee a la race Swordblessed et au Yamato Trainer.",
    keywords: ["yamato mastery", "yamato", "mastery", "swordblessed", "sword"]
  },
  {
    name: "Rimuru Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Nécessite la race Slime.",
    action: "Obtiens la race Slime via Race Reroll, puis cherche le Trainer.",
    tip: "Mastery liee a la race Slime, très complete.",
    summary: "Mastery endgame necessitant la race Slime.",
    keywords: ["rimuru mastery", "rimuru", "mastery", "slime", "race slime"]
  },
  {
    name: "Strongest of Today Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Shinjuku Island. Nécessite 1 Limitless Key pour invoquer le boss.",
    action: "Farm Gojo pour des Limitless Keys, puis invoque Strongest of Today.",
    tip: "Mastery Gojo endgame, requiert beaucoup de Limitless Keys.",
    summary: "Mastery endgame obtenue en battant Strongest of Today sur Shinjuku Island.",
    keywords: ["strongest of today mastery", "mastery", "gojo", "limitless key", "shinjuku"]
  },
  {
    name: "Strongest in History Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Shinjuku Island. Nécessite 1 Malevolent Key pour invoquer le boss.",
    action: "Farm Sukuna pour des Malevolent Keys, puis invoque Strongest in History.",
    tip: "Mastery Sukuna endgame, nécessite Malevolent Key.",
    summary: "Mastery endgame obtenue en battant Strongest in History sur Shinjuku Island.",
    keywords: ["strongest in history mastery", "mastery", "sukuna", "malevolent key", "shinjuku"]
  },
  {
    name: "Manipulator Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Lie au Manipulator Questline. Nécessite race Shinigami.",
    action: "Obtiens la race Shinigami, puis suis le Manipulator Questline.",
    tip: "Mastery Aizen liee a la race Shinigami.",
    summary: "Mastery Aizen endgame nécessite la race Shinigami et le Manipulator Questline.",
    keywords: ["manipulator mastery", "aizen", "mastery", "shinigami", "questline"]
  },
  {
    name: "Babylon Key Crafter",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Nécessite la race Servant.",
    action: "Obtiens la race Servant via Race Reroll.",
    tip: "Mastery melee puissante liee a la race Servant.",
    summary: "Mastery endgame necessitant la race Servant.",
    keywords: ["babylon key crafter", "babylon", "mastery", "servant", "melee"]
  },
  {
    name: "The Strongest Shinobi Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Ninja Island. Nécessite race Warlord.",
    action: "Obtiens Warlord puis cherche le Trainer sur Ninja Island.",
    tip: "Mastery shinobi liee a la race Warlord.",
    summary: "Mastery endgame de Ninja Island, nécessite la race Warlord.",
    keywords: ["strongest shinobi mastery", "shinobi", "mastery", "warlord", "ninja island"]
  },
  {
    name: "Blessed Maiden Mastery",
    type: "Mastery",
    category: "mastery",
    level: "Endgame",
    location: "Nécessite la race Galevorn.",
    action: "Obtiens Galevorn via Race Reroll.",
    tip: "Mastery melee liee a la race Galevorn.",
    summary: "Mastery endgame necessitant la race Galevorn.",
    keywords: ["blessed maiden mastery", "mastery", "galevorn", "melee"]
  },

  // ── TITRES ──
  {
    name: "Shadow Monarch Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Jinwoo Boss a Sailor Island (3%).",
    action: "Farm Jinwoo sur Sailor Island.",
    tip: "Taux de drop: 3%. Titre prestige de la route Shadow.",
    summary: "Titre obtenu sur Jinwoo Boss, symbole de la route Shadow Monarch.",
    keywords: ["shadow monarch title", "titre", "jinwoo", "shadow", "3%"]
  },
  {
    name: "Vampire King Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Alucard Boss a Sailor Island (2.5%).",
    action: "Farm Alucard sur Sailor Island.",
    tip: "Taux de drop: 2.5%.",
    summary: "Titre obtenu sur Alucard Boss a Sailor Island.",
    keywords: ["vampire king title", "titre", "alucard", "vampire", "2.5%"]
  },
  {
    name: "Honored One Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Gojo Boss a Shibuya Station (5%).",
    action: "Farm Gojo sur Shibuya Station.",
    tip: "Taux de drop: 5%.",
    summary: "Titre obtenu sur Gojo Boss a Shibuya Station.",
    keywords: ["honored one title", "titre", "gojo", "5%"]
  },
  {
    name: "Curse King Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Sukuna Boss a Shibuya Station (4%).",
    action: "Farm Sukuna sur Shibuya Station.",
    tip: "Taux de drop: 4%.",
    summary: "Titre obtenu sur Sukuna Boss a Shibuya Station.",
    keywords: ["curse king title", "titre", "sukuna", "4%"]
  },
  {
    name: "Manipulator Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Aizen Boss (2%).",
    action: "Farm Aizen sur sa zone.",
    tip: "Taux de drop: 2%.",
    summary: "Titre obtenu sur Aizen Boss.",
    keywords: ["manipulator title", "titre", "aizen", "2%"]
  },
  {
    name: "Star Maiden Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Madoka Boss a Valentine Island (1.2%).",
    action: "Farm Madoka sur Valentine Island.",
    tip: "Taux de drop: 1.2%.",
    summary: "Titre obtenu sur Madoka Boss a Valentine Island.",
    keywords: ["star maiden title", "titre", "madoka", "1.2%"]
  },
  {
    name: "Battlefield Warlord Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Strongest Shinobi Boss a Ninja Island (1.5%).",
    action: "Farm Strongest Shinobi sur Ninja Island.",
    tip: "Taux de drop: 1.5%.",
    summary: "Titre obtenu sur Strongest Shinobi Boss a Ninja Island.",
    keywords: ["battlefield warlord title", "titre", "strongest shinobi", "1.5%"]
  },
  {
    name: "Blade Sovereign Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Yamato Boss a Judgement Island (1%).",
    action: "Farm Yamato sur Judgement Island.",
    tip: "Taux de drop: 1%.",
    summary: "Titre obtenu sur Yamato Boss a Judgement Island.",
    keywords: ["blade sovereign title", "titre", "yamato boss", "1%"]
  },
  {
    name: "Blade Master Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Saber Boss a Boss Island (5%).",
    action: "Invoque Saber avec 1 Boss Key.",
    tip: "Taux de drop: 5%.",
    summary: "Titre obtenu sur Saber Boss a Boss Island.",
    keywords: ["blade master title", "titre", "saber boss", "5%"]
  },
  {
    name: "Soul Reaper Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Ichigo Boss a Boss Island (1%).",
    action: "Invoque Ichigo avec 5 Boss Keys.",
    tip: "Taux de drop: 1%.",
    summary: "Titre obtenu sur Ichigo Boss a Boss Island.",
    keywords: ["soul reaper title", "titre", "ichigo boss", "1%"]
  },
  {
    name: "Golden King Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Gilgamesh Boss a Boss Island (1%).",
    action: "Invoque Gilgamesh avec 1 Divine Grail.",
    tip: "Taux de drop: 1%.",
    summary: "Titre obtenu sur Gilgamesh Boss a Boss Island.",
    keywords: ["golden king title", "titre", "gilgamesh", "1%"]
  },
  {
    name: "Strongest Sorcerer Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Strongest of Today a Shinjuku Island (1%).",
    action: "Invoque avec 1 Limitless Key.",
    tip: "Taux de drop: 1%.",
    summary: "Titre obtenu sur Strongest of Today.",
    keywords: ["strongest sorcerer title", "titre", "strongest of today", "gojo", "1%"]
  },
  {
    name: "Disgraced One Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Strongest in History a Shinjuku Island (1%).",
    action: "Invoque avec 1 Malevolent Key.",
    tip: "Taux de drop: 1%.",
    summary: "Titre obtenu sur Strongest in History.",
    keywords: ["disgraced one title", "titre", "strongest in history", "sukuna", "1%"]
  },
  {
    name: "Demon Lord Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Rimuru Boss a Slime Island (0.9%).",
    action: "Invoque avec 1 Slime Key.",
    tip: "Taux de drop: 0.9%.",
    summary: "Titre obtenu sur Rimuru Boss a Slime Island.",
    keywords: ["demon lord title", "titre", "rimuru", "0.9%"]
  },
  {
    name: "Demon King Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Anos Boss a Academy Island (1%).",
    action: "Invoque avec 1 Calamity Seal.",
    tip: "Taux de drop: 1%.",
    summary: "Titre obtenu sur Anos Boss.",
    keywords: ["demon king title", "titre", "anos", "1%"]
  },
  {
    name: "Frost Empress Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Ice Queen Boss a Boss Island (0.65%, pity 155).",
    action: "Invoque Ice Queen avec 1 Frost Relic.",
    tip: "Taux de drop: 0.65%. Pity confirme a 155.",
    summary: "Titre obtenu sur Ice Queen Boss avec pity a 155 kills.",
    keywords: ["frost empress title", "titre", "ice queen", "0.65%", "pity"]
  },
  {
    name: "Living Weapon Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Yuji Boss a Shibuya Station (5%).",
    action: "Farm Yuji sur Shibuya Station.",
    tip: "Taux de drop: 5%.",
    summary: "Titre obtenu sur Yuji Boss a Shibuya Station.",
    keywords: ["living weapon title", "titre", "yuji", "5%"]
  },
  {
    name: "Dragon Queen Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Sea Serpent et Kraken en Open Sea (pity 150).",
    action: "Reste en mer avec 500,000 bounty minimum.",
    tip: "Pity confirme a 150 kills.",
    summary: "Titre obtenu sur les boss de mer avec pity a 150.",
    keywords: ["dragon queen title", "titre", "sea serpent", "kraken", "pity 150"]
  },
  {
    name: "Cosmic Being Title",
    type: "Titre",
    category: "titre",
    level: "Boss drop",
    location: "Se drop sur Cosmic Being a Punch Island, Sea 2 (pity 75).",
    action: "Attends le spawn du World Boss.",
    tip: "Pity confirme a 75 kills.",
    summary: "Titre obtenu sur le World Boss Cosmic Being avec pity a 75.",
    keywords: ["cosmic being title", "titre", "cosmic being", "pity 75"]
  },

  // ── ZONES ──
  {
    name: "Shibuya Station",
    type: "Île",
    category: "île",
    level: "5000+",
    location: "Zone avancee accessible après plusieurs îles de progression.",
    action: "Farm Yuji, Gojo et Sukuna pour Limitless Key et Malevolent Key.",
    tip: "Zone très importante pour les routes endgame Gojo et Sukuna.",
    summary: "Zone mid-endgame avec les boss Yuji, Gojo et Sukuna.",
    keywords: ["shibuya station", "shibuya", "gojo", "sukuna", "yuji", "5000"]
  },
  {
    name: "Ninja Island",
    type: "Île",
    category: "île",
    level: "Endgame",
    location: "Zone endgame accessible après une longue progression.",
    action: "Farm Strongest Shinobi pour des drops garantis et des materiaux endgame.",
    tip: "Boss très rentable avec rerolls garantis a 100%.",
    summary: "Île endgame avec le boss Strongest Shinobi, très rentable pour les rerolls.",
    keywords: ["ninja island", "shinobi", "endgame", "strongest shinobi"]
  },
  {
    name: "Judgement Island",
    type: "Île",
    category: "île",
    level: "Endgame",
    location: "Zone endgame.",
    action: "Farm Yamato Boss pour les materiaux de la route Yamato.",
    tip: "Important pour la route Yamato et la race Swordblessed.",
    summary: "Île endgame avec le boss Yamato, utile pour les builds sword.",
    keywords: ["judgement island", "yamato", "endgame", "sword"]
  },
  {
    name: "Boss Island",
    type: "Île",
    category: "île",
    level: "Tous niveaux",
    location: "Accessible avec des Boss Keys.",
    action: "Invoque des boss avec Keys, Cash et Gems pour obtenir des drops rares.",
    tip: "Plus le boss est cher a invoquer, meilleurs sont les drops.",
    summary: "Île de summon ou on invoque des boss puissants avec des ressources.",
    keywords: ["boss island", "summon", "boss key", "saber", "qin shi", "ichigo", "gilgamesh"]
  },
  {
    name: "Valentine Island",
    type: "Île",
    category: "île",
    level: "Late game",
    location: "Zone late game.",
    action: "Farm Madoka pour des rerolls garantis et des drops rares.",
    tip: "Madoka donne Race Reroll et Trait Reroll a 100%.",
    summary: "Île late game avec Madoka Boss, excellente source de rerolls garantis.",
    keywords: ["valentine island", "madoka", "late game", "reroll"]
  },
  {
    name: "Slime Island",
    type: "Île",
    category: "île",
    level: "Endgame",
    location: "Zone endgame accessible avec une Slime Key.",
    action: "Invoque Rimuru avec 1 Slime Key.",
    tip: "Zone liee a la race Slime et la Rimuru Mastery.",
    summary: "Île endgame avec le boss Rimuru, lie a la race Slime.",
    keywords: ["slime island", "rimuru", "slime key", "endgame"]
  },
  {
    name: "Hueco Mundo",
    type: "Île",
    category: "île",
    level: "Endgame",
    location: "Zone endgame aussi appelee Hollow Island selon les sources.",
    action: "Farm Aizen pour Haki Color Reroll garanti et materiaux Manipulator.",
    tip: "Aizen donne 100% de Haki Color Reroll, meilleure source du jeu.",
    summary: "Île endgame avec Aizen Boss, meilleure source de Haki Color Reroll.",
    keywords: ["hueco mundo", "hollow island", "aizen", "haki color reroll", "endgame"]
  },
  {
    name: "Shinjuku Island",
    type: "Île",
    category: "île",
    level: "Endgame",
    location: "Zone endgame.",
    action: "Invoque Strongest of Today ou Strongest in History avec les bonnes cles.",
    tip: "Source des masteries Gojo et Sukuna endgame.",
    summary: "Île endgame pour invoquer Strongest of Today et Strongest in History.",
    keywords: ["shinjuku island", "shinjuku", "strongest of today", "strongest in history", "endgame"]
  }
];




const mobGuideData = [
  {
    name: "Thief (Starter Island)",
    zone: "Starter Island",
    level: "1-50",
    loot: "Cash, EXP, Race Reroll (rare), Trait Reroll (rare).",
    note: "Mobs de départ, drops très basiques pour commencer."
  },
  {
    name: "Jungle Mobs (Jungle Island)",
    zone: "Jungle Island",
    level: "250-750",
    loot: "Cash, EXP, Race Reroll (rare), Trait Reroll (rare).",
    note: "Mobs de progression early game."
  },
  {
    name: "Desert Mobs (Desert Island)",
    zone: "Desert Island",
    level: "750-1500",
    loot: "Cash, EXP, Race Reroll (rare), Trait Reroll (rare), Haki Color Reroll (rare).",
    note: "Mobs mid-game, debuts des drops Haki."
  },
  {
    name: "Snow Mobs (Snow Island)",
    zone: "Snow Island",
    level: "1500-3000",
    loot: "Cash, EXP, Race Reroll, Trait Reroll, Haki Color Reroll.",
    note: "Bons mobs mid-game pour rerolls de base."
  },
  {
    name: "Shibuya Mobs (Shibuya Station)",
    zone: "Shibuya Station",
    level: "5000+",
    loot: "Cash, EXP, Energy Core (rare), Race Reroll, Trait Reroll.",
    note: "Mobs avances. Energy Core utilisable pour certains crafts."
  },
  {
    name: "Ninja Mobs (Ninja Island)",
    zone: "Ninja Island",
    level: "Endgame",
    loot: "Cash, EXP, Race Reroll, Trait Reroll, Battle Sigil (très rare).",
    note: "Mobs endgame, faibles drops de materiaux rares."
  },
  {
    name: "Hollow Mobs (Hueco Mundo)",
    zone: "Hueco Mundo",
    level: "Endgame",
    loot: "Cash, EXP, Reiatsu Core (rare), Mirage Pendant (très rare).",
    note: "Mobs de la zone Aizen, quelques drops de route utiles."
  },
  {
    name: "Sea Mobs (Open Sea)",
    zone: "Open Sea",
    level: "500,000+ bounty",
    loot: "Cash, EXP, Bloodline Stone (rare), Clan Reroll (rare).",
    note: "Nécessite d'être loin des îles. Source de Clan Reroll."
  },
  {
    name: "Slime Mobs (Slime Island)",
    zone: "Slime Island",
    level: "Endgame",
    loot: "Cash, EXP, Slime Remnant (rare), Sage Pulse (très rare).",
    note: "Mobs de la zone Rimuru."
  },
  {
    name: "Academy Mobs (Academy Island)",
    zone: "Academy Island",
    level: "Endgame",
    loot: "Cash, EXP, Demonic Fragment (rare), Demonic Shard (très rare).",
    note: "Mobs de la zone Anos."
  }
];

const weaponOnlyData = [
  {
    name: "Katana",
    type: "Sword",
    source: "Marchands d'armes sur plusieurs îles",
    drop: "Achat",
    stats: "Stats de base faibles.",
    note: "Arme de départ pour les builds sword. A remplacer rapidement."
  },
  {
    name: "Abyss Edge",
    type: "Sword",
    source: "Jinwoo Boss - Sailor Island",
    drop: "17.5%",
    stats: "Arme forte de la route Shadow.",
    note: "Indispensable pour les builds Jinwoo / Shadow Monarch."
  },
  {
    name: "Casull",
    type: "Gun",
    source: "Alucard Boss - Sailor Island",
    drop: "2%",
    stats: "Arme de la route Vampire.",
    note: "Utile pour les builds Alucard et Vampire King."
  },
  {
    name: "Excalibur",
    type: "Sword",
    source: "Saber Boss - Boss Island",
    drop: "2%",
    stats: "Arme sword puissante mid-endgame.",
    note: "Nécessite 1 Boss Key, 100,000 Cash et 175 Gems pour invoquer Saber."
  },
  {
    name: "Sacred Bow",
    type: "Bow",
    source: "Madoka Boss - Valentine Island",
    drop: "4%",
    stats: "Arc de la route Madoka.",
    note: "Bonne arme late game obtenue sur Madoka Boss."
  },
  {
    name: "Frost Brand",
    type: "Sword",
    source: "Ice Queen Boss - Boss Island",
    drop: "1.21%",
    stats: "Arme sword endgame liee a Frostbane.",
    note: "Nécessite 1 Frost Relic, 750,000 Money et 750 Gems."
  },
  {
    name: "Frozen Will",
    type: "Sword",
    source: "Yamato Boss - Judgement Island",
    drop: "4.25%",
    stats: "Arme / materiau de la route Yamato.",
    note: "Composant important pour la progression Yamato."
  },
  {
    name: "Dark Ring",
    type: "Accessoire",
    source: "Jinwoo Boss - Sailor Island",
    drop: "7%",
    stats: "Accessoire de la route Shadow.",
    note: "Bon drop early game de Jinwoo Boss."
  },
  {
    name: "Blood Ring",
    type: "Accessoire",
    source: "Alucard Boss - Sailor Island",
    drop: "2%",
    stats: "Accessoire de la route Vampire.",
    note: "Drop de la route Alucard / Vampire."
  },
  {
    name: "Soul Amulet",
    type: "Accessoire",
    source: "Alucard Boss - Sailor Island",
    drop: "8%",
    stats: "Accessoire de la route Alucard.",
    note: "Bon accessoire obtenu sur Alucard."
  },
  {
    name: "Limitless Ring",
    type: "Accessoire",
    source: "Gojo Boss - Shibuya Station",
    drop: "8%",
    stats: "Accessoire de la route Gojo.",
    note: "Drop interessant en farmant Gojo."
  },
  {
    name: "Six Eye",
    type: "Accessoire",
    source: "Strongest of Today - Shinjuku Island",
    drop: "6%",
    stats: "Accessoire endgame de la route Gojo.",
    note: "Nécessite 1 Limitless Key pour invoquer le boss."
  },
  {
    name: "Vessel Ring",
    type: "Accessoire",
    source: "Strongest in History - Shinjuku Island",
    drop: "6%",
    stats: "Accessoire endgame de la route Sukuna.",
    note: "Nécessite 1 Malevolent Key pour invoquer le boss."
  }
];

const matGuideData = [
  {
    name: "Limitless Key",
    type: "Cle",
    source: "Gojo Boss - Shibuya Station",
    drop: "30%",
    usedFor: "Invoquer Strongest of Today sur Shinjuku Island.",
    note: "Source principale : farm Gojo regulierement."
  },
  {
    name: "Malevolent Key",
    type: "Cle",
    source: "Sukuna Boss - Shibuya Station",
    drop: "30%",
    usedFor: "Invoquer Strongest in History sur Shinjuku Island.",
    note: "Source principale : farm Sukuna regulierement."
  },
  {
    name: "Slime Key",
    type: "Cle",
    source: "Drop de boss / craft communautaire",
    drop: "Non confirme",
    usedFor: "Invoquer Rimuru Boss sur Slime Island.",
    note: "Verifier la source exacte aupres de la communaute."
  },
  {
    name: "Calamity Seal",
    type: "Cle",
    source: "Drop de boss / craft communautaire",
    drop: "Non confirme",
    usedFor: "Invoquer Anos Boss sur Academy Island.",
    note: "Verifier la source exacte aupres de la communaute."
  },
  {
    name: "Abyss Sigil",
    type: "Cle",
    source: "Drop de boss / craft communautaire",
    drop: "Non confirme",
    usedFor: "Invoquer Atomic Boss sur Lawless Island.",
    note: "Les drops d'Atomic varient selon la difficulté."
  },
  {
    name: "Divine Grail",
    type: "Cle craft",
    source: "Craft selon les guides communautaires",
    drop: "Craft",
    usedFor: "Invoquer Gilgamesh Boss sur Boss Island.",
    note: "Nécessite des materiaux de craft specifiques."
  },
  {
    name: "Dark Grail",
    type: "Cle craft",
    source: "Craft selon les guides communautaires",
    drop: "Craft",
    usedFor: "Invoquer Corrupted Knight Boss sur Boss Island.",
    note: "Nécessite des materiaux de craft specifiques."
  },
  {
    name: "Frost Relic",
    type: "Cle craft",
    source: "Craft selon les guides communautaires",
    drop: "Craft",
    usedFor: "Invoquer Ice Queen Boss sur Boss Island.",
    note: "Nécessite 750,000 Money et 750 Gems en plus."
  },
  {
    name: "Upper Seal",
    type: "Cle craft",
    source: "Craft selon les guides communautaires",
    drop: "Craft",
    usedFor: "Invoquer Moon Slayer Boss sur Boss Island.",
    note: "Nécessite 700,000 Money et 700 Gems en plus."
  },
  {
    name: "Boss Ticket",
    type: "Consommable",
    source: "Saber Boss (100%), nombreux autres boss",
    drop: "100% sur Saber",
    usedFor: "Accéder au Boss Rush sur Sailor Island.",
    note: "Saber Boss est la meilleure source avec drop garanti."
  },
  {
    name: "Dungeon Key",
    type: "Consommable",
    source: "Nombreux boss, Strongest Shinobi (100%)",
    drop: "Variable",
    usedFor: "Entrer dans les donjons du jeu.",
    note: "Strongest Shinobi et Madoka donnent 100% de drop."
  },
  {
    name: "Hogyoku Fragment",
    type: "Materiau de route",
    source: "Aizen Boss - Hueco Mundo",
    drop: "1.2%",
    usedFor: "Route Manipulator / True Aizen.",
    note: "Très rare, important pour la progression Aizen."
  },
  {
    name: "Infinity Core",
    type: "Materiau de route",
    source: "Gojo Boss - Shibuya Station",
    drop: "3%",
    usedFor: "Crafts lies a la route Gojo.",
    note: "Rare, a farmer en tuant Gojo regulierement."
  },
  {
    name: "Crimson Heart",
    type: "Materiau de route",
    source: "Sukuna Boss - Shibuya Station",
    drop: "2.5%",
    usedFor: "Crafts lies a la route Sukuna.",
    note: "Rare, a farmer en tuant Sukuna regulierement."
  },
  {
    name: "Yamato Essence",
    type: "Materiau de route",
    source: "Yamato Boss - Judgement Island",
    drop: "2.5%",
    usedFor: "Crafts lies a Yamato Mastery.",
    note: "Nécessaire pour la route Yamato."
  },
  {
    name: "Reversal Pulse",
    type: "Materiau de route",
    source: "Strongest of Today - Shinjuku Island",
    drop: "15%",
    usedFor: "Route Gojo endgame.",
    note: "Nécessite 1 Limitless Key pour accéder au boss."
  },
  {
    name: "Awakened Cursed Finger",
    type: "Materiau de route",
    source: "Strongest in History - Shinjuku Island",
    drop: "15%",
    usedFor: "Route Sukuna endgame.",
    note: "Nécessite 1 Malevolent Key pour accéder au boss."
  },
  {
    name: "Bloodline Stone",
    type: "Materiau de clan",
    source: "Sea Serpent / Kraken - Open Sea",
    drop: "Non confirme",
    usedFor: "Routes de progression liees aux clans.",
    note: "Nécessite 500,000 bounty et rester loin des îles."
  },
  {
    name: "Shadow Heart",
    type: "Materiau de route",
    source: "Jinwoo Boss - Sailor Island",
    drop: "2%",
    usedFor: "Route Shadow Monarch.",
    note: "Rare, important pour la progression Shadow."
  },
  {
    name: "Void Reaver Artifact",
    type: "Artefact",
    source: "Strongest Shinobi Boss - Ninja Island",
    drop: "100%",
    usedFor: "Progression endgame liee a Ninja Island.",
    note: "Drop garanti a chaque kill de Strongest Shinobi."
  }
];

const npcGuideData = [
  // ── QUEST NPCs ──
  { name: "Quest NPC 1", rôle: "Donneur de quete", location: "Starter Island - Sous l'arbre près du spawn", service: "Quete Thief Hunter. Niveaux 0-99.", note: "Quete: Tue des Thieves. Récompense: Gold + EXP.", questId: "q1" },
  { name: "Quest NPC 2", rôle: "Donneur de quete", location: "Starter Island - Près du rivage", service: "Quete Thief Boss. Niveaux 100-249.", note: "Quete: Tue le Thief Boss. Récompense: Gold + EXP.", questId: "q2" },
  { name: "Quest NPC 3", rôle: "Donneur de quete", location: "Jungle Island - Près du pont en bois", service: "Quete Monkey Hunter. Niveaux 250-499.", note: "Quete: Tue des singes. Récompense: Gold + EXP.", questId: "q3" },
  { name: "Quest NPC 4", rôle: "Donneur de quete", location: "Jungle Island - Sur une falaise derriere les tentes rouges", service: "Quete Monkey Boss. Niveaux 500-749.", note: "Quete: Tue le Monkey Boss. Récompense: Gold + EXP.", questId: "q4" },
  { name: "Quest NPC 5", rôle: "Donneur de quete", location: "Desert Island - Près des docks, a droite du portail", service: "Quete Desert Bandit. Niveaux 750-999.", note: "Quete: Tue des bandits du desert. Récompense: Gold + Gems + EXP.", questId: "q5" },
  { name: "Quest NPC 6", rôle: "Donneur de quete", location: "Desert Island - Près du squelette de dinosaure", service: "Quete Desert Bandit Boss. Niveaux 1000-1499.", note: "Quete: Tue le Desert Boss. Récompense: Gold + Gems + EXP.", questId: "q6" },
  { name: "Quest NPC 7", rôle: "Donneur de quete", location: "Snow Island - Bord gauche de l'île, sous un arbre", service: "Quete Frost Rogue Hunter. Niveaux 1500-1999.", note: "Quete: Tue des Frost Rogues. Récompense: Gold + Gems + EXP.", questId: "q7" },
  { name: "Quest NPC 8", rôle: "Donneur de quete", location: "Snow Island - Sommet de la derniere montagne", service: "Quete Winter Warden Boss. Niveaux 2000-2999.", note: "Quete: Tue le Winter Warden. Récompense: Gold + Gems + EXP.", questId: "q8" },
  { name: "Quest NPC 9", rôle: "Donneur de quete", location: "Shibuya Station - Tout droit puis premier virage a droite", service: "Quete Sorcerer Hunter. Niveaux 3000-3999.", note: "Quete: Tue des Sorcerers. Récompense: Gold + Gems + EXP.", questId: "q9" },
  { name: "Quest NPC 10", rôle: "Donneur de quete", location: "Shibuya Station - Rue suivante après le Gryphon NPC", service: "Quete Panda Boss. Niveaux 4000-5000.", note: "Quete: Tue le Panda Sorcerer Boss. Récompense: Gold + Gems + EXP.", questId: "q10" },
  { name: "Quest NPC 11", rôle: "Donneur de quete", location: "Hollow Island - Près du rivage", service: "Quete Hollow Hunter. Niveaux 5000-6250.", note: "Quete: Tue des Hollows. Récompense: Gold + Gems + EXP.", questId: "q11" },
  { name: "Quest NPC 12", rôle: "Donneur de quete", location: "Shinjuku Island - A droite du spawn", service: "Quete Strong Sorcerer Hunter. Niveaux 6250-7000.", note: "Quete: Tue des Strong Sorcerers. Récompense: Gold + Gems + EXP.", questId: "q12" },
  { name: "Quest NPC 13", rôle: "Donneur de quete", location: "Shinjuku Island - A gauche du spawn", service: "Quete Curse Hunter. Niveaux 7000-8000.", note: "Quete: Tue des Curse enemies. Récompense: Gold + Gems + EXP.", questId: "q13" },
  { name: "Quest NPC 14", rôle: "Donneur de quete", location: "Slime Island - A gauche du spawn", service: "Quete Slime Warrior. Niveaux 8000-9000.", note: "Quete: Tue des Slime Warriors. Récompense: Gold + Gems + EXP.", questId: "q14" },
  { name: "Quest NPC 15", rôle: "Donneur de quete", location: "Academy Island - Dans le chateau", service: "Quete Academy Teachers. Niveaux 9000-10000.", note: "Quete: Tue des Academy Teachers. Récompense: Gold + Gems + EXP.", questId: "q15" },
  { name: "Quest NPC 16", rôle: "Donneur de quete", location: "Judgement Island - Zone droite depuis le spawn", service: "Quete Blade Masters. Niveaux 7000-8000.", note: "Quete: Tue des Blade Masters. Récompense: Gold + Gems + EXP.", questId: "q16" },
  { name: "Quest NPC 17", rôle: "Donneur de quete", location: "Soul Dominion - Tout droit depuis le spawn", service: "Quete Quincy Hunter. Niveaux 10000-11500.", note: "Quete: Tue des Quincys. Nécessite d'avoir débloqué Soul Society via la quete Hogyoku.", questId: "q17" },
  { name: "Quest NPC 18", rôle: "Donneur de quete", location: "Ninja Island - A droite du spawn", service: "Quete Ninja. Niveaux 11500-12000.", note: "Quete: Tue des Ninjas. Récompense: Gold + Gems + EXP.", questId: "q18" },
  { name: "Quest NPC 19", rôle: "Donneur de quete", location: "Lawless Island - Sous un arbre près du spawn", service: "Quete Arena Fighter. Niveaux 12000-99999.", note: "Quete endgame finale. Récompense: Gold + Gems + EXP.", questId: "q19" },
  // ── HAKI TRAINERS ──
  { name: "Observation Haki Trainer", rôle: "Formateur Haki", location: "Desert Island - Balcon d'une hutte", service: "Vend l'Observation Haki contre 250,000 coins et 300 Gems.", note: "Prerequis: Niveau 750+. Très utile pour la progression mid-game.", questId: null },
  { name: "Armament Haki Trainer", rôle: "Formateur Haki", location: "Snow Island - Bord de l'île", service: "Donne des quetes pour débloquer l'Armament Haki.", note: "Prerequis: Niveau 1500+. Gros gain de puissance.", questId: null },
  { name: "Conqueror Haki Trainer", rôle: "Formateur Haki", location: "Shibuya Station", service: "Donne une serie de quetes pour débloquer le Conqueror Haki.", note: "Haki endgame, conditions de déblocage avancees.", questId: null },
  // ── MELEE TRAINERS ──
  { name: "Limitless Sorcerer Trainer", rôle: "Formateur melee", location: "Shibuya Station", service: "Débloqué le style de combat Limitless Sorcerer.", note: "Style base sur les capacites de Gojo.", questId: null },
  { name: "Cursed King Trainer", rôle: "Formateur melee", location: "Shibuya Station", service: "Débloqué le style de combat Cursed King.", note: "Style base sur les capacites de Sukuna.", questId: null },
  { name: "Cursed Vessel Trainer", rôle: "Formateur melee", location: "Shibuya Station", service: "Débloqué le style de combat Cursed Vessel.", note: "Style melee de la route Sukuna.", questId: null },
  { name: "Solo Hunter Trainer", rôle: "Formateur melee", location: "Sailor Island", service: "Débloqué le style de combat Solo Hunter.", note: "Style base sur les capacites de Jinwoo.", questId: null },
  { name: "Alucard Trainer", rôle: "Formateur melee", location: "Sailor Island", service: "Débloqué le style de combat Alucard. Nécessite race Vampire.", note: "Important pour les builds Vampire / Alucard.", questId: null },
  { name: "Love Maiden Trainer", rôle: "Formateur melee", location: "Bord de Sailor Island", service: "Débloqué le style Love Maiden (Madoka).", note: "Style base sur Madoka.", questId: null },
  { name: "Qin Shi Trainer", rôle: "Formateur melee", location: "Boss Island", service: "Débloqué le style Qin Shi.", note: "Nécessite d'avoir invoque Qin Shi Boss.", questId: null },
  { name: "King of Heroes Trainer", rôle: "Formateur melee", location: "Boss Island", service: "Débloqué le style King of Heroes (Gilgamesh).", note: "Style endgame de Boss Island.", questId: null },
  { name: "Blessed Maiden Trainer", rôle: "Formateur melee", location: "Boss Island", service: "Débloqué le style Blessed Maiden. Nécessite race Galevorn.", note: "Style melee endgame.", questId: null },
  { name: "Corrupted Knight Trainer", rôle: "Formateur melee", location: "Boss Island", service: "Débloqué le style Corrupted Excalibur.", note: "Nécessite d'avoir invoque Corrupted Knight Boss.", questId: null },
  { name: "Demon King Trainer", rôle: "Formateur melee", location: "Academy Island", service: "Débloqué le style Demon King (Anos).", note: "Style endgame lie a la route Anos.", questId: null },
  { name: "Strongest of Today Trainer", rôle: "Formateur melee", location: "Shinjuku Island", service: "Débloqué un style special lie a Gojo endgame.", note: "Nécessite d'avoir complete la route Gojo.", questId: null },
  { name: "Strongest in History Trainer", rôle: "Formateur melee", location: "Shinjuku Island", service: "Débloqué un style special lie a Sukuna endgame.", note: "Nécessite d'avoir complete la route Sukuna.", questId: null },
  { name: "Strongest Shinobi Trainer", rôle: "Formateur melee", location: "Ninja Island", service: "Débloqué le style Shinobi endgame.", note: "Style endgame de Ninja Island.", questId: null },
  // ── MASTERY NPCs ──
  { name: "Dragon Slayer Master", rôle: "Mastery NPC", location: "Snow Island - Coin de l'île", service: "Débloqué le F move du Ragna Sword / Dragon Slayer.", note: "Nécessite le Dragon Slayer Sword.", questId: null },
  { name: "Manipulator Master", rôle: "Mastery NPC", location: "Hollow Island - Coin de l'île", service: "Débloqué le F move du Manipulator Sword.", note: "Nécessite race Shinigami et le Manipulator Sword.", questId: null },
  { name: "Shadow Master", rôle: "Mastery NPC", location: "Dungeon Island", service: "Débloqué le F move du Shadow Sword. Nécessite race Shadowborn.", note: "Nécessite Shadow Sword et race Shadowborn.", questId: null },
  { name: "Shadow Monarch Master", rôle: "Mastery NPC", location: "Dungeon Island", service: "Débloqué le F move du Shadow Monarch Sword.", note: "Mastery endgame de la route Shadow.", questId: null },
  { name: "Yamato Master", rôle: "Mastery NPC", location: "Judgement Island", service: "Débloqué le F move du Yamato Sword. Nécessite race Swordblessed.", note: "Nécessite Yamato Sword et race Swordblessed.", questId: null },
  { name: "True Manipulator Master", rôle: "Mastery NPC", location: "Soul Dominion", service: "Débloqué le F move du True Manipulator Sword.", note: "Nécessite d'avoir complete la quete Hogyoku pour accéder a Soul Dominion.", questId: null },
  // ── WEAPON SELLERS ──
  { name: "Katana Seller", rôle: "Vendeur d'armes", location: "Starter Island", service: "Vend le Katana de base.", note: "Arme de départ, a remplacer rapidement.", questId: null },
  { name: "Dark Blade Seller", rôle: "Vendeur d'armes", location: "Snow Island", service: "Vend le Dark Blade.", note: "Arme mid-game disponible sur Snow Island.", questId: null },
  { name: "Dragon Slayer Seller", rôle: "Vendeur d'armes", location: "Snow Island", service: "Vend le Dragon Slayer Sword (Ragna).", note: "Arme mid-game, a combiner avec le Dragon Slayer Master.", questId: null },
  { name: "Gryphon Seller", rôle: "Vendeur d'armes", location: "Shibuya Station", service: "Vend le Gryphon Sword.", note: "Arme avancee de Shibuya Station.", questId: null },
  { name: "Manipulator Seller", rôle: "Vendeur d'armes", location: "Hollow Island", service: "Vend le Manipulator Sword.", note: "Nécessite race Shinigami pour le Mastery.", questId: null },
  { name: "Ichigo Seller", rôle: "Vendeur d'armes", location: "Hollow Island", service: "Vend le Ichigo Sword.", note: "Arme de la zone Hollow / Bleach.", questId: null },
  { name: "Shadow Seller", rôle: "Vendeur d'armes", location: "Dungeon Island", service: "Vend le Shadow Sword.", note: "Arme de la route Shadow, nécessite race Shadowborn pour le Mastery.", questId: null },
  { name: "Shadow Monarch Seller", rôle: "Vendeur d'armes", location: "Dungeon Island", service: "Vend le Shadow Monarch Sword.", note: "Arme endgame de la route Shadow.", questId: null },
  { name: "Slime Seller", rôle: "Vendeur d'armes", location: "Slime Island", service: "Vend le Rimuru Sword.", note: "Arme de la route Rimuru / Slime.", questId: null },
  { name: "Yamato Seller", rôle: "Vendeur d'armes", location: "Judgement Island", service: "Vend le Yamato Sword.", note: "Nécessite race Swordblessed pour le Mastery.", questId: null },
  { name: "True Manipulator Seller", rôle: "Vendeur d'armes", location: "Soul Dominion", service: "Vend le True Manipulator Sword.", note: "Nécessite d'avoir complete la quete Hogyoku.", questId: null },
  { name: "Atomic Seller", rôle: "Vendeur d'armes", location: "Lawless Island", service: "Vend le Atomic Sword.", note: "Arme endgame de Lawless Island.", questId: null },
  { name: "Ice Queen Sword Seller", rôle: "Vendeur d'armes", location: "Boss Island", service: "Vend l'arme de Ice Queen.", note: "Ajout recent selon les sources (avril 2026).", questId: null },
  // ── UTILITAIRES ──
  { name: "Coin Fruit Dealer", rôle: "Marchand de fruits", location: "Sailor Island - Zone batiments a gauche", service: "Vend des fruits contre des pieces. Light Fruit, Quake Fruit, Flame Fruit...", note: "Source principale de fruits sans Gems.", questId: null },
  { name: "Gems Fruit Dealer", rôle: "Marchand de fruits premium", location: "Sailor Island - Zone batiments a gauche", service: "Vend des fruits contre des Gems. Catalogue superieur.", note: "Utilise tes Gems ici pour les fruits les plus rares.", questId: null },
  { name: "Ascension NPC", rôle: "Ascension", location: "Sailor Island - Zone batiments a gauche", service: "Effectue l'ascension du personnage pour débloquer de nouvelles capacites.", note: "A faire quand les prerequis de niveau sont remplis.", questId: null },
  { name: "Boss Rush NPC", rôle: "Acces Boss Rush", location: "Sailor Island - Zone batiments a gauche", service: "Entree dans le Boss Rush contre un Boss Ticket.", note: "Saber Boss est la meilleure source de Boss Tickets.", questId: null },
  { name: "Stat Reroll NPC", rôle: "Reroll de stats", location: "Sailor Island - Zone batiments a gauche", service: "Permet de reroller ses stats de base.", note: "Utile pour optimiser ton build.", questId: null },
  { name: "Storage NPC", rôle: "Stockage", location: "Sailor Island - Zone batiments a gauche", service: "Permet de stocker des objets.", note: "Pratique pour garder des items en réservé.", questId: null },
  { name: "Titles NPC", rôle: "Gestion des titres", location: "Sailor Island - Zone batiments a gauche", service: "Permet d'équiper et de gerer ses titres.", note: "Equipe tes titres obtenus sur les boss.", questId: null },
  { name: "Blessing NPC", rôle: "Benediction", location: "Shibuya Station - En face du Set Spawn crystal", service: "Offre des benedictions / buffs temporaires.", note: "Va voir ce PNJ des que tu arrives a Shibuya Station.", questId: null },
  { name: "Slime Key Crafter", rôle: "Artisan de cle", location: "Slime Island - Près des maisons en bois", service: "Craft des Slime Keys pour invoquer Rimuru Boss.", note: "Nécessite des materiaux specifiques pour craft la cle.", questId: null },
  { name: "Artifacts Master", rôle: "Echangeur d'artefacts", location: "Endgame - Zone avancee", service: "Échange des items contre des artefacts puissants comme Celestial Rupture et Abyssal Crown.", note: "Artefacts endgame très puissants.", questId: null }
];

const questGuideData = [
  // ── QUETES PRINCIPALES ──
  { name: "Thief Hunter", npc: "Quest NPC 1", location: "Starter Island", level: "0-99", objective: "Tuer des Thieves sur Starter Island.", rewards: "Gold + EXP", condition: "Aucune. Quete de départ.", type: "Principale" },
  { name: "Thief Boss Quest", npc: "Quest NPC 2", location: "Starter Island", level: "100-249", objective: "Tuer le Thief Boss sur Starter Island.", rewards: "Gold + EXP", condition: "Niveau 100+.", type: "Principale" },
  { name: "Monkey Hunter", npc: "Quest NPC 3", location: "Jungle Island", level: "250-499", objective: "Tuer des singes sur Jungle Island.", rewards: "Gold + EXP", condition: "Niveau 250+.", type: "Principale" },
  { name: "Monkey Boss Quest", npc: "Quest NPC 4", location: "Jungle Island", level: "500-749", objective: "Tuer le Monkey Boss sur Jungle Island.", rewards: "Gold + EXP", condition: "Niveau 500+.", type: "Principale" },
  { name: "Desert Bandit Quest", npc: "Quest NPC 5", location: "Desert Island", level: "750-999", objective: "Tuer des Desert Bandits.", rewards: "Gold + Gems + EXP", condition: "Niveau 750+. Premiers Gems en récompense.", type: "Principale" },
  { name: "Desert Bandit Boss Quest", npc: "Quest NPC 6", location: "Desert Island", level: "1000-1499", objective: "Tuer le Desert Boss.", rewards: "Gold + Gems + EXP", condition: "Niveau 1000+.", type: "Principale" },
  { name: "Frost Rogue Hunter", npc: "Quest NPC 7", location: "Snow Island", level: "1500-1999", objective: "Tuer des Frost Rogues sur Snow Island.", rewards: "Gold + Gems + EXP", condition: "Niveau 1500+.", type: "Principale" },
  { name: "Winter Warden Boss Quest", npc: "Quest NPC 8", location: "Snow Island", level: "2000-2999", objective: "Tuer le Winter Warden Boss.", rewards: "Gold + Gems + EXP", condition: "Niveau 2000+.", type: "Principale" },
  { name: "Sorcerer Hunter", npc: "Quest NPC 9", location: "Shibuya Station", level: "3000-3999", objective: "Tuer des Sorcerers a Shibuya Station.", rewards: "Gold + Gems + EXP", condition: "Niveau 3000+.", type: "Principale" },
  { name: "Panda Boss Quest", npc: "Quest NPC 10", location: "Shibuya Station", level: "4000-5000", objective: "Tuer le Panda Sorcerer Boss.", rewards: "Gold + Gems + EXP", condition: "Niveau 4000+.", type: "Principale" },
  { name: "Hollow Hunter", npc: "Quest NPC 11", location: "Hollow Island", level: "5000-6250", objective: "Tuer des Hollows.", rewards: "Gold + Gems + EXP", condition: "Niveau 5000+.", type: "Principale" },
  { name: "Strong Sorcerer Hunter", npc: "Quest NPC 12", location: "Shinjuku Island", level: "6250-7000", objective: "Tuer des Strong Sorcerers.", rewards: "Gold + Gems + EXP", condition: "Niveau 6250+.", type: "Principale" },
  { name: "Curse Hunter", npc: "Quest NPC 13", location: "Shinjuku Island", level: "7000-8000", objective: "Tuer des ennemis Curse.", rewards: "Gold + Gems + EXP", condition: "Niveau 7000+.", type: "Principale" },
  { name: "Blade Masters Quest", npc: "Quest NPC 16", location: "Judgement Island", level: "7000-8000", objective: "Tuer des Blade Masters.", rewards: "Gold + Gems + EXP", condition: "Niveau 7000+.", type: "Principale" },
  { name: "Slime Warrior Quest", npc: "Quest NPC 14", location: "Slime Island", level: "8000-9000", objective: "Tuer des Slime Warriors.", rewards: "Gold + Gems + EXP", condition: "Niveau 8000+.", type: "Principale" },
  { name: "Academy Teachers Quest", npc: "Quest NPC 15", location: "Academy Island", level: "9000-10000", objective: "Tuer des Academy Teachers.", rewards: "Gold + Gems + EXP", condition: "Niveau 9000+.", type: "Principale" },
  { name: "Quincy Hunter", npc: "Quest NPC 17", location: "Soul Dominion", level: "10000-11500", objective: "Tuer des Quincys sur Soul Dominion.", rewards: "Gold + Gems + EXP", condition: "Niveau 10000+ ET avoir complete la quete Hogyoku Fragment pour débloqué Soul Society.", type: "Principale" },
  { name: "Ninja Quest", npc: "Quest NPC 18", location: "Ninja Island", level: "11500-12000", objective: "Tuer des Ninjas.", rewards: "Gold + Gems + EXP", condition: "Niveau 11500+.", type: "Principale" },
  { name: "Arena Fighter Quest", npc: "Quest NPC 19", location: "Lawless Island", level: "12000+", objective: "Quete endgame finale sur Lawless Island.", rewards: "Gold + Gems + EXP", condition: "Niveau 12000+. Quete finale de la progression principale.", type: "Principale" },
  // ── QUETES SPECIALES ──
  { name: "Demonite Core Quest", npc: "Demonite NPC", location: "Academy Island - Côté gauche de l'île depuis le portail", level: "Endgame", objective: "Collecter 2 Demonite Fragments et les remettre au PNJ.", rewards: "Calamity Seal + déblocage des drops Calamity sur les ennemis.", condition: "Accéder a Academy Island. Les Demonite Fragments se droppent sur les mobs de la zone.", type: "Speciale" },
  { name: "Hogyoku Fragment Quest", npc: "Gin NPC", location: "Hollow Island - Fin de l'île", level: "8500+", objective: "Collecter 6 Hogyoku Fragments caches sur differentes îles.", rewards: "Deblocage de Soul Society Island + portail Hogyoku permanent dans le menu teleport.", condition: "Niveau 8500+. Parler au Gin NPC sur Hollow Island. Les 6 fragments sont dissemines sur differentes îles.", type: "Speciale" },
  { name: "Worthiness Fragment Quest", npc: "Aizen Quest NPC", location: "Hollow Island", level: "5500+", objective: "Collecter des Worthiness Fragments pour prouver ta valeur.", rewards: "Aizen Specialization + Aizen Sword.", condition: "Niveau 5500+. Les Worthiness Fragments droppent sur les ennemis Hollow niveau 5500+ dans la zone Hollow Island.", type: "Speciale" },
  { name: "Aizen Quest", npc: "Aizen NPC", location: "Hollow Island - Côté oppose au Hogyoku NPC", level: "5500+", objective: "Remettre le Worthiness Fragment au PNJ Aizen.", rewards: "Aizen Specialization + Aizen Sword (True Sword endgame).", condition: "Avoir complete la Worthiness Fragment Quest. Niveau 5500+.", type: "Speciale" }
];


const titleGuideData = [
  { name: "Shadow Monarch Title", boss: "Jinwoo Boss", location: "Sailor Island", drop: "3%", pity: "Non confirme", note: "Titre prestige de la route Shadow Monarch." },
  { name: "Vampire King Title", boss: "Alucard Boss", location: "Sailor Island", drop: "2.5%", pity: "Non confirme", note: "Titre de la route Vampire / Alucard." },
  { name: "Living Weapon Title", boss: "Yuji Boss", location: "Shibuya Station", drop: "5%", pity: "Non confirme", note: "Titre obtenu sur Yuji Boss." },
  { name: "Honored One Title", boss: "Gojo Boss", location: "Shibuya Station", drop: "5%", pity: "Non confirme", note: "Titre de la route Gojo." },
  { name: "Curse King Title", boss: "Sukuna Boss", location: "Shibuya Station", drop: "4%", pity: "Non confirme", note: "Titre de la route Sukuna." },
  { name: "Manipulator Title", boss: "Aizen Boss", location: "Hueco Mundo", drop: "2%", pity: "Non confirme", note: "Titre de la route Aizen / Manipulator." },
  { name: "Star Maiden Title", boss: "Madoka Boss", location: "Valentine Island", drop: "1.2%", pity: "Non confirme", note: "Titre late game de Valentine Island." },
  { name: "Battlefield Warlord Title", boss: "Strongest Shinobi Boss", location: "Ninja Island", drop: "1.5%", pity: "Non confirme", note: "Titre endgame de Ninja Island." },
  { name: "Blade Sovereign Title", boss: "Yamato Boss", location: "Judgement Island", drop: "1%", pity: "Non confirme", note: "Titre de la route Yamato." },
  { name: "Blade Master Title", boss: "Saber Boss", location: "Boss Island", drop: "5%", pity: "Non confirme", note: "Titre du premier boss summon." },
  { name: "King of Beginning Title", boss: "Qin Shi Boss", location: "Boss Island", drop: "1.5%", pity: "Non confirme", note: "Titre summon intermediaire." },
  { name: "Soul Reaper Title", boss: "Ichigo Boss", location: "Boss Island", drop: "1%", pity: "Non confirme", note: "Titre de la route Soul / Hollow." },
  { name: "Golden King Title", boss: "Gilgamesh Boss", location: "Boss Island", drop: "1%", pity: "Non confirme", note: "Titre de Gilgamesh, nécessite Divine Grail." },
  { name: "Corrupt Tyrant Title", boss: "Corrupted Knight Boss", location: "Boss Island", drop: "1%", pity: "Non confirme", note: "Titre de Corrupted Knight, nécessite Dark Grail." },
  { name: "Strongest Sorcerer Title", boss: "Strongest of Today", location: "Shinjuku Island", drop: "1%", pity: "Non confirme", note: "Titre Gojo endgame, nécessite Limitless Key." },
  { name: "Disgraced One Title", boss: "Strongest in History", location: "Shinjuku Island", drop: "1%", pity: "Non confirme", note: "Titre Sukuna endgame, nécessite Malevolent Key." },
  { name: "Demon Lord Title", boss: "Rimuru Boss", location: "Slime Island", drop: "0.9%", pity: "Non confirme", note: "Titre de la route Rimuru / Slime." },
  { name: "Demon King Title", boss: "Anos Boss", location: "Academy Island", drop: "1%", pity: "Non confirme", note: "Titre de la route Anos, nécessite Calamity Seal." },
  { name: "Eminence Incarnate Title", boss: "Atomic Boss", location: "Lawless Island", drop: "0.7%-1.35%", pity: "Non confirme", note: "Taux variable selon la difficulté." },
  { name: "Six Eyed Demon Title", boss: "Moon Slayer Boss", location: "Boss Island", drop: "1%", pity: "Non confirme", note: "Titre lie au clan Upper et Moon Slayer." },
  { name: "Frost Empress Title", boss: "Ice Queen Boss", location: "Boss Island", drop: "0.65%", pity: "155", note: "Pity confirme a 155 kills." },
  { name: "Dragon Queen Title", boss: "Sea Serpent / Kraken", location: "Open Sea", drop: "Non confirme", pity: "150", note: "Nécessite 500,000 bounty minimum en mer." },
  { name: "Cosmic Being Title", boss: "Cosmic Being", location: "Punch Island (Sea 2)", drop: "Non confirme", pity: "75", note: "World Boss sur timer serveur d'environ 30 minutes." }
];

const weaponGuideData = [
  {
    name: "Katana",
    type: "Sword",
    source: "Marchands d'armes sur plusieurs îles.",
    drop: "Achat",
    stats: "Stats de base faibles.",
    note: "Arme de départ pour les builds sword. A remplacer rapidement."
  },
  {
    name: "Abyss Edge",
    type: "Sword",
    source: "Jinwoo Boss - Sailor Island",
    drop: "17.5%",
    stats: "Arme forte de la route Shadow.",
    note: "Indispensable pour les builds Jinwoo / Shadow Monarch."
  },
  {
    name: "Casull",
    type: "Gun",
    source: "Alucard Boss - Sailor Island",
    drop: "2%",
    stats: "Arme de la route Vampire.",
    note: "Utile pour les builds Alucard et Vampire King."
  },
  {
    name: "Excalibur",
    type: "Sword",
    source: "Saber Boss - Boss Island",
    drop: "2%",
    stats: "Arme sword puissante mid-endgame.",
    note: "Nécessite 1 Boss Key, 100,000 Cash et 175 Gems pour invoquer Saber."
  },
  {
    name: "Sacred Bow",
    type: "Bow",
    source: "Madoka Boss - Valentine Island",
    drop: "4%",
    stats: "Arc de la route Madoka.",
    note: "Bonne arme late game obtenue sur Madoka Boss."
  },
  {
    name: "Frost Brand",
    type: "Sword",
    source: "Ice Queen Boss - Boss Island",
    drop: "1.21%",
    stats: "Arme sword endgame liee a Frostbane.",
    note: "Nécessite 1 Frost Relic, 750,000 Money et 750 Gems pour invoquer Ice Queen."
  },
  {
    name: "Frozen Will",
    type: "Sword",
    source: "Yamato Boss - Judgement Island",
    drop: "4.25%",
    stats: "Materiaux de la route Yamato.",
    note: "Composant important pour la progression Yamato."
  },
  {
    name: "Yamato Essence",
    type: "Materiau",
    source: "Yamato Boss - Judgement Island",
    drop: "2.5%",
    stats: "Materiau de craft de la route Yamato.",
    note: "Nécessaire pour crafter des objets lies a Yamato Mastery."
  },
  {
    name: "Reversal Pulse",
    type: "Materiau",
    source: "Strongest of Today - Shinjuku Island",
    drop: "15%",
    stats: "Materiau endgame de la route Gojo.",
    note: "Nécessite 1 Limitless Key pour invoquer le boss."
  },
  {
    name: "Six Eye",
    type: "Accessoire",
    source: "Strongest of Today - Shinjuku Island",
    drop: "6%",
    stats: "Accessoire endgame de la route Gojo.",
    note: "Nécessite 1 Limitless Key pour invoquer le boss."
  },
  {
    name: "Awakened Cursed Finger",
    type: "Materiau",
    source: "Strongest in History - Shinjuku Island",
    drop: "15%",
    stats: "Materiau endgame de la route Sukuna.",
    note: "Nécessite 1 Malevolent Key pour invoquer le boss."
  },
  {
    name: "Vessel Ring",
    type: "Accessoire",
    source: "Strongest in History - Shinjuku Island",
    drop: "6%",
    stats: "Accessoire endgame de la route Sukuna.",
    note: "Nécessite 1 Malevolent Key pour invoquer le boss."
  },
  {
    name: "Hogyoku Fragment",
    type: "Materiau",
    source: "Aizen Boss - Hueco Mundo",
    drop: "1.2%",
    stats: "Materiau rare de la route Aizen.",
    note: "Très rare, important pour la progression Manipulator."
  },
  {
    name: "Dark Ring",
    type: "Accessoire",
    source: "Jinwoo Boss - Sailor Island",
    drop: "7%",
    stats: "Accessoire de la route Shadow.",
    note: "Bon drop early game de Jinwoo Boss."
  },
  {
    name: "Blood Ring",
    type: "Accessoire",
    source: "Alucard Boss - Sailor Island",
    drop: "2%",
    stats: "Accessoire de la route Vampire.",
    note: "Drop de la route Alucard / Vampire."
  },
  {
    name: "Limitless Ring",
    type: "Accessoire",
    source: "Gojo Boss - Shibuya Station",
    drop: "8%",
    stats: "Accessoire de la route Gojo.",
    note: "Drop interessant en farmant Gojo."
  },
  {
    name: "Infinity Core",
    type: "Materiau",
    source: "Gojo Boss - Shibuya Station",
    drop: "3%",
    stats: "Materiau rare de la route Gojo.",
    note: "Rare, utile pour les crafts lies a Gojo."
  },
  {
    name: "Crimson Heart",
    type: "Materiau",
    source: "Sukuna Boss - Shibuya Station",
    drop: "2.5%",
    stats: "Materiau rare de la route Sukuna.",
    note: "Rare, utile pour les crafts lies a Sukuna."
  }
];

function loadCustomItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

const wikiDatabase = [...baseWikiDatabase, ...loadCustomItems()];

const raceGuideData = [
  { name: "Human", rarity: "Common", chance: "50%", bonus: "Aucun bonus.", usefulFor: "Aucun PNJ specifique connu." },
  { name: "Skypea", rarity: "Uncommon", chance: "30%", bonus: "+2 jumps.", usefulFor: "Aucun PNJ specifique connu." },
  { name: "Fishman", rarity: "Uncommon", chance: "30%", bonus: "+15% EXP, +15% Cash.", usefulFor: "Utile surtout pour farmer plus vite, pas de PNJ requis connu." },
  { name: "Mink", rarity: "Rare", chance: "15%", bonus: "+20% Sprint Speed, +20% Jump Height.", usefulFor: "Utile pour la mobilite, pas de PNJ requis connu." },
  { name: "Orc", rarity: "Rare", chance: "15%", bonus: "+15% Max HP, +15% Damage.", usefulFor: "Pas de PNJ requis connu." },
  { name: "Demon", rarity: "Epic", chance: "4%", bonus: "+35% HP, +20% Sprint Speed, +30% Damage.", usefulFor: "Pas de PNJ requis connu." },
  { name: "Vampire", rarity: "Epic", chance: "4%", bonus: "+30% Max HP, +25% Damage, +5% Lifesteal.", usefulFor: "Alucard Trainer." },
  { name: "Vessel", rarity: "Legendary", chance: "1%", bonus: "+20% Sukuna Damage, +35% Damage, +40% Max HP.", usefulFor: "Builds ou contenus lies a Sukuna." },
  { name: "Limitless", rarity: "Legendary", chance: "1%", bonus: "+25% Gojo Damage, +30% Damage, +40% Max HP.", usefulFor: "Builds ou contenus lies a Gojo." },
  { name: "Player", rarity: "Legendary", chance: "1%", bonus: "+20% Jinwoo Damage, +40% Damage, +45% Max HP.", usefulFor: "Builds ou contenus lies a Jinwoo." },
  { name: "Shinigami", rarity: "Legendary", chance: "1%", bonus: "+20% Aizen Damage, +45% Damage, +50% Max HP.", usefulFor: "Manipulator Questline." },
  { name: "Shadowborn", rarity: "Legendary", chance: "1%", bonus: "+20% Shadow Damage, +50% Damage, +55% Max HP.", usefulFor: "Shadow Trainer." },
  { name: "Hollow", rarity: "Legendary", chance: "1%", bonus: "+20% Ichigo Damage, +50% Damage, +60% Max HP, +60% Defense.", usefulFor: "Builds ou contenus lies a Ichigo." },
  { name: "Oni", rarity: "Mythical", chance: "<1%", bonus: "+55% Damage, +20% Melee Damage Multiplier, +65% Max HP, +10% Damage Reduction.", usefulFor: "Pas de PNJ requis confirme publiquement." },
  { name: "Kitsune", rarity: "Mythical", chance: "<1%", bonus: "+10% Melee Damage Multiplier, +10% Sword Damage Multiplier, +50% Damage, +60% Max HP, +25% Luck.", usefulFor: "Pas de PNJ requis confirme publiquement." },
  { name: "Leviathan", rarity: "Mythical", chance: "<1%", bonus: "+17% Sword Damage Multiplier, +60% Damage, +65% Max HP, +5% Lifesteal.", usefulFor: "Pas de PNJ requis confirme publiquement." },
  { name: "Slime", rarity: "Mythical", chance: "<1%", bonus: "+17% Sword Damage, +65% Damage, +70% Max HP, +3% Lifesteal, +10% Damage Reduction.", usefulFor: "Rimuru Mastery." },
  { name: "Servant", rarity: "Mythical", chance: "<1%", bonus: "+18% Melee Damage Multiplier, +67% Damage, +75% Max HP, +4% Lifesteal, +10% Damage Reduction.", usefulFor: "Babylon Key Crafter." },
  { name: "Galevorn", rarity: "Mythical", chance: "<1%", bonus: "+20% Melee Damage Multiplier, +75% Damage, +80% Max HP, +3% Lifesteal, +10% Damage Reduction.", usefulFor: "Blessed Maiden Mastery." },
  { name: "Swordblessed", rarity: "Mythical", chance: "<1%", bonus: "+20% Sword Damage Multiplier, +75% Damage, +80% Max HP, +3% Lifesteal, +10% Damage Reduction.", usefulFor: "Yamato Trainer." },
  { name: "Sunborn", rarity: "Mythical", chance: "<1%", bonus: "+20% Sword Damage Multiplier, +70% Damage, +80% Max HP, +3% Lifesteal, +10% Damage Reduction.", usefulFor: "Pas de PNJ requis confirme publiquement." },
  { name: "Warlord", rarity: "Mythical", chance: "<1%", bonus: "+22% Melee Damage Multiplier, +80% Damage, +85% Max HP, +2% Lifesteal, +10% Damage Reduction.", usefulFor: "The Strongest Shinobi Mastery." },
  { name: "Luckborn", rarity: "Mythical", chance: "<1%", bonus: "+15% Sword Damage Multiplier, +15% Melee Damage Multiplier, +80% Damage, +90% Max HP, +35% Luck.", usefulFor: "Pas de PNJ requis confirme publiquement." }
];

const clanGuideData = [
  {
    name: "Sasaki",
    rarity: "Common",
    chance: "Non confirmee publiquement",
    bonus: "+7% Damage, +10% Max HP, +10% EXP Gain.",
    usefulFor: "Pas de PNJ ou F move requis connu.",
    passive: "Aucun passif special."
  },
  {
    name: "Raikage",
    rarity: "Uncommon",
    chance: "Non confirmee publiquement",
    bonus: "+10% Damage, +15% Max HP, +10% Jump Height, +10% Money Gain, +10% Gems Gain.",
    usefulFor: "Pas de PNJ ou F move requis connu.",
    passive: "Aucun passif special."
  },
  {
    name: "Zoldyck",
    rarity: "Rare",
    chance: "Non confirmee publiquement",
    bonus: "+15% Damage, +20% Max HP, +20% Sprint Speed, +15% Gems Gain.",
    usefulFor: "Pas de PNJ ou F move requis connu.",
    passive: "Aucun passif special."
  },
  {
    name: "Mugetsu",
    rarity: "Epic",
    chance: "Non confirmee publiquement",
    bonus: "+20% Damage, +25% Max HP, +5% Damage Reduction, +2% Lifesteal.",
    usefulFor: "Pas de PNJ ou F move requis connu.",
    passive: "Aucun passif special."
  },
  {
    name: "Yamato",
    rarity: "Epic",
    chance: "Non confirmee publiquement",
    bonus: "+17% Damage, +27% Max HP, +5% Melee Damage, +20% Gems Gain.",
    usefulFor: "Pas de PNJ ou F move requis connu.",
    passive: "Aucun passif special."
  },
  {
    name: "Voldigoat",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+25% Damage, +35% Max HP, +7% Melee Damage, +10% Damage Reduction.",
    usefulFor: "Anos fighting style.",
    passive: "Les ennemis sous 50% HP prennent +25% de degats."
  },
  {
    name: "Monarch",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+27% Damage, +40% Max HP, +7% Sword Damage, +10% Luck.",
    usefulFor: "Shadow Monarch F move.",
    passive: "20% de chance de dupliquer un drop (+1 item)."
  },
  {
    name: "Pride",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+30% Damage, +45% Max HP, +10% Sword Damage, +10% Luck.",
    usefulFor: "Excellent clan generaliste, pas de PNJ requis confirme.",
    passive: "Les coups empilent un bonus de damage jusqu'a +20%, reset après 6 secondes sans toucher."
  },
  {
    name: "Espada",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+32% Damage, +50% Max HP, +10% Sword Damage, +10% Luck.",
    usefulFor: "True Aizen F move.",
    passive: "Toutes les 10 competences, +20% damage pendant 6 secondes."
  },
  {
    name: "Alter",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+35% Damage, +50% Max HP, +10% Melee Damage, +12% Luck.",
    usefulFor: "Saber Alter F move.",
    passive: "Toutes les 5 competences, la suivante inflige +50% damage."
  },
  {
    name: "Eminence",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+35% Damage, +55% Max HP, +12% Sword Damage, +12% Luck.",
    usefulFor: "Atomic F move.",
    passive: "25% de chance de dupliquer un drop (+1 item)."
  },
  {
    name: "Upper",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+40% Damage, +50% Max HP, +12% Melee Damage, +12% Luck.",
    usefulFor: "Moon Slayer F move.",
    passive: "Chaque skill a 20% de chance d'accorder +25% damage pendant 8 secondes."
  },
  {
    name: "Frostbane",
    rarity: "Legendary",
    chance: "Non confirmee publiquement",
    bonus: "+40% Damage, +47% Max HP, +10% Sword Damage, +12% Luck.",
    usefulFor: "Ice Queen F move.",
    passive: "Effet de damage cumulatif progressif, jusqu'a environ 1.25x damage selon le wiki communautaire."
  }
];

const bossGuideData = [
  {
    name: "Thief Boss",
    type: "Mob Boss",
    location: "Starter Island",
    access: "Niveau 25+.",
    loot: "Cash, EXP.",
    note: "Boss de progression debutant, pas de loot rare documente."
  },
  {
    name: "Monkey Boss",
    type: "Mob Boss",
    location: "Jungle Island",
    access: "Niveau 500+.",
    loot: "Cash, EXP.",
    note: "Boss de progression, surtout utile pour monter de niveau."
  },
  {
    name: "Desert Boss",
    type: "Mob Boss",
    location: "Desert Island",
    access: "Niveau 1000+.",
    loot: "Cash, EXP.",
    note: "Boss de progression, peu d'interet endgame."
  },
  {
    name: "Winter Warden",
    type: "Mob Boss",
    location: "Snow Island",
    access: "Niveau 2000+.",
    loot: "Cash, EXP.",
    note: "Boss de progression mid-game."
  },
  {
    name: "Panda Sorcerer",
    type: "Mob Boss",
    location: "Shibuya Station",
    access: "Niveau 5000+.",
    loot: "Cash, EXP.",
    note: "Mob boss de progression avancee."
  },
  {
    name: "Jinwoo",
    type: "Open World",
    location: "Sailor Island",
    access: "Spawn naturel. Respawn environ 8.5 minutes.",
    loot: "Haki Color Reroll (80%), Race Reroll (50%), Trait Reroll (40%), Boss Ticket (35%), Dungeon Key (25%), Abyss Edge (17.5%), Dark Ring (7%), Shadow Heart (2%), Jinwoo Cape (3%), Shadow Monarch Title (3%).",
    note: "Excellent boss early game pour rerolls et route Shadow."
  },
  {
    name: "Alucard",
    type: "Open World",
    location: "Sailor Island",
    access: "Spawn naturel. Respawn environ 5 minutes.",
    loot: "Race Reroll (85%), Trait Reroll (80%), Boss Ticket (40%), Dungeon Key (33%), Soul Amulet (8%), Casull (2%), Blood Ring (2%), Alucard Coat (3%), Vampire King Title (2.5%).",
    note: "Très bon boss pour farm rerolls."
  },
  {
    name: "Yuji",
    type: "Open World",
    location: "Shibuya Station",
    access: "Spawn naturel. Timer de zone.",
    loot: "Haki Color Reroll (45%), Race Reroll (35%), Trait Reroll (25%), Boss Ticket (20%), Dungeon Key (12.5%), Energy Core (25%), Flash Impact (9%), Divergent Pulse (4%), Yuji Hair (5%), Living Weapon Title (5%).",
    note: "Bon boss open world de rotation."
  },
  {
    name: "Gojo",
    type: "Open World",
    location: "Shibuya Station",
    access: "Spawn naturel. Timer de zone.",
    loot: "Haki Color Reroll (50%), Race Reroll (35%), Trait Reroll (27.5%), Boss Ticket (25%), Dungeon Key (15%), Limitless Key (30%), Void Fragment (20%), Limitless Ring (8%), Infinity Core (3%), Gojo Blindfold (5%), Honored One Title (5%).",
    note: "Source principale de Limitless Key pour Strongest of Today."
  },
  {
    name: "Sukuna",
    type: "Open World",
    location: "Shibuya Station",
    access: "Spawn naturel. Timer de zone.",
    loot: "Haki Color Reroll (60%), Race Reroll (40%), Trait Reroll (32.5%), Boss Ticket (30%), Dungeon Key (20%), Malevolent Key (30%), Cursed Finger (20%), Dismantle Fang (8%), Crimson Heart (2.5%), Sukuna Collar (4%), Curse King Title (4%).",
    note: "Source principale de Malevolent Key pour Strongest in History."
  },
  {
    name: "Aizen",
    type: "Open World",
    location: "Hueco Mundo / Hollow Island selon la source",
    access: "Spawn naturel. Respawn environ 7.5 minutes.",
    loot: "Haki Color Reroll (100%), Race Reroll (85%), Trait Reroll (75%), Boss Ticket (45%), Dungeon Key (30%), Mirage Pendant (20%), Illusion Prism (8%), Reiatsu Core (3%), Hogyoku Fragment (1.2%), Aizen Haori (2%), Manipulator Title (2%).",
    note: "Un des meilleurs boss pour Haki Color Reroll."
  },
  {
    name: "Madoka",
    type: "Open World",
    location: "Valentine Island",
    access: "Spawn naturel. Certaines sources signalent une disponibilite variable selon les updates.",
    loot: "Race Reroll (100%), Trait Reroll (100%), Heart x1-2 (100%), Boss Ticket (55%), Dungeon Key (45%), Divine Fragment (6%), Sacred Bow (4%), Radiant Core (2%), Pink Gem (0.75%), Ultimate Wings (1.5%), Star Maiden Title (1.2%).",
    note: "Très bon boss late game pour rerolls et Hearts."
  },
  {
    name: "Strongest Shinobi",
    type: "Open World",
    location: "Ninja Island",
    access: "Spawn naturel. Boss endgame.",
    loot: "Void Reaver Artifact (100%), Dungeon Key (100%), Boss Ticket (100%), Trait Reroll (100%), Race Reroll (100%), Power Remnant (5.11%), Battle Sigil (2.94%), Eternal Core (1.40%), Path Fragment (0.56%), Battlefield Warlord Title (1.5%).",
    note: "Boss très rentable pour rerolls et progression endgame."
  },
  {
    name: "Vergil / Yamato Boss",
    type: "Open World",
    location: "Judgement Island",
    access: "Spawn naturel. Respawn autour de 6.5 minutes selon certaines sources.",
    loot: "Race Reroll (garanti selon plusieurs guides), Trait Reroll (garanti selon plusieurs guides), Boss Ticket (70%), Dungeon Key (60%), Frozen Will (4.25%), Yamato Essence (2.5%), Silent Storm (1.15%), Azure Heart (0.5%), Imperial Outfit (0.9%), Blade Sovereign Title (1%).",
    note: "Route importante pour Yamato. Certaines sources nomment le boss Vergil, d'autres Yamato."
  },
  {
    name: "Saber",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "1 Boss Key, 100,000 Cash, 175 Gems.",
    loot: "Haki Color Reroll (60%), Race Reroll (40%), Trait Reroll (25%), Boss Ticket (100%), Dungeon Key (10-12%), Saber / Excalibur (2%), Saber Armor (5%), Blade Master Title (5%).",
    note: "Très bon premier boss summon pour Boss Tickets."
  },
  {
    name: "Qin Shi",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "3 Boss Keys, 250,000 Cash, 400 Gems.",
    loot: "Haki Color Reroll (75%), Race Reroll (50%), Trait Reroll (40%), Boss Ticket (100%), Dungeon Key (15%), Jade Tablet (6%), Imperial Seal (2%), Qin Shi Blindfold (2.5%), King of Beginning Title (1.5%).",
    note: "Summon intermediaire de Boss Island."
  },
  {
    name: "Ichigo",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "5 Boss Keys, 350,000 Cash, 600 Gems.",
    loot: "Haki Color Reroll (85%), Race Reroll (80%), Trait Reroll (60%), Boss Ticket (100%), Dungeon Key (20%), Soul Fragment (6%), Spiritual Core (1.75%), Soul Flame (0.7%), Hollow Mask (2%), Soul Reaper Title (1%).",
    note: "Boss summon utile pour route Soul / Hollow."
  },
  {
    name: "Gilgamesh",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "1 Divine Grail, 500,000 Cash, 500 Gems.",
    loot: "Throne Remnant (11.5%), Ancient Shard (4.5%), Golden Essence (1.5%), Phantasm Core (0.5%), Gilgamesh Armor (1.15%), Golden King Title (1%).",
    note: "Le Divine Grail doit être craft selon les guides."
  },
  {
    name: "Corrupted Knight",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "1 Dark Grail, 650,000 Money, 650 Gems.",
    loot: "Morgan Remnant x15 (15%), Alter Essence x8 (5%), Corruption Core x3 (1.3%), Corrupt Crown (0.5%), Alter Armor (1.5%), Corrupt Tyrant Title (1%).",
    note: "Boss summon haut niveau."
  },
  {
    name: "Strongest of Today",
    type: "Spawnable",
    location: "Shinjuku Island",
    access: "1 Limitless Key.",
    loot: "Reversal Pulse (15%), Six Eye (6%), Blue Singularity (2%), Infinity Essence (0.65%), Gojo Haori (1.15%), Strongest Sorcerer Title (1%).",
    note: "Requiert les cles farm sur Gojo."
  },
  {
    name: "Strongest in History",
    type: "Spawnable",
    location: "Shinjuku Island",
    access: "1 Malevolent Key.",
    loot: "Awakened Cursed Finger (15%), Vessel Ring (6%), Malevolent Soul (2%), Cursed Flesh (0.65%), Divine Wheel (1.15%), Disgraced One Title (1%).",
    note: "Requiert les cles farm sur Sukuna."
  },
  {
    name: "Rimuru",
    type: "Spawnable",
    location: "Slime Island",
    access: "1 Slime Key.",
    loot: "Sage Pulse (13.5%), Tempest Seal (5.5%), Slime Remnant (1.75%), Slime Core (0.55%), Slime Wings (1.25%), Demon Lord Title (0.9%).",
    note: "Boss de route Slime."
  },
  {
    name: "Anos",
    type: "Spawnable",
    location: "Academy Island",
    access: "1 Calamity Seal.",
    loot: "Demonic Fragment (11.5%), Demonic Shard (4.5%), Destruction Eye (1%), Imperial Mark (0.5%), Anos Outfit (0.75%), Demon King Title (1%).",
    note: "Boss de route Anos / Voldigoat."
  },
  {
    name: "Atomic",
    type: "Spawnable / Scaling",
    location: "Lawless Island",
    access: "1 Abyss Sigil.",
    loot: "Magic Shard (8.75% a 13.12%), Shadow Remnant (2.85% a 4.5%), Atomic Outfit (0.75% a 1.3%), Eminence Essence (0.7% a 1.15%), Atomic Omen (0.3% a 0.6%), Eminence Incarnate Title (0.7% a 1.35%).",
    note: "Les taux varient selon la difficulté."
  },
  {
    name: "Moon Slayer",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "1 Upper Seal, 700,000 Money, 700 Gems.",
    loot: "Demon Remnant (13.41%), Lunar Essence (4.63%), Moon Outfit (1.22%), Crescent Shard (1.06%), Moon Crest (0.45%), Six Eyed Demon Title (1%).",
    note: "Boss haut niveau lie a Upper."
  },
  {
    name: "Ice Queen",
    type: "Boss Island Summon",
    location: "Boss Island",
    access: "1 Frost Relic, 750,000 Money, 750 Gems.",
    loot: "Battle Shard (16.20%), Glacier Remnant (5.37%), Ice Queen Outfit (1.42%), Frost Brand (1.21%), Ice Core (0.53%), Frost Empress Title (0.65%, pity 155).",
    note: "Boss haut niveau lie a Frostbane."
  },
  {
    name: "Escanor",
    type: "Special Summon",
    location: "Sailor Island",
    access: "1 Boss Rush Key.",
    loot: "Escanor Weapon, Sun Armor.",
    note: "Les taux de drop exacts ne sont pas clairement documentes publiquement."
  },
  {
    name: "Sea Serpent",
    type: "Sea Boss",
    location: "Open Sea / Deep Sea",
    access: "Au moins 500,000 bounty et rester environ 200 a 600 studs loin des îles.",
    loot: "Bloodline Stone, Clan Reroll, Blossom Outfit, Kraken Armor, Dragon Goddess, Dragon Queen Title (pity 150).",
    note: "Les taux exacts de chaque drop ne sont pas clairement publics."
  },
  {
    name: "Kraken",
    type: "Sea Boss",
    location: "Open Sea / Deep Sea",
    access: "Au moins 500,000 bounty et rester environ 200 a 600 studs loin des îles.",
    loot: "Bloodline Stone, Clan Reroll, Blossom Outfit, Kraken Armor, Dragon Goddess, Dragon Queen Title (pity 150).",
    note: "Les taux exacts de chaque drop ne sont pas clairement publics."
  },
  {
    name: "Cosmic Being",
    type: "World Boss",
    location: "Punch Island (Sea 2)",
    access: "World Boss en Sea 2 sur timer serveur d'environ 30 minutes selon les guides.",
    loot: "Cosmic Essence, Star Mark, Galaxy Shard, Monster Pulse, Cosmic Being Title (pity 75).",
    note: "Les taux de drop exacts ne sont pas affiches publiquement dans les sources consultees."
  }
];

const searchInput = document.querySelector("#search");
const filterButtons = document.querySelectorAll(".filter-button");
const wikiGrid = document.querySelector("#wiki-grid");

const assistantSearch = document.querySelector("#assistant-search");
const assistantSearchButton = document.querySelector("#assistant-search-button");
const assistantResetButton = document.querySelector("#assistant-reset-button");
const quickTags = document.querySelectorAll(".quick-tag");

const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const resultType = document.querySelector("#result-type");
const resultLevel = document.querySelector("#result-level");
const resultLocation = document.querySelector("#result-location");
const resultAction = document.querySelector("#result-action");
const resultTip = document.querySelector("#result-tip");
const suggestionsList = document.querySelector("#result-suggestions-list");

const addItemForm = document.querySelector("#add-item-form");
const itemType = document.querySelector("#item-type");
const itemCategory = document.querySelector("#item-category");
const clearCustomItemsButton = document.querySelector("#clear-custom-items");
const formNote = document.querySelector("#form-note");
const raceGuideGrid = document.querySelector("#race-guide-grid");
const clanGuideGrid = document.querySelector("#clan-guide-grid");
const bossGuideGrid = document.querySelector("#boss-guide-grid");
const titleGuideGrid = document.querySelector("#title-guide-grid");
const weaponGuideGrid = document.querySelector("#weapon-guide-grid");
const matGuideGrid = document.querySelector("#mat-guide-grid");
const npcGuideGrid = document.querySelector("#npc-guide-grid");
const questGuideGrid = document.querySelector("#quest-guide-grid");
const runeGuideGrid = document.querySelector("#rune-guide-grid");
const skillTreeGrid = document.querySelector("#skill-tree-grid");
const bossRushGrid = document.querySelector("#boss-rush-grid");
const towerGrid = document.querySelector("#tower-grid");
const traitGuideGrid = document.querySelector("#trait-guide-grid");
const artifactGuideGrid = document.querySelector("#artifact-guide-grid");
const ascensionGrid = document.querySelector("#ascension-grid");
const specPassiveGrid = document.querySelector("#spec-passive-grid");
const guildGrid = document.querySelector("#guild-grid");
const powerGrid = document.querySelector("#power-grid");
const bloodlineGrid = document.querySelector("#bloodline-grid");
const mobGuideGrid = document.querySelector("#mob-guide-grid");

let activeFilter = "all";

function saveCustomItems() {
  const customItems = wikiDatabase.filter((entry) => entry.isCustom);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customItems));
}

function normalizeType(category) {
  const map = {
    île: "Île",
    fruit: "Fruit",
    item: "Objet",
    race: "Race",
    boss: "Boss",
    system: "Système",
    arme: "Arme",
    mastery: "Mastery",
    titre: "Titre"
  };

  return map[category] || "Système";
}

function renderWikiCards() {
  if (!wikiGrid) {
    return;
  }

  const isExplorer = !!document.getElementById("assistant-search");

  wikiGrid.innerHTML = wikiDatabase
    .map((entry) => {
      const searchTerms = [entry.name, entry.summary, ...(entry.keywords || [])].join(" ").toLowerCase();
      const encodedName = encodeURIComponent(entry.name);

      if (isExplorer) {
        return `
          <article class="wiki-card wiki-card-clickable" data-category="${entry.category}" data-search="${searchTerms}" data-name="${entry.name}" rôle="button" tabindex="0" title="Voir la fiche : ${entry.name}">
            <p class="card-tag">${entry.type}</p>
            <h3>${entry.name}</h3>
            <p>${entry.summary}</p>
            <span class="card-cta">Voir la fiche →</span>
          </article>
        `;
      }

      return `
        <a class="wiki-card wiki-card-clickable" href="explorer.html?q=${encodedName}" data-category="${entry.category}" data-search="${searchTerms}" title="Voir la fiche : ${entry.name}">
          <p class="card-tag">${entry.type}</p>
          <h3>${entry.name}</h3>
          <p>${entry.summary}</p>
          <span class="card-cta">Voir la fiche →</span>
        </a>
      `;
    })
    .join("");

  if (isExplorer) {
    wikiGrid.querySelectorAll(".wiki-card-clickable").forEach((card) => {
      const handleActivate = () => {
        const name = card.dataset.name;
        if (assistantSearch) {
          assistantSearch.value = name;
          runAssistantSearch();
          document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth" });
        }
      };
      card.addEventListener("click", handleActivate);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleActivate();
        }
      });
    });
  }
}


// ── RUNES ──
const runeGuideData = [
  { name: "Suppression Rune", rarity: "Rare", source: "Rune Dungeon", effect: "Réduction de dégâts reçus", base: "10% DMG Reduction", max: "15% DMG Reduction", note: "Utile pour la survie, surtout en mode Extreme du donjon." },
  { name: "Guardian Rune", rarity: "Epic", source: "Rune Dungeon", effect: "Augmentation des HP max", base: "+39% Max HP (1.39x)", max: "+59% Max HP (1.59x)", note: "Bonne rune défensive pour les modes difficiles." },
  { name: "Frost Rune", rarity: "Legendary", source: "Rune Dungeon", effect: "Gel de l'ennemi + bonus de dégâts", base: "Gel 2s + 30% DMG", max: "Gel 3s + 44% DMG", note: "Très utile pour contrôler les ennemis lors des vagues." },
  { name: "Destruction Rune", rarity: "Legendary", source: "Rune Dungeon", effect: "Bonus de dégâts", base: "+25% DMG (1.25x)", max: "+37% DMG (1.37x)", note: "Bon choix DPS early endgame avant d'obtenir Wrath ou Havoc." },
  { name: "Inferno Rune", rarity: "Mythical", source: "Rune Dungeon", effect: "Brûlure de l'ennemi", base: "Brûlure 70% DMG (4s)", max: "Brûlure 104% DMG (4s)", note: "Bon effet DoT pour maintenir des dégâts continus." },
  { name: "Blood Rune", rarity: "Mythical", source: "Rune Dungeon", effect: "Saignement de l'ennemi", base: "Saignement 65% DMG (5s)", max: "Saignement 97% DMG (5s)", note: "Durée légèrement plus longue que l'Inferno Rune." },
  { name: "Wrath Rune", rarity: "Mythical", source: "Rune Dungeon", effect: "Bonus de dégâts élevé", base: "+40% DMG (1.4x)", max: "+59% DMG (1.59x)", note: "L'une des meilleures runes DPS du donjon. À farmer en priorité." },
  { name: "Fortune Rune", rarity: "Mythical", source: "Rune Dungeon", effect: "Bonus de Luck", base: "+10% Luck", max: "+15% Luck", note: "Indispensable pour les builds orientés farm et drops rares." },
  { name: "Havoc Rune", rarity: "Mythical", source: "Rune Dungeon", effect: "Très gros bonus de dégâts", base: "+55% DMG", max: "+82% DMG", note: "Meilleure rune DPS du donjon selon le tier list communautaire." },
  { name: "Primordial Rune", rarity: "Secret", source: "Infinite Tower (drop aléatoire très rare)", effect: "Boost de dégâts extrême", base: "Jusqu'à +120% DMG au niveau max", max: "+120% DMG (niveau 60)", note: "Meilleure rune du jeu. Drop chance : 0.0025% à 0.0135%. Nécessite de farmer l'Infinite Tower." },
  { name: "Radiant Rune", rarity: "Secret", source: "Infinite Tower (drop aléatoire très rare)", effect: "Bonus de Luck élevé", base: "+18% Luck", max: "+28% Luck", note: "Meilleure rune Luck du jeu. Obtenue dans l'Infinite Tower uniquement." }
];

// ── SKILL TREE ──
const skillTreeData = [
  { name: "Luck", category: "Drop & Farm", levels: 5, totalPoints: 265, pointsPerLevel: "15 / 25 / 50 / 75 / 100", effect: "Améliore le taux de drop des objets rares.", priority: "Haute", note: "Priorité n°1 si tu cherches à farmer efficacement." },
  { name: "Crit Chance", category: "Offensif", levels: 5, totalPoints: 59, pointsPerLevel: "3 / 6 / 10 / 15 / 25", effect: "Augmente la probabilité de coups critiques.", priority: "Haute", note: "À monter tôt pour booster le DPS général." },
  { name: "Crit Damage", category: "Offensif", levels: 5, totalPoints: 59, pointsPerLevel: "3 / 6 / 10 / 15 / 25", effect: "Augmente les dégâts des coups critiques.", priority: "Haute", note: "À combiner avec Crit Chance pour maximiser les dégâts." },
  { name: "Damage%", category: "Offensif", levels: 5, totalPoints: 59, pointsPerLevel: "3 / 6 / 10 / 15 / 25", effect: "Augmente les dégâts globaux de toutes les attaques.", priority: "Très haute", note: "Stat la plus impactante pour le DPS pur. Priorité absolue." },
  { name: "HP%", category: "Défensif", levels: 5, totalPoints: 48, pointsPerLevel: "2 / 5 / 8 / 13 / 20", effect: "Augmente les HP maximum du personnage.", priority: "Moyenne", note: "Utile pour survivre en mode Extreme et en endgame." }
];

// ── BOSS RUSH ──
const bossRushData = [
  { name: "Comment accéder", type: "Accès", condition: "Parler au Boss Rush NPC sur Sailor Island.", cost: "1 Boss Ticket par entrée. Tickets disponibles chez le marchand (175 Gems) ou via drops.", reward: "-", note: "Saber Boss donne 100% de Boss Tickets. Meilleure source gratuite." },
  { name: "Rush Coins", type: "Monnaie", condition: "Terminer des runs de Boss Rush.", cost: "-", reward: "5 coins par run en moyenne (mode Medium, rang S/SS).", note: "Total nécessaire pour tout maxer : 6 625 Rush Coins (~1 315 runs)." },
  { name: "Damage% Upgrade", type: "Amélioration", condition: "Dépenser des Rush Coins au shop Boss Rush.", cost: "Rush Coins", reward: "Jusqu'à +X% Damage permanent.", note: "Priorité absolue : investir tous les coins dans les nodes de dégâts." },
  { name: "Luck% Upgrade", type: "Amélioration", condition: "Dépenser des Rush Coins au shop Boss Rush.", cost: "Rush Coins", reward: "+15% Luck total au maximum.", note: "À maxer après les upgrades de dégâts." },
  { name: "HP% Upgrade", type: "Amélioration", condition: "Dépenser des Rush Coins au shop Boss Rush.", cost: "Rush Coins", reward: "Augmentation des HP max.", note: "Utile pour survivre en Hard / Extreme." },
  { name: "Crit Upgrade", type: "Amélioration", condition: "Dépenser des Rush Coins au shop Boss Rush.", cost: "Rush Coins", reward: "Bonus de Crit Chance et/ou Crit Damage.", note: "Complémentaire aux upgrades de dégâts." },
  { name: "Mode Easy", type: "Difficulté", condition: "Disponible dès l'ouverture du Boss Rush.", cost: "1 Boss Ticket", reward: "Peu de Rush Coins, bonne intro.", note: "Utile seulement pour apprendre les patterns." },
  { name: "Mode Medium", type: "Difficulté", condition: "Disponible dès l'ouverture.", cost: "1 Boss Ticket", reward: "~5 Rush Coins par run (optimal AFK).", note: "Meilleur ratio temps/coins pour farm passivement." },
  { name: "Mode Hard", type: "Difficulté", condition: "Disponible dès l'ouverture.", cost: "1 Boss Ticket", reward: "Plus de Rush Coins mais plus difficile.", note: "Recommandé avec un bon build endgame." },
  { name: "Mode Extreme", type: "Difficulté", condition: "Disponible dès l'ouverture.", cost: "1 Boss Ticket", reward: "Maximum de Rush Coins par run.", note: "Réservé aux builds très optimisés. Nécessite une bonne rune et des stats max." }
];

// ── INFINITE TOWER ──
const towerData = [
  { name: "Comment accéder", type: "Accès", condition: "Parler au Infinite Tower NPC sur Tower Island.", cost: "1 Tower Key par entrée.", reward: "-", note: "Tower Keys se droppent sur les ennemis forts (mobs endgame et boss)." },
  { name: "Tower Tokens", type: "Monnaie", condition: "Monter des étages dans l'Infinite Tower.", cost: "-", reward: "Tokens gagnés à chaque palier.", note: "Dépenser au shop Tower pour des upgrades permanents similaires au Boss Rush." },
  { name: "Luck% Upgrade", type: "Amélioration", condition: "Dépenser des Tower Tokens.", cost: "Tower Tokens", reward: "+15% Luck total au maximum.", note: "Combiné aux upgrades Boss Rush : jusqu'à +30% Luck depuis ces deux sources." },
  { name: "Damage% Upgrade", type: "Amélioration", condition: "Dépenser des Tower Tokens.", cost: "Tower Tokens", reward: "Bonus de dégâts permanent.", note: "Priorité après le Luck si tu cherches un build DPS." },
  { name: "Primordial Rune Drop", type: "Drop rare", condition: "Monter le plus haut possible dans la tour.", cost: "-", reward: "Primordial Rune (0.0025% à 0.0135% de chance).", note: "Meilleure rune du jeu. Farm en équipe pour monter plus haut." },
  { name: "Radiant Rune Drop", type: "Drop rare", condition: "Monter dans la tour.", cost: "-", reward: "Radiant Rune (+18% à +28% Luck).", note: "Très rare. La seule source de Radiant Rune dans le jeu." },
  { name: "Abyssal Sword Drop", type: "Drop rare", condition: "Farm de l'Infinite Tower.", cost: "-", reward: "Abyssal Empress Sword.", note: "L'une des meilleures épées endgame. Aussi droppable via AFK en mode Medium/Hard." },
  { name: "Abyssal Outfit Drop", type: "Drop rare", condition: "Farm de l'Infinite Tower.", cost: "-", reward: "Abyssal Outfit (cosmétique).", note: "Cosmétique rare de la tour." }
];

// ── TRAITS ──
const traitGuideData = [
  { name: "Dominator", rarity: "Epic", stats: "+20% DMG, +15% Crit DMG", note: "Bon trait offensif accessible en début de progression endgame." },
  { name: "Overdrive", rarity: "Epic", stats: "+18% DMG, +10% Crit Chance", note: "Combinaison Crit utile pour les builds rapides." },
  { name: "Warlord", rarity: "Legendary", stats: "+25% DMG, +20% Crit DMG, +10% Crit Chance", note: "Trait Legendary très équilibré. Fonctionne avec Swordblessed pour les builds sword." },
  { name: "Swordblessed", rarity: "Legendary", stats: "+30% Sword DMG, +15% DMG", note: "Indispensable pour les builds sword. Nécessaire pour certaines masteries." },
  { name: "Kitsune", rarity: "Legendary", stats: "+25% DMG, +15% Luck", note: "Excellent trait hybride DPS/Farm." },
  { name: "Luckborn", rarity: "Mythical", stats: "+20% DMG, +30% Luck", note: "Meilleur trait de farm du jeu. Combiné avec Fortune Rune, les drops deviennent très fréquents." },
  { name: "Emperor", rarity: "Secret", stats: "+Fort multiplicateur de DMG, réduction de cooldown", note: "Meilleur trait DPS du jeu selon le tier list. Priorité absolue pour les builds damage." },
  { name: "Celestial", rarity: "Secret", stats: "Stats très élevées (non confirmées publiquement)", note: "Trait Secret très rare. Nécessite beaucoup de Trait Rerolls." },
  { name: "Singularity", rarity: "Secret", stats: "Stats très élevées (non confirmées publiquement)", note: "Trait Secret, obtenu rarement via Trait Reroll." },
  { name: "Vessel", rarity: "Rare", stats: "+10% DMG, +5% Crit Chance", note: "Bon trait de départ pour les builds melee early game." }
];

// ── ARTIFACTS ──
const artifactGuideData = [
  { name: "Celestial Rupture", type: "Set 2/4", source: "Artifacts Master (échange endgame)", bonus2: "Bonus de set (2 pièces) : non confirmé publiquement.", bonus4: "Bonus de set (4 pièces) : non confirmé publiquement.", note: "L'un des artefacts endgame les plus puissants selon les guides communautaires." },
  { name: "Abyssal Crown", type: "Set 2/4", source: "Artifacts Master (échange endgame)", bonus2: "Bonus de set (2 pièces) : non confirmé publiquement.", bonus4: "Bonus de set (4 pièces) : non confirmé publiquement.", note: "Artefact endgame très recherché pour les builds DPS." },
  { name: "Comment obtenir", type: "Système", source: "Artifacts Master NPC (zone endgame)", bonus2: "Porte 2 pièces d'un même set pour le bonus 2x.", bonus4: "Porte 4 pièces d'un même set pour le bonus 4x.", note: "Les sous-stats des artefacts peuvent être rérollées pour optimiser le build (CD, DMG, Luck...)." },
  { name: "Sous-stats optimales", type: "Conseil", source: "Réroll via NPC dédié", bonus2: "Priorité : CD% (Cooldown), DMG%, Crit Chance.", bonus4: "Éviter les stats HP et défense sauf builds tank.", note: "Il faut du temps pour obtenir un set complet avec des sous-stats optimales." }
];

// ── ASCENSION ──
const ascensionData = [
  { name: "Ascension 1", level: "500+", location: "Ascension NPC - Sailor Island", cost: "Matériaux de base + Gold", reward: "+Stats de base, débloque de nouvelles capacités.", note: "Première ascension, accessible tôt dans le jeu." },
  { name: "Ascension 2", level: "1500+", location: "Ascension NPC - Sailor Island", cost: "Matériaux mid-game + Gold", reward: "+Stats supplémentaires.", note: "Important de faire au plus vite pour accélérer la progression." },
  { name: "Ascension 3", level: "3000+", location: "Ascension NPC - Sailor Island", cost: "Matériaux avancés + Gold", reward: "+Stats supplémentaires, bonus Luck.", note: "Marque le début de la progression mid-game sérieuse." },
  { name: "Ascension 4", level: "5000+", location: "Ascension NPC - Sailor Island", cost: "Matériaux endgame", reward: "+Stats élevées, bonus de progression.", note: "Nécessite des matériaux obtenus sur des boss avancés." },
  { name: "Ascension 5+", level: "7000+", location: "Ascension NPC - Sailor Island", cost: "Matériaux endgame rares (Phantasm Core, etc.)", reward: "Max stats. Jusqu'à +40% Luck total toutes ascensions confondues.", note: "Maxer toutes les ascensions donne +40% Luck selon les sources. Essentiel pour l'endgame." }
];

// ── SPEC PASSIVES ──
const specPassiveData = [
  { name: "Fortune Chosen", type: "Drop / Farm", source: "Spec Passive NPC - Judgement Island", effect: "+30% chance de drop supplémentaire sur les ennemis, +5 à +10% Luck.", note: "Meilleur passif pour les builds de farm. Priorité si tu veux optimiser les drops." },
  { name: "Mythical Spec Passive", type: "DPS / Général", source: "Spec Passive NPC - Judgement Island (Power Master)", effect: "Stats élevées selon le roll (DMG, Crit, HP...)", note: "Roller via le Power Master sur Judgement/Lawless Island. Viser Mythical tier minimum." },
  { name: "Comment obtenir", type: "Système", source: "Power Master NPC - Judgement Island / Lawless Island", effect: "Roller pour obtenir des Spec Passives de différentes raretés.", note: "Les Spec Passives se rollent via le Power Master. Garder les rolls Mythical+." }
];

// ── GUILDES ──
const guildData = [
  { name: "Créer ou rejoindre une guilde", type: "Accès", condition: "Disponible depuis la mise à jour Sea 2.", cost: "Créer coûte des ressources. Rejoindre est gratuit.", reward: "Accès aux bonus de guilde et aux tâches quotidiennes.", note: "Mise à jour Guildes ajoutée en avril 2026 avec la Sea 2 update." },
  { name: "Tâches quotidiennes de guilde", type: "Activité", condition: "Être membre d'une guilde active.", cost: "-", reward: "Points de guilde utilisables pour upgrader les stats.", note: "Faire les tâches quotidiennes est essentiel pour progresser en guilde." },
  { name: "Upgrade Damage de guilde", type: "Amélioration", condition: "Dépenser les points de guilde.", cost: "Points de guilde", reward: "Bonus de dégâts permanent pour tous les membres.", note: "Priorité aux upgrades de dégâts et de stats critiques." },
  { name: "Upgrade Crit de guilde", type: "Amélioration", condition: "Dépenser les points de guilde.", cost: "Points de guilde", reward: "Bonus de Crit Chance/Damage.", note: "Complémentaire aux upgrades damage." }
];

// ── POWERS (Sea 2) ──
const powerData = [
  { name: "Colossus Power", type: "Power", source: "Power Master NPC - Lawless Island", effect: "+7.5 à +10% Luck.", note: "Bon power pour les builds de farm. Le Power Master est sur Lawless Island." },
  { name: "Comment obtenir des Powers", type: "Système", source: "Power Master NPC - Lawless Island", effect: "Roller pour obtenir des Powers via Power Shards.", note: "Power Shards se droppent sur les NPCs de Ninja Island et Lawless Island." },
  { name: "Power Shards", type: "Matériau", source: "NPCs de Ninja Island et Lawless Island", effect: "Nécessaires pour roller des Powers.", note: "Farm intensif recommandé sur ces deux îles pour accumuler des Shards." },
  { name: "Passive Shards", type: "Matériau", source: "NPCs de Ninja Island et Lawless Island", effect: "Nécessaires pour les Spec Passives.", note: "À farmer en parallèle des Power Shards." }
];

// ── BLOODLINES (Sea 2) ──
const bloodlineData = [
  { name: "Primordial Bloodline", rarity: "Légendaire", effect: "+15% Luck.", source: "Bloodline Stones - Sea Serpent / Kraken (Open Sea).", note: "Meilleure bloodline de farm. Bloodlines rollées avec des Bloodline Stones." },
  { name: "Astral Bloodline", rarity: "Légendaire", effect: "+DMG output élevé (Sea 2).", source: "Bloodline Stones - Open Sea.", note: "Très bonne bloodline DPS pour les joueurs Sea 2." },
  { name: "Comment roller", type: "Système", effect: "Utiliser des Bloodline Stones pour roller sa bloodline.", source: "Sea Serpent / Kraken en Open Sea avec 500,000+ bounty.", note: "Les Bloodlines sont un système de Sea 2. Disponibles après avoir débloqué la Second Sea." }
];


// ── GESTION DU MENU DROPDOWN ──
(function initDropdown() {
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!menu || !trigger) return;

    // Déplacer le menu directement dans <body> pour éviter tout z-index/stacking context
    document.body.appendChild(menu);
    menu.style.position = 'fixed';
    menu.style.zIndex = '999999';

    let timer = null;

    const updatePos = () => {
      const r = trigger.getBoundingClientRect();
      const mw = menu.offsetWidth || 600;
      let left = r.right - mw;
      if (left < 8) left = 8;
      if (left + mw > window.innerWidth - 8) left = window.innerWidth - mw - 8;
      menu.style.top = (r.bottom + 6) + 'px';
      menu.style.left = left + 'px';
    };

    const open = () => {
      clearTimeout(timer);
      updatePos();
      menu.classList.add('is-open');
    };
    const close = () => {
      timer = setTimeout(() => menu.classList.remove('is-open'), 200);
    };

    trigger.addEventListener('mouseenter', open);
    dropdown.addEventListener('mouseenter', open);
    dropdown.addEventListener('mouseleave', close);
    menu.addEventListener('mouseenter', () => clearTimeout(timer));
    menu.addEventListener('mouseleave', close);
  });
})();

// Gestion du parametre URL ?q= sur explorer.html
(function handleUrlQuery() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  if (!query) return;

  const tryLaunch = (attempts = 0) => {
    const input = document.getElementById("assistant-search");
    if (input) {
      input.value = decodeURIComponent(query);
      runAssistantSearch();
      document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth" });
    } else if (attempts < 10) {
      setTimeout(() => tryLaunch(attempts + 1), 100);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => tryLaunch());
  } else {
    tryLaunch();
  }
})();

function renderRaceGuide() {
  if (!raceGuideGrid) {
    return;
  }

  raceGuideGrid.innerHTML = raceGuideData
    .map((race) => `
      <article class="race-guide-card">
        <div class="race-guide-top">
          <h3>${race.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${race.rarity}</span>
            <span class="race-badge">${race.chance}</span>
          </div>
        </div>
        <p>${race.bonus}</p>
        <p class="race-guide-note"><strong>PNJ utile :</strong> ${race.usefulFor}</p>
      </article>
    `)
    .join("");
}

function renderClanGuide() {
  if (!clanGuideGrid) {
    return;
  }

  clanGuideGrid.innerHTML = clanGuideData
    .map((clan) => `
      <article class="race-guide-card">
        <div class="race-guide-top">
          <h3>${clan.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${clan.rarity}</span>
            <span class="race-badge">${clan.chance}</span>
          </div>
        </div>
        <p><strong>Bonus :</strong> ${clan.bonus}</p>
        <p class="race-guide-note"><strong>Passif :</strong> ${clan.passive}</p>
        <p class="race-guide-note"><strong>PNJ utile :</strong> ${clan.usefulFor}</p>
      </article>
    `)
    .join("");
}

function formatLootLinks(lootString) {
  return lootString.replace(/([A-Z][A-Za-z\s']+?)(\s*\([\d.]+%[^)]*\))/g, (match, itemName, chance) => {
    const trimmed = itemName.trim();
    const encoded = encodeURIComponent(trimmed);
    const inWiki = wikiDatabase.some(e => e.name.toLowerCase() === trimmed.toLowerCase());
    if (inWiki) {
      return `<a class="loot-link loot-link-wiki" href="explorer.html?q=${encoded}" title="Voir la fiche : ${trimmed}">${trimmed}</a>${chance}`;
    }
    return `<span class="loot-link loot-link-search" data-query="${trimmed}" title="Chercher : ${trimmed}" rôle="button" tabindex="0">${trimmed}</span>${chance}`;
  });
}

function renderBossGuide() {
  if (!bossGuideGrid) {
    return;
  }

  bossGuideGrid.innerHTML = bossGuideData
    .map((boss) => `
      <article class="boss-guide-card">
        <div class="boss-guide-top">
          <h3>${boss.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${boss.type}</span>
          </div>
        </div>
        <p><strong>Emplacement :</strong> ${boss.location}</p>
        <p><strong>Condition d'acces :</strong> ${boss.access}</p>
        <p><strong>Loot :</strong> ${formatLootLinks(boss.loot)}</p>
        <p class="race-guide-note"><strong>Note :</strong> ${boss.note}</p>
      </article>
    `)
    .join("");

  bossGuideGrid.querySelectorAll(".loot-link-search").forEach((el) => {
    const activate = () => {
      const query = el.dataset.query;
      const input = document.getElementById("assistant-search");
      if (input) {
        input.value = query;
        runAssistantSearch();
        document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `explorer.html?q=${encodeURIComponent(query)}`;
      }
    };
    el.addEventListener("click", activate);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
    });
  });
}

function renderTitleGuide() {
  if (!titleGuideGrid) return;
  titleGuideGrid.innerHTML = titleGuideData
    .map((t) => `
      <article class="race-guide-card">
        <div class="race-guide-top">
          <h3>${t.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${t.drop}</span>
            ${t.pity !== "Non confirme" ? `<span class="race-badge">Pity ${t.pity}</span>` : ""}
          </div>
        </div>
        <p><strong>Boss :</strong> ${t.boss}</p>
        <p><strong>Emplacement :</strong> ${t.location}</p>
        <p class="race-guide-note"><strong>Note :</strong> ${t.note}</p>
      </article>
    `)
    .join("");
}

function renderWeaponGuide() {
  if (!weaponGuideGrid) return;
  weaponGuideGrid.innerHTML = weaponOnlyData
    .map((w) => `
      <article class="boss-guide-card">
        <div class="boss-guide-top">
          <h3>${w.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${w.type}</span>
            <span class="race-badge">${w.drop}</span>
          </div>
        </div>
        <p><strong>Source :</strong> ${w.source}</p>
        <p><strong>Stats :</strong> ${w.stats}</p>
        <p class="race-guide-note"><strong>Note :</strong> ${w.note}</p>
      </article>
    `)
    .join("");
}

function renderMatGuide() {
  if (!matGuideGrid) return;
  matGuideGrid.innerHTML = matGuideData
    .map((m) => `
      <article class="boss-guide-card">
        <div class="boss-guide-top">
          <h3>${m.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${m.type}</span>
            <span class="race-badge">${m.drop}</span>
          </div>
        </div>
        <p><strong>Source :</strong> ${m.source}</p>
        <p><strong>Utilise pour :</strong> ${m.usedFor}</p>
        <p class="race-guide-note"><strong>Note :</strong> ${m.note}</p>
      </article>
    `)
    .join("");
}

function renderMobGuide() {
  if (!mobGuideGrid) return;
  mobGuideGrid.innerHTML = mobGuideData
    .map((m) => `
      <article class="boss-guide-card">
        <div class="boss-guide-top">
          <h3>${m.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${m.zone}</span>
            <span class="race-badge">Niv. ${m.level}</span>
          </div>
        </div>
        <p><strong>Drops :</strong> ${m.loot}</p>
        <p class="race-guide-note"><strong>Note :</strong> ${m.note}</p>
      </article>
    `)
    .join("");
}

function renderNpcGuide() {
  if (!npcGuideGrid) return;

  const rôles = [...new Set(npcGuideData.map(n => n.rôle.split(" ").slice(0, 2).join(" ")))];
  const groups = {
    "Donneur de": npcGuideData.filter(n => n.rôle === "Donneur de quete"),
    "Formateur Haki": npcGuideData.filter(n => n.rôle === "Formateur Haki"),
    "Formateur melee": npcGuideData.filter(n => n.rôle === "Formateur melee"),
    "Mastery NPC": npcGuideData.filter(n => n.rôle === "Mastery NPC"),
    "Vendeur d'armes": npcGuideData.filter(n => n.rôle === "Vendeur d'armes"),
    "Utilitaires": npcGuideData.filter(n => !["Donneur de quete","Formateur Haki","Formateur melee","Mastery NPC","Vendeur d'armes"].includes(n.rôle))
  };

  npcGuideGrid.innerHTML = npcGuideData
    .map((n) => {
      const questLink = n.questId
        ? `<p class="race-guide-note"><a class="loot-link" href="#quest-guide-grid" onclick="highlightQuest('${n.name}')" title="Voir la quete">Voir la quete associee →</a></p>`
        : "";
      return `
      <article class="race-guide-card">
        <div class="race-guide-top">
          <h3>${n.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${n.rôle}</span>
          </div>
        </div>
        <p><strong>Emplacement :</strong> ${n.location}</p>
        <p><strong>Service :</strong> ${n.service}</p>
        <p class="race-guide-note"><strong>Note :</strong> ${n.note}</p>
        ${questLink}
      </article>
    `})
    .join("");
}

function highlightQuest(npcName) {
  const grid = document.getElementById("quest-guide-grid");
  if (!grid) return;
  setTimeout(() => {
    const cards = grid.querySelectorAll(".boss-guide-card");
    cards.forEach(c => {
      c.style.transition = "border-color 0.3s";
      if (c.dataset.npc === npcName) {
        c.style.borderColor = "rgba(255,201,77,0.9)";
        c.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => { c.style.borderColor = ""; }, 2500);
      }
    });
  }, 400);
}

function renderQuestGuide() {
  if (!questGuideGrid) return;
  questGuideGrid.innerHTML = questGuideData
    .map((q) => `
      <article class="boss-guide-card" data-npc="${q.npc}">
        <div class="boss-guide-top">
          <h3>${q.name}</h3>
          <div class="race-badges">
            <span class="race-badge">${q.type}</span>
            <span class="race-badge">Niv. ${q.level}</span>
          </div>
        </div>
        <p><strong>PNJ :</strong> ${q.npc} — ${q.location}</p>
        <p><strong>Objectif :</strong> ${q.objective}</p>
        <p><strong>Recompenses :</strong> ${q.rewards}</p>
        <p class="race-guide-note"><strong>Condition :</strong> ${q.condition}</p>
      </article>
    `)
    .join("");
}

function renderRuneGuide() {
  if (!runeGuideGrid) return;
  runeGuideGrid.innerHTML = runeGuideData.map(r => `
    <article class="race-guide-card">
      <div class="race-guide-top">
        <h3>${r.name}</h3>
        <div class="race-badges"><span class="race-badge">${r.rarity}</span></div>
      </div>
      <p><strong>Effet :</strong> ${r.effect}</p>
      <p><strong>Base :</strong> ${r.base}</p>
      <p><strong>Max :</strong> ${r.max}</p>
      <p><strong>Source :</strong> ${r.source}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${r.note}</p>
    </article>`).join("");
}

function renderSkillTree() {
  if (!skillTreeGrid) return;
  skillTreeGrid.innerHTML = skillTreeData.map(s => `
    <article class="race-guide-card">
      <div class="race-guide-top">
        <h3>${s.name}</h3>
        <div class="race-badges">
          <span class="race-badge">${s.category}</span>
          <span class="race-badge">Priorité : ${s.priority}</span>
        </div>
      </div>
      <p><strong>Effet :</strong> ${s.effect}</p>
      <p><strong>Niveaux :</strong> ${s.levels} (${s.totalPoints} points total)</p>
      <p><strong>Points par niveau :</strong> ${s.pointsPerLevel}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${s.note}</p>
    </article>`).join("");
}

function renderBossRush() {
  if (!bossRushGrid) return;
  bossRushGrid.innerHTML = bossRushData.map(b => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${b.name}</h3>
        <div class="race-badges"><span class="race-badge">${b.type}</span></div>
      </div>
      <p><strong>Condition :</strong> ${b.condition}</p>
      <p><strong>Coût :</strong> ${b.cost}</p>
      <p><strong>Récompense :</strong> ${b.reward}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${b.note}</p>
    </article>`).join("");
}

function renderTower() {
  if (!towerGrid) return;
  towerGrid.innerHTML = towerData.map(t => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${t.name}</h3>
        <div class="race-badges"><span class="race-badge">${t.type}</span></div>
      </div>
      <p><strong>Condition :</strong> ${t.condition}</p>
      <p><strong>Coût :</strong> ${t.cost}</p>
      <p><strong>Récompense :</strong> ${t.reward}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${t.note}</p>
    </article>`).join("");
}

function renderTraitGuide() {
  if (!traitGuideGrid) return;
  traitGuideGrid.innerHTML = traitGuideData.map(t => `
    <article class="race-guide-card">
      <div class="race-guide-top">
        <h3>${t.name}</h3>
        <div class="race-badges"><span class="race-badge">${t.rarity}</span></div>
      </div>
      <p><strong>Stats :</strong> ${t.stats}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${t.note}</p>
    </article>`).join("");
}

function renderArtifactGuide() {
  if (!artifactGuideGrid) return;
  artifactGuideGrid.innerHTML = artifactGuideData.map(a => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${a.name}</h3>
        <div class="race-badges"><span class="race-badge">${a.type}</span></div>
      </div>
      <p><strong>Source :</strong> ${a.source}</p>
      <p><strong>Bonus 2 pièces :</strong> ${a.bonus2}</p>
      <p><strong>Bonus 4 pièces :</strong> ${a.bonus4}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${a.note}</p>
    </article>`).join("");
}

function renderAscension() {
  if (!ascensionGrid) return;
  ascensionGrid.innerHTML = ascensionData.map(a => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${a.name}</h3>
        <div class="race-badges"><span class="race-badge">Niveau ${a.level}</span></div>
      </div>
      <p><strong>Emplacement :</strong> ${a.location}</p>
      <p><strong>Coût :</strong> ${a.cost}</p>
      <p><strong>Récompense :</strong> ${a.reward}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${a.note}</p>
    </article>`).join("");
}

function renderSpecPassive() {
  if (!specPassiveGrid) return;
  specPassiveGrid.innerHTML = specPassiveData.map(s => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${s.name}</h3>
        <div class="race-badges"><span class="race-badge">${s.type}</span></div>
      </div>
      <p><strong>Source :</strong> ${s.source}</p>
      <p><strong>Effet :</strong> ${s.effect}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${s.note}</p>
    </article>`).join("");
}

function renderGuild() {
  if (!guildGrid) return;
  guildGrid.innerHTML = guildData.map(g => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${g.name}</h3>
        <div class="race-badges"><span class="race-badge">${g.type}</span></div>
      </div>
      <p><strong>Condition :</strong> ${g.condition}</p>
      <p><strong>Coût :</strong> ${g.cost}</p>
      <p><strong>Récompense :</strong> ${g.reward}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${g.note}</p>
    </article>`).join("");
}

function renderPower() {
  if (!powerGrid) return;
  powerGrid.innerHTML = powerData.map(p => `
    <article class="boss-guide-card">
      <div class="boss-guide-top">
        <h3>${p.name}</h3>
        <div class="race-badges"><span class="race-badge">${p.type}</span></div>
      </div>
      <p><strong>Source :</strong> ${p.source}</p>
      <p><strong>Effet :</strong> ${p.effect}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${p.note}</p>
    </article>`).join("");
}

function renderBloodline() {
  if (!bloodlineGrid) return;
  bloodlineGrid.innerHTML = bloodlineData.map(b => `
    <article class="race-guide-card">
      <div class="race-guide-top">
        <h3>${b.name}</h3>
        <div class="race-badges"><span class="race-badge">${b.rarity || b.type || "Système"}</span></div>
      </div>
      <p><strong>Effet :</strong> ${b.effect}</p>
      <p><strong>Source :</strong> ${b.source}</p>
      <p class="race-guide-note"><strong>Note :</strong> ${b.note}</p>
    </article>`).join("");
}

function addWikiItem(entry) {
  wikiDatabase.push(entry);
  saveCustomItems();
  renderWikiCards();
  updateCards();
}

function scoreEntry(entry, query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return 0;
  }

  const exactName = entry.name.toLowerCase() === normalized ? 200 : 0;
  const nameStarts = entry.name.toLowerCase().startsWith(normalized) ? 120 : 0;
  const nameIncludes = entry.name.toLowerCase().includes(normalized) ? 80 : 0;
  const keywordHits = entry.keywords.reduce((total, keyword) => total + (keyword.toLowerCase().includes(normalized) ? 25 : 0), 0);
  const summaryHit = entry.summary.toLowerCase().includes(normalized) ? 18 : 0;
  const typeHit = entry.type.toLowerCase().includes(normalized) ? 10 : 0;

  return exactName + nameStarts + nameIncludes + keywordHits + summaryHit + typeHit;
}

function renderSuggestions(entries) {
  if (!suggestionsList) {
    return;
  }

  if (!entries.length) {
    suggestionsList.innerHTML = '<span class="suggestion-chip">Aucun résultat proche</span>';
    return;
  }

  suggestionsList.innerHTML = entries
    .map((entry) => `<button type="button" class="quick-tag suggestion-action" data-query="${entry.name}">${entry.name}</button>`)
    .join("");

  document.querySelectorAll(".suggestion-action").forEach((button) => {
    button.addEventListener("click", () => {
      if (assistantSearch) {
        assistantSearch.value = button.dataset.query;
      }
      runAssistantSearch();
    });
  });
}

function renderAssistantResult(entry, alternatives = []) {
  if (!resultTitle) {
    return;
  }

  resultTitle.textContent = entry.name;
  resultSummary.textContent = entry.summary;
  resultType.textContent = entry.type;
  resultLevel.textContent = entry.level;
  resultLocation.textContent = entry.location;
  resultAction.textContent = entry.action;
  resultTip.textContent = entry.tip;
  renderSuggestions(alternatives);
}

function renderNoResult(query) {
  if (!resultTitle) {
    return;
  }

  resultTitle.textContent = "Aucun résultat exact";
  resultSummary.textContent = `Je n'ai pas trouve "${query}". Essaie un nom plus simple ou clique sur une suggestion.`;
  resultType.textContent = "-";
  resultLevel.textContent = "-";
  resultLocation.textContent = "Essaie un nom d'île, de fruit, de boss ou de Haki.";
  resultAction.textContent = "Tu peux aussi utiliser les cartes de la base de donnees juste en dessous.";
  resultTip.textContent = "Exemples utiles: Sailor Island, Light Fruit, Observation Haki, Jinwoo.";
}

function runAssistantSearch() {
  if (!assistantSearch) {
    return;
  }

  const query = assistantSearch.value.trim();

  if (!query) {
    if (resultTitle) {
      resultTitle.textContent = "Tape un nom pour commencer";
      resultSummary.textContent = "Cherche un fruit, une île, un boss ou une mecanique comme le Haki. Le site te donnera une fiche simple avec des conseils.";
      resultType.textContent = "-";
      resultLevel.textContent = "-";
      resultLocation.textContent = "-";
      resultAction.textContent = "-";
      resultTip.textContent = "-";
    }
    renderSuggestions([]);
    updateCards();
    return;
  }

  const ranked = wikiDatabase
    .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) {
    renderNoResult(query);
    renderSuggestions(wikiDatabase.slice(0, 4));
    updateCards(query);
    return;
  }

  const best = ranked[0].entry;
  const alternatives = ranked.slice(1, 5).map((item) => item.entry);

  renderAssistantResult(best, alternatives);

  if (searchInput) {
    searchInput.value = best.name;
  }

  activeFilter = best.category;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === best.category);
  });
  updateCards(best.name);
}

function updateCards(forcedQuery = "") {
  if (!wikiGrid) {
    return;
  }

  const query = (forcedQuery || (searchInput ? searchInput.value : "") || "").trim().toLowerCase();
  const wikiCards = document.querySelectorAll(".wiki-card");

  wikiCards.forEach((card) => {
    const category = card.dataset.category;
    const haystack = `${card.textContent} ${card.dataset.search}`.toLowerCase();
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesQuery = !query || haystack.includes(query);

    card.hidden = !(matchesFilter && matchesQuery);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => updateCards());
}

if (assistantSearch) {
  assistantSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runAssistantSearch();
    }
  });
}

if (assistantSearchButton) {
  assistantSearchButton.addEventListener("click", runAssistantSearch);
}

if (assistantResetButton) {
  assistantResetButton.addEventListener("click", () => {
    if (assistantSearch) {
      assistantSearch.value = "";
    }
    if (searchInput) {
      searchInput.value = "";
    }
    activeFilter = "all";
    filterButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === "all");
    });
    runAssistantSearch();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    updateCards();
  });
});

quickTags.forEach((button) => {
  button.addEventListener("click", () => {
    if (assistantSearch) {
      assistantSearch.value = button.dataset.query;
    }
    runAssistantSearch();
  });
});

if (itemCategory && itemType) {
  itemCategory.addEventListener("change", () => {
    itemType.value = normalizeType(itemCategory.value);
  });
}

if (addItemForm) {
  addItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(addItemForm);
    const name = String(formData.get("name") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const keywords = String(formData.get("keywords") || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const entry = {
      name,
      type: normalizeType(category),
      category,
      level: String(formData.get("level") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      action: String(formData.get("action") || "").trim(),
      tip: String(formData.get("tip") || "").trim(),
      summary: String(formData.get("summary") || "").trim(),
      keywords,
      isCustom: true
    };

    addWikiItem(entry);
    addItemForm.reset();

    if (itemType) {
      itemType.value = "Fruit";
    }
    if (itemCategory) {
      itemCategory.value = "fruit";
    }
    if (formNote) {
      formNote.textContent = `Objet ajoute: ${name}`;
    }
  });
}

if (clearCustomItemsButton) {
  clearCustomItemsButton.addEventListener("click", () => {
    const remainingBaseItems = wikiDatabase.filter((entry) => !entry.isCustom);
    wikiDatabase.length = 0;
    wikiDatabase.push(...remainingBaseItems);
    localStorage.removeItem(STORAGE_KEY);
    renderWikiCards();
    updateCards();
    if (formNote) {
      formNote.textContent = "Tes ajouts perso ont ete supprimes.";
    }
  });
}

// Appels automatiques selon la page
const pageFile = window.location.pathname.split("/").pop() || "index.html";

if (pageFile === "explorer.html" || pageFile === "" || pageFile === "index.html") {
  renderWikiCards();
  renderSuggestions([]);
  updateCards();
}
if (pageFile === "add-item.html") {
  renderWikiCards();
}
if (pageFile === "guides.html") {
  renderRaceGuide();
  renderClanGuide();
  renderBossGuide();
  renderTitleGuide();
  renderWeaponGuide();
  renderMatGuide();
  renderMobGuide();
  renderNpcGuide();
  renderQuestGuide();
}
if (pageFile === "guide-races.html")     { renderRaceGuide(); }
if (pageFile === "guide-clans.html")     { renderClanGuide(); }
if (pageFile === "guide-boss.html")      { renderBossGuide(); }
if (pageFile === "guide-mobs.html")      { renderMobGuide(); }
if (pageFile === "guide-titres.html")    { renderTitleGuide(); }
if (pageFile === "guide-armes.html")     { renderWeaponGuide(); }
if (pageFile === "guide-materiaux.html") { renderMatGuide(); }
if (pageFile === "guide-pnj.html")       { renderNpcGuide(); }
if (pageFile === "guide-quetes.html")    { renderQuestGuide(); }
