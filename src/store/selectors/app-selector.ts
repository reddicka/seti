import {RootState} from "../store";


export const isAppInitializedSelector = (state: RootState) => state.app.initialized
export const getGlobalErrorSelector = (state: RootState) => state.app.globalError