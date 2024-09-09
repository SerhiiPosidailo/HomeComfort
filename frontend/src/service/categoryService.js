import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const categoryService = {
    getAll: ()=> apiService.get(urls.category),
    createCategory: (data) => apiService.post(urls.category ,data),
    deleteCategori: (id) => apiService.delete(urls.deleteCategory(id)),
    createGoods:(id,data) => apiService.post(urls.AddGoods(id), data, {
        headers: {
            'Content-Type': 'multipart/form-data', 
        }
    })
}

export {
    categoryService
}