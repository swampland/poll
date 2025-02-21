export const questions = [
  {
    id: 1,
    text: "Skal regjeringen prioritere å redusere karbonutslipp gjennom investeringer i fornybar energi, selv om det kan føre til høyere energikostnader for forbrukerne?",
    options: [
      { id: "A", text: "Ja, prioriter fornybar energi" },
      { id: "B", text: "Nei, prioriter økonomisk vekst og lavere energikostnader" },
      { id: "C", text: "Nei, fokuser på andre tiltak for å bekjempe klimaendringer" },
    ],
    partySupport: {
      A: ["SV", "MDG", "R", "Partiet Sentrum", "Ensomhetspartiet", "FOR"],
      B: ["AP", "KrF", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Generasjonspartiet"],
      C: ["FrP", "H", "Industri- og Næringspartiet", "Konservativt", "D", "Partiet DNI"],
    },
  },
  {
    id: 2,
    text: "Skal staten implementere strengere innvandringskontroller for å begrense antall flyktninger og asylsøkere, eller beholde nåværende politikk?",
    options: [
      { id: "A", text: "Ja, implementer strengere kontroller" },
      { id: "B", text: "Nei, behold nåværende politikk" },
      { id: "C", text: "Nei, innfør en mer åpen politikk" },
    ],
    partySupport: {
      A: ["FrP", "H", "Sp", "Industri- og Næringspartiet", "Konservativt", "D", "Partiet DNI"],
      B: ["AP", "KrF", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Generasjonspartiet"],
      C: ["SV", "MDG", "R", "V", "Partiet Sentrum", "Ensomhetspartiet", "FOR"],
    },
  },
  {
    id: 3,
    text: "Skal regjeringen øke skattene for de rikeste for å finansiere sosiale programmer og redusere ulikhet, eller fokusere på økonomisk vekst gjennom skattelettelser?",
    options: [
      { id: "A", text: "Ja, øk skattene for de rikeste" },
      { id: "B", text: "Nei, behold dagens skattenivå" },
      { id: "C", text: "Nei, reduser skattene for å fremme vekst" },
    ],
    partySupport: {
      A: ["AP", "SV", "R", "MDG", "Partiet Sentrum", "Ensomhetspartiet", "FOR"],
      B: ["Sp", "KrF", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Generasjonspartiet"],
      C: ["FrP", "H", "Industri- og Næringspartiet", "Konservativt", "D", "Partiet DNI"],
    },
  },
  {
    id: 4,
    text: "Skal regjeringen tillate større privat involvering i helsevesenet for å forbedre effektivitet og redusere ventetider, eller beholde et fullt offentlig system?",
    options: [
      { id: "A", text: "Fullt offentlig system" },
      { id: "B", text: "Tillat noe privat involvering" },
      { id: "C", text: "Tillat mest privat involvering" },
    ],
    partySupport: {
      A: ["SV", "R", "MDG", "Partiet Sentrum", "Ensomhetspartiet", "FOR"],
      B: ["AP", "Sp", "KrF", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Generasjonspartiet"],
      C: ["FrP", "H", "Industri- og Næringspartiet", "Konservativt", "D", "Partiet DNI"],
    },
  },
  {
    id: 5,
    text: "Skal regjeringen prioritere å støtte kyst- og fiskerinæringen gjennom subsidier og handelsbeskyttelse, eller fokusere på å diversifisere økonomien?",
    options: [
      { id: "A", text: "Prioriter kyst- og fiskerinæringen" },
      { id: "B", text: "Balanser støtte med diversifisering" },
      { id: "C", text: "Prioriter diversifisering av økonomien" },
    ],
    partySupport: {
      A: ["Sp", "Kystpartiet"],
      B: ["AP", "KrF", "Pensjonistpartiet", "Velferd og Innovasjonspartiet", "Generasjonspartiet"],
      C: ["FrP", "H", "SV", "MDG", "R", "V", "Partiet Sentrum", "Ensomhetspartiet", "FOR", "Industri- og Næringspartiet", "Konservativt", "D", "Partiet DNI"],
    },
  },
];

export const parties = {
  AP: { name: "Arbeiderpartiet", description: "Sosialdemokratisk parti med fokus på velferd og likhet." },
  FrP: { name: "Fremskrittspartiet", description: "Høyrepopulistisk parti som fokuserer på lavere skatter og innvandringskontroll." },
  H: { name: "Høyre", description: "Konservativt parti som støtter frie markeder og individuelt ansvar." },
  "Industri- og Næringspartiet": { name: "Industri- og Næringspartiet", description: "Parti med fokus på industri og næringsutvikling." },
  Konservativt: { name: "Konservativt", description: "Konservativt parti med fokus på tradisjonelle verdier og markedsøkonomi." },
  KrF: { name: "Kristelig Folkeparti", description: "Kristendemokratisk parti med fokus på familieverdier og velferd." },
  MDG: { name: "Miljøpartiet De Grønne", description: "Miljøparti med fokus på bærekraft og grønn politikk." },
  D: { name: "Norgesdemokratene", description: "Parti med fokus på nasjonale interesser og innvandringskontroll." },
  "Partiet Sentrum": { name: "Partiet Sentrum", description: "Sentrumsparti med fokus på sosial rettferdighet og miljø." },
  Pensjonistpartiet: { name: "Pensjonistpartiet", description: "Parti med fokus på pensjonisters rettigheter." },
  R: { name: "Rødt", description: "Venstresideparti med fokus på sosialisme og likhet." },
  Sp: { name: "Senterpartiet", description: "Sentrumsparti med fokus på distriktspolitikk og landbruk." },
  SV: { name: "SV - Sosialistisk Venstreparti", description: "Sosialistisk parti med fokus på velferd og miljø." },
  "Velferd og Innovasjonspartiet": { name: "Velferd og Innovasjonspartiet", description: "Parti med fokus på velferd og innovasjon." },
  V: { name: "Venstre", description: "Liberalt parti med fokus på frihet og miljø." },
  Ensomhetspartiet: { name: "Ensomhetspartiet", description: "Parti med fokus på å bekjempe ensomhet." },
  FOR: { name: "Fred og Rettferdighet", description: "Parti med fokus på fred og rettferdighet." },
  Generasjonspartiet: { name: "Generasjonspartiet", description: "Parti med fokus på generasjonspolitikk." },
  "Partiet DNI": { name: "Partiet DNI", description: "Parti med fokus på direkte demokrati og nasjonale interesser." },
};