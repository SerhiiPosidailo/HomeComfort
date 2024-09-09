import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts/MainLayouts";
import {CategoryPage} from "./pages/CategoryPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {ActivateTokenPage} from "./pages/ActivateTokenPage";
import {AdminLayouts} from "./layouts/MainLayouts/AdminLayouts";
import {MainPage} from "./pages/MainPage";
import {SearchPage} from "./pages/SearchPage";
import { CategoryIdPage } from "./pages/CategoruIdPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AddGoods } from "./pages/AddGoods";
import { AddCategory } from "./pages/AddCategory";
import { AddContscts } from "./pages/AddContacts";
import { UserRightsPage } from "./pages/userRightsPage";
import { GoodInfoPage } from "./pages/GoodInfoPage";



const router = createBrowserRouter([
    {path: '', element: <MainLayouts/>, children: [
            {index: true, element: <Navigate to={'main'}/>},
            {path: 'main', element: <MainPage/>},
            {path: '/main/:id', element: <GoodInfoPage/>},
            {path: 'category', element: <CategoryPage/>},
            {path: 'search', element:<SearchPage/>},
            {path: 'contact', element:<ContactsPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>},
            {path: 'activate/:token', element:<ActivateTokenPage/>},
            {path: 'category/:id', element:<CategoryIdPage/>},
            
            
        ]},
    {path: '/admin', element:<AdminLayouts/>, children:[
            {index: true, element: <Navigate to={'addgoods'}/>},
            {path: 'addgoods', element:<AddGoods/>},
            {path: 'addcategory', element:<AddCategory/>},
            {path: 'addcontact', element:<AddContscts/>},
            {path: 'rights', element:<UserRightsPage/>}
        ]}
])

export {
    router
}