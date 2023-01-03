interface ICommunityProps {
    src: string
    alt: string
    descKey: string
    href: string
    label: string
}

export const communityList: ICommunityProps[] = [
    {
        src: '/images/icons/hashgreenTwitter.svg',
        alt: 'hashgreen twitter',
        descKey: 'community-twitter_desc',
        href: 'https://twitter.com/hashgreenlabs',
        label: 'Click_community-connect-to-twitter',
    },
    {
        src: '/images/icons/medium.svg',
        alt: 'medium',
        descKey: 'community-medium_desc',
        href: 'https://hashgreen.medium.com/',
        label: 'Click_community-connect-to-medium',
    },
]
