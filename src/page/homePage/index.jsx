import React, { PureComponent } from 'react'
import { Button } from 'antd'
import './index.less'
class HomePage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            imgList: []
        }
    }

    render() {
        return (
            <div className='home-page'>
                <div>首页</div>
                <div>
                    <Button type='primary'>Primary</Button>
                    <Button>Default</Button>
                    <Button type='dashed'>Dashed</Button>
                    <Button type='danger'>Danger</Button>
                    <Button type='link'>Link</Button>
                </div>
            </div>
        )
    }
}

export default HomePage