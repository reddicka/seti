import React, {FC, Suspense, useEffect} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {globalErrorHandler} from "./store/reducers/AppSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {Layout} from "./components/Layout";
import {Preloader} from "./components/Preloader/Preloader";


// const LoginPage = React.lazy(() => import("./pages/Login/Login"));
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound/NotFound"));

// const paths = {
//     posts: {
//         path: '/',
//         component:
//     }
// }

export const App: FC = () => {
    // let isAuth = useAppSelector(getAuthStatus)
    // let initialized = useAppSelector(isAppInitializedSelector)
    // let globalError = useAppSelector(getGlobalErrorSelector)

    const dispatch = useAppDispatch()
    // dispatch(initializeApp())

    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        // отловить все не отловленные ошибки
        dispatch(globalErrorHandler(e))
    }

    useEffect(() => {
        // initializeApp()
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

        return (
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
        )
    }, [])


    // // Если есть глобальная ошибка, выводим модальное окно
    // if (globalError) return <Modal title={'Упс ;('} text={'Что-то пошло не так...'} error={globalError}/>
    // // Если идет инициализация приложения, то отображаем прелодер
    // if (!initialized) return <Preloader/>

    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                {/* этот Route отобразит внутри Loyout в Outlet все вот это содержимое */}
                <Route path='/' element={<Layout/>}>
                    {/* index вместо path='/' */}
                    <Route index element={<HomePage/>}/>

                    {/*<Route path='/login' element={<LoginPage/>}/>*/}

                    {/*<Route path='about' element={<AboutPage/>}/>*/}

                    {/*/!* автоматический переход без сохранения в истории *!/*/}
                    {/*<Route path='about-us' element={<Navigate to='/about' replace/>}/>*/}

                    {/*<Route path='posts' element={<BlogPage/>}/>*/}
                    {/*<Route path='posts/:id' element={<PostPage/>}/>*/}
                    {/*<Route path='posts/:id/edit' element={<EditPost/>}/>*/}
                    {/*/!* закрываем приватный роут с помощью hoc *!/*/}
                    {/*<Route path='posts/new' element={*/}
                    {/*    <RequireAuth>*/}
                    {/*        <CreatePost/>*/}
                    {/*    </RequireAuth>*/}
                    {/*}/>*/}

                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

// <div className="App">
//     <HeaderContainer/>
//     <Navbar/>
//     <div className="content">
//         <Suspense fallback={<Preloader/>}>
//             <Routes>
//                 <Route path="/" element={<Navigate to="/profile"/>}/>
//
//                 <Route path='/profile' element={<ProfileContainer/>}>
//                     <Route path=':userId' element={<ProfileContainer/>}/>
//                 </Route>
//
//                 <Route path='/dialogs/*' element={
//                     <DialogsPageContainer/>}
//                 />
//
//                 <Route path='/friends' element={
//                     <Friends/>}
//                 />
//
//                 <Route path='/music' element={
//                     <Music/>}
//                 />
//
//                 <Route path='/video' element={
//                     <Video/>}
//                 />
//
//                 <Route path='/search' element={
//                     <FindUsersPageContainer/>}
//                 />
//
//                 <Route path='/login' element={
//                     <Login/>}
//                 />
//
//                 <Route path='*' element={<NotFound/>}/>
//             </Routes>
//         </Suspense>
//     </div>
//
//     <Footer/>
// </div>