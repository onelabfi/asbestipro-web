// Shared SEO content sections for remote city pages
// City name is injected via template literal at render time

export const seoSections = [
  {
    id: 'intro',
    title: (city: string) => `Asbestikartoitus vai asbestinäyte ${city}`,
    body: 'Aina kun olet aloittamassa remonttia muista ensin tarkistaa asbesti. Asbestinäyte hinta on 39,90€+ALV. Asbestinäyte tutkitaan aina sinä päivänä kun se saapuu meille.',
  },
  {
    id: 'kylpyhuone',
    title: () => 'Kylpyhuoneremontti',
    body: 'Kylpyhuoneessa tulee tarkistaa sekä seinä- että lattiamateriaali aina ennen remontin aloittamista. Ota asbestinäyte itse tai tilaa asbestikartoitus.',
  },
  {
    id: 'keittio',
    title: () => 'Keittiöremontti',
    body: 'Keittiöremontissa on tärkeää tarkistaa asbesti välitilanlaatoista sekä mahdollisesti lattiasta. Ota asbestinäyte itse tai tilaa asbestikartoitus.',
  },
  {
    id: 'kotitalousvahennys',
    title: () => 'Saako asbestikartoituksesta kotitalousvähennyksen?',
    body: 'Asbestikartoitus ei ole kotitalousvähennyskelpoinen.',
  },
  {
    id: 'ilman-kartoitusta',
    title: () => 'Mitä jos ei tee asbestikartoitusta?',
    body: 'Jos purat materiaaleja tutkimatta asbestinäytteitä ja ilmenee, että niissä on ollut asbestia voit joutua vastuuseen kaiken levinneen asbestin siivouksesta. Lisäksi kyseessä on terveyshaitta jolle purkaja altistuu.',
  },
  {
    id: 'itse',
    title: () => 'Asbestikartoitus itse',
    body: 'Asbestikartoituksen voi tehdä itse yksinkertaisissa kylpyhuoneremonteissa, keittiöremonteissa tai lattiaremonteissa, jos tietää mistä materiaaleista on hyvä ottaa asbestinäyte.',
  },
  {
    id: 'haju',
    title: () => 'Mille asbesti haisee?',
    body: 'Asbesti ei haise millekään. Sitä ei voi havaita hajun perusteella.',
  },
  {
    id: 'lattia',
    title: () => 'Lattiaremontti ja lattiamateriaalit',
    body: 'Lattioissa asbestipitoinen materiaali saattaa piileksiä näkyvän materiaalin alla jonne on voitu jättää vanha matto. Joustovinyylimatoissa pinta on ohut PVC-kalvo, jonka alla on värillinen kuviokerros. Tämä on selvästi yleisin asbestia sisältävä matto. Sen tunnistaa siitä, että kalvon / kuvion alla on yleensä vaalean harmaa massa, joka katkeaa taivuttaessa. Näiden käyttö on ajanjaksolta 1970–1985. Vinyylilaatoissa on käytetty asbestia. Asbestia sisältävät laatat ovat pääsääntöisesti kooltaan 250×250 mm. Asbestittomat vinyylilaatat ovat kooltaan 300×300 mm. Vinyylilaatoissa on kuitenkin usein käytetty liimana ns "mustaa liimaa", joka lähes aina sisältää asbestia. Mosaiikkiparketit saattavat olla liimattu bitumiliimalla, joka saattaa sisältää asbestia.',
  },
  {
    id: 'kaakelit',
    title: () => 'Kaakelit',
    body: 'Suomessa käytettiin 60–70-luvulla asbestipitoisia laattalaasteja. Nämä olivat merkiltään: Pukkila ja Valke S.',
  },
  {
    id: 'tapetit',
    title: () => 'Tapetit',
    body: 'Tapetit tai niiden liimat ovat käytännössä asbestivapaita. Kosteissa tiloissa on maailmalla käytetty asbestipitoista muovitapettia, mutta Suomessa näitä ei TTL:n mukaan ole myyty.',
  },
  {
    id: 'tasoitteet',
    title: () => 'Tasoitteet',
    body: 'Seinätasoitteissa on saatettu käyttää asbestipitoista Vetonit tuotetta vuosina 1960–1974. Tätä tuotetta käytetään vain betoniseinissä. Lattiatasoitteissa ei ole käytetty asbestia muuta kuin 1950-luvulla magnesiummassa tai purubetonilattioissa.',
  },
  {
    id: 'ilmanvaihto',
    title: () => 'Ilmanvaihtokanavat',
    body: 'Yleisin asbestia sisältävä ilmanvaihtokanava on neliön muotoinen pyöristetyillä kulmilla oleva vaalean harmaa puristettu sementtiputki (Minerit tai Mika). Näiden käyttö lopetettiin viimeistään vuonna 1976.',
  },
  {
    id: 'sisaverhous',
    title: () => 'Sisäverhouslevyt',
    body: 'Sisäverhouslevyissä ei normaalisti löydy asbestia. Kipsi- ja lastulevyissä ei ole käytetty asbestia. Poikkeus: kerrostaloissa, joissa on peltiseinät sisäpuolella, on joissain tapauksissa käytetty asbestipitoista lujalevyä kylpyhuoneen ulkovuorauksessa. Asbestipitoinen Lujalevy on myös yleinen autotallien sisävuorauksessa. Sisäkattojen paneeleissa, jotka ovat puuta ei ole asbestia. Sisäverhouksen katoissa on käytetty asbestipitoisia akustiikkalevyjä. Hyvä peukalosääntö on: jos levyt on rei\'itetty, niissä on todennäköisesti asbestia. Yleisimmät käytetyt merkit ovat Luja, Nordia sekä Paraset.',
  },
  {
    id: 'palonsuojaus',
    title: () => 'Palonsuojaus',
    body: 'Yleisin asbestipitoinen palonsuojalevy löytyy joko vanhan saunan kiukaan ympäriltä tai päältä sekä vanhojen sähkötaulujen takaan. Näiden käyttö lopetettiin viimeistään 70-luvulla.',
  },
  {
    id: 'kattolevyt',
    title: () => 'Kattolevyt (Ulkokatto)',
    body: 'Kattolevyjä on useita, jotka ovat sisältäneet asbestia. Näistä tavallisin on Vartti, jota käytettiin vuoteen 1988 saakka. Muita asbestipitoisia levyjä ovat mm. Minerit, Särmä, Sifer ja Paanu. Kattomateriaalit on saatettu liimata asbestipitoisella bitumiliimalla, joista yleisin on Pikipoika, jonka käyttö lopetettiin 1988.',
  },
  {
    id: 'putkieristeet',
    title: () => 'Putkieristeet',
    body: 'Vanhoissa kohteissa putkia ja lämminvesivaraajia on usein vuorattu asbestipitoisella lämmöneristeellä. Varaajissa eriste on harmaata, erittäin helposti pölyävää jauhetta, joka on vuorattu yleensä valkoisella kipsillä ja lasikuituverkolla. Toinen putkissa käytetty yleinen eriste on ns asbestipahvi. Jos kosket siihen, ole varovainen, koska useasti pahvin sisäpinnan ja putken välissä on asbestimassa, joka saattaa pölytä suhteellisen helposti. Lasi- tai vuorivilloissa ei ole asbestia.',
  },
];
