export default [{
    path: '/order/list',
    title: '订单管理',
    exact: true,
    component: import(/* webpackChunkName: "orderList" */ './index.jsx')
}]