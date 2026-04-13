import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Saarijärvi | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Saarijärvi. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Page() {
  return <RemoteCityPage name="Saarijärvi" region="Keski-Suomessa" />;
}
