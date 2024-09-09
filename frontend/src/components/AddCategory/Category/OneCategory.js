import { categoryService } from "../../../service/categoryService";

import css from './Category.module.css'

const OneCategory = ({ category, setTrigger }) => {
    const { id, name } = category;

    const handleDelete = async () => {
        try {
            await categoryService.deleteCategori(id);
            setTrigger(prev => !prev);
        } catch (error) {
            console.error("Failed to delete category", error);
        }
    };

    return (
        <div className={css.CategoryConteiner}>
            <div><h1>{name}</h1></div>
            <button onClick={handleDelete}>Видалити</button>
        </div>
    );
};

export { OneCategory };