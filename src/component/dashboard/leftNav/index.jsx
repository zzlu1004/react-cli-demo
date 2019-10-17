/* eslint-disable react/jsx-handler-names */

import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { Menu, Icon } from 'antd'
import './index.less'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

@inject('nav')
@inject('shop')
@withRouter
@observer
class LeftNav extends PureComponent {
    constructor(props) {
        super(props)
    
    }

    render() {
        // 获取店铺logo
        const { full_logo } = this.props.shop.info
        const { index } = this.props
        const itemNav = this.props.nav.info.map((val, key) => {
            return (
                <Menu.Item key={key}>
                    <Link to={val.path}>
                        <Icon type={val.icon} />
                        <span>{val.title}</span>
                    </Link>
                </Menu.Item>
            )
        })

        // console.log(index)
        return (
            <div className='left-nav'>
                <div className='logo-wrapper flex-h flex-hc flex-vc'>
                    <img src={full_logo} alt='' className='logo' />
                </div>
                <Menu
                    selectedKeys={[index + '']}
                    theme='dark'
                    className='nav-content'
                >
                    {itemNav}
                </Menu>
            </div>
        )
    }
}

// 校验传值类型
LeftNav.propTypes = {
    index: PropTypes.number
}

export default LeftNav
