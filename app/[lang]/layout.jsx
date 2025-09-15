import { Outfit } from "next/font/google";
import { getDictionary } from '@/components/internationalization/dictionaries.js';
import { localeConfig } from '@/components/internationalization/config.js';
import StoreProvider from '@/app/StoreProvider';
import { Toaster } from 'react-hot-toast';
import '../globals.css';

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const config = localeConfig[lang];
  const isRTL = config?.dir === 'rtl';

  return (
    <html lang={lang} dir={config?.dir || 'ltr'}>
      <body className={`${outfit.className} antialiased ${isRTL ? 'font-arabic' : ''}`}>
        <StoreProvider>
          <Toaster position="top-center" />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}