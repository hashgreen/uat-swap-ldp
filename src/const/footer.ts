interface IFooterItemProps {
    title: string
    href: string
    label: string
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
                label: 'Click_footer-team',
            },
            {
                title: 'Updates',
                href: 'https://',
                label: 'Click_footer-updates',
            },
            {
                title: 'FAQ',
                href: 'https://',
                label: 'Click_footer-faq',
            },
            {
                title: 'Whitepaper',
                href: 'https://',
                label: 'Click_footer-whitepaper',
            },
        ],
    },
    {
        title: 'Contact',
        items: [
            {
                title: 'Contact Us',
                href: 'https://',
                label: 'Click_footer-contact-us',
            },
            {
                title: 'Token Listing',
                href: 'https://',
                label: 'Click_footer-token-listing',
            },
            {
                title: 'Careers',
                href: 'https://',
                label: 'Click_footer--career',
            },
        ],
    },
    {
        title: 'Community',
        items: [
            {
                title: 'Discord',
                href: 'https://',
                label: 'Click_footer-discord',
            },
            {
                title: 'Twitter',
                href: 'https://',
                label: 'Click_footer-twitter',
            },
            {
                title: 'Medium',
                href: 'https://',
                label: 'Click_footer-medium',
            },
        ],
    },
    {
        title: 'Download',
        items: [
            {
                title: 'Media Kit',
                href: 'https://',
                label: 'Click_footer-media-kit',
            },
        ],
    },
]
