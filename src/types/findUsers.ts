// пользователь (в списке пользователей)
export type UserType = {
    id: number
    name: string
    // todo: добавить структурное подразделение, отдел, должность
    photo: string | null
}

// значения формы поиска пользователей
export type FindUsersFiltersTypes = {
    searchedName: string
    // todo: добавить структурное подразделение, отдел, должность
}