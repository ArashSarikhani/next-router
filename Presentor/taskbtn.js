import React, { Component } from 'react';
import { Button, Modal, Form, Input, Checkbox, DatePicker } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import TaskList from '../Model/TaskModel'
import {observer} from "mobx-react";
import List from '../Components/list'



@observer

class taskbtn extends Component {


    Store = new TaskList();

    state = {
        visible: false,
        layout: {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        },
        tailLayout: {
            wrapperCol: { offset: 20, span: 16 },
        }
  
    };


    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    onFinish = (values) => {
        // console.log('Success:', values);
        this.setState({
            visible: false
        })
        this.Store.TaskDetail.Title = values.Title
        this.Store.Flag = 1
        // console.log(this.Store.TaskDetail.Title)
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    changeDate = (date, dateString) => {
        this.Store.Date= dateString
        // console.log(this.Store.Date)
        // console.log(this.Store.Date);
    }

     

    

    render() {
        return (
            <>
                <Button style={{boxShadow: '10px 10px 25px #ccc'}} type="primary" shape="round" icon={<PlusCircleOutlined />} size="large" onClick={this.showModal}>
                    Add a Task
                </Button>
                <Modal title="Add a Task" visible={this.state.visible} footer={null}>
                    <Form
                    {...this.state.layout}
                    layout= "vertical"
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Title"
                            name="Title"
                            rules={[{ required: true, message: 'Please input your Title!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Date"
                            name="Date"
                            rules={[{ required: true, message: 'Please input your Date!' }]}
                        >
                            <DatePicker onChange={this.changeDate}/>
                        </Form.Item>
                        <Form.Item {...this.state.tailLayout}>
                            <Button  type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <div className='list'>
                    {
                        this.Store.Flag === 1 &&
                        <List data={this.Store.TaskDetail}/>
                    }
                   
                </div>
                
            </>
        );
    }
}

export default taskbtn;