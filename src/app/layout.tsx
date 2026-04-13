import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Asbestikartoitus alkaen 119€ | Asbestinäyte 39,90€ | Asbestipro',
  description: 'Asbestikartoitus ja asbestinäyte edullisesti. Asiantuntija tulee kohteeseen tai ota näyte itse. Nopeat tulokset, kilpailukykyiset hinnat, koko Suomen kattava palvelu.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
