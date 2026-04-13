export type RemoteCity = {
  name: string;
  region: string;
};

// Cities OUTSIDE our physical service area (Turku-Tampere-Lahti-Porvoo and south).
// We offer asbestinäyte (39,90€+ALV) via mail only.
// URL pattern: /asbestikartoitus-{slug}
export const remoteCities: Record<string, RemoteCity> = {
  // Pohjois-Pohjanmaa
  oulu: { name: 'Oulu', region: 'Pohjois-Pohjanmaalla' },
  raahe: { name: 'Raahe', region: 'Pohjois-Pohjanmaalla' },
  ylivieska: { name: 'Ylivieska', region: 'Pohjois-Pohjanmaalla' },
  kuusamo: { name: 'Kuusamo', region: 'Pohjois-Pohjanmaalla' },
  haapavesi: { name: 'Haapavesi', region: 'Pohjois-Pohjanmaalla' },
  nivala: { name: 'Nivala', region: 'Pohjois-Pohjanmaalla' },
  oulainen: { name: 'Oulainen', region: 'Pohjois-Pohjanmaalla' },
  kalajoki: { name: 'Kalajoki', region: 'Pohjois-Pohjanmaalla' },
  muhos: { name: 'Muhos', region: 'Pohjois-Pohjanmaalla' },
  ii: { name: 'Ii', region: 'Pohjois-Pohjanmaalla' },
  kempele: { name: 'Kempele', region: 'Pohjois-Pohjanmaalla' },
  liminka: { name: 'Liminka', region: 'Pohjois-Pohjanmaalla' },

  // Lappi
  rovaniemi: { name: 'Rovaniemi', region: 'Lapissa' },
  tornio: { name: 'Tornio', region: 'Lapissa' },
  kemi: { name: 'Kemi', region: 'Lapissa' },
  sodankyla: { name: 'Sodankylä', region: 'Lapissa' },
  inari: { name: 'Inari', region: 'Lapissa' },
  kemjarvi: { name: 'Kemijärvi', region: 'Lapissa' },
  kittila: { name: 'Kittilä', region: 'Lapissa' },
  enontekio: { name: 'Enontekiö', region: 'Lapissa' },
  muonio: { name: 'Muonio', region: 'Lapissa' },
  salla: { name: 'Salla', region: 'Lapissa' },
  ranua: { name: 'Ranua', region: 'Lapissa' },

  // Kainuu
  kajaani: { name: 'Kajaani', region: 'Kainuussa' },
  sotkamo: { name: 'Sotkamo', region: 'Kainuussa' },
  kuhmo: { name: 'Kuhmo', region: 'Kainuussa' },
  suomussalmi: { name: 'Suomussalmi', region: 'Kainuussa' },

  // Pohjois-Savo
  kuopio: { name: 'Kuopio', region: 'Pohjois-Savossa' },
  iisalmi: { name: 'Iisalmi', region: 'Pohjois-Savossa' },
  varkaus: { name: 'Varkaus', region: 'Pohjois-Savossa' },
  siilinjarvi: { name: 'Siilinjärvi', region: 'Pohjois-Savossa' },
  suonenjoki: { name: 'Suonenjoki', region: 'Pohjois-Savossa' },
  leppavirta: { name: 'Leppävirta', region: 'Pohjois-Savossa' },

  // Pohjois-Karjala
  joensuu: { name: 'Joensuu', region: 'Pohjois-Karjalassa' },
  lieksa: { name: 'Lieksa', region: 'Pohjois-Karjalassa' },
  nurmes: { name: 'Nurmes', region: 'Pohjois-Karjalassa' },
  kitee: { name: 'Kitee', region: 'Pohjois-Karjalassa' },
  kontiolahti: { name: 'Kontiolahti', region: 'Pohjois-Karjalassa' },
  liperi: { name: 'Liperi', region: 'Pohjois-Karjalassa' },

  // Keski-Suomi
  jyvaskyla: { name: 'Jyväskylä', region: 'Keski-Suomessa' },
  jams: { name: 'Jämsä', region: 'Keski-Suomessa' },
  aanekoski: { name: 'Äänekoski', region: 'Keski-Suomessa' },
  saarijarvi: { name: 'Saarijärvi', region: 'Keski-Suomessa' },
  viitasaari: { name: 'Viitasaari', region: 'Keski-Suomessa' },
  laukaa: { name: 'Laukaa', region: 'Keski-Suomessa' },
  muurame: { name: 'Muurame', region: 'Keski-Suomessa' },

  // Etelä-Savo
  mikkeli: { name: 'Mikkeli', region: 'Etelä-Savossa' },
  savonlinna: { name: 'Savonlinna', region: 'Etelä-Savossa' },
  pieksam: { name: 'Pieksämäki', region: 'Etelä-Savossa' },

  // Etelä-Karjala
  lappeenranta: { name: 'Lappeenranta', region: 'Etelä-Karjalassa' },
  imatra: { name: 'Imatra', region: 'Etelä-Karjalassa' },

  // Kymenlaakso
  kotka: { name: 'Kotka', region: 'Kymenlaaksossa' },
  kouvola: { name: 'Kouvola', region: 'Kymenlaaksossa' },
  hamina: { name: 'Hamina', region: 'Kymenlaaksossa' },

  // Pohjanmaa
  vaasa: { name: 'Vaasa', region: 'Pohjanmaalla' },
  pietarsaari: { name: 'Pietarsaari', region: 'Pohjanmaalla' },
  mustasaari: { name: 'Mustasaari', region: 'Pohjanmaalla' },

  // Etelä-Pohjanmaa
  seinajoki: { name: 'Seinäjoki', region: 'Etelä-Pohjanmaalla' },
  kauhajoki: { name: 'Kauhajoki', region: 'Etelä-Pohjanmaalla' },
  kurikka: { name: 'Kurikka', region: 'Etelä-Pohjanmaalla' },
  lapua: { name: 'Lapua', region: 'Etelä-Pohjanmaalla' },
  alavus: { name: 'Alavus', region: 'Etelä-Pohjanmaalla' },
  ilmajoki: { name: 'Ilmajoki', region: 'Etelä-Pohjanmaalla' },

  // Keski-Pohjanmaa
  kokkola: { name: 'Kokkola', region: 'Keski-Pohjanmaalla' },
  kannus: { name: 'Kannus', region: 'Keski-Pohjanmaalla' },

  // Satakunta
  pori: { name: 'Pori', region: 'Satakunnassa' },
  rauma: { name: 'Rauma', region: 'Satakunnassa' },
  huittinen: { name: 'Huittinen', region: 'Satakunnassa' },
  kankaanpaa: { name: 'Kankaanpää', region: 'Satakunnassa' },
  harjavalta: { name: 'Harjavalta', region: 'Satakunnassa' },
  eurajoki: { name: 'Eurajoki', region: 'Satakunnassa' },
  ulvila: { name: 'Ulvila', region: 'Satakunnassa' },
  nakkila: { name: 'Nakkila', region: 'Satakunnassa' },
  eura: { name: 'Eura', region: 'Satakunnassa' },

  // Varsinais-Suomi (outside our reach)
  uusikaupunki: { name: 'Uusikaupunki', region: 'Varsinais-Suomessa' },
  laitila: { name: 'Laitila', region: 'Varsinais-Suomessa' },
  somero: { name: 'Somero', region: 'Varsinais-Suomessa' },
  paimio: { name: 'Paimio', region: 'Varsinais-Suomessa' },
  kaarina: { name: 'Kaarina', region: 'Varsinais-Suomessa' },
  raisio: { name: 'Raisio', region: 'Varsinais-Suomessa' },
  lieto: { name: 'Lieto', region: 'Varsinais-Suomessa' },
  parainen: { name: 'Parainen', region: 'Varsinais-Suomessa' },
  raasepori: { name: 'Raasepori', region: 'Uudellamaalla' },
  hanko: { name: 'Hanko', region: 'Uudellamaalla' },
  forssa: { name: 'Forssa', region: 'Hämeessä' },

  // Pirkanmaa (outside immediate reach)
  valkeakoski: { name: 'Valkeakoski', region: 'Pirkanmaalla' },
  akaa: { name: 'Akaa', region: 'Pirkanmaalla' },
  sastamala: { name: 'Sastamala', region: 'Pirkanmaalla' },
  parkano: { name: 'Parkano', region: 'Pirkanmaalla' },
  mantta: { name: 'Mänttä-Vilppula', region: 'Pirkanmaalla' },
  virrat: { name: 'Virrat', region: 'Pirkanmaalla' },
  orivesi: { name: 'Orivesi', region: 'Pirkanmaalla' },

  // Päijät-Häme
  heinola: { name: 'Heinola', region: 'Päijät-Hämeessä' },
  orimattila: { name: 'Orimattila', region: 'Päijät-Hämeessä' },
  hollola: { name: 'Hollola', region: 'Päijät-Hämeessä' },
  asikkala: { name: 'Asikkala', region: 'Päijät-Hämeessä' },

  // Kanta-Häme
  janakkala: { name: 'Janakkala', region: 'Hämeessä' },
  hattula: { name: 'Hattula', region: 'Hämeessä' },

  // Ahvenanmaa
  maarianhamina: { name: 'Maarianhamina', region: 'Ahvenanmaalla' },
};
