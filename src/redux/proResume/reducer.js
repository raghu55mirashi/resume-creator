import dummyDataPro from '../../assets/dummay/dummyPro.json'
import { actionTypes } from './types'

const data = dummyDataPro
const INITIAL_STATE = dummyDataPro

const resumeProReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_DATA_PRO:
            return {
                ...state,
                [action.payload.section]: action.payload.value
            }
        case actionTypes.LOAD_DATA_PRO:
            return action.payload
        case actionTypes.RESET_DATA_PRO:
            return data;
        default:
            return state;
    }
}

export default resumeProReducer;