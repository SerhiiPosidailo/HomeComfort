import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import { goodsService } from '../../../service/goodsService';
import {CategoryIdOneGoods} from '../CategoryIdOneGoods/CategoryIdOneGoods'
import css from './CategoryIdGoods.module.css'



const CategoryIdGoods = () => {

    const {id} = useParams();

    const [CategoryIdGoods, setCategoryIdGoods] = useState([])

    const [query, setQuery] = useSearchParams({page: '1'});

    const [totalPages, setTotalPages] = useState(1);
    const pageQuery = query.get('page')

    useEffect(() => {
        goodsService.getGoodsById(id, pageQuery).then(({data})=>{
            setCategoryIdGoods(data.data)
            setTotalPages(data.total_pages)
        })
    }, [id,totalPages,pageQuery]);

    const pagePrev = () => {
        setQuery(prev => {
            prev.set('page', `${+pageQuery - 1}`)
            return prev
        })
    }

    const pageNext = () => {
        setQuery(prev => {
            prev.set('page', `${+pageQuery + 1}`)
            return prev
        })
    }

    return (
        <>
            <div className={css.block}>
                {CategoryIdGoods.map(IdGoods => <CategoryIdOneGoods key={IdGoods.id} IdGoods={IdGoods}/>)}
            </div>
            <div className={css.ButtonCategory}>
                <button disabled={+pageQuery === 1} onClick={(pagePrev)}>&lt;&lt;&lt;</button>
                <span><b> {pageQuery} сторінка з {totalPages}</b></span>
                <button disabled={pageQuery === `${totalPages}`} onClick={(pageNext)}>&gt;&gt;&gt;</button>
            </div>
        </>
    );
};

export { CategoryIdGoods };