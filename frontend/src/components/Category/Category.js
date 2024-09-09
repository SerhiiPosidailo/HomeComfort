import React from 'react';
import css from './category.module.css'
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    const {name} = category;
    const navigate = useNavigate()

    return (
        <div className={css.category} onClick={()=>navigate(`${category.id}`)}>
            <div><i>{name}</i></div>
        </div>
    );
};

export {Category};