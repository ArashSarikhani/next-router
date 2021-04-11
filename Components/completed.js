import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons';



class completed extends Component {
    render() {
        return (
            <>
              Completed  
              <span style={{float:"right"}}><DownOutlined /></span>
            </>
        );
    }
}

export default completed;