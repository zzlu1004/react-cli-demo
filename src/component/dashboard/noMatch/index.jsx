import React, { PureComponent } from 'react'
import Img from '@/assets/images/logo.png'
import './index.less'
class NoMatch extends PureComponent {

    render() {
        return (
            <div className='noMatch flex-v flex-vc flex-hc'>
                <img className='img' src={Img} alt='' />
                <div className='tips'>您访问的页面不在地球上，请回火星吧~</div>
            </div>
        )
    }
}

export default NoMatch