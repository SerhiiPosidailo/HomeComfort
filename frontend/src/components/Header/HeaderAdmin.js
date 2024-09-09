import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './Header.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import {authService} from "../../service/authService";
import logo from '../../image/logo.png'

const HeaderAdmin = () => {

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
                    <NavLink to={'addgoods'}><img src={logo} className={css.logotip}/></NavLink>
                </div>
                <div className={css.text}>
                    <NavLink to={'addgoods'}><div>home</div><div className={css.comfort}>comfort</div></NavLink>
                </div>
            </div>
            <div className={css.Navigate}>
                <NavLink to={'addgoods'}>Додати товар</NavLink>
                <NavLink to={'addcategory'}> Категорію</NavLink>
                <NavLink to={'addcontact'}> Контакт</NavLink>
                <NavLink to={'rights'}> Права</NavLink>

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

export {HeaderAdmin};