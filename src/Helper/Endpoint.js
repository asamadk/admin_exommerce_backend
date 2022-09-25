// export const BASE_URL = 'http://3.111.254.142:8080/';

const BASE_URL = 'https://alif-ecommerce.herokuapp.com/';

export const getLoginURL = () => {
    return `${BASE_URL}login`
}

export const getAllOrders = () => {
    return `${BASE_URL}admin/orders`
}

export const postOrders = () => {
    return `${BASE_URL}admin/order`
}

export const getAllCoupons = () => {
    return `${BASE_URL}coupons`
}

export const postCoupons = () => {
    return `${BASE_URL}admin/coupon`
}

export const getAllCategories = () => {
    return `${BASE_URL}categories`
}

export const postCategories = () => {
    return `${BASE_URL}admin/category`
}

export const deleteCategory = (catId) => {
    return `${BASE_URL}admin/category/${catId}`
}

export const getAllUsers = () => {
    return `${BASE_URL}admin/users`
}

export const getAllProducts = (page, limit) => {
    return `${BASE_URL}products?order=NORMAL&limit=${limit}&page=${page}`
}

export const postProducts = (catId) => {
    return `${BASE_URL}admin/product?catId=${catId}`
}

export const deleteProduct = (productId) => {
    return `${BASE_URL}admin/product/${productId}`
}

export const deleteOrderById = (orderId) => {
    return `${BASE_URL}admin/order/${orderId}`
}

export const postAllBanners = () => {
    return `${BASE_URL}admin/banner`
}

export const getAllBanners = () => {
    // return `${BASE_URL}banners`
}