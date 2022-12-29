import ReactGA from 'react-ga4'

export const sendEvent = (category: string, action: string, label: string) => {
    ReactGA.event({
        category,
        action,
        label,
    })
}
