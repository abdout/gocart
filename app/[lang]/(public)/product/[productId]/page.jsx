'use client'
import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSafeSelector } from "@/lib/hooks/useSafeSelector";
import { getDictionary } from '@/components/internationalization/dictionaries.js';

export default function Product({ params }) {

    const { productId, lang } = useParams();
    const [product, setProduct] = useState();
    const [dictionary, setDictionary] = useState({});
    const products = useSafeSelector(state => state?.product?.list, []);

    const fetchProduct = async () => {
        const product = products.find((product) => product.id === productId);
        setProduct(product);
    }

    const fetchDictionary = async () => {
        const dict = await getDictionary(lang);
        setDictionary(dict);
    }

    useEffect(() => {
        if (products.length > 0) {
            fetchProduct()
        }
        fetchDictionary()
        scrollTo(0, 0)
    }, [productId, products, lang]);

    return (
        <div className="mx-6">
            <div className="max-w-7xl mx-auto">

                {/* Breadcrums */}
                <div className="text-gray-600 text-sm mt-8 mb-5">
                    {dictionary.navigation?.home || 'Home'} / {dictionary.products?.products || 'Products'} / {product?.category}
                </div>

                {/* Product Details */}
                {product && (<ProductDetails product={product} dictionary={dictionary} lang={lang} />)}

                {/* Description & Reviews */}
                {product && (<ProductDescription product={product} dictionary={dictionary} lang={lang} />)}
            </div>
        </div>
    );
}