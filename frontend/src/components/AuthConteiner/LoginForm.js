import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../service/authService";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";
import css from './Loginregister.module.css'

const LoginForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register,handleSubmit,} = useForm();
    const navigate = useNavigate();
    const {setIsAuth, setMe} = useAppContext();

    const login = async (user) =>{
        try {
            await authService.login(user)
            const {data} = await authService.me();
            console.log(data)
            setMe(data)
            setServerError(null)
            setIsAuth(true)

            localStorage.setItem("authState", JSON.stringify({ isAuth: true, me: data }));


            if (data.is_staff || data.is_superuser) {
                navigate('/admin')
            }else {
                navigate('/main')
            }  
        }catch (e){
            setServerError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)} className={css.Form}>
            <div><input className={css.input} type="text" placeholder='Email' {...register('email')}/></div>
            <div><input className={css.input} type="password" placeholder='password' {...register('password')}/></div>
            {serverError && <div>Email or Password is incorrect</div>}
            <button>Увійти</button>
        </form>
    );
};

export {LoginForm};