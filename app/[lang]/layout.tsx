import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/src/styles/globals.scss';
import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import { Header } from '@/src/components/views';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thang Pham',
  description: 'Init NextJs Beta',
};

// export async function generateStaticParams() {
//   return i18n.locales.map((locale: string) => ({ lang: locale }));
// }

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params?.lang);
  const dictionaryHeader = dictionary['home'];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header t={dictionaryHeader} lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
