import React, { PureComponent } from 'react'
import { Layout } from 'antd'
import LeftNav from '@/component/dashboard/leftNav'
import HeaderTop from '@/component/dashboard/header'
import InsideNav from '@/component/dashboard/insideNav'
import NoMatch from '@/component/dashboard/noMatch'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router'
import { getStoreDetail } from '@/api/shop'
import { RouteFromPages } from '@/route'
import { Switch, Route, Redirect } from 'react-router-dom'

const { Header, Content, Sider } = Layout

@inject('shop')
@inject('nav')
@observer
@withRouter
class Dashboard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            navIndex: 0, // 一级导航索引
            insideNav: [], // 二级导航列表
            currentNav: '' // 当前选中导航的pathname
        }
    }

    componentDidMount() {
        // 获取店铺信息
        getStoreDetail().then(res => {
            if (res.status) {
                this.props.shop.setInfo(res.data)
            }
        })
        // 根据路由地址计算nav的激活态，根据当前路由
        this.getNav(this.props.location)
    }

    componentWillReceiveProps(nextProps) {
        // 传入新路由
        this.getNav(nextProps.location)
    }
    
    /**
     * 获取索引
     * @param {Object} location  路由
     */
    getNav(location) {
        const { pathname } = location
        const nav = this.props.nav.info
   
        // 根据路由url地址计算nav的激活态
        const hasIndex = nav.findIndex((v1, i1) => {
            // 是否存在子路由
            if (v1.children) {

                const indexInChild = v1.children.findIndex((v2, i2) => {
                    return v2.path == pathname
                })

                // 获取二级导航数据
                this.setState({
                    insideNav: indexInChild > -1 ? v1.children : []
                })

                if (indexInChild > -1) {
                    return true
                }
            } else {
                // 设置默认二级导航数据
                this.setState({
                    insideNav: [],
                    navIndex: -1
                })
                return v1.path == pathname
            }
        })
        // 返回当前选中的一级导航索引
        if (hasIndex > -1) {
            this.setState({
                navIndex: hasIndex,
                currentNav: pathname
            })
        }
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width='110'>
                    <LeftNav index={this.state.navIndex} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <HeaderTop />
                    </Header>
                    <Content>
                        <Layout style={{ height: '100%' }}>
                            {this.state.insideNav.length > 0 && (
                                <Sider width='110' style={{ background: '#fff', padding: 0 }}>
                                    <InsideNav insideNav={this.state.insideNav} currentNav={this.state.currentNav} />
                                </Sider>
                            )}
                            <Content style={{ background: '#fff', margin: 20, padding: 20 }}>
                                <Switch>
                                    {RouteFromPages}
                                    <Route exact path='/' render={() => <Redirect to='/index' replace />} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Dashboard