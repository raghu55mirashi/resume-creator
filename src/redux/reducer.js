import dummyData from '../assets/dummay/dummy.json'
import { actionTypes } from './types'

const INITIAL_STATE = dummyData

const resumeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_DATA:
            return {
                ...state,
                [action.payload.section]: action.payload.value
            }
        default:
            return state;
    }
}

export default resumeReducer;