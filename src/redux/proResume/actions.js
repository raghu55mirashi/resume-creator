import { actionTypes } from './types'

export const addDataPro = data => ({
    type: actionTypes.ADD_DATA_PRO,
    payload: data
})
export const loadDataPro = data => ({
    type: actionTypes.LOAD_DATA_PRO,
    payload: data
})