/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as LinkArrow } from '@/assets/images/icons/linkArrow.svg'
import { GALink, TempBg } from '@/components/common'
import { communityList } from '@/const/community'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const Community = ({ t }: WithTranslation) => {
    return (
        <div className="ldp-container-root mb-12 sm:mb-16 md:mb-20">
            <div className="ldp-container">
                <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl border border-[#2A525E] xl:mb-20">
                    <TempBg size={120} />
                    <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center gap-y-8 px-8 sm:px-11">
                        <p className="max-w-[440px] text-center text-2xl lg:text-3xl">
                            {t('community-discord_title')}
                        </p>
                        <p className="section-desc max-w-[440px] text-center">
                            {t('community-discord_desc')}
                        </p>
                        <GALink
                            category="cta"
                            action="Click"
                            label="Click_community-connect-to-discord"
                            href="https://"
                            className="flex cursor-pointer flex-row gap-x-3 rounded-xl bg-[#21B8E1] px-5 py-3"
                        >
                            <img
                                src="/images/icons/discord.svg"
                                alt="discord"
                                width={24}
                                height={24}
                            />
                            <p className="uppercase">
                                {t('community-discord_link')}
                            </p>
                        </GALink>
                    </div>
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    {communityList.map((community) => (
                        <div
                            className="flex flex-col items-center justify-center rounded-xl border border-[#2A525E] py-8 px-8 sm:px-11 xl:flex-1"
                            key={community.alt}
                        >
                            <img
                                src={community.src}
                                alt={community.alt}
                                className="h-8 md:h-10"
                            />
                            <p className="section-desc mt-6 max-w-[440px] text-center md:mt-8">
                                {t(community.descKey)}
                            </p>
                            <GALink
                                category="cta"
                                action="Click"
                                label={community.label}
                                href={community.href}
                                className="mt-8 flex flex-row rounded-xl border border-[#497684] px-5 py-3 md:mt-12"
                            >
                                <p className="uppercase text-[#4A8495]">
                                    {t('community-follow')}
                                </p>
                                <LinkArrow className="ml-3" stroke="#4A8495" />
                            </GALink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Community)
