import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState} from '../store/store'

// типизированнный диспатч
export const useAppDispatch = () => useDispatch<AppDispatch>()
// типизированнный хук селектор
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector