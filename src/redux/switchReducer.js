const INITIAL_STATE = {
    template: 'pro'
}
export const changeTemp = data => ({
    type: 'CHANGE_TEMP',
    payload: data
})

export const switchResume = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_TEMP':
            return {
                ...state,
                template: action.payload
            }
        default:
            return state;
    }
}