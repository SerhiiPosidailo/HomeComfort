import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './Header.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import {authService} from "../../service/authService";
import logo from '../../image/logo.png' 


const Header = () => {
    
    const {isAuth, me, setMe, setIsAuth} = useAppContext();
    const navigate = useNavigate();

    const logout = () =>{
        authService.deleteToken()
        setMe(null)
        setIsAuth(null)
        navigate('/login')
    }
    
    return (
        <div className={css.Header}>
            <div className={css.Name}>
                <div>
                <NavLink to={'main'}><img src={logo} className={css.logotip}/></NavLink>
                </div>
                <div className={css.text}>
                    <NavLink to={'main'}><div>home</div><div className={css.comfort}>comfort</div></NavLink>
                </div>
            </div>
            <div className={css.Navigate}>
                <NavLink to={'main'}>Головна</NavLink>
                <NavLink to={'category'}>Категорії</NavLink>
                <NavLink to={'search'}>Пошук</NavLink>
                <NavLink to={'contact'}>Контакти</NavLink>
            </div>
            <div className={css.account}>
                {
                    isAuth ?
                        <div>
                            {me.username}
                            <button onClick={logout}>Вихід</button>
                        </div>
                        :
                        <div className={css.Register}>
                            <NavLink to={'login'}>Увійти</NavLink>
                            <NavLink to={'register'}>Зареєструватись</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export {Header};