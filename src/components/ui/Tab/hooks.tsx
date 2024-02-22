'use client'

import { createContext, useContext, useReducer } from 'react'
import { tabReducer } from './reducer'

export type TabContextType = {
    selectedTab: string,
    dispatch: React.Dispatch<any>,
}

export const TabContext = createContext<TabContextType>({
    selectedTab: '',
    dispatch: () => {},
})

export function useTabContext() {
    return useContext(TabContext)
}

export function TabProvider({
    children,
    activeTab
}: {
    children: React.ReactNode,
    activeTab: string
}) {
    const [state, dispatch] = useReducer(tabReducer, {
        selectedTab: activeTab,
    })

    return (
        <TabContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TabContext.Provider>
    )
}