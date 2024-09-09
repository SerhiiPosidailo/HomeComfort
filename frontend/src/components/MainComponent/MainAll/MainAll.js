import React, {useEffect, useState} from 'react';
import {MainOne} from "../MainOne/MainOne";
import {goodsService} from "../../../service/goodsService";
import css from './MainAll.module.css'
import { useSearchParams } from 'react-router-dom';

const MainAll = () => {
    const [goods, setGoods] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});

    const [totalPages, setTotalPages] = useState(1);
    const pageQuery = query.get('page')

    useEffect(() => {
        goodsService.getAll(pageQuery).then(({data})=> {
            setGoods(data.data)
            setTotalPages(data.total_pages)
        })
    }, [totalPages,pageQuery]);

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
            {goods.map(good => <MainOne key={good.id} good={good}/>)}
        </div>
        <div className={css.Button}>
            <button disabled={+pageQuery === 1} onClick={(pagePrev)}>&lt;&lt;&lt;</button>
            <span><b> {pageQuery} сторінка з {totalPages}</b></span>
            <button disabled={pageQuery === `${totalPages}`} onClick={(pageNext)}>&gt;&gt;&gt;</button>
        </div>
        </>
    );
};

export {MainAll};