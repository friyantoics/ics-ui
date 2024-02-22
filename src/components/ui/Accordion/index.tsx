'use client'

import { useState } from 'react'
import { AccordionContext } from './context'
import { AccordionPanel } from './Panel'

export const Accordion = ({ children }: { children: React.ReactNode }) => {
    const [activeIndex, setActiveIndex] = useState(-1)

    return (
        <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </AccordionContext.Provider>
    )
}

export { AccordionPanel }