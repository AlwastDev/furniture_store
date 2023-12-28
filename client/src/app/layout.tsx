import React from 'react';
import type { Metadata } from 'next';
import { Footer, Header } from '@components/index';
import { josefinSans } from '@static/fonts';
import Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Furniture Store',
  description: 'Furniture Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
