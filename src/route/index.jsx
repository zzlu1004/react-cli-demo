import React from 'react'
import { Route } from 'react-router-dom'
import bundle from '@/component/loadable'
import routes from '../page'

// 重组路由数据结构
const RouteFromPages = routes.map((route, index) => (
    <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={bundle(() => route.component)}
    />
))

export { RouteFromPages }

// export default function() {
//     return routes.map((route, index) => (
//         <Route
//             key={index}
//             exact={route.exact}
//             path={route.path}
//             component={bundle(() => route.component)}
//         />
//     ))
// }