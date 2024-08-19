import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/user.Slice'

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})