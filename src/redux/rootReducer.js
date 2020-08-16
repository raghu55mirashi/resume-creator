import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import resumeReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['resume']
}

const rootReducer = combineReducers({
    resume: resumeReducer
})

export default persistReducer(persistConfig, rootReducer)