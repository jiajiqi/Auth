import React from 'react';
import {Link} from'react-router-dom';
import {Layout,Row, Col,Input,Carousel,Icon,Button} from 'antd';

var HomeCss= require('./homepage.css')
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className={HomeCss.headline}>
                    <Row type="flex" justify="space-around">
                    <Col span={24}></Col>
                    </Row>
                </div>

                <div className={HomeCss.firstline}>
                <Row type="flex" justify="space-around">
                    <Col span={3}></Col>
                    <Col span={2}>
                        名称
                    </Col>
                    {/* <Col span={7}>
                    <Input.Search placeholder="搜索"
                     onSearch={value => console.log(value)} style={{ width: 250 }}/>
                    </Col>
                    <Col span={1}>
                        <Link className={HomeCss.f}>首页</Link>
                        </Col>
                    <Col span={2}>
                        <Link className={HomeCss.f}>我们的服务</Link>
                    </Col>
                    <Col span={2}>
                        <Link className={HomeCss.f}>新的动态</Link>
                        </Col>
                    <Col span={2}>
                        <Link className={HomeCss.f}>联系我们</Link>
                    </Col> */}
                    {/* <Col span={1}>
                    <Link className={HomeCss.f}><Button type="primary">登录</Button></Link>
                    </Col>
                    <Col span={1}>
                    <p>|</p>
                    </Col>
                    <Col span={1}>
                    <Link className={HomeCss.f}><Button type="primary">注册</Button></Link>
                    </Col> */}
                </Row>
                </div>
                <div className={HomeCss.secondline}>
                    <Row>
                    <Col span={24}>
                    <Carousel autoplay className={HomeCss.l}>
                        <div>
                           <img src="/taylor.jpg" width={'100%'} height={380}></img>
                        </div>
                        <div>
                           <img src="/taylor.jpg" width={'100%'} height={380}></img>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    </Col>
                    </Row>
                </div>
                <div className={HomeCss.lastline}>
                    <Row>
                    <Col span={2}></Col>
                    <Col span={5}>
                    <div className={HomeCss.phone}>
                            <Icon type="home" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >首页</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomeCss.phone}>
                            <Icon type="user" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >个人主页</p>
                        </div>
                    </Col>
                    <Col span={5}>
                    <div className={HomeCss.phone}>
                            <Icon type="sketch" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >会员中心</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomeCss.phone}>
                            <Icon type="phone" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >在线客服</p>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                    </Row>
                </div>
                <div className={HomeCss.addline}>
                    <Row>
                    <Col span={24}>附加</Col>
                    </Row>
                </div>
            </div>
        )
    }
}