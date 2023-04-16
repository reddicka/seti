import {combineReducers, configureStore} from "@reduxjs/toolkit";

import appSlice from "./reducers/AppSlice";
import authSlice from "./reducers/AuthSlice";
import profileSlice from "./reducers/ProfileSlice";


const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
    profile: profileSlice
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']