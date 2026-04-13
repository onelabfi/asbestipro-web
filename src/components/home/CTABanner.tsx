'use client';

import Link from 'next/link';
import { Editable } from '@/components/Editable';

export function CTABanner() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Editable
          id="home.cta.title"
          defaultContent="Tilaa asbestikartoitus tänään"
          page="home"
          as="h2"
          className="text-3xl sm:text-4xl font-bold mb-4"
        />
        <Editable
          id="home.cta.desc"
          defaultContent="Nopea, edullinen ja luotettava palvelu. Asiantuntija tulee kohteeseen tai ota näyte itse."
          page="home"
          as="p"
          className="text-gray-400 text-lg mb-8"
        />
        <div className="flex justify-center gap-4">
          <Link href="/tilaa" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg">
            Tilaa kartoitus
          </Link>
          <Link href="/asbestikartoitus-hinta" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg">
            Katso hinnat
          </Link>
        </div>
      </div>
    </section>
  );
}
