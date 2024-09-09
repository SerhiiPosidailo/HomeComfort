import { useForm } from "react-hook-form";
import { categoryService } from "../../../service/categoryService";

import css from './CategoryForm.module.css'


const CategoryForm = ({ setTrigger }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await categoryService.createCategory(data);
            reset();
            setTrigger(prev => !prev);
        } catch (error) {
            console.error("Failed to add category", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <input type="text" placeholder={"Ім'я категорії"} {...register('name', { required: true })} />
            {errors.name && <span>Це поле є обов'язковим</span>}
            <button type="submit">Зберегти</button>
        </form>
    );
};

export { CategoryForm };
