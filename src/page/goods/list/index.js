export default [{
    path: '/goods/list',
    title: '商品管理',
    exact: true,
    component: import(/* webpackChunkName: "goodsList" */ './index.jsx')
}]