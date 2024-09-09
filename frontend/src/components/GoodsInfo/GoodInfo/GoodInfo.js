import css from './GoodInfo.module.css'

const GoodInfo = ({goodsInfo}) => {
    const {name, price, photo, description} = goodsInfo;

    const photoUrl = photo ? photo.replace('http://localhost', 'http://localhost:5555') : 'https://repository.kristti.com.ua/wp-content/themes/repa/img/img/nopicture.png';
    const altText = photo ? 'photo' : 'Not Photo';

    return (
        <div className={css.main}>
            <div className={css.Image}>
                <img src={photoUrl} alt={altText} />
            </div>
            <div className={css.info}>
                <div><h1>Назва: {name}</h1></div>
                <div><h3>Ціна: {price} грн.</h3></div>
                <div><h2>Опис:</h2><p>{description}</p></div>
            </div>    
        </div>
    );
};

export {GoodInfo};