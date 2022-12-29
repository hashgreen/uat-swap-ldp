import { footerList } from '@/const/footer'
import React from 'react'

const Footer = () => {
    return (
        <div className="ldp-container-root w-full bg-[#152A30] pt-10 pb-3">
            <div className="ldp-container flex flex-col items-center">
                {/* <div className="flex flex-row flex-wrap items-start justify-center gap-x-[88px] gap-y-8 md:justify-between md:gap-x-[50px]"> */}
                <div className="grid w-fit grid-cols-2 gap-x-[88px] gap-y-8 xl:w-full xl:grid-cols-4">
                    {footerList.map((footer) => (
                        <div
                            className="w-[112px] text-sm md:text-base"
                            key={footer.title}
                        >
                            <p className="mb-4">{footer.title}</p>
                            <div className="flex flex-col gap-y-2">
                                {footer.items.map((item) => (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={item.title}
                                    >
                                        <p className="text-[#B6B6B6]">
                                            {item.title}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex flex-row items-center justify-center gap-x-2">
                    <img src="/images/icons/cat.svg" alt="cat list" />
                    <p className="section-desc">
                        CAT list sourced from TAIL Database
                    </p>
                </div>
                <div className="my-2 w-full border border-[#2A525E]" />
                <p className="text-bases w-full text-center">
                    Copyright © 2023 Hashgreen Inc. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
