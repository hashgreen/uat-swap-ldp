import { GALink } from '@/components/common'
import { footerList } from '@/const/footer'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const Footer = ({ t }: WithTranslation) => {
    return (
        <div className="ldp-container-root w-full bg-[#152A30] pt-10 pb-3">
            <div className="ldp-container flex flex-col items-center">
                {/* <div className="flex flex-row flex-wrap items-start justify-center gap-x-[88px] gap-y-8 md:justify-between md:gap-x-[50px]"> */}
                <div className="grid w-fit grid-cols-2 gap-x-[88px] gap-y-8 md:w-full md:grid-cols-4">
                    {footerList.map((footer) => (
                        <div
                            className="w-[112px] text-sm md:text-base"
                            key={footer.titleKey}
                        >
                            <p className="mb-4">{t(footer.titleKey)}</p>
                            <div className="flex flex-col gap-y-2">
                                {footer.items.map((item) => (
                                    <GALink
                                        category={t(footer.titleKey)}
                                        action="Click"
                                        label={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={t(item.titleKey)}
                                    >
                                        <p className="text-[#B6B6B6]">
                                            {t(item.titleKey)}
                                        </p>
                                    </GALink>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 mb-3 w-full xl:mb-4">
                    <div className="my-2 hidden w-full border border-[#2A525E] xl:block" />
                    <div className="flex w-full flex-col xl:mt-4 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex flex-row items-center justify-center gap-x-2 ">
                            <img src="/images/icons/cat.svg" alt="cat list" />
                            <p className="section-desc text-[#CDCDCD]">
                                CAT list sourced from TAIL Database
                            </p>
                        </div>
                        <div className="my-2 w-full border border-[#2A525E] xl:hidden" />
                        <p className="text-bases w-full  text-center xl:w-fit">
                            Copyright © 2023 Hashgreen Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Footer)
