import { IconLink, LanguageSelect } from '@/components/common'
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
                <img
                    src="src/assets/common/logo.svg"
                    alt="logo"
                    height={24}
                    width={170}
                />
            </div>
            <div className="mr-6 flex items-center">
                <LanguageSelect className="mr-3" />
                <IconLink
                    src="src/assets/common/discord.svg"
                    alt="discord"
                    href="https://"
                    className="h-6 w-6"
                />
            </div>
        </div>
    )
}

export default Header
