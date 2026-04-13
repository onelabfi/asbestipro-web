import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Muonio | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Muonio. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Page() {
  return <RemoteCityPage name="Muonio" region="Lapissa" />;
}
