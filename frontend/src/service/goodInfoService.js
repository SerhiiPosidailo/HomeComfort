import { urls } from "../constants/urls"
import { apiService } from "./apiService"


const goodInfoService = {
    getById:(id)=> apiService.get(urls.byId(id)),
}



export {
    goodInfoService
}