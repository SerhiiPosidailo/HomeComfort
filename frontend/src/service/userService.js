import { urls } from "../constants/urls"
import { apiService } from "./apiService"

const userService = {
    getAll: () => apiService.get(urls.admin.users),
    toAdmin: (id) => apiService.patch(urls.admin.toAdmin(id)),
    toUser: (id) => apiService.patch(urls.admin.toUser(id)),
    userBlock: (id) => apiService.patch(urls.admin.userBlock(id)),
    userUnBlock: (id) => apiService.patch(urls.admin.userUnBlock(id)),
}

export {
    userService
}