import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Jämsä | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Jämsä. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Page() {
  return <RemoteCityPage name="Jämsä" region="Keski-Suomessa" />;
}
