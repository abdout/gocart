'use client'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSafeSelector } from '@/lib/hooks/useSafeSelector'

const BestSelling = ({ dictionary, lang }) => {
    const displayQuantity = 8
    const products = useSafeSelector(state => state?.product?.list, [])

    return (
        <div className='px-6 my-30 max-w-6xl mx-auto'>
            <Title
                title={dictionary?.bestSelling || 'Best Selling'}
                description={`${dictionary?.showing || 'Showing'} ${products.length < displayQuantity ? products.length : displayQuantity} ${dictionary?.of || 'of'} ${products.length} ${dictionary?.products || 'products'}`}
                href={`/${lang}/shop`}
                dictionary={dictionary}
            />
            <div className='mt-12  grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12'>
                {products.slice().sort((a, b) => (b.rating?.length || 0) - (a.rating?.length || 0)).slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSelling