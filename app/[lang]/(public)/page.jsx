
import { getDictionary } from '@/components/internationalization/dictionaries.js';
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";

export default async function Home({ params }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div>
            <Hero dictionary={dictionary.hero} lang={lang} />
            <LatestProducts dictionary={dictionary.products} lang={lang} />
            <BestSelling dictionary={dictionary.products} lang={lang} />
            <OurSpecs dictionary={dictionary.specs} lang={lang} />
            <Newsletter dictionary={dictionary.newsletter} lang={lang} />
        </div>
    );
}