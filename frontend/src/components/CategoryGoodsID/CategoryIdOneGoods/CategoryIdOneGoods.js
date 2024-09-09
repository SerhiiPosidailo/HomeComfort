import React from 'react';
import css from './CategoryIdOneGoods.module.css'
import { useNavigate } from 'react-router-dom';

const CategoryIdOneGoods = ({IdGoods}) => {
    const {name, price, photo} = IdGoods;
    const navigate = useNavigate();

    const photoUrl = photo ? photo.replace('http://localhost', 'http://localhost:5555') : 'https://repository.kristti.com.ua/wp-content/themes/repa/img/img/nopicture.png';

return (
    <div className={css.OneBlock} onClick={()=>navigate(`/main/${IdGoods.id}`)}>
        <img src={photoUrl} alt={photo ? 'photo' : 'Not Photo'} />
        <div>Назва: {name}</div>
        <div>Ціна: {price} грн.</div>
    </div>
);
};

export {CategoryIdOneGoods};