interface IFooterItemProps {
    title: string
    href: string
}

interface IFooterProps {
    title: string
    items: IFooterItemProps[]
}

export const footerList: IFooterProps[] = [
    {
        title: 'About',
        items: [
            {
                title: 'Team',
                href: 'https://',
            },
            {
                title: 'Updates',
                href: 'https://',
            },
            {
                title: 'FAQ',
                href: 'https://',
            },
            {
                title: 'Whitepaper',
                href: 'https://',
            },
        ],
    },
    {
        title: 'Contact',
        items: [
            {
                title: 'Contact Us',
                href: 'https://',
            },
            {
                title: 'Token Listing',
                href: 'https://',
            },
            {
                title: 'Careers',
                href: 'https://',
            },
        ],
    },
    {
        title: 'Community',
        items: [
            {
                title: 'Discord',
                href: 'https://',
            },
            {
                title: 'Twitter',
                href: 'https://',
            },
            {
                title: 'Medium',
                href: 'https://',
            },
        ],
    },
    {
        title: 'Download',
        items: [
            {
                title: 'Media Kit',
                href: 'https://',
            },
        ],
    },
]
