import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Dargoh Kitoblar - Kitob do'koni katalogi",
  description: "Dargoh kitob do'konidagi barcha kitoblar katalogi. Eng sara kitoblarni toping va xarid qiling.",
  keywords: 'kitob, kitoblar, dargoh, uzbek kitoblar, kitob sotish',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
