import { LearnMore, TempBg } from '@/components/common'
import { featureList, IFeatureProps } from '@/const/feature'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const FeatureItem = ({
    feature,
    t,
}: { feature: IFeatureProps } & WithTranslation) => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[600px] flex-col overflow-hidden rounded-xl bg-[#203339] lg:hidden">
                <div className="relative aspect-[2/1] w-full">
                    <TempBg size={80} />
                </div>
                <div className="flex flex-col gap-y-4 p-8">
                    <p className="text-2xl">{t(feature.titleKey)}</p>
                    <p className="section-desc">{t(feature.descKey)}</p>
                    <LearnMore
                        href={feature.href}
                        size={32}
                        label={feature.label}
                    />
                </div>
            </div>
            <div className="hidden h-[240px] max-w-[800px] flex-1 overflow-hidden rounded-xl bg-[#203339] lg:flex lg:flex-row lg:items-center lg:justify-between">
                <div className="flex h-full flex-1 flex-col justify-center gap-y-4 p-8">
                    <p className="text-3xl">{t(feature.titleKey)}</p>
                    <p className="section-desc">{t(feature.descKey)}</p>
                    <LearnMore
                        href={feature.href}
                        size={32}
                        label={feature.label}
                    />
                </div>
                <div className="relative h-full w-[320px]">
                    <TempBg size={60} />
                </div>
            </div>
        </div>
    )
}

const TransFeatureItem = withTranslation()(FeatureItem)

const Feature = () => {
    return (
        <div className="ldp-container-root">
            <div className="ldp-container my-12 flex flex-col items-center gap-y-8 md:my-20 lg:my-24">
                {featureList.map((feature) => (
                    <TransFeatureItem
                        feature={feature}
                        key={feature.titleKey}
                    />
                ))}
            </div>
        </div>
    )
}

export default Feature
