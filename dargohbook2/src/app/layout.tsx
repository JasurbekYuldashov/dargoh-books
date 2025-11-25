import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Dargoh Kitoblar - Kitob do'koni katalogi",
  description: "Dargoh kitob do'konidagi barcha kitoblar katalogi. Eng sara kitoblarni toping va xarid qiling.",
  keywords: 'kitob, kitoblar, dargoh, uzbek kitoblar, kitob sotish',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overscrollBehavior: 'none',
          backgroundColor: '#f8fafc',
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
