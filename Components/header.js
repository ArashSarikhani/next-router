import React, { Component } from 'react';
import { Typography, Row, Col } from 'antd';
import '../styles/search.css'
import { SearchOutlined } from '@ant-design/icons';


const { Title, Text } = Typography;

class header extends Component {

    state= {
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }


    render() {
        const d = new Date();
        return (
            <>
                <Row>
                    <Col span={8}>
                        {
                           <Title level={3}>{this.state.monthNames[d.getMonth()]},{d.getFullYear()}</Title>
                        }
                    </Col>
                    <Col span={8} style={{display:"flex", justifyContent:'center', textAlign:'center'}}>
                        <div>Today<br /> <Text type="secondary">{this.state.days[d.getDay()]},{d.getDate()}</Text></div>
                        
                    </Col>
                    <Col span={8}>
                        <div className='search-box'>
                            <div className='search'>
                                Search
                                <span style={{float:"left", paddingRight: "5px"}}><SearchOutlined /></span>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </>
        );
    }
}

export default header;