import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";


const initialState = {
    initialized: false,
    globalError: null as string | null
}
type InitialStateType = typeof initialState

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setInitializedSuccess(state: InitialStateType) {
            state.initialized = true
        },
        setGlobalError(state: InitialStateType, action: PayloadAction<string>) {
            state.globalError = action.payload
        }
    }
})

// экспорт actions (если надо)
// export const {} = appSlice.actions

export default appSlice.reducer


// ====== THUNK-CREATORS ======

// начальная инициализация приложения
export const initializeApp = () => (dispatch: AppDispatch) => {
    try {

    } catch (e: unknown) {
        if (e instanceof Error) {
            dispatch(appSlice.actions.setGlobalError(e.message))
        }
    }
}

// установка глобальной ошибки и запуск таймера для ее очистки
export const globalErrorHandler = (error: any) => (dispatch: AppDispatch) => {
    dispatch(appSlice.actions.setGlobalError(error.reason.message))

    // очистка поля ошибки
    // setTimeout(() => {
    //     dispatch(setGlobalErrorSuccess(null))
    // }, 500)
}