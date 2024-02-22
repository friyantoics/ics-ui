'use client'

import { twMerge } from 'tailwind-merge'
import useAccordion from './useAccordion'

export function AccordionPanel({
    header,
    children,
    index,
}: {
    header: React.ReactNode,
    children: React.ReactNode,
    index: number,
}) {
    const { activeIndex, handleItemClick } = useAccordion()

    return (
        <div className="border-b">
            <h2>
                <button type="button" className={twMerge('flex w-full py-4 font-medium items-center', '')} onClick={() => handleItemClick(index)}>
                    <span className="block flex-grow text-left font-semibold text-sm">{header}</span>
                    <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div className="pb-4" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                {children}
            </div>
        </div>
    )
}