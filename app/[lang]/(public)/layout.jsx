import { getDictionary } from '@/components/internationalization/dictionaries.js';
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function PublicLayout({ children, params }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Banner dictionary={dictionary.banner} lang={lang} />
            <Navbar dictionary={dictionary} currentLocale={lang} />
            {children}
            <Footer dictionary={dictionary.footer} lang={lang} />
        </>
    );
}
