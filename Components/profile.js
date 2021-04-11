import React, { Component } from 'react';
import { List, Avatar, Divider } from 'antd';

class profile extends Component {

    state={
        name: 'Arash'
    }


    render() {
        return (
            <>
                <List itemLayout="horizontal">
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={this.state.name}
                        description="Good Morning"
                        />
                    </List.Item>
                </List>
            </>
        );
    }
}

export default profile;