import { TempBg } from '@/components/common'
import classNames from 'classnames'
import React from 'react'

const LinkButton = ({
    src,
    alt,
    href,
    className,
    desc,
}: {
    src: string
    alt: string
    href: string
    className: string
    desc: string
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
                'flex w-full max-w-[285px] flex-row gap-3 rounded-xl px-5 py-3 uppercase',
                className
            )}
        >
            <img src={src} alt={alt} width={24} height={24} />
            <p className="text-lg">{desc}</p>
        </a>
    )
}

const Hero = () => {
    return (
        <div className="ldp-container-root relative z-0 h-screen">
            {/* region start temp bg */}
            <div className="absolute h-full w-full lg:hidden">
                <TempBg size={160} className="-z-10" />
            </div>
            <div className="absolute hidden h-full w-full lg:block">
                <TempBg size={250} className="-z-10" />
            </div>
            {/* region end temp bg */}
            <div className="ldp-container flex h-full flex-col items-center justify-center text-center">
                <p className="text-5xl md:text-6xl">
                    Stake, Earn, and Swap on Chia Blockchain
                </p>
                <p className="mt-4 text-base md:mt-10 md:text-2xl">
                    Hashgreen brings the first decentralized liquidity staking
                    and yield farming to you.
                </p>
                <div className="mt-14 flex w-full flex-wrap justify-center gap-6 xl:mt-24">
                    <LinkButton
                        href="https://"
                        src="/images/icons/discord.svg"
                        alt="discord"
                        className="bg-[#21B8E1]"
                        desc="Join our community"
                    />
                    <LinkButton
                        href="https://"
                        src="/images/icons/twitter.svg"
                        alt="twitter"
                        className="border"
                        desc="Follow our Twitter"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
