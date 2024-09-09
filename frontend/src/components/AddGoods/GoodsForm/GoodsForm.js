import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { categoryService } from "../../../service/categoryService";
import { goodsService } from "../../../service/goodsService";

import css from './GoodsForm.module.css'

const GoodsForm = ({ setTrigger, goodsForUpdate, setGoodsForUpdate }) => {
    const { register, reset, handleSubmit, formState: {isValid, errors }, setValue} = useForm();
    const [categories, setCategories] = useState([]);
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        categoryService.getAll().then(({ data }) => setCategories(data.data));
    }, []);

    useEffect(() => {
        if (goodsForUpdate) {
            setValue('name', goodsForUpdate.name || '');
            setValue('price', goodsForUpdate.price || '');
            setValue('description', goodsForUpdate.description || '');
            setValue('category', goodsForUpdate.category || '');
            setPhotoUrl(goodsForUpdate.photo || '');
        }
    }, [goodsForUpdate, setValue]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('description', data.description);
        formData.append('category', data.category);

        if (data.photo[0]) {
            formData.append('photo', data.photo[0]);
        }

        try {
            if (goodsForUpdate) {
                await goodsService.updateById(goodsForUpdate.id, formData);
            } else {
                await categoryService.createGoods(data.category, formData);
            }
            setTrigger(prev => !prev);
            reset();
            setGoodsForUpdate(null);
            setPhotoUrl('');
        } catch (error) {
            console.error("Error saving the goods:", error.response?.data || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className={css.form}>
            {photoUrl && <img src={photoUrl} alt="Product" style={{ width: '100px', height: 'auto' }} />}
            <input type="file" {...register('photo')} />
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'description'} {...register('description')} />
            <select {...register('category')} defaultValue="">
                <option value="" disabled>
                    Категорія не вибрана
                </option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button disabled={!isValid}>{goodsForUpdate ? 'Оновити' : 'Зберегти'}</button>
        </form>
    );
};

export { GoodsForm };

