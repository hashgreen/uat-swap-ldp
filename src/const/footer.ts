interface IFooterItemProps {
    titleKey: string
    href: string
    label: string
}

interface IFooterProps {
    titleKey: string
    items: IFooterItemProps[]
}

export const footerList: IFooterProps[] = [
    {
        titleKey: 'footer-about',
        items: [
            {
                titleKey: 'footer-about_team',
                href: 'https://',
                label: 'Click_footer-team',
            },
            {
                titleKey: 'footer-about_updates',
                href: 'https://',
                label: 'Click_footer-updates',
            },
            {
                titleKey: 'footer-about_faq',
                href: 'https://',
                label: 'Click_footer-faq',
            },
            {
                titleKey: 'footer-about_whitepaper',
                href: 'https://',
                label: 'Click_footer-whitepaper',
            },
        ],
    },
    {
        titleKey: 'footer-contact',
        items: [
            {
                titleKey: 'footer-contact_us',
                href: 'https://',
                label: 'Click_footer-contact-us',
            },
            {
                titleKey: 'footer-contact_token',
                href: 'https://',
                label: 'Click_footer-token-listing',
            },
            {
                titleKey: 'footer-contact_careers',
                href: 'https://',
                label: 'Click_footer--career',
            },
        ],
    },
    {
        titleKey: 'footer-community',
        items: [
            {
                titleKey: 'footer-community_discord',
                href: 'https://',
                label: 'Click_footer-discord',
            },
            {
                titleKey: 'footer-community_twitter',
                href: 'https://',
                label: 'Click_footer-twitter',
            },
            {
                titleKey: 'footer-community_medium',
                href: 'https://',
                label: 'Click_footer-medium',
            },
        ],
    },
    {
        titleKey: 'footer-download',
        items: [
            {
                titleKey: 'footer-download_media',
                href: 'https://',
                label: 'Click_footer-media-kit',
            },
        ],
    },
]
