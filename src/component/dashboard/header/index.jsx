/* eslint-disable react/jsx-handler-names */

import React, { PureComponent } from 'react'
import './index.less'
import { Menu, Dropdown, Icon, Modal } from 'antd'
import { observer, inject } from 'mobx-react'
import { userLogout, switchShop } from '@/api/shop'
const { confirm } = Modal

@inject('shop')
@observer
class HeaderTop extends PureComponent {

    showConfirm = key => {
        confirm({
            title: '是否确认此操作?',
            onOk() {
                // 切换店铺
                if (key == 1) {
                    switchShop().then(res => {
                        if (res.status) {
                            window.open(res.data.jump_to_shop_list, '_self')
                        }
                    })
                } else {
                    // 退出登录
                    userLogout().then(res => {
                        if (res.status) {
                            window.open(res.data.redirect_url, '_self')
                        }
                    })
                }
            },
            onCancel() {
                console.log('Cancel')
            }
        })
    }

    // 添加切换
    onClick = ({ key }) => {
        if (key == 2) {
            // 帮助中心
            window.open('https://help.qmai.cn/')
        } else {
            this.showConfirm(key)
        }
    }
    
    render() {
        const { name } = this.props.shop.info
        // 切换列表
        const menu = (
            <Menu onClick={this.onClick}>
                <Menu.Item key='1'>切换店铺</Menu.Item>
                <Menu.Item key='2'>帮助中心</Menu.Item>
                <Menu.Item key='3'>退出登录</Menu.Item>
            </Menu>
        )
        return (
            <div className='header flex-h flex-he'>
                <Dropdown overlay={menu}>
                    <div className='admin' href='#'>
                        {name} <Icon type='caret-down' />
                    </div>
                </Dropdown>
            </div>
        )
    }
}

export default HeaderTop