import '../styles/globals.css'
import App from 'next/app'
import "../styles/antd.less";
import { ConfigProvider } from 'antd';



class MyApp extends App {

  render(){
    const { Component, pageProps } = this.props;
    return   <ConfigProvider direction="rtl">
                  <Component {...pageProps} />
            </ConfigProvider>


  }
}

export default MyApp
