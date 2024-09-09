import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { goodInfoService } from '../../../service/goodInfoService';
import { GoodInfo } from '../GoodInfo/GoodInfo';




const GoodsInfo = () => {

    const [goodsInfo, setGoodsInfo] = useState(null)

    const {id} = useParams();

    useEffect(() => {
       goodInfoService.getById(id).then(({data})=>setGoodsInfo(data))
    }, [id]);

    return (
        <div>
            {goodsInfo && <GoodInfo goodsInfo={goodsInfo}/>}
        </div>
    );
};

export {GoodsInfo};