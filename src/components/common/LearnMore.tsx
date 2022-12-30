import { GALink } from '@/components/common'
import classNames from 'classnames'
import React from 'react'

interface ILearnMoreProps {
    href: string
    size: number
    className?: string
    label: string
}

const LearnMore = ({ href, size, className, label }: ILearnMoreProps) => {
    return (
        <GALink
            category="learn-more"
            action="Click"
            label={label}
            href={href}
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
        </GALink>
    )
}

export default LearnMore
