import type { Metadata } from 'next';
import './journey.css';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Happy Birthday, Ittaa 💗',
  description: 'Kejutan ulang tahun kecil dari Ridho untuk Ittaa.',
  openGraph: { title: 'Happy Birthday, Ittaa 💗', description: 'Kejutan ulang tahun kecil dari Ridho untuk Ittaa.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: 'Happy Birthday, Ittaa 💗', description: 'Kejutan ulang tahun kecil dari Ridho untuk Ittaa.', images: ['/og.jpg'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
