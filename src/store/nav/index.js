import { observable, action } from 'mobx'

class Nav {
    @observable info = [
        {
            title: '首页',
            icon: 'home',
            path: '/index'
        }, {
            title: '商品',
            icon: 'appstore',
            path: '/goods/list',
            children: [
                {
                    title: '商品管理',
                    path: '/goods/list'
                }, {
                    title: '商品分组',
                    path: '/goods/group'
                }
            ]
        }, {
            title: '订单',
            icon: 'solution',
            path: '/order/list',
            children: [
                {
                    title: '订单管理',
                    path: '/order/list'
                }, {
                    title: '评价管理',
                    path: '/order/judge'
                }
            ]
        }
    ]

    @action setInfo(v) {
        this.info = v
    }
}

export default new Nav()