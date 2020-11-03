export const paths = {
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  users: (id = null) => `/users/${id ? id : ''}`,
  products: (id = null) => `/products/${id ? id : ''}`,

}

const store = '/store';
const user = '/user';
const product = '/product';

export const urls = {
  store: {
    create: `${store}/create`
  },
  user: {
    login: `${user}/login`,
    create: `${user}/create`,
    getAuth: `${user}/user-data`,
    base: (id = null) => `${user}/${id ? id : ''}`,
  },
  product: {
    base: (id = null) => `${product}/${id ? id : ''}`,
  }
}
