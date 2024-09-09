import React, {useEffect, useState} from 'react';

import {Category} from "./Category";
import {categoryService} from "../../service/categoryService";
import css from './category.module.css'

const Categories = () => {

    const [categorys, setCategorys] = useState([])

    useEffect(() => {
         categoryService.getAll().then(({data})=>setCategorys(data.data))
    }, []);


    return (
        
        <div className={css.allCategory}>
            {categorys.map(caterogy => <Category key={caterogy.id} category={caterogy}/>)}
        </div>
    );
};

export {Categories};