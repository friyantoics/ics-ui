import { createContext } from 'react'

export interface AccordionContextState {
    activeIndex: number,
    setActiveIndex: (index: number) => void,
}

export const AccordionContext = createContext<AccordionContextState>({
    activeIndex: -1,
    setActiveIndex: () => {},
})