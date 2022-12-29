export interface IFeatureProps {
    src: string // TODO: image may have different size
    title: string
    desc: string
    href: string
    label: string
}

export const featureList: IFeatureProps[] = [
    {
        src: 'https://',
        title: 'Stake and Earn',
        desc: 'Provide liquidity in Chia or asset tokens, and earn fees from swappers.',
        href: '',
        label: 'Click_stack-&-earn',
    },
    {
        src: 'https://',
        title: 'Yield Farming',
        desc: 'Receive Hashgreen tokens by providing liquidity in top pools.',
        href: '',
        label: 'Click_yield-farming',
    },
    {
        src: 'https://',
        title: 'Protocol Fee Sharing',
        desc: 'Be a Hashgreen token holder, and directly benefit from protocol growth.',
        href: '',
        label: 'Click_protocol-fee-sharing',
    },
]
