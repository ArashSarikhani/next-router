import React, { Component } from 'react';
import { Row, Col, Calendar } from 'antd';
import 'antd/dist/antd.css'
import Profile from '../Components/profile'
import '../styles/index.css'
import Taskbtn from '../Presentor/taskbtn'
import Completed from '../Components/completed'
import Header from '../Components/header'

class index extends Component {
  render() {
    return (
      <>
          <Row gutter={[0, 16]}>
            <Col span={6}>
              <div className="left_slider">
                <Row gutter={[24, 48]}>
                  <Col span={24}>
                    <div className='profile'>
                      <Profile/> 
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className='task-box'>
                      <Taskbtn/>
                    </div>
                  </Col>       
                  <Col span={24}>
                    <div className='Comleted-task'>
                      <Completed/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={18}>
              <div className='Header'>
                <Header/>
              </div>
              <div className='Calendar'>
                <Calendar />
              </div> 
            </Col>
          </Row>
      </>
    );
  }
}

export default index;