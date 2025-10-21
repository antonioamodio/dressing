import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dressing Studio | Avatar 3D Outfit Preview',
  description:
    'Esperienza mobile-first per provare outfit su un avatar 3D, ispirata ai brand Zara, H&M e retailer principali.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
