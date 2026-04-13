import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Ii | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Ii. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Page() {
  return <RemoteCityPage name="Ii" region="Pohjois-Pohjanmaalla" />;
}
