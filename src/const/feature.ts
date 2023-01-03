export interface IFeatureProps {
    src: string // TODO: image may have different size
    titleKey: string
    descKey: string
    href: string
    label: string
}

export const featureList: IFeatureProps[] = [
    {
        src: 'https://',
        titleKey: 'feature-stake_title',
        descKey: 'feature-stake_desc',
        href: '',
        label: 'Click_stack-&-earn',
    },
    {
        src: 'https://',
        titleKey: 'feature-yiele_title',
        descKey: 'feature-yield_desc',
        href: '',
        label: 'Click_yield-farming',
    },
    {
        src: 'https://',
        titleKey: 'feature-protocol_title',
        descKey: 'feature-protocol_desc',
        href: '',
        label: 'Click_protocol-fee-sharing',
    },
]
