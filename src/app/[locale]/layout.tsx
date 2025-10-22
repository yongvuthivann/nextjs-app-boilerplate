import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import { ThemeProvider } from '@/providers/theme-provider';
import { MainLayout } from '@/layouts';

import '../../styles/globals.css';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description:
    "Effortlessly configure your Next.js app's router setup by simply cloning a project",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />

        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainLayout>
              <Header />
              {children}
              <Footer />
            </MainLayout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
