export default [{
    path: '/index',
    title: '首页',
    exact: true,
    component: import(/* webpackChunkName: "homePage" */ './index.jsx')
}]