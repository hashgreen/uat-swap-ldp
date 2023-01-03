export interface IFeatureProps {
    src: string
    alt: string
    titleKey: string
    descKey: string
    href: string
    label: string
}

export const featureList: IFeatureProps[] = [
    {
        src: '/images/feature_stake.png',
        alt: 'stake',
        titleKey: 'feature-stake_title',
        descKey: 'feature-stake_desc',
        href: 'https://docs.hash.green/exchange',
        label: 'Click_stack-&-earn',
    },
    {
        src: '/images/feature_yield.png',
        alt: 'yield',
        titleKey: 'feature-yield_title',
        descKey: 'feature-yield_desc',
        href: 'https://docs.hash.green/yield-farming',
        label: 'Click_yield-farming',
    },
    {
        src: '/images/feature_protocol.png',
        alt: 'protocol',
        titleKey: 'feature-protocol_title',
        descKey: 'feature-protocol_desc',
        href: 'https://docs.hash.green/hashgreen-dao',
        label: 'Click_protocol-fee-sharing',
    },
]
