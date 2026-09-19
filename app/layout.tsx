import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'METAENDURE LABS | Endure. Evolve. Excel.',
  description:
    'Data-driven endurance coaching, HYROX simulation performance labs, triathlon training, and mindset frameworks founded by Sujai Sivan. Outlast your yesterday.',
  icons: {
    icon: '/assets/images/metaendure-crest.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="theme-light antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
