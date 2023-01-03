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
                href: 'https://www.hashgreen.net/',
                label: 'Click_footer-team',
            },
            // NOTE : hide after new doc update
            // {
            //     titleKey: 'footer-about_updates',
            //     href: 'https://',
            //     label: 'Click_footer-updates',
            // },
            // NOTE : hide after MKT done
            // {
            //     titleKey: 'footer-about_faq',
            //     href: 'https://',
            //     label: 'Click_footer-faq',
            // },
            {
                titleKey: 'footer-about_whitepaper',
                href: 'https://docs.hash.green',
                label: 'Click_footer-whitepaper',
            },
        ],
    },
    {
        titleKey: 'footer-contact',
        items: [
            {
                titleKey: 'footer-contact_us',
                href: 'mailto:contact@hashgreen.net',
                label: 'Click_footer-contact-us',
            },
            // NOTE : hide
            // {
            //     titleKey: 'footer-contact_token',
            //     href: 'https://',
            //     label: 'Click_footer-token-listing',
            // },
            {
                titleKey: 'footer-contact_careers',
                href: 'https://www.cakeresume.com/companies/hashgreen',
                label: 'Click_footer--career',
            },
        ],
    },
    {
        titleKey: 'footer-community',
        items: [
            {
                titleKey: 'footer-community_discord',
                href: 'https://discord.gg/F2ZrUMHP',
                label: 'Click_footer-discord',
            },
            {
                titleKey: 'footer-community_twitter',
                href: 'https://twitter.com/hashgreenlabs',
                label: 'Click_footer-twitter',
            },
            {
                titleKey: 'footer-community_medium',
                href: 'https://hashgreen.medium.com/',
                label: 'Click_footer-medium',
            },
        ],
    },
    {
        titleKey: 'footer-download',
        items: [
            // NOTE : hide after redesign
            // {
            //     titleKey: 'footer-download_media',
            //     href: 'https://drive.google.com/drive/folders/1xUW3ZS_dWrkDWK0U0j2CflZIFryuNyB3?usp=sharing',
            //     label: 'Click_footer-media-kit',
            // },
        ],
    },
]
