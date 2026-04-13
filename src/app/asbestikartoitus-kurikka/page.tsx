import { Metadata } from 'next';
import { RemoteCityPage } from '@/components/RemoteCityPage';

export const metadata: Metadata = {
  title: 'Asbestikartoitus Kurikka | Asbestinäyte hinta 39,90€ | Asbestipro',
  description: 'Asbestikartoitus Kurikka. Asbestinäyte 39,90€+ALV. Ota näyte itse ja lähetä postitse. Tulokset jopa seuraavana päivänä.',
};

export default function Page() {
  return <RemoteCityPage name="Kurikka" region="Etelä-Pohjanmaalla" />;
}
