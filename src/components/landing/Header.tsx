import { GAAnchor, IconLink, LanguageSelect } from '@/components/common'
import classNames from 'classnames'
import React from 'react'

interface IProps {
    className?: string
}

const Header = ({ className }: IProps) => {
    return (
        <div
            className={classNames(
                'z-10 flex h-[68px] w-full flex-row items-center justify-between',
                className
            )}
        >
            <div className="ml-4">
                <GAAnchor
                    category="back-to-homepage"
                    action="Click"
                    label="Click_logo"
                    href="#hero"
                >
                    <img
                        src="/images/icons/logo.svg"
                        alt="logo"
                        height={24}
                        width={170}
                    />
                </GAAnchor>
            </div>
            <div className="mr-6 flex items-center">
                <LanguageSelect className="mr-3" />
                <IconLink
                    category="cta"
                    action="Click"
                    label="Click_header-connect-to-discord"
                    src="/images/icons/discord.svg"
                    alt="discord"
                    href="https://"
                    className="h-6 w-6"
                />
            </div>
        </div>
    )
}

export default Header
