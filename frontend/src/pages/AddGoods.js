import { GoodsForm } from '../components/AddGoods/GoodsForm/GoodsForm';
import { Goods } from '../components/AddGoods/Goods/Goods';
import { useEffect, useState } from 'react';
import { goodsService } from '../service/goodsService';
import { useSearchParams } from 'react-router-dom';

const AddGoods = () => {

    const [goods, setGoods] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [goodsForUpdate, setGoodsForUpdate] = useState(null)

    const [query, setQuery] = useSearchParams({page: '1'});
    const [totalPages, setTotalPages] = useState(1);
    const pageQuery = query.get('page')

    
    useEffect(() => {
        goodsService.getAll(pageQuery).then(({data})=> {
            setGoods(data.data)
            setTotalPages(data.total_pages)
        }
    )}, [trigger, totalPages, pageQuery]);



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
        <div>
            <GoodsForm setTrigger={setTrigger} goodsForUpdate={goodsForUpdate} setGoodsForUpdate={setGoodsForUpdate}/>
            <hr/>
            <Goods goods={goods} setGoodsForUpdate={setGoodsForUpdate} setTrigger={setTrigger} pageQuery={pageQuery}
             totalPages={totalPages} pagePrev={pagePrev} pageNext={pageNext}/>
        </div>
    );
};

export {AddGoods};