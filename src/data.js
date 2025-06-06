export const questions = [
  // Økonomi
  {
    id: 1,
    category: "Økonomi",
    text: "Privat sektor bør utgjøre en større andel av økonomien enn offentlig sektor.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "SV", "R", "MDG", "FOR", "Sp", "Partiet Sentrum", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["H", "V", "Partiet DNI", "KrF", "Generasjonspartiet"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["FrP", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Norgesdemokratene", "Industri- og Næringspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Konservativt"] },
    ],
  },
  {
    id: 2,
    category: "Økonomi",
    text: "Staten bør redusere eller fjerne formueskatten.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "SV", "R", "MDG", "FOR", "Partiet Sentrum"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["KrF", "Sp", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["H", "V", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["FrP", "Industri- og Næringspartiet", "Generasjonspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "Konservativt", "Partiet DNI"] },
    ],
  },
  {
    id: 3,
    category: "Økonomi",
    text: "Alle i det private og offentlige bør ha tilgang til de samme pensjonsordningene.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["SV", "R", "MDG", "FOR", "Partiet Sentrum", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["AP", "KrF", "V", "Sp"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["FrP", "H", "Ensomhetspartiet", "Generasjonspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Industri- og Næringspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "Konservativt"] },
    ],
  },
  // Demokrati
  {
    id: 4,
    category: "Demokrati",
    text: "Stortinget bør innføre mer direkte demokrati, som folkets rett til å foreslå og stemme over lover.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "KrF", "Sp", "V", "H"] },
      { id: "B", text: "Litt uenig", value: -1, parties: [] },
      { id: "C", text: "Nøytral", value: 0, parties: ["FOR", "Partiet DNI", "Partiet Sentrum", "Pensjonistpartiet", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Konservativt", "MDG", "SV", "Industri- og Næringspartiet", "FrP", "R", "Velferd og Innovasjonspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "Generasjonspartiet"] },
    ],
  },
  {
    id: 5,
    category: "Demokrati",
    text: "Flere politiske avgjørelser bør tas lokalt i kommuner og fylker, fremfor på Stortinget.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "H", "V"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["MDG"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["KrF", "SV", "R", "Ensomhetspartiet", "FOR"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Industri- og Næringspartiet", "Partiet DNI", "Partiet Sentrum", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "Konservativt", "Generasjonspartiet", "FrP", "Sp"] },
    ],
  },
  {
    id: 6,
    category: "Demokrati",
    text: "Norge bør bli medlem av EU.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["SV", "R", "Norgesdemokratene", "FrP", "Konservativt", "Generasjonspartiet", "Industri- og Næringspartiet", "Partiet DNI", "FOR", "Sp", "Partiet Sentrum", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["KrF", "Pensjonistpartiet"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["MDG"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["AP", "H", "V"] },
    ],
  },
  {
    id: 7,
    category: "Demokrati",
    text: "Norge bør trekke seg fra EØS-avtalen.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "H", "KrF", "V", "Partiet Sentrum"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["MDG"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["FrP", "Velferd og Innovasjonspartiet", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Pensjonistpartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "SV", "R", "Konservativt", "Industri- og Næringspartiet", "Partiet DNI", "Generasjonspartiet", "Sp", "FOR"] },
    ],
  },
  // Sosialpolitikk
  {
    id: 8,
    category: "Sosialpolitikk",
    text: "Staten bør redusere flyktning- og asylinnvandringen.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "KrF", "SV", "R", "MDG", "FOR", "Partiet Sentrum", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["V", "Sp"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["H", "Pensjonistpartiet", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Partiet DNI", "Industri- og Næringspartiet", "FrP", "Generasjonspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "Konservativt"] },
    ],
  },
  {
    id: 9,
    category: "Sosialpolitikk",
    text: "Staten bør redusere mengden internasjonal bistand.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "KrF", "V", "MDG", "Partiet Sentrum"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["H", "SV", "R", "Sp", "Pensjonistpartiet", "FOR", "Velferd og Innovasjonspartiet", "Ensomhetspartiet"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["Partiet DNI", "Generasjonspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["FrP", "Industri- og Næringspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "Konservativt"] },
    ],
  },
  // Miljøpolitikk
  {
    id: 10,
    category: "Miljøpolitikk",
    text: "Norge må fortsette med olje- og gassutvinning, også i nye områder.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["SV", "R", "MDG", "V", "FOR", "Generasjonspartiet", "Partiet Sentrum", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["KrF", "Sp"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["AP", "H"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "FrP", "Konservativt", "Industri- og Næringspartiet", "Partiet DNI"] },
    ],
  },
  {
    id: 11,
    category: "Miljøpolitikk",
    text: "Klimatiltak må prioriteres i politiske beslutninger.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["Norgesdemokratene", "Konservativt", "Industri- og Næringspartiet", "Partiet DNI"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["FrP"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["H"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["AP", "KrF", "SV", "R", "Generasjonspartiet", "Sp", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Ensomhetspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["MDG", "V", "FOR", "Partiet Sentrum"] },
    ],
  },
  {
    id: 12,
    category: "Miljøpolitikk",
    text: "Staten bør subsidiere grønn teknologi for å finansiere nye arbeidsplasser.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["Norgesdemokratene", "Konservativt", "Partiet DNI"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["FrP"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["Industri- og Næringspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["AP", "H", "KrF", "SV", "R", "FOR", "Sp", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Ensomhetspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["MDG", "Generasjonspartiet", "V", "Partiet Sentrum"] },
    ],
  },
  // Kultur
  {
    id: 13,
    category: "Kultur",
    text: "Regjeringen bør få mindre innflytelse over skolenes læreplaner.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "SV", "R", "FOR", "Partiet Sentrum", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["KrF", "Sp", "MDG"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["H", "V", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Partiet DNI", "Industri- og Næringspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "FrP", "Konservativt", "Generasjonspartiet"] },
    ],
  },
  {
    id: 14,
    category: "Kultur",
    text: "Staten bør redusere eller fjerne støtte til medier og trossamfunn.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["AP", "KrF", "SV", "R", "FOR", "Generasjonspartiet", "Partiet Sentrum", "Pensjonistpartiet", "Velferd og Innovasjonspartiet"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["Sp", "V", "MDG"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["H", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["Industri- og Næringspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["Norgesdemokratene", "FrP", "Konservativt", "Partiet DNI"] },
    ],
  },
  {
    id: 15,
    category: "Kultur",
    text: "Staten bør begrense ytringsfriheten.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["Norgesdemokratene", "Konservativt", "Industri- og Næringspartiet", "Generasjonspartiet", "FrP", "FOR"] },
      { id: "B", text: "Litt uenig", value: -1, parties: ["V", "Velferd og Innovasjonspartiet"] },
      { id: "C", text: "Nøytral", value: 0, parties: ["H", "KrF", "Partiet DNI", "MDG", "R", "Ensomhetspartiet"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["AP", "Sp"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["SV", "Partiet Sentrum", "Pensjonistpartiet"] },
    ],
  },
  // Forsvar
  {
    id: 16,
    category: "Forsvar",
    text: "Norge bør være medlem i NATO.",
    options: [
      { id: "A", text: "Helt uenig", value: -2, parties: ["R", "FOR"] },
      { id: "B", text: "Litt uenig", value: -1, parties: [] },
      { id: "C", text: "Nøytral", value: 0, parties: ["SV"] },
      { id: "D", text: "Litt enig", value: 1, parties: ["KrF", "MDG", "Generasjonspartiet", "Sp", "Partiet Sentrum", "Pensjonistpartiet", "Ensomhetspartiet"] },
      { id: "E", text: "Helt enig", value: 2, parties: ["AP", "Norgesdemokratene", "H", "FrP", "V", "Konservativt", "Industri- og Næringspartiet", "Partiet DNI", "Velferd og Innovasjonspartiet"] },
    ],
  },
];

