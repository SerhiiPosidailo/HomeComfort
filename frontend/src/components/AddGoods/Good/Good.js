import { goodsService } from "../../../service/goodsService";

import css from './Good.module.css'

const Good = ({ good, setGoodsForUpdate, setTrigger }) => {
    const { id, name, price, description, photo } = good;

    const handleEdit = () => {
        setGoodsForUpdate(good);
    };

    const handleDelete = async () => {
        try {
            await goodsService.deleteById(id);
            setTrigger(prev => !prev);
        } catch (error) {
            console.error("Error deleting the good:", error);
        }
    };

    const photoUrl = photo ? photo.replace('http://localhost', 'http://localhost:5555') : 'https://repository.kristti.com.ua/wp-content/themes/repa/img/img/nopicture.png';

return (
    <div className={css.GoodConteiner}>
        <img src={photoUrl} alt={photo ? 'photo' : 'Not Photo'} />
        <div><b>Назва</b>: {name}</div>
        <div><b>Ціна</b>: {price} грн.</div>
        <div><b>Опис</b>: {description}</div>
        <button onClick={handleEdit}>Змінити</button>
        <button onClick={handleDelete}>Видалити</button>
    </div>
);
};

export { Good };
