import React from 'react';
import css from './search.module.css'
import { useNavigate } from 'react-router-dom';


const Search = ({goods}) => {
    const {name, price, photo} = goods;
    const navigate = useNavigate();
    
    const imageUrl = photo ? photo.replace('http://localhost', 'http://localhost:5555') : 'https://repository.kristti.com.ua/wp-content/themes/repa/img/img/nopicture.png';
    const imageAlt = photo ? 'photo' : 'Not Photo';

    return (
        <div className={css.OneBlockSearch} onClick={() => navigate(`/main/${goods.id}`)}>
            <img src={imageUrl} alt={imageAlt} />
            <div>Назва: {name}</div>
            <div>Ціна: {price} грн.</div>
        </div>
    );
};

export {Search};