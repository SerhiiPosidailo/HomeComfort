import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../service/authService";
import {useNavigate} from "react-router-dom";
import css from './LoginRegister.module.css'

const RegisterForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register, reset, handleSubmit,formState:{errors,isValid}} = useForm({
        mode:'onBlur',
    })

    const navigate = useNavigate();

    const save = async (user) => {
         try {
            await authService.register(user)
            setServerError(null)
             navigate('/login')
         }catch (e) {
             setServerError(e.response.data)
         }
    }
    return (
        <form onSubmit={handleSubmit(save)} className={css.Form}>
            <div><input className={css.input} type="text" placeholder='Email' {...register('email')}/></div>
            {serverError && <div>Email already exist</div>}
            <div><input className={css.input} type="text" placeholder='username' {...register('username')}/></div>
            <div><input className={css.input} type="text" placeholder='password' {...register('password')}/></div>
            <div><input className={css.input} type="text" placeholder='ConfirmPassword' {...register('re_password')}/></div>
            <button>Реєстрація</button>
        </form>
    );
};

export {RegisterForm};