const baseURL = '/api'


const auth = '/auth'
const users = '/users'
const category = '/category'
const categoryPhoto = '/category/photo'
const goods = '/goods'
const contacts = '/contact'




const urls = {
    auth:{
        login:auth,
        register:users,
        me:`${auth}/me`,
        activate:(token)=>`/auth/activate/${token}`,
    },

    admin:{
        users,
        toAdmin: (id) => `${users}/${id}/to_admin`,
        toUser: (id) => `${users}/${id}/to_user`,
        userBlock: (id) => `${users}/${id}/block`,
        userUnBlock: (id) => `${users}/${id}/un_block`,
    },

    category:category,
    photo:categoryPhoto,
    goods:goods,
    contacts:contacts,

    byId: (id) => `/goods/${id}`,
    CategoryById: (id) => `/category/${id}/goods`,
    deleteCategory: (id) => `/category/${id}/delete`,
    deleteContact: (id) => `/contact/${id}`,
    AddGoods: (id) => `/category/${id}`,
    search:(key)=>`/goods?query=${key}`,
    goodsId:(id) => `/goods/${id}`

    

}

export {
    baseURL,
    urls
}