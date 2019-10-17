export default [{
    path: '/order/judge',
    title: '评价管理',
    exact: true,
    component: import(/* webpackChunkName: "judge" */ './index.jsx')
}]