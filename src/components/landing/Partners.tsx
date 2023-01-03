import { partnerList } from '@/const/partner'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const Partners = ({ t }: WithTranslation) => {
    return (
        <div className="ldp-container-root mb-16 md:mb-24">
            <div className="ldp-container flex flex-col items-center">
                <p className="section-title">{t('partners-title')}</p>
                <div className="mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-x-10 gap-y-6 md:max-w-[550px] xl:max-w-[1080px] xl:justify-between xl:gap-x-6">
                    {partnerList.map((partner) => (
                        <div
                            className="relative flex h-[120px] w-[240px] items-center justify-center rounded-xl border	border-[#2A525E]"
                            key={partner.alt}
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                width={partner.width}
                                height={partner.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Partners)
