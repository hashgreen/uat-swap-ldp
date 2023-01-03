import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: Handler,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const el = ref?.current

            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target as Node)) {
                return
            }

            handler(event)
        }
        // Bind the event listener
        document.addEventListener(mouseEvent, handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener(mouseEvent, handleClickOutside)
        }
    }, [ref])
}

export default useClickOutside
