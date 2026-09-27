/**
 * The only place where catalog content lives.
 * Both the cards and the modal window are built from these objects.
 */

export const CATEGORIES = [
  { id: "euro", title: "Euro & strategy", description: "Heavier games with tight economies, worker placement and long-term planning." },
  { id: "family", title: "Family & light", description: "Easy to teach, quick to set up and welcome at any table." },
  { id: "coop", title: "Adventure & co-op", description: "Play together against the game: campaigns, deduction and big adventures." }
];

export const GAMES = [
  {
    id: "puerto-rico-1897",
    title: "Puerto Rico 1897",
    category: "euro",
    year: 2024,
    designer: "Andreas Seyfarth",
    description:
      "The special edition of the role-selection classic: plantations, buildings and shipping, now with reworked art and a deluxe insert.",
    tags: ["Role selection", "Economy", "Classic"],
    players: { min: 2, max: 5, best: 4 },
    playtime: { min: 90, max: 150 },
    weight: 3.3,
    cover: "https://i.ytimg.com/vi/eZDFBOI0O48/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=eZDFBOI0O48",
    formats: [
      { id: "rules", label: "Rules", length: "55 min", url: "https://www.youtube.com/watch?v=eZDFBOI0O48",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "150 min", url: "https://www.youtube.com/watch?v=eZDFBOI0O48&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "nippon-zaibatsu",
    title: "Nippon: Zaibatsu",
    category: "euro",
    year: 2025,
    designer: "Nuno Bizarro Sentieiro",
    description:
      "Industrialisation of Meiji-era Japan: hire workers, build factories and push your goods into every region of the country.",
    tags: ["Worker placement", "Area majority", "Heavy"],
    players: { min: 2, max: 4, best: 3 },
    playtime: { min: 90, max: 120 },
    weight: 3.6,
    cover: "https://i.ytimg.com/vi/mlnG_oBTaug/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=mlnG_oBTaug",
    formats: [
      { id: "rules", label: "Rules", length: "45 min", url: "https://www.youtube.com/watch?v=mlnG_oBTaug",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "120 min", url: "https://www.youtube.com/watch?v=mlnG_oBTaug&t=900",
        note: "A full game on camera with every decision explained out loud." },
      { id: "unboxing", label: "Unboxing", length: "12 min", url: "https://www.youtube.com/watch?v=wFOg0TPJCLk",
        note: "Components in the hand: cardboard, insert and printing quality." }
    ]
  },
  {
    id: "goa-2026",
    title: "GOA (2026)",
    category: "euro",
    year: 2026,
    designer: "Rüdiger Dorn",
    description:
      "A new edition of the spice-trade auction game: bid for tiles, develop your colonial tracks and squeeze every action out of a short game.",
    tags: ["Auction", "Tableau building", "Trading"],
    players: { min: 2, max: 4, best: 3 },
    playtime: { min: 60, max: 120 },
    weight: 3.4,
    cover: "https://i.ytimg.com/vi/cQ16xqjx_Sw/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=cQ16xqjx_Sw",
    formats: [
      { id: "rules", label: "Rules", length: "40 min", url: "https://www.youtube.com/watch?v=cQ16xqjx_Sw",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "120 min", url: "https://www.youtube.com/watch?v=cQ16xqjx_Sw&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "luthier",
    title: "Luthier",
    category: "euro",
    year: 2025,
    designer: "David Chircop",
    description:
      "Craft instruments for baroque patrons: an interlocking economy where every loan, apprentice and commission has to be planned turns ahead.",
    tags: ["Economy", "Solo mode", "Heavy"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 90, max: 150 },
    weight: 3.8,
    cover: "https://i.ytimg.com/vi/hcbQ2KUn7Vs/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=hcbQ2KUn7Vs",
    formats: [
      { id: "rules", label: "Rules", length: "55 min", url: "https://www.youtube.com/watch?v=hcbQ2KUn7Vs",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "150 min", url: "https://www.youtube.com/watch?v=hcbQ2KUn7Vs&t=900",
        note: "A full game on camera with every decision explained out loud." },
      { id: "unboxing", label: "Unboxing", length: "12 min", url: "https://www.youtube.com/watch?v=3p5PiWa2u6s",
        note: "Components in the hand: cardboard, insert and printing quality." }
    ]
  },
  {
    id: "skyrise",
    title: "Skyrise",
    category: "euro",
    year: 2024,
    designer: "Vital Lacerda",
    description:
      "The successor to Metropolys: raise towers, take districts and score patrons in a sharp city-building duel of heights.",
    tags: ["Area control", "City building", "Bidding"],
    players: { min: 2, max: 5, best: 4 },
    playtime: { min: 60, max: 120 },
    weight: 3.2,
    cover: "https://i.ytimg.com/vi/IFoXtF_5hJ4/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=IFoXtF_5hJ4",
    formats: [
      { id: "rules", label: "Rules", length: "40 min", url: "https://www.youtube.com/watch?v=IFoXtF_5hJ4",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "120 min", url: "https://www.youtube.com/watch?v=IFoXtF_5hJ4&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "cretaceous-rails",
    title: "Cretaceous Rails",
    category: "euro",
    year: 2025,
    designer: "Chad Elkins",
    description:
      "Railways across a dinosaur continent: lay track, deliver cargo and keep your engine running while the herds move across the map.",
    tags: ["Route building", "Pick-up and deliver", "Solo mode"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 60, max: 90 },
    weight: 3.0,
    cover: "https://i.ytimg.com/vi/K7tXL6RqaWM/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=K7tXL6RqaWM",
    formats: [
      { id: "rules", label: "Rules", length: "35 min", url: "https://www.youtube.com/watch?v=K7tXL6RqaWM",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "90 min", url: "https://www.youtube.com/watch?v=K7tXL6RqaWM&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "windmill-valley",
    title: "Windmill Valley",
    category: "euro",
    year: 2023,
    designer: "Dani Garcia",
    description:
      "Dutch tulip fields and a rotating windmill gear: plant bulbs, hire workers and time the rotation of your mill to chain actions.",
    tags: ["Rondel", "Engine building", "Solo mode"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 60, max: 90 },
    weight: 3.1,
    cover: "https://i.ytimg.com/vi/DJleph9t23c/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=DJleph9t23c",
    formats: [
      { id: "rules", label: "Rules", length: "35 min", url: "https://www.youtube.com/watch?v=DJleph9t23c",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "90 min", url: "https://www.youtube.com/watch?v=DJleph9t23c&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "echoes-of-time",
    title: "Echoes of Time",
    category: "euro",
    year: 2025,
    designer: "Simone Luciani",
    description:
      "A dense Luciani design about civilisations echoing through eras: tight action selection where every round rewrites your options.",
    tags: ["Action selection", "Civilization", "Heavy"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 75, max: 120 },
    weight: 3.7,
    cover: "https://i.ytimg.com/vi/PdsI4-P3AxU/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=PdsI4-P3AxU",
    formats: [
      { id: "rules", label: "Rules", length: "45 min", url: "https://www.youtube.com/watch?v=PdsI4-P3AxU",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "120 min", url: "https://www.youtube.com/watch?v=PdsI4-P3AxU&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "pergola",
    title: "Pergola",
    category: "euro",
    year: 2025,
    designer: "Pierluca Zizzi",
    description:
      "Grow a garden under a wooden pergola: combine plants, animals and light to build the most balanced green corner of the estate.",
    tags: ["Tile placement", "Set collection", "Gardens"],
    players: { min: 1, max: 4, best: 2 },
    playtime: { min: 45, max: 75 },
    weight: 2.8,
    cover: "https://i.ytimg.com/vi/k4_29w0wnMs/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=k4_29w0wnMs",
    formats: [
      { id: "rules", label: "Rules", length: "25 min", url: "https://www.youtube.com/watch?v=k4_29w0wnMs",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "75 min", url: "https://www.youtube.com/watch?v=k4_29w0wnMs&t=900",
        note: "A full game on camera with every decision explained out loud." },
      { id: "unboxing", label: "Unboxing", length: "12 min", url: "https://www.youtube.com/watch?v=hXIg0sAiCCo",
        note: "Components in the hand: cardboard, insert and printing quality." }
    ]
  },
  {
    id: "explorers-of-navoria",
    title: "Explorers of Navoria",
    category: "euro",
    year: 2024,
    designer: "Ben Pinchback",
    description:
      "Send explorers across an unmapped land, claim outposts and turn discovered routes into a compact points engine.",
    tags: ["Worker placement", "Exploration", "Medium"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 45, max: 75 },
    weight: 2.9,
    cover: "https://i.ytimg.com/vi/bDbjVGSFrxU/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=bDbjVGSFrxU",
    formats: [
      { id: "rules", label: "Rules", length: "25 min", url: "https://www.youtube.com/watch?v=bDbjVGSFrxU",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "75 min", url: "https://www.youtube.com/watch?v=bDbjVGSFrxU&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "coming-of-age",
    title: "Coming of Age",
    category: "euro",
    year: 2025,
    designer: "Fabio Lopiano",
    description:
      "A generational story told with cards and tracks: choose what your family invests in and watch the decisions pay off decades later.",
    tags: ["Card driven", "Tableau building", "Medium"],
    players: { min: 2, max: 4, best: 3 },
    playtime: { min: 60, max: 90 },
    weight: 3.0,
    cover: "https://i.ytimg.com/vi/XBSvBKlAgtE/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=XBSvBKlAgtE",
    formats: [
      { id: "rules", label: "Rules", length: "35 min", url: "https://www.youtube.com/watch?v=XBSvBKlAgtE",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "90 min", url: "https://www.youtube.com/watch?v=XBSvBKlAgtE&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "come-sail-away",
    title: "Come Sail Away!",
    category: "family",
    year: 2025,
    designer: "Michael Kiesling",
    description:
      "Load cargo, catch the right wind and sail a friendly trade route — a light Kiesling design with a clean puzzle at its core.",
    tags: ["Family", "Puzzle", "Solo mode"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 30, max: 50 },
    weight: 2.1,
    cover: "https://i.ytimg.com/vi/HjJ-t8umQCQ/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=HjJ-t8umQCQ",
    formats: [
      { id: "rules", label: "Rules", length: "20 min", url: "https://www.youtube.com/watch?v=HjJ-t8umQCQ",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "50 min", url: "https://www.youtube.com/watch?v=HjJ-t8umQCQ&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "sanctuary",
    title: "Sanctuary",
    category: "family",
    year: 2025,
    designer: "Alexandr Peshkov",
    description:
      "Build a shelter for rescued animals: place enclosures, match habitats and keep every creature comfortable.",
    tags: ["Tile placement", "Animals", "Cozy"],
    players: { min: 1, max: 4, best: 2 },
    playtime: { min: 40, max: 60 },
    weight: 2.4,
    cover: "https://i.ytimg.com/vi/t9DF8eKsnko/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=t9DF8eKsnko",
    formats: [
      { id: "rules", label: "Rules", length: "20 min", url: "https://www.youtube.com/watch?v=t9DF8eKsnko",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "60 min", url: "https://www.youtube.com/watch?v=t9DF8eKsnko&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "koi",
    title: "KOI",
    category: "family",
    year: 2024,
    designer: "Kevin Russ",
    description:
      "Glide a koi across a pond, swallow dragonflies and complete graceful loops in a small, beautiful movement game.",
    tags: ["Abstract", "Movement", "Short"],
    players: { min: 1, max: 4, best: 2 },
    playtime: { min: 20, max: 40 },
    weight: 1.9,
    cover: "https://i.ytimg.com/vi/x8tJlDaGLsE/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=x8tJlDaGLsE",
    formats: [
      { id: "rules", label: "Rules", length: "18 min", url: "https://www.youtube.com/watch?v=x8tJlDaGLsE",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "40 min", url: "https://www.youtube.com/watch?v=x8tJlDaGLsE&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "feyas-swamp",
    title: "Feya's Swamp",
    category: "family",
    year: 2025,
    designer: "Yaroslav Skliarov",
    description:
      "A fairy-tale swamp full of spirits and herbs: gather ingredients, brew what the forest asks for and outbid your neighbours.",
    tags: ["Set collection", "Fairy tale", "Family"],
    players: { min: 2, max: 4, best: 3 },
    playtime: { min: 30, max: 45 },
    weight: 2.0,
    cover: "https://i.ytimg.com/vi/ZN2a-ssn0QU/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=ZN2a-ssn0QU",
    formats: [
      { id: "rules", label: "Rules", length: "18 min", url: "https://www.youtube.com/watch?v=ZN2a-ssn0QU",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "45 min", url: "https://www.youtube.com/watch?v=ZN2a-ssn0QU&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "a-wild-venture",
    title: "A Wild Venture",
    category: "family",
    year: 2025,
    designer: "Aaron Mesburne",
    description:
      "Pack the rucksack, hit the trail and collect the best views — a breezy push-your-luck hike with gorgeous illustrations.",
    tags: ["Push your luck", "Outdoors", "Family"],
    players: { min: 2, max: 4, best: 3 },
    playtime: { min: 30, max: 45 },
    weight: 2.2,
    cover: "https://i.ytimg.com/vi/SkPYorlKFI8/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=SkPYorlKFI8",
    formats: [
      { id: "rules", label: "Rules", length: "18 min", url: "https://www.youtube.com/watch?v=SkPYorlKFI8",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "45 min", url: "https://www.youtube.com/watch?v=SkPYorlKFI8&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "oliva",
    title: "Oliva",
    category: "family",
    year: 2025,
    designer: "Fabio Lopiano",
    description:
      "Mediterranean olive groves: harvest, press and sell oil while the seasons quietly change what is worth doing.",
    tags: ["Economy", "Set collection", "Medium"],
    players: { min: 1, max: 4, best: 2 },
    playtime: { min: 40, max: 60 },
    weight: 2.5,
    cover: "https://i.ytimg.com/vi/Q-FNJ3RJBac/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=Q-FNJ3RJBac",
    formats: [
      { id: "rules", label: "Rules", length: "20 min", url: "https://www.youtube.com/watch?v=Q-FNJ3RJBac",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "60 min", url: "https://www.youtube.com/watch?v=Q-FNJ3RJBac&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "take-time",
    title: "Take Time",
    category: "family",
    year: 2025,
    designer: "Shun Taguchi",
    description:
      "A tiny card game about spending the only resource nobody has enough of: time. Quick, mean and very replayable.",
    tags: ["Card game", "Filler", "Short"],
    players: { min: 2, max: 5, best: 4 },
    playtime: { min: 20, max: 30 },
    weight: 1.6,
    cover: "https://i.ytimg.com/vi/8RxIWS_UeKk/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=8RxIWS_UeKk",
    formats: [
      { id: "rules", label: "Rules", length: "18 min", url: "https://www.youtube.com/watch?v=8RxIWS_UeKk",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "30 min", url: "https://www.youtube.com/watch?v=8RxIWS_UeKk&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "forest-shuffle-dartmoor",
    title: "Forest Shuffle: Dartmoor",
    category: "family",
    year: 2025,
    designer: "Kosch",
    description:
      "The Dartmoor expansion brings moors, ponies and new symbioses to the card forest everybody already loves.",
    tags: ["Card drafting", "Expansion", "Nature"],
    players: { min: 2, max: 5, best: 3 },
    playtime: { min: 40, max: 60 },
    weight: 2.3,
    cover: "https://i.ytimg.com/vi/v4vH4_P88Po/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=v4vH4_P88Po",
    formats: [
      { id: "rules", label: "Rules", length: "20 min", url: "https://www.youtube.com/watch?v=v4vH4_P88Po",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "60 min", url: "https://www.youtube.com/watch?v=v4vH4_P88Po&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "agent-avenue",
    title: "Agent Avenue",
    category: "family",
    year: 2025,
    designer: "Wolfgang Warsch",
    description:
      "A two-player bluffing duel on a street of spies: read your opponent, hide your intent and cash in before they do.",
    tags: ["Two player", "Bluffing", "Short"],
    players: { min: 2, max: 2, best: 2 },
    playtime: { min: 15, max: 25 },
    weight: 1.8,
    cover: "https://i.ytimg.com/vi/zk_HgyrLoNQ/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=zk_HgyrLoNQ",
    formats: [
      { id: "rules", label: "Rules", length: "18 min", url: "https://www.youtube.com/watch?v=zk_HgyrLoNQ",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "25 min", url: "https://www.youtube.com/watch?v=zk_HgyrLoNQ&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "a-message-from-the-stars",
    title: "A Message from the Stars",
    category: "coop",
    year: 2025,
    designer: "Jeff Chin",
    description:
      "A cooperative deduction game: decode a signal from deep space together, one careful hint at a time.",
    tags: ["Co-op", "Deduction", "Party friendly"],
    players: { min: 1, max: 6, best: 4 },
    playtime: { min: 45, max: 60 },
    weight: 2.2,
    cover: "https://i.ytimg.com/vi/X_Wj1x9IwwU/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=X_Wj1x9IwwU",
    formats: [
      { id: "rules", label: "Rules", length: "25 min", url: "https://www.youtube.com/watch?v=X_Wj1x9IwwU",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "60 min", url: "https://www.youtube.com/watch?v=X_Wj1x9IwwU&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "townsfolk-tussle",
    title: "Townsfolk Tussle",
    category: "coop",
    year: 2024,
    designer: "Mark Hanny",
    description:
      "A cartoon brawler campaign: train in Eureka Springs by day, take down oversized bosses by night.",
    tags: ["Co-op", "Campaign", "Miniatures"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 90, max: 150 },
    weight: 3.4,
    cover: "https://i.ytimg.com/vi/Dy7GeJA7BD8/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=Dy7GeJA7BD8",
    formats: [
      { id: "rules", label: "Rules", length: "55 min", url: "https://www.youtube.com/watch?v=Dy7GeJA7BD8",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "150 min", url: "https://www.youtube.com/watch?v=Dy7GeJA7BD8&t=900",
        note: "A full game on camera with every decision explained out loud." },
      { id: "unboxing", label: "Unboxing", length: "12 min", url: "https://www.youtube.com/watch?v=yaEB7p6v4Hc",
        note: "Components in the hand: cardboard, insert and printing quality." }
    ]
  },
  {
    id: "emberheart",
    title: "Emberheart",
    category: "coop",
    year: 2025,
    designer: "Jonny Pac",
    description:
      "An adventure into a dying volcano: manage a shared fire, split the party's actions and get out before the ember goes cold.",
    tags: ["Co-op", "Adventure", "Medium"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 60, max: 90 },
    weight: 2.9,
    cover: "https://i.ytimg.com/vi/f1-cDqjXkiU/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=f1-cDqjXkiU",
    formats: [
      { id: "rules", label: "Rules", length: "35 min", url: "https://www.youtube.com/watch?v=f1-cDqjXkiU",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "90 min", url: "https://www.youtube.com/watch?v=f1-cDqjXkiU&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "etherstone",
    title: "Etherstone",
    category: "coop",
    year: 2025,
    designer: "Ryan Laukat",
    description:
      "Mine magical stones in a fractured world, upgrade your crew and decide how much of the ether you dare to touch.",
    tags: ["Adventure", "Engine building", "Fantasy"],
    players: { min: 1, max: 4, best: 2 },
    playtime: { min: 60, max: 90 },
    weight: 3.0,
    cover: "https://i.ytimg.com/vi/0V9hNliwG14/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=0V9hNliwG14",
    formats: [
      { id: "rules", label: "Rules", length: "35 min", url: "https://www.youtube.com/watch?v=0V9hNliwG14",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "90 min", url: "https://www.youtube.com/watch?v=0V9hNliwG14&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  },
  {
    id: "sibille",
    title: "Sibille",
    category: "coop",
    year: 2025,
    designer: "Simone Cerruti Sola",
    description:
      "Prophecies, tarot-like cards and a shared fate: the channel's unboxing of one of the most striking releases of the season.",
    tags: ["Storytelling", "Cards", "Atmospheric"],
    players: { min: 1, max: 4, best: 3 },
    playtime: { min: 45, max: 70 },
    weight: 2.7,
    cover: "https://i.ytimg.com/vi/usEt4u-GE2k/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=usEt4u-GE2k",
    formats: [
      { id: "rules", label: "Rules", length: "25 min", url: "https://www.youtube.com/watch?v=usEt4u-GE2k",
        note: "Setup, turn structure and scoring explained from scratch." },
      { id: "playthrough", label: "Playthrough", length: "70 min", url: "https://www.youtube.com/watch?v=usEt4u-GE2k&t=900",
        note: "A full game on camera with every decision explained out loud." }
    ]
  }
];
