'use client'
import React, { useEffect, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const LatestProducts = ({ dictionary, lang }) => {
    const [isClient, setIsClient] = useState(false)
    const displayQuantity = 4
    const products = useSelector(state => state?.product?.list || [])

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return (
            <div className='px-6 my-30 max-w-6xl mx-auto'>
                <Title title={dictionary?.title || 'Latest Products'} description="Loading products..." href={`/${lang}/shop`} />
                <div className='mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between'>
                    {/* Placeholder content during SSR */}
                    <div className="animate-pulse bg-gray-200 h-64 w-48 rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-64 w-48 rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-64 w-48 rounded"></div>
                    <div className="animate-pulse bg-gray-200 h-64 w-48 rounded"></div>
                </div>
            </div>
        )
    }

    return (
        <div className='px-6 my-30 max-w-6xl mx-auto'>
            <Title title={dictionary?.title || 'Latest Products'} description={`Showing ${products.length < displayQuantity ? products.length : displayQuantity} of ${products.length} products`} href={`/${lang}/shop`} />
            <div className='mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between'>
                {products.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default LatestProducts