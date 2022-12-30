import ReactGA from 'react-ga4'

export interface IGAProps {
    category: string
    action: 'Click' | 'Mouse' | 'Scroll'
    label: string
}

export const sendEvent = (category: string, action: string, label: string) => {
    ReactGA.event({
        category,
        action,
        label,
    })
}
