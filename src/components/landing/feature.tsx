import { LearnMore, TempBg } from '@/components/common'
import { featureList, IFeatureProps } from '@/const/feature'
import React from 'react'

const FeatureItem = ({ feature }: { feature: IFeatureProps }) => {
    return (
        <div className="flex w-full justify-center overflow-hidden rounded-xl">
            <div className="flex w-full max-w-[600px] flex-col bg-[#203339] lg:hidden">
                <div className="relative aspect-[2/1] w-full">
                    <TempBg size={80} />
                </div>
                <div className="flex flex-col gap-y-4 p-8">
                    <p className="text-2xl">{feature.title}</p>
                    <p className="section-desc">{feature.desc}</p>
                    <a
                        href={feature.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center font-semibold	"
                    >
                        <p>learn more</p>
                        <img
                            src="/images/icons/openLink.svg"
                            alt="open-link"
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </div>
            <div className="hidden h-[240px] max-w-[800px] bg-[#203339] lg:flex lg:flex-row lg:items-center lg:justify-between">
                <div className="flex h-full flex-1 flex-col justify-center gap-y-4 p-8">
                    <p className="text-3xl">{feature.title}</p>
                    <p className="section-desc">{feature.desc}</p>
                    <LearnMore href={feature.href} size={32} />
                </div>
                <div className="relative h-full w-[320px]">
                    <TempBg size={60} />
                </div>
            </div>
        </div>
    )
}

const Feature = () => {
    return (
        <div className="pyke-container-root">
            <div className="pyke-container my-12 flex flex-col items-center gap-y-8 md:my-20 lg:my-24">
                {featureList.map((feature) => (
                    <FeatureItem feature={feature} />
                ))}
            </div>
        </div>
    )
}

export default Feature
