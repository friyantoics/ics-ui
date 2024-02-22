export const tabReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SELECT_TAB':
            return {
                ...state,
                selectedTab: action.payload,
            }
        default:
            return state
    }
}