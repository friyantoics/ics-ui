'use client'

import { twMerge } from 'tailwind-merge'
import { TabProvider, useTabContext } from './hooks'

export interface TabProps {
    children: React.ReactNode,
    className?: string,
}

export function Tab({ children, className, activeTab }: TabProps & { activeTab: string }) {
    return (
        <TabProvider activeTab={activeTab}>
            <div className={twMerge(``, className)}>
                {children}
            </div>
        </TabProvider>
    )
}

export function TabHead({ children, className }: TabProps) {
    return (
        <ul className={twMerge(`flex flex-wrap border-b`, className)}>
            {children}
        </ul>
    )
}

export function TabHeadItem({ children, className, tabId }: TabProps & { tabId: string }) {
    const { selectedTab, dispatch } = useTabContext()

    const handleClick = () => {
        dispatch({ type: 'SELECT_TAB', payload: tabId })
    }

    let defaultClassName = `me-6 text-sm font-medium text-font-gray border-b-[3px] border-transparent transition-colors hover:text-font-black`

    if (tabId === selectedTab) {
        defaultClassName = twMerge(defaultClassName, `text-font-black border-secondary`)
    }

    return (
        <li className={twMerge(defaultClassName, className)}>
            <button type="button" className="flex py-2.5 items-center" onClick={handleClick}>
                {children}
            </button>
        </li>
    )
}

export function TabBody({ children, className }: TabProps) {
    return (
        <div className={twMerge(`mt-4`, className)}>
            {children}
        </div>
    )
}

export function TabBodyItem({ children, className, tabId }: TabProps & { tabId: string }) {
    const { selectedTab } = useTabContext()

    return tabId === selectedTab ? (
        <div className={twMerge(``, className)}>
            {children}
        </div>
    ) : (
        <div className={twMerge(`hidden`, className)}>
            {children}
        </div>
    )
}