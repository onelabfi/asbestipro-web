'use client';

import { Editable } from '@/components/Editable';

type Section = {
  id: string;
  defaultTitle: string;
  defaultBody: string;
};

export function ArticlePage({
  page,
  label,
  title,
  sections,
}: {
  page: string;
  label: string;
  title: string;
  sections: Section[];
}) {
  return (
    <article className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <Editable id={`${page}.label`} defaultContent={label} page={page} as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id={`${page}.title`} defaultContent={title} page={page} as="h1" className="text-3xl sm:text-4xl font-bold mb-12" />

        <div className="space-y-12">
          {sections.map(section => (
            <div key={section.id}>
              <Editable id={`${page}.${section.id}.title`} defaultContent={section.defaultTitle} page={page} as="h2" className="text-xl font-semibold mb-4" />
              <Editable id={`${page}.${section.id}.body`} defaultContent={section.defaultBody} page={page} as="div" className="text-gray-400 leading-relaxed space-y-4" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
