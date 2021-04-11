import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import {observer} from "mobx-react";
import { CheckCircleOutlined } from '@ant-design/icons';



@observer



class list extends Component {


    constructor(props) {
        super(props);
        console.log(this.props.data.Title)
    }

    state={
        data:[
            {
                title: this.props.data.Title
            }
        ]
    }

    render() {
        return (
            <>
               {
                    <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<CheckCircleOutlined />}
                        title={item.title}
                        // description={item.Date}
                        />
                    </List.Item>
                    )}
                />
                // this.props.data.Title
               }
               
            </>
        );
    }
}

export default list;

