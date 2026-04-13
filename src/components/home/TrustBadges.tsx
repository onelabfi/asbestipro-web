'use client';

import { Editable } from '@/components/Editable';

const badges = [
  { id: 'home.trust.1', text: 'ISO 22262-1 -standardi', color: 'text-green-400' },
  { id: 'home.trust.2', text: 'SEM-EDS elektronimikroskopia', color: 'text-red-400' },
  { id: 'home.trust.3', text: 'Tulokset 1 arkipäivässä', color: 'text-purple-400' },
  { id: 'home.trust.4', text: 'Koko Suomen kattava palvelu', color: 'text-yellow-400' },
];

export function TrustBadges() {
  return (
    <section className="border-y border-white/5 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-12">
        {badges.map(badge => (
          <div key={badge.id} className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${badge.color} bg-current`} />
            <Editable
              id={badge.id}
              defaultContent={badge.text}
              page="home"
              as="span"
              className="text-sm text-gray-400"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
