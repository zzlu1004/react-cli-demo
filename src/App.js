import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
// // 异步引入组件
import Bundle from '@/component/loadable'

const Dashboard = Bundle(() => import(/* webpackChunkName: "dashboard" */ './component/dashboard'))

function App() {
    return (
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    )
}

export default App