import { useEffect, useState } from "react";
import { AllCategories } from "../components/AddCategory/Categories/AllCategories";
import { CategoryForm } from "../components/AddCategory/CategoryForm/CategoryForm";
import { categoryService } from "../service/categoryService";

const AddCategory = () => {

    const [categories, setCategories] = useState([])
    const [trigger, setTrigger] = useState(null)


    useEffect(() => {
        categoryService.getAll().then(({data})=> setCategories(data.data))
    }, [trigger]);

    return (
        <div>
            <CategoryForm setTrigger={setTrigger}/>
            <hr/>
            <AllCategories categories={categories} setTrigger={setTrigger}/>
        </div>
    );
};

export {AddCategory};