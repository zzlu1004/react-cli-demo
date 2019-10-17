import fetch from '@/utils/fetch'

/**
 * 获取店铺详情
 */
export function getStoreDetail() {
    return fetch({
        url: '/seller/store/detail'
    })
}

/**
 * 切换门店
 */
export function switchShop() {
    return fetch({
        url: '/seller/store/switch-shop',
        method: 'GET'
    })
}

/**
 * 退出
 */
export function userLogout() {
    return fetch({
        url: '/seller/user/logout',
        method: 'POST'
    })
}