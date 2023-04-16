import {ProfileType} from "../../types/profileTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    profileInfo: null as ProfileType | null,
    // todo: добавить структурное подразделение, отдел, должность, в отпуске ли
}
type InitialStateType = typeof initialState


export const profileSlice = createSlice({
    name: 'profileUser',
    initialState,
    reducers: {
        // todo: установка нового аватара
    }
})

export const {} = profileSlice.actions

export default profileSlice.reducer


// ====== THUNK-CREATORS ======

// // получить данные для страницы профиля пользователя
// export const getUserProfile = (userId: number) => async (dispatch: AppDispatch) => {
//     let profileData = await profileAPI.getProfile(userId)
//     dispatch(profileSlice.actions.setUserProfile(profileData))
// }
//
// // получить статус какого-то пользователя
// export const getProfileStatus = (userId: number) => async (dispatch: AppDispatch) => {
//     let profileStatus = await profileAPI.getProfileStatus(userId)
//     dispatch(profileSlice.actions.setProfileStatus(profileStatus))
// }
//
// // отправить свой статус на сервер и, если все ок, то задиспатчить его в стейт
// export const updateProfileStatus = (status: string) => async (dispatch: AppDispatch) => {
//     try {
//         let data = await profileAPI.updateProfileStatus(status)
//
//         if (data.resultCode === ResultCodesEnum.Success) {
//             dispatch(profileSlice.actions.setProfileStatus(status))
//         }
//     } catch (error) {
//         // если поймается ошибка, то она обработается тут и не попадет в глобальную
//         console.log('Шота не так')
//         console.error(error)
//     }
// }
//
// // отправить новый аватар на сервер и задиспатчить в стейт
// export const updateProfileAvatar = (file: File) => async (dispatch: AppDispatch) => {
//     let data = await profileAPI.updateProfileAvatar(file)
//
//     if (data.resultCode === ResultCodesEnum.Success) {
//         dispatch(profileSlice.actions.setProfileAvatar(data.data.photos))
//     }
// }
//
// // отправить объект с новыми данными профиля на сервер целиком (пустые сервер перетрет)
// // и запросить новые данные
// export const updateProfileData = (userData: ProfileType) => async (dispatch: AppDispatch, getState: any) => {
//     // let userId = getState.auth.userId
//     let userId = getState().auth.userId
//
//     let data = await profileAPI.updateProfileData(userData)
//
//     if (data.resultCode === ResultCodesEnum.Success) {
//         if (userId !== null) {
//             // await getUserProfile(userData.userId)
//             // @ts-ignore
//             await dispatch(getUserProfile(userData.userId))
//         } else {
//             throw new Error("userId can't be null")
//         }
//     } else {
//         dispatch(stopSubmit("editProfile", {_error: data.messages[0]}))
//         // выплюнет ошибку если надо ее обработать
//         return Promise.reject(data.messages[0])
//     }
// }
