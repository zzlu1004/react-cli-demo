import React from 'react'
import ReactDOM from 'react-dom'
// 在跟组件通过Provider中间件注入store
import { Provider } from 'mobx-react'
import store from './store'

import { ConfigProvider } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN'

import './index.css'
// 重置css
import './assets/css/reset.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// antd样式
import 'antd/dist/antd.less'

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider {...store}>
            <App />
        </Provider>
    </ConfigProvider>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
