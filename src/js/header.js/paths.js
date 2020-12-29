import CategoriesAPI from './categories-API';
const API = new CategoriesAPI();
export default [
  {
    path: '/',
    component: API.onHome,
    meta: { auth: false },
  },
  {
    path: '/sales',
    component: API.onSales,
    meta: { auth: false },
  },
  {
    path: '/recreationAndSport',
    component: API.onRecreationAndSport,
    meta: { auth: false },
  },
  {
    path: '/free',
    component: API.onFree,
    meta: { auth: false },
  },
  {
    path: '/businessAndServices',
    component: API.onbusinessAndServices,
    meta: { auth: false },
  },
  {
    path: '/work',
    component: API.onWork,
    meta: { auth: false },
  },
  {
    path: '/transport',
    component: API.onTransport,
    meta: { auth: false },
  },
  {
    path: '/electronics',
    component: API.onElectronics,
    meta: { auth: false },
  },
  {
    path: '/trade',
    component: API.onTrade,
    meta: { auth: false },
  },
  {
    path: '/property',
    component: API.onProperty,
    meta: { auth: false },
  },
  {
    path: '/mycabinet',
    component: API.inCabinet,
    meta: { auth: false },
  },
];
