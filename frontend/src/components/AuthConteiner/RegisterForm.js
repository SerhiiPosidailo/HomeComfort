import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../service/authService";
import {useNavigate} from "react-router-dom";
import css from './LoginRegister.module.css'

const RegisterForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register, reset, handleSubmit,formState:{errors,isValid}, watch} = useForm({
        mode:'onChange',
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
            <div><input className={css.input} type="text" placeholder='Email' {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email format' } })}/></div>
            {serverError && <div>Email already exist</div>}
            <div><input className={css.input} type="text" placeholder='username' {...register('username', { required: 'Username is required' })}/></div>
            <div><input className={css.input} type="text" placeholder='password' {...register('password', { required: 'Password is required', minLength: { value: 5, message: 'Password must be at least 5 characters long' }})}/></div>
            <div><input className={css.input} type="text" placeholder='ConfirmPassword' {...register('re_password', { required: 'Please confirm your password', validate: (value) => value === watch('password') || 'Passwords do not match' })}/></div>
            <button type="submit" disabled={!isValid}>Реєстрація</button>
        </form>
    );
};


export {RegisterForm};
