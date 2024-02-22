'use client'

import { useContext } from 'react'
import { AccordionContext } from './context'

export const useAccordion = () => {
    const { activeIndex, setActiveIndex } = useContext(AccordionContext)

    const handleItemClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(-1)
        } else {
            setActiveIndex(index)
        }
    }

    return {
        activeIndex,
        handleItemClick,
    }
}

export default useAccordion