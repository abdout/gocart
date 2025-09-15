import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'

const OurSpecs = ({ dictionary, lang }) => {

    const specsData = [
        {
            titleKey: 'freeShipping',
            title: dictionary?.freeShipping?.title || "Free Shipping",
            description: dictionary?.freeShipping?.description || "Enjoy fast, free delivery on every order no conditions, just reliable doorstep.",
            icon: ourSpecsData[0].icon,
            accent: ourSpecsData[0].accent
        },
        {
            titleKey: 'easyReturn',
            title: dictionary?.easyReturn?.title || "7 Days easy Return",
            description: dictionary?.easyReturn?.description || "Change your mind? No worries. Return any item within 7 days.",
            icon: ourSpecsData[1].icon,
            accent: ourSpecsData[1].accent
        },
        {
            titleKey: 'customerSupport',
            title: dictionary?.customerSupport?.title || "24/7 Customer Support",
            description: dictionary?.customerSupport?.description || "We're here for you. Get expert help with our customer support.",
            icon: ourSpecsData[2].icon,
            accent: ourSpecsData[2].accent
        }
    ];

    return (
        <div className='px-6 my-20 max-w-6xl mx-auto'>
            <Title visibleButton={false} title={dictionary?.title || 'Our Specifications'} description={dictionary?.description || "We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free."} dictionary={dictionary} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-26'>
                {
                    specsData.map((spec, index) => {
                        return (
                            <div className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg group' style={{ backgroundColor: spec.accent + 10, borderColor: spec.accent + 30 }} key={index}>
                                <h3 className='text-slate-800 font-medium'>{spec.title}</h3>
                                <p className='text-sm text-slate-600 mt-3'>{spec.description}</p>
                                <div className='absolute -top-5 text-white size-10 flex items-center justify-center rounded-md group-hover:scale-105 transition' style={{ backgroundColor: spec.accent }}>
                                    <spec.icon size={20} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default OurSpecs