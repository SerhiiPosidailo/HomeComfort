import React from 'react';
import css from './MainOne.module.css'
import { useNavigate } from 'react-router-dom';

const MainOne = ({good}) => {
    const {name, price, photo} = good;

    const navigate = useNavigate();

    const imageUrl = photo ? photo.replace('http://localhost', 'http://localhost:5555') : 'https://repository.kristti.com.ua/wp-content/themes/repa/img/img/nopicture.png';
    const imageAlt = photo ? 'photo' : 'Not Photo';

    return (
        <div className={css.OneBlock} onClick={() => navigate(`${good.id}`)}>
            <img src={imageUrl} alt={imageAlt} />
            <div>Назва: {name}</div>
            <div>Ціна: {price} грн.</div>
        </div>
    );
};

export {MainOne};