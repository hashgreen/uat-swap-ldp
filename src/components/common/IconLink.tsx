import { GALink } from '@/components/common'
import { IGAProps } from '@/utils/ga'
import classNames from 'classnames'
import React from 'react'

interface IProps extends IGAProps {
    src: string
    alt: string
    href: string
    className?: string
}

const IconLink = ({
    src,
    alt,
    href,
    className,
    category,
    action,
    label,
}: IProps) => {
    return (
        <GALink
            category={category}
            action={action}
            label={label}
            href={href}
            className={classNames(className, 'relative')}
        >
            <img src={src} alt={alt}></img>
        </GALink>
    )
}

export default IconLink
