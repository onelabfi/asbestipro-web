import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Tampere | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Tampere. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Tampere1Page() {
  return <RemoteCityPage name="Tampere" region="Pirkanmaalla" />;
}
