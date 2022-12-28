export interface IIRoadmapItemProps {
    desc: string
    href: string
}

export interface IRoadmapProps {
    title: string
    titleColor: RoadmapTitleColorType
    items: IIRoadmapItemProps[]
}

export enum RoadmapTitleColorType {
    LightGreen,
    LightBlue,
    BlueGreen,
}

export const roadmapList: IRoadmapProps[] = [
    {
        title: '2022 Q4',
        titleColor: RoadmapTitleColorType.LightGreen,
        items: [
            {
                desc: 'Publish whitepaper',
                href: 'https://',
            },
            {
                desc: 'Development of AMM protocol',
                href: 'https://',
            },
        ],
    },
    {
        title: '2023 Q1',
        titleColor: RoadmapTitleColorType.LightBlue,
        items: [
            {
                desc: 'Finalize Hashgreen token tokenomics',
                href: 'https://',
            },
            {
                desc: 'AMM alpha testing on Chia testnet',
                href: 'https://',
            },
            {
                desc: 'Integration with extension wallets (Hoogii wallet)',
                href: 'https://',
            },
            {
                desc: 'Development of DAO staking protocol',
                href: 'https://',
            },
        ],
    },
    {
        title: '2023 Q2',
        titleColor: RoadmapTitleColorType.LightBlue,
        items: [
            {
                desc: 'Hashgreen token launch',
                href: 'https://',
            },
            {
                desc: 'AMM official launch on Chia mainnet',
                href: 'https://',
            },
            {
                desc: 'DAO staking alpha testing on Chia testnet',
                href: 'https://',
            },
        ],
    },
    {
        title: '2023 Q3',
        titleColor: RoadmapTitleColorType.LightBlue,
        items: [
            {
                desc: 'DAO staking official launch on Chia mainnet, enabling yield farming and protocol fee sharing',
                href: 'https://',
            },
        ],
    },
    {
        title: '2023 H2',
        titleColor: RoadmapTitleColorType.BlueGreen,
        items: [
            {
                desc: 'Influencer & project developer collaboration programs',
                href: 'https://',
            },
        ],
    },
]
