import React, { Component } from 'react';
import { Row, Col, Typography, Button, Drawer } from 'antd';
import '../styles/index.css'
import { withRouter } from 'next/router'


const { Text, Link } = Typography;
// const router = useRouter()


class index extends React.Component {

  state = { visible: false };

  constructor(props){
    super (props)
  }

  ShowDeatail = (e) => {
    e.preventDefault()
    this.props.router.push("./showDetail")
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col span={20} offset={2} style={{marginTop:'20px'}}>
            <h1>متن از پیش تعیین شده</h1>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <div onClick={this.ShowDeatail} className='box'>
                    <h3>لزوم ایجاد محتوای خوب</h3>
                    <Text type="secondary">۲۵ اردبیهشت ۹۸</Text>
                    <p style={{fontSize: "11px"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ</p>
                  </div>
                </Col>
                <Col span={6}>
                  <div onClick={this.ShowDeatail} className='box'>
                    <h3>لزوم ایجاد محتوای خوب</h3>
                    <Text type="secondary">۲۵ اردبیهشت ۹۸</Text>
                    <p style={{fontSize: "11px"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ</p>
                  </div>
                </Col>
                <Col span={6}>
                  <div onClick={this.ShowDeatail} className='box'>
                    <h3>لزوم ایجاد محتوای خوب</h3>
                    <Text type="secondary">۲۵ اردبیهشت ۹۸</Text>
                    <p style={{fontSize: "11px"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ</p>
                  </div>
                </Col>
                <Col span={6}>
                  <div onClick={this.ShowDeatail} className='box'>
                    <h3>لزوم ایجاد محتوای خوب</h3>
                    <Text type="secondary">۲۵ اردبیهشت ۹۸</Text>
                    <p style={{fontSize: "11px"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ</p>
                  </div>
                </Col>
                <Button type="primary" onClick={this.showDrawer}>
                    ایجاد
                </Button>
                <Drawer
                title="ایجاد متن جدید"
                width={720}
                placement="left"
                onClose={this.onClose}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                    style={{
                        textAlign: 'left',
                    }}
                    >
                    <Button onClick={this.onClose} style={{ marginLeft: 8 }}>
                        بازگشت
                    </Button>
                        <Button onClick={this.onSubmit} type="primary">
                        ثبت
                       </Button>
                    
                    </div>
                }
                />

                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
              </Row>
          </Col>
        </Row>

 
      </>
    );
  }
}

export default withRouter(index);