// import dummyData from '../assets/dummay/dummy.json'
import { actionTypes } from './types'

const INITIAL_STATE = {
    "objective": "Being given to understand that you are entertaining candidates for various jobs in your esteemed organization. I offer myself as one of the candidate for a suitable job and furnish the following Curriculum Vitae for favoring of your consideration and early orders.",
    "profile": {
        "name": "raghavendra",
        "date_of_birth": "05-03-1988",
        "gender": "male",
        "father_name": "apparao mirashi",
        "marital_status": "unmarried",
        "languages": "English, Hindi, marathi, kannada"
    },
    "address": {
        "at": "mundwad",
        "post": "kannigeri",
        "city": "yellapur",
        "district": "north kannada",
        "state": "karnataka",
        "pin_code": "5824333"
    },
    "contact": {
        "cell": "545454545",
        "email": "raghu@gmail.com"
    },
    "qualification": {
        "description": {
            "qualification-0": "Bachelor of Engineering in Computer Science",
            "qualification-1": "Diploma in Computer Science"
        }
    },
    "skills": {
        "enable": true,
        "description": {
            "description-0": "Computer networking and System Services",
            "description-1": "Windows and Linux Operating Systems"
        }
    },
    "experience": {
        "enable": true,
        "description": {
            "description-0": "1 year as Software Developer in Softebizz Technologies Pvt Ltd/Pune",
            "description-1": "3 Years as IT-Engineer in Premier Services/Goa"
        }
    },
    "certification": {
        "enable": true,
        "description": {
            "description-0": "Land Acquisition Certificate – Land acquired by state Govt. in Bommanalli pickup Dam"
        }
    }
}

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