import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '@/components/BreadcrumbCustom';
import Basic from './Basic';
import AutoPlay from './AutoPlay';
import Custom from './Custom';


export default class Banners extends React.Component{
    render(){
        return(
            <div className="gutter-example button-demo">
                 <BreadcrumbCustom first="UI" second="轮播图"/>
                 <Row gutter={16}>
                      <Col className="gutter-row" md={24}>
                           <div className="gutter-box">
                               <Card title="基本用法" bordered={false}>
                                     <Basic />
                               </Card>
                           </div>
                      </Col>
                      <Col className="gutter-row" md={24}>
                           <div className="gutter-box">
                                <Card title="自动轮播-默认5秒" bordered={false}>
                                     <AutoPlay />
                                </Card>
                           </div>
                      </Col>
                      <Col className="gutter-row" md={24}>
                           <div className="gutter-box">
                                <Card title="自定义左右箭头与缩略图" bordered={false}>
                                     <Custom />
                                </Card>
                           </div>
                      </Col>
                 </Row>
            </div>
        );
    }
}