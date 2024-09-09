import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const goodsService = {
    getAll:(page) => apiService.get(urls.goods, {params:{page}}),
    getPhoto:() => apiService.get(urls.photo),
    getGoodsById:(id, page) => apiService.get(urls.CategoryById(id), {params:{page}}),
    
    getGoodsQuery:(key, page) => apiService.get(urls.search(key), {params:{page}}),

    updateById: (id, data) => apiService.put(urls.goodsId(id), data),
    deleteById:(id) => apiService.delete(urls.goodsId(id)),

    
}



export {
    goodsService
}