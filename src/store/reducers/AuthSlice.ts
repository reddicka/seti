import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,

    avatarUrl: null as string | null,
    captchaUrl: null as string | null, // если null, то капча не обязательна

    isAuth: false,
    isLoading: false,
    errors: [] as string[]
}
type InitialStateType = typeof initialState


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    //     // установить данные об авторизованном пользователе в стейт
    //     setAuthUserData(state: InitialStateType, action: PayloadAction<IUserAuth>) {
    //         state.captchaUrl = null
    //
    //         state.userId = action.payload.userId
    //         state.login = action.payload.login
    //         state.email = action.payload.email
    //         state.isAuth = action.payload.isAuth
    //     },
    //     // установить аватар авторизованного пользователя в стейт
    //     setAvatarUrl(state: InitialStateType, action: PayloadAction<string | null>) {
    //         state.avatarUrl = action.payload
    //     },
    //     // установить полученную капчу
    //     setCaptchaUrl(state: InitialStateType, action: PayloadAction<string>) {
    //         state.captchaUrl = action.payload
    //     },
    //     // установить флаг авторизован пользователь или нет
    //     setIsAuth(state: InitialStateType, action: PayloadAction<boolean>) {
    //         state.isAuth = action.payload
    //     },
    //     // добавить ошибки
    //     setErrors(state: InitialStateType, action: PayloadAction<string[]>) {
    //         state.errors.push(...action.payload)
    //     },
    //     setClearErrors(state: InitialStateType) {
    //         state.errors = []
    //     },
    //     /* todo: надо вынести это в локальный стейт (не факт) */
    //     setIsLoading(state: InitialStateType, action: PayloadAction<boolean>) {
    //         state.isLoading = action.payload
    //     }
    }
})


export const {} = authSlice.actions

export default authSlice.reducer


// ====== THUNK-CREATORS ======

// // получить данные об авторизованном пользователе
// export const getAuthUserData = () => async (dispatch: AppDispatch) => {
//     dispatch(authSlice.actions.setIsLoading(true))
//
//     let data = await authAPI.me()
//
//     if (data.resultCode === ResultCodesEnum.Success) {
//         let {id, login, email} = data.data
//         dispatch(authSlice.actions.setAuthUserData({
//             userId: id,
//             login,
//             email,
//             isAuth: true
//         }))
//
//         // получить аватарку для шапки
//         let profileData = await profileAPI.getProfile(id)
//         dispatch(authSlice.actions.setAvatarUrl(profileData.photos.small))
//     }
//     dispatch(authSlice.actions.setIsLoading(false))
// }
//
// // отправить форму для входа в аккаунт
// // тип санки - костыль из-за stopSubmit от redux-form (но позволяет задиспатчить любой action)
// export const login = (
//     email: string, password: string, rememberMe: boolean, captcha: string
// ) => async (dispatch: AppDispatch) => {
//     // сначала сбрасываем ошибки (пока только "неверный логин/пароль")
//     dispatch(authSlice.actions.setClearErrors())
//
//     dispatch(authSlice.actions.setIsLoading(true))
//     let data = await authAPI.login(email.trim(), password.trim(), rememberMe, captcha?.trim())
//
//     // todo: сделать через Set и проверять наличие ошибки (добавить типы для ошибок)
//
//     if (data.messages.length > 0) {
//         dispatch(authSlice.actions.setErrors(data.messages))
//     }
//
//     if (data.resultCode === ResultCodesEnum.Success) {
//         // успех
//         await dispatch(getAuthUserData())
//     } else if (data.resultCode === ResultCodesEnum.Error) {
//         // неверный логин/пароль
//         // реализация через Redux (сейчас обрабатывается поле data.messages)
//         // dispatch(actions.setErrors('Неверный логин/пароль'))
//     } else if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
//         // превышен лимит попыток, нужна капча
//         await dispatch(getCaptchaUrl())
//     }
//     dispatch(authSlice.actions.setIsLoading(false))
// }
//
// // выйти из аккаунта
// // тут тип санки задает допущения для использования чужих action
// export const logout = () => async (dispatch: AppDispatch) => {
//     dispatch(authSlice.actions.setIsLoading(true))
//     let data = await authAPI.logout()
//     if (data.resultCode === ResultCodesEnum.Success) {
//         dispatch(authSlice.actions.setAuthUserData({
//             userId: null,
//             login: null,
//             email: null,
//             isAuth: false
//         }))
//         dispatch(authSlice.actions.setAvatarUrl(null))
//         // зануляем в другом стейте - profile, для того, чтобы когда выйдем из профиля, не оставалось информации
//         dispatch(setUserProfile(null))
//         dispatch(setProfileStatus(''))
//     }
//     dispatch(authSlice.actions.setIsLoading(false))
// }
//
// // получить ссылку для капчи
// export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
//     let data = await securityAPI.getCaptchaUrl()
//     dispatch(authSlice.actions.setCaptchaUrl(data.url))
// }