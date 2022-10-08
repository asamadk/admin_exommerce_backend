export const DASHBOARD = 'Dashboard'
export const USER = 'User'
export const ORDERS = 'Orders'
export const COUPON = 'Coupon'
export const CATEGORY = 'Category'
export const PRODUCT = 'Product'
export const ADD = 'Add'
export const LOGIN = 'Login'
export const TOKEN = 'token'
export const LOGOUT = 'Logout'
export const BANNER = 'Banners'

export const ADD_PRODUCTS = 'Products'
export const ADD_COUPONS = 'Coupons'
export const ADD_ORDERS = 'Orders'
export const ADD_BANNER = 'Banner'
export const ADD_USERS = 'Users'
export const ADD_SIZE_OPTION = 'Size Option'
export const ADD_CATEGORIES = 'Categories'

export const ROLE_ADMIN = 'ROLE_ADMIN'

export const OK = 200;

export const EDIT = 'edit'
export const VIEW = 'view'

export const isLoggedIn = () => {
   return localStorage.getItem(TOKEN) != null &&  localStorage.getItem(TOKEN) != ''  
}