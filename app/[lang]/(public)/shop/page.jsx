'use client'
import { Suspense, useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import { MoveLeftIcon } from "lucide-react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import { useSafeSelector } from "@/lib/hooks/useSafeSelector"
import { getDictionary } from '@/components/internationalization/dictionaries.js';

 function ShopContent() {

    // get query params ?search=abc
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const router = useRouter()
    const { lang } = useParams()
    const [dictionary, setDictionary] = useState({});

    const products = useSafeSelector(state => state?.product?.list, [])

    const fetchDictionary = async () => {
        const dict = await getDictionary(lang);
        setDictionary(dict);
    }

    useEffect(() => {
        fetchDictionary()
    }, [lang]);

    const filteredProducts = search
        ? products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    return (
        <div className="min-h-[70vh] mx-6">
            <div className=" max-w-7xl mx-auto">
                <h1 onClick={() => router.push(`/${lang}/shop`)} className="text-2xl text-slate-500 my-6 flex items-center gap-2 cursor-pointer"> {search && <MoveLeftIcon size={20} />}  {dictionary.general?.all || 'All'} <span className="text-slate-700 font-medium">{dictionary.products?.products || 'Products'}</span></h1>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
                    {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    )
}


export default function Shop() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}