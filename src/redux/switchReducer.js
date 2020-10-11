const INITIAL_STATE = {
    template: 'pro',
    theme: false
}
export const changeTemp = data => ({
    type: 'CHANGE_TEMP',
    payload: data
})
export const changeTheme = data => ({
    type: 'CHANGE_THEME',
    payload: data
})

export const switchResume = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_TEMP':
            return {
                ...state,
                template: action.payload
            }
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: !state.theme
            }
        default:
            return state;
    }
}