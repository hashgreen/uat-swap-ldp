import { IGAProps, sendEvent } from '@/utils/ga'
import React from 'react'

type IGADivProps = React.HTMLAttributes<HTMLDivElement> & IGAProps

export const GADiv = ({
    category,
    action,
    label,
    onClick,
    children,
    ...props
}: IGADivProps) => {
    return (
        <div
            onClick={(e) => {
                sendEvent(category, action, label)
                onClick?.(e)
            }}
            {...props}
        >
            {children}
        </div>
    )
}

type IGALinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & IGAProps

export const GALink = ({
    category,
    action,
    label,
    onClick,
    children,
    ...props
}: IGALinkProps) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
                sendEvent(category, action, label)
                onClick?.(e)
            }}
            {...props}
        >
            {children}
        </a>
    )
}

export const GAAnchor = ({
    category,
    action,
    label,
    onClick,
    children,
    ...props
}: IGALinkProps) => {
    return (
        <a
            onClick={(e) => {
                sendEvent(category, action, label)
                onClick?.(e)
            }}
            {...props}
        >
            {children}
        </a>
    )
}
