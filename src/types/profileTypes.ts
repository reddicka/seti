// тип профиля пользователя
export type ProfileType = {
    userId: number
    // todo: добавить структурное подразделение, отдел, должность, в отпуске ли
    fullName: string
    contacts: ContactsType
    photo: string | null
}

// контакты пользователя
export type ContactsType = {
    phoneNumber: string
    email: string
}

