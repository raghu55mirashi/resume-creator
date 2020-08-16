import { actionTypes } from './types'

export const addData = data => ({
    type: actionTypes.ADD_DATA,
    payload: data
})