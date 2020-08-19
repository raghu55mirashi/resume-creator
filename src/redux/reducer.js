import dummyData from '../assets/dummay/dummy.json'
import { actionTypes } from './types'

const data = dummyData
const INITIAL_STATE = dummyData

const resumeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_DATA:
            return {
                ...state,
                [action.payload.section]: action.payload.value
            }
        case actionTypes.RESET_DATA:
            return data;
        default:
            return state;
    }
}

export default resumeReducer;