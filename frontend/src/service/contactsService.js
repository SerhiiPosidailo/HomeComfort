import { urls } from "../constants/urls";
import { apiService } from "./apiService";

const contactsService = {
    getAll:() => apiService.get(urls.contacts),
    addContact:(data) => apiService.post(urls.contacts, data),
    deleteContact:(id) => apiService.delete(urls.deleteContact(id))
}


export {
    contactsService
}