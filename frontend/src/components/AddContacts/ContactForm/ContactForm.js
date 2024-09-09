import { useForm } from "react-hook-form";
import { contactsService } from "../../../service/contactsService";

import css from './ContactForm.module.css'

const ContactForm = ({setTrigger}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await contactsService.addContact(data);
            reset();
            setTrigger(prev => !prev);
        } catch (error) {
            console.error("Failed to add category", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.Form}> 
            <input type="text" placeholder={'Name'} {...register('name', { required: true })} />
            {errors.name && <span>Це поле є обов'язковим</span>}
            <input type="text" placeholder={'Link'} {...register('link', { required: true })} />
            {errors.link && <span>Це поле є обов'язковим</span>}
            <button type="submit">Зберегти</button>
        </form>
    );
};

export { ContactForm };
