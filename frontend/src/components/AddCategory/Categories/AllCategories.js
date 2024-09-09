import { OneCategory } from "../Category/OneCategory";

import css from './Categories.module.css'

const AllCategories = ({categories, setTrigger}) => {
    return (
        <div className={css.Categories}>
            {categories.map(category => 
                <OneCategory key={category.id}
                category={category}
                setTrigger={setTrigger}/>)}
        </div>
    );
};

export { AllCategories };