export const parties = {
  "Norgesdemokratene": { 
    name: "Norgesdemokratene", 
    description: "Parti med fokus på nasjonale interesser og innvandringskontroll.",
    website: "https://www.nodem.no"
  },
  "Konservativt": { 
    name: "Konservativt", 
    description: "Konservativt parti med fokus på tradisjonelle verdier og markedsøkonomi.",
    website: "https://www.konservativt.no"
  },
  "Generasjonspartiet": { 
    name: "Generasjonspartiet", 
    description: "Parti med fokus på direktedemokrati.",
    website: "https://www.generasjonspartiet.no"
  },
  "Industri- og Næringspartiet": { 
    name: "Industri- og Næringspartiet", 
    description: "Parti med fokus på industri og næringsutvikling.",
    website: "https://www.inpartiet.no"
  },
  "Partiet DNI": { 
    name: "Partiet DNI", 
    description: "Parti med fokus på industri og næringsutvikling.",
    website: "https://www.partietdni.no"
  },
  "Pensjonistpartiet": { 
    name: "Pensjonistpartiet", 
    description: "Parti med fokus på pensjonisters rettigheter.",
    website: "https://www.pensjonistpartiet.no"
  },
  "Partiet Sentrum": { 
    name: "Partiet Sentrum", 
    description: "Sentrumsparti med fokus på sosial rettferdighet og miljø.",
    website: "https://www.partietsentrum.no"
  },
  "Velferd og Innovasjonspartiet": { 
    name: "Velferd og Innovasjonspartiet", 
    description: "Parti med fokus på helse, velferd og innovasjon.",
    website: "https://www.vipartiet.no"
  },
  "FOR": { 
    name: "Fred og Rettferdighet", 
    description: "Parti med fokus på fred og rettferdighet.",
    website: "https://www.partiet-for.no"
  },
  "Ensomhetspartiet": { 
    name: "Ensomhetspartiet", 
    description: "Parti med fokus på å bekjempe ensomhet.",
    website: "https://www.ensomhetspartiet.no"
  },
  "AP": { 
    name: "Arbeiderpartiet", 
    description: "Sosialdemokratisk parti med fokus på velferd og likhet.",
    website: "https://www.arbeiderpartiet.no"
  },
  "FrP": { 
    name: "Fremskrittspartiet", 
    description: "Liberalistisk folkeparti som fokuserer på lavere skatter, valgfrihet og streng innvandringspolitikk.",
    website: "https://www.frp.no"
  },
  "H": { 
    name: "Høyre", 
    description: "Sosialkonservativt parti som støtter blandingsøkonomi.",
    website: "https://www.hoyre.no"
  },
  "Sp": { 
    name: "Senterpartiet", 
    description: "Sentrumsparti med fokus på distriktspolitikk og landbruk.",
    website: "https://www.senterpartiet.no"
  },
  "KrF": { 
    name: "Kristelig Folkeparti", 
    description: "Kristendemokratisk parti med fokus på familieverdier og velferd.",
    website: "https://www.krf.no"
  },
  "V": { 
    name: "Venstre", 
    description: "Liberalt parti med fokus på frihet og miljø.",
    website: "https://www.venstre.no"
  },
  "SV": { 
    name: "SV - Sosialistisk Venstreparti", 
    description: "Sosialistisk parti med fokus på velferd og miljø.",
    website: "https://www.sv.no"
  },
  "R": { 
    name: "Rødt", 
    description: "Venstresideparti med fokus på sosialisme og likhet.",
    website: "https://www.roedt.no"
  },
  "MDG": { 
    name: "Miljøpartiet De Grønne", 
    description: "Miljøparti med fokus på bærekraft og grønn politikk.",
    website: "https://www.mdg.no"
  },
};