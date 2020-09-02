import { actionTypes } from './types'

export const addData = data => ({
    type: actionTypes.ADD_DATA,
    payload: data
})
export const resetData = () => ({
    type: actionTypes.RESET_DATA
})
export const loadDataBasic = data => ({
    type: actionTypes.LOAD_DATA_BASIC,
    payload: data
})