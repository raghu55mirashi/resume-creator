import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import resumeReducer from './basicResume/reducer'
import resumeProReducer from './proResume/reducer'
import { switchResume } from './switchReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['resume', 'proResume']
}

const rootReducer = combineReducers({
    resume: resumeReducer,
    proResume: resumeProReducer,
    switchResume: switchResume
})

export default persistReducer(persistConfig, rootReducer)