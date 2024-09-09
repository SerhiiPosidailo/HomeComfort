import React, {useEffect} from 'react';
import axios from "axios";
import {baseURL} from "../../constants/urls";
import {apiService} from "../../service/apiService";
import {authService} from "../../service/authService";
import {useNavigate} from "react-router-dom";


const ActivateToken = () => {


    const url = window.location.href;
    const urlSplit = url.split('/')
    const token  = urlSplit[urlSplit.length - 1]
    const navigate = useNavigate();




    useEffect(() => {
        authService.activateToken(token)
        setTimeout(()=>{
            navigate('/login')
        }, 3000)
    }, []);



    return (
        <div>
            <h1>Акаунт підтверджено</h1>
        </div>
    );
};

export {ActivateToken};