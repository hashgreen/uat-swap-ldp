import { GALink } from '@/components/common'
import classNames from 'classnames'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

interface ILearnMoreProps extends WithTranslation {
    href: string
    size: number
    className?: string
    label: string
}

const LearnMore = ({ href, size, className, label, t }: ILearnMoreProps) => {
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
            <p>{t('common-learn_more')}</p>
            <img
                src="/images/icons/openLink.svg"
                alt="open-link"
                width={size}
                height={size}
            />
        </GALink>
    )
}

export default withTranslation()(LearnMore)
