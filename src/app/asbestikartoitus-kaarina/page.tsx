import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Kaarina | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Kaarina. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Page() {
  return <RemoteCityPage name="Kaarina" region="Varsinais-Suomessa" />;
}
