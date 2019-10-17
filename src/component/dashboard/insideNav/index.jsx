
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'

class InsideNav extends PureComponent {
    render() {
        const { insideNav } = this.props
        const { currentNav } = this.props
        const itemInsideNav = insideNav.map((val, key) => (
            <li key={key}>
                <Link className={val.path == currentNav ? 'link active' : 'link'} to={val.path}>{val.title}</Link>
            </li>
        ))
        return (
            <ul className='inside-nav'>
                {itemInsideNav}
            </ul>
        )
    }
}

// 校验传值类型
InsideNav.propTypes = {
    insideNav: PropTypes.array,
    currentNav: PropTypes.string
}

export default InsideNav
