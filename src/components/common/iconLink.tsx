import classNames from 'classnames'
import React from 'react'

interface IProps {
    src: string
    alt: string
    href: string
    className?: string
}

const IconLink = ({ src, alt, href, className }: IProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(className, 'relative')}
        >
            <img src={src} alt={alt}></img>
        </a>
    )
}

export default IconLink
