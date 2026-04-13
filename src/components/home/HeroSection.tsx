'use client';

import Link from 'next/link';
import { Editable } from '@/components/Editable';

export function HeroSection() {
  return (
    <section className="py-20 sm:py-32 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Editable
          id="home.hero.tagline"
          defaultContent="Paras hinta, paras palvelu"
          page="home"
          as="p"
          className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4"
        />

        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <Editable
            id="home.hero.badge"
            defaultContent="98% asiakkaistamme suosittelisi meitä"
            page="home"
            as="span"
            className="text-xs uppercase tracking-wider text-gray-300"
          />
        </div>

        <Editable
          id="home.hero.title"
          defaultContent="Asbestikartoitus ja"
          page="home"
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        />
        <Editable
          id="home.hero.title-accent"
          defaultContent="asbestinäyte"
          page="home"
          as="p"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mt-2"
        />

        <Editable
          id="home.hero.description"
          defaultContent="Asiantuntija tulee kohteeseen tai ota näyte itse. Nopeat tulokset, kilpailukykyiset hinnat, koko Suomen kattava palvelu."
          page="home"
          as="p"
          className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto"
        />

        <div className="mt-8">
          <span className="text-blue-500 text-4xl sm:text-5xl font-bold">alkaen 119€</span>
          <span className="text-gray-400 ml-2">sis. alv</span>
        </div>

        <div className="flex justify-center gap-4 mt-8">
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
