import { LearnMore, TempBg } from '@/components/common'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const Whitepaper = ({ t }: WithTranslation) => {
    return (
        <div className="ldp-container-root mb-20">
            <div className="ldp-container flex flex-col overflow-hidden rounded-xl border border-[#2A525E] xl:flex-row">
                <div className="px-8 py-10">
                    <p className="text-3xl sm:text-4xl">
                        {t('whitepaper-title')}
                    </p>
                    <p className="mt-6 text-sm opacity-70 sm:mt-8 sm:text-base">
                        {t('whitepaper-desc')}
                    </p>
                    <LearnMore
                        className="mt-8"
                        href="https://docs.hash.green"
                        size={24}
                        label="Click_whitepaper"
                    />
                </div>
                <div className="relative aspect-[3/2] w-full xl:max-w-[600px]">
                    <img
                        src="/images/whitepaper.png"
                        alt="whitepaper"
                        className="full-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Whitepaper)
