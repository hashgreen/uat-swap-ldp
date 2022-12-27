import classNames from 'classnames'
import React from 'react'

interface ILearnMoreProps {
    href: string
    size: number
    className?: string
}

const LearnMore = ({ href, size, className }: ILearnMoreProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
                'flex flex-row items-center font-semibold',
                className
            )}
        >
            <p>learn more</p>
            <img
                src="/images/icons/openLink.svg"
                alt="open-link"
                width={size}
                height={size}
            />
        </a>
    )
}

export default LearnMore
