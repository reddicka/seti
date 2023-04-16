// // api для получения профилей, статусов, обновления информации
//
//
// export const profileAPI = {
//     getProfile(userId: number) {
//         return instance.get<ProfileType>(`profile/${userId}`)
//             .then(res => res.data)
//     },
//     updateProfileAvatar(photoFile: File) {
//         let formData = new FormData()
//
//         formData.append('image', photoFile)
//         return instance.put<APIResponseType<string | null>>(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         }).then(res => res.data)
//     }
// }

export {}