import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { Editable } from '@/components/Editable';
import { EditToolbar } from '@/components/EditToolbar';

const cities: Record<string, { name: string; region: string; price: string }> = {
  helsinki: { name: 'Helsinki', region: 'pääkaupunkiseudulla', price: '119€' },
  espoo: { name: 'Espoo', region: 'pääkaupunkiseudulla', price: '119€' },
  vantaa: { name: 'Vantaa', region: 'pääkaupunkiseudulla', price: '119€' },
  vihti: { name: 'Vihti', region: 'Uudellamaalla', price: '199€' },
  lohja: { name: 'Lohja', region: 'Uudellamaalla', price: '199€' },
  kirkkonummi: { name: 'Kirkkonummi', region: 'Uudellamaalla', price: '199€' },
  klaukkala: { name: 'Klaukkala', region: 'Uudellamaalla', price: '199€' },
  nurmijarvi: { name: 'Nurmijärvi', region: 'Uudellamaalla', price: '199€' },
  jarvenpaa: { name: 'Järvenpää', region: 'Uudellamaalla', price: '199€' },
  sipoo: { name: 'Sipoo', region: 'Uudellamaalla', price: '199€' },
  kerava: { name: 'Kerava', region: 'Uudellamaalla', price: '199€' },
  tuusula: { name: 'Tuusula', region: 'Uudellamaalla', price: '199€' },
  tampere: { name: 'Tampere', region: 'Pirkanmaalla', price: '219€' },
  turku: { name: 'Turku', region: 'Varsinais-Suomessa', price: '219€' },
  salo: { name: 'Salo', region: 'Varsinais-Suomessa', price: '219€' },
  naantali: { name: 'Naantali', region: 'Varsinais-Suomessa', price: '219€' },
  nokia: { name: 'Nokia', region: 'Pirkanmaalla', price: '219€' },
  kangasala: { name: 'Kangasala', region: 'Pirkanmaalla', price: '219€' },
  lempaala: { name: 'Lempäälä', region: 'Pirkanmaalla', price: '219€' },
  pirkkala: { name: 'Pirkkala', region: 'Pirkanmaalla', price: '219€' },
  hyvinkaa: { name: 'Hyvinkää', region: 'Uudellamaalla', price: '199€' },
  riihimaki: { name: 'Riihimäki', region: 'Hämeessä', price: '199€' },
  porvoo: { name: 'Porvoo', region: 'Uudellamaalla', price: '199€' },
  lahti: { name: 'Lahti', region: 'Päijät-Hämeessä', price: '239€' },
  jyvaskyla: { name: 'Jyväskylä', region: 'Keski-Suomessa', price: '239€' },
  kuopio: { name: 'Kuopio', region: 'Pohjois-Savossa', price: '239€' },
  oulu: { name: 'Oulu', region: 'Pohjois-Pohjanmaalla', price: '239€' },
  pori: { name: 'Pori', region: 'Satakunnassa', price: '239€' },
  lappeenranta: { name: 'Lappeenranta', region: 'Etelä-Karjalassa', price: '239€' },
  kouvola: { name: 'Kouvola', region: 'Kymenlaaksossa', price: '239€' },
  hameenlinna: { name: 'Hämeenlinna', region: 'Hämeessä', price: '239€' },
};

