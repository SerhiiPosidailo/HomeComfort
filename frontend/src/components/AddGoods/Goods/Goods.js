import { Good } from '../Good/Good';

import css from './Goods.module.css'

const Goods = ({ goods, setGoodsForUpdate, setTrigger, pageQuery, totalPages, pageNext, pagePrev}) => {

    

    return (
        <>
        <div className={css.goodsContainer}>
            {goods.map(good => (
                <Good 
                    key={good.id} 
                    good={good} 
                    setGoodsForUpdate={setGoodsForUpdate} 
                    setTrigger={setTrigger}
                />
            ))}
        </div>
        <div className={css.Button}>
            <button disabled={+pageQuery === 1} onClick={(pagePrev)}>&lt;&lt;&lt;</button>
            <span><b> {pageQuery} page of {totalPages}</b></span>
            <button disabled={pageQuery === `${totalPages}`} onClick={(pageNext)}>&gt;&gt;&gt;</button>
        </div>
    </>
    );
};

export { Goods };