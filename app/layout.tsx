import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Almeida & Costa | Advocacia e Consultoria Jurídica',
  description: 'Projeto demonstrativo de advocacia premium criado pela Alexandre Soluções Digitais.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
