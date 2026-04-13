import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { Editable } from '@/components/Editable';
import { EditToolbar } from '@/components/EditToolbar';

const cities: Record<string, { name: string; region: string }> = {
  helsinki: { name: 'Helsinki', region: 'pääkaupunkiseudulla' },
  espoo: { name: 'Espoo', region: 'pääkaupunkiseudulla' },
  vantaa: { name: 'Vantaa', region: 'pääkaupunkiseudulla' },
  vihti: { name: 'Vihti', region: 'Uudellamaalla' },
  lohja: { name: 'Lohja', region: 'Uudellamaalla' },
  kirkkonummi: { name: 'Kirkkonummi', region: 'Uudellamaalla' },
  klaukkala: { name: 'Klaukkala', region: 'Uudellamaalla' },
  nurmijarvi: { name: 'Nurmijärvi', region: 'Uudellamaalla' },
  jarvenpaa: { name: 'Järvenpää', region: 'Uudellamaalla' },
  sipoo: { name: 'Sipoo', region: 'Uudellamaalla' },
  kerava: { name: 'Kerava', region: 'Uudellamaalla' },
  tuusula: { name: 'Tuusula', region: 'Uudellamaalla' },
  tampere: { name: 'Tampere', region: 'Pirkanmaalla' },
  turku: { name: 'Turku', region: 'Varsinais-Suomessa' },
  salo: { name: 'Salo', region: 'Varsinais-Suomessa' },
  naantali: { name: 'Naantali', region: 'Varsinais-Suomessa' },
  nokia: { name: 'Nokia', region: 'Pirkanmaalla' },
  kangasala: { name: 'Kangasala', region: 'Pirkanmaalla' },
  lempaala: { name: 'Lempäälä', region: 'Pirkanmaalla' },
  pirkkala: { name: 'Pirkkala', region: 'Pirkanmaalla' },
  hyvinkaa: { name: 'Hyvinkää', region: 'Uudellamaalla' },
  riihimaki: { name: 'Riihimäki', region: 'Hämeessä' },
  porvoo: { name: 'Porvoo', region: 'Uudellamaalla' },
  lahti: { name: 'Lahti', region: 'Päijät-Hämeessä' },
  jyvaskyla: { name: 'Jyväskylä', region: 'Keski-Suomessa' },
  kuopio: { name: 'Kuopio', region: 'Pohjois-Savossa' },
  oulu: { name: 'Oulu', region: 'Pohjois-Pohjanmaalla' },
  pori: { name: 'Pori', region: 'Satakunnassa' },
  lappeenranta: { name: 'Lappeenranta', region: 'Etelä-Karjalassa' },
  kouvola: { name: 'Kouvola', region: 'Kymenlaaksossa' },
  hameenlinna: { name: 'Hämeenlinna', region: 'Hämeessä' },
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
      <section className="py-20 sm:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6">
            Asbestikartoitus {city.name}
          </p>

          <Editable
            id={`${pageId}.hero.title`}
            defaultContent={`Asbestikartoitus ${city.name}`}
            page={pageId}
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
          />

          <Link href="/tilaa" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-lg transition-colors text-lg">
            Tilaa
          </Link>

          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
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
