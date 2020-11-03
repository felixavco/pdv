export const paths = {
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
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
    base: (id) => `${user}/${id ? id : ''}`,
  },
  product: {
    base: (id) => `${product}/${id ? id : ''}`,
  }
}