export function generateStaticParams() {
  return Object.keys(cities).map(city => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities[params.city];
  if (!city) return {};
  return {
    title: `Asbestikartoitus ${city.name} | Asbestinäyte | Asbestipro`,
    description: `Asbestikartoitus ja asbestinäyte ${city.name}. Asiantuntija tulee kohteeseen ${city.region}. Nopeat tulokset, kilpailukykyiset hinnat. Tilaa nyt!`,
  };
}

export default async function CityPage({ params }: { params: { city: string } }) {
  const city = cities[params.city];
  if (!city) notFound();

  const pageId = `city-${params.city}`;
  const content = await getPageContent(pageId);

  return (
    <ContentProvider initialContent={content} page={pageId}>
      {/* Hero */}
      <section className="py-20 sm:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">
            Asbestikartoitus {city.name}
          </p>

          <p className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none text-white tracking-tight">
            {city.price}
          </p>

          <Link href="/tilaa" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium uppercase tracking-wider px-12 py-4 rounded-lg transition-colors text-base mt-10">
            Tilaa
          </Link>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-400">
            <a href="mailto:info@asbesti.pro" className="hover:text-white transition-colors">Email: info@asbesti.pro</a>
            <a href="tel:+35845784444444" className="hover:text-white transition-colors">Puh: +358 45 78 444 444</a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          <div>
            <Editable
              id={`${pageId}.section1.title`}
              defaultContent={`Asbestikartoitus vai asbestinäyte ${city.name} – mitä valita remontin alkaessa?`}
              page={pageId}
              as="h2"
              className="text-2xl font-bold mb-4"
            />
            <Editable
              id={`${pageId}.section1.body`}
              defaultContent={`${city.name} ${city.region} on paljon vanhempaa rakennuskantaa, erityisesti 1950–1980-luvuilla rakennettuja kerrostaloja ja omakotitaloja, joissa asbestia on saatettu käyttää laajasti eri rakenteissa. Siksi ennen kuin purat kylpyhuoneen, keittiön tai lattian, on tärkeää selvittää, onko asbestia – joko teettämällä asbestikartoitus ${city.name} toimivalta asiantuntijalta tai ottamalla asbestinäyte itse ja lähettämällä sen laboratorioon analysoitavaksi.`}
              page={pageId}
              as="div"
              className="text-gray-400 leading-relaxed"
            />
          </div>

          <div>
            <Editable
              id={`${pageId}.section2.title`}
              defaultContent={`Asbestikartoitus ${city.name} – nopea ja varma ratkaisu`}
              page={pageId}
              as="h2"
              className="text-2xl font-bold mb-4"
            />
            <Editable
              id={`${pageId}.section2.body`}
              defaultContent={`${city.name} ${city.region} asbestikartoituksen voi tilata helposti useilta paikallisilta toimijoilta. Sertifioidut kartoitusyritykset tekevät yleensä kartoituksen 1–2 arkipäivän varoitusajalla, ja tulokset saat jopa seuraavana päivänä. Tyypillinen kartoitus vie 15–30 minuuttia. Vaikka kartoitus ei ole kotitalousvähennyskelpoinen, se voi säästää merkittävästi, jos asbestia löytyy ja sen purku voidaan suunnitella asianmukaisesti.`}
              page={pageId}
              as="div"
              className="text-gray-400 leading-relaxed"
            />
          </div>

          <div>
            <Editable
              id={`${pageId}.section3.title`}
              defaultContent={`Asbestinäyte itse otettuna – edullinen vaihtoehto`}
              page={pageId}
              as="h2"
              className="text-2xl font-bold mb-4"
            />
            <Editable
              id={`${pageId}.section3.body`}
              defaultContent={`Jos olet tekemässä pientä remonttia – esimerkiksi yksittäisten laattojen ja lattiamaton poistoa – ja tiedät, mistä kohdasta näytteen kannattaa ottaa, voit tilata pelkän asbestinäytteen analyysin laboratoriolta. Analysoimme näytteet jo saman päivän aikana niiden saapuessa. Näytteet voi toimittaa henkilökohtaisesti tai postitse osoitteeseen: Suomen Asbestipro Oy, Ukkohauentie 11-13A, 02170 Espoo, Finland.`}
              page={pageId}
              as="div"
              className="text-gray-400 leading-relaxed"
            />
          </div>

          <div>
            <Editable
              id={`${pageId}.section4.title`}
              defaultContent={`Missä asbestia voi piillä ${city.name}?`}
              page={pageId}
              as="h2"
              className="text-2xl font-bold mb-4"
            />
            <Editable
              id={`${pageId}.section4.body`}
              defaultContent={`Vanhemmissa rakennuksissa ${city.name} ${city.region} asbestia löytyy usein seuraavista kohteista: kylpyhuoneiden muovimassat ja vanhat kuitumatot, keittiöiden laatat ja lattiat, putkieristeet, seinälevyt ja tasoitteet, lattiamateriaaleissa käytetty musta liima ja bitumiliimat, sekä ilmanvaihtokanavien mineraalilevyt. Kaikki ennen vuotta 1994 rakennetut tai korjatut rakennukset voivat sisältää asbestia.`}
              page={pageId}
              as="div"
              className="text-gray-400 leading-relaxed"
            />
          </div>

          <div>
            <Editable
              id={`${pageId}.section5.title`}
              defaultContent={`Miksi kartoitus kannattaa tehdä ${city.name}?`}
              page={pageId}
              as="h2"
              className="text-2xl font-bold mb-4"
            />
            <Editable
              id={`${pageId}.section5.body`}
              defaultContent={`Rakennusvalvonta ja taloyhtiöt edellyttävät yhä useammin asbestikartoitusta ennen remonttia. Jos purkutyöt aloitetaan ilman kartoitusta ja asbestia löytyy myöhemmin, urakoitsija tai asukas voi joutua vastuuseen kalliista jälkisiivouksesta – ja pahimmillaan altistaa itsensä tai naapureita haitalliselle pölylle. Asbestikartoitus ${city.name} on nopea ja edullinen tapa varmistaa turvallinen remontti.`}
              page={pageId}
              as="div"
              className="text-gray-400 leading-relaxed"
            />
          </div>

          <div>
            <Editable
              id={`${pageId}.section6.title`}
              defaultContent={`Asbestikartoitus hinta ${city.name}`}
              page={pageId}
              as="h2"
              className="text-2xl font-bold mb-4"
            />
            <Editable
              id={`${pageId}.section6.body`}
              defaultContent={`Asbestikartoituksen hinta ${city.name} sisältää kaiken: asiantuntijan käynnin, kaikki tarvittavat näytteet, SEM-EDS laboratorioanalyysin ISO 22262-1 -standardin mukaisesti, kilometrikorvauksen, ALV:n sekä lakisääteisen kartoitusraportin. Ei piilokustannuksia. Asbestinäytteen analyysi maksaa 39,90€ + ALV per näyte, jos otat näytteen itse.`}
              page={pageId}
              as="div"
              className="text-gray-400 leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#070e1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Tilaa asbestikartoitus {city.name} tänään</h2>
          <p className="text-gray-400 mb-6">Nopea, edullinen ja luotettava palvelu.</p>
          <div className="flex justify-center gap-4">
            <Link href="/tilaa" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors">
              Tilaa kartoitus
            </Link>
            <Link href="/asbestikartoitus-hinta" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-lg transition-colors">
              Katso hinnat
            </Link>
          </div>
        </div>
      </section>

      <EditToolbar />
    </ContentProvider>
  );
}
