import { LearnMore, TempBg } from '@/components/common'
import React from 'react'

const Whitepaper = () => {
    return (
        <div className="ldp-container-root mb-20">
            <div className="ldp-container flex flex-col rounded-xl border border-[#2A525E] lg:flex-row">
                <div className="px-8 py-10">
                    <p className="text-3xl sm:text-4xl">Whitepaper</p>
                    <p className="mt-6 text-sm opacity-70 sm:mt-8 sm:text-base">
                        HashgreenSwap exists to establish and develop more
                        convenient transactions on Chia Network. This whitepaper
                        will detail the considerations and analysis behind
                        HashgreenSwap, and you are welcome to read it for
                        further understanding.
                    </p>
                    <LearnMore
                        className="mt-8"
                        href="https://"
                        size={24}
                        label="Click_whitepaper"
                    />
                </div>
                <div className="relative aspect-[3/2] w-full xl:max-w-[600px]">
                    <TempBg size={120} />
                </div>
            </div>
        </div>
    )
}

export default Whitepaper
