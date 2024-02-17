import ReduxProvider from '@/store/Provider';
import type { Metadata } from 'next';
import { Acme } from 'next/font/google';
const inter = Acme({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Rick and Morty Character Universe',
  description: 'Universe'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
