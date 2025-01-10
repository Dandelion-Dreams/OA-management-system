import react, { useState } from 'react';
import AccountLogin from './components/AccountLogin';
import SmCodeLogin from './components/SmCodeLogin';
import './css/login.less';

import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
const FormItem = Form.Item;

import IconMap from 'components/IconMap';
import logoImg from 'common/imgs/logo.svg';

const login = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(0);

  const submitUserInfo = (data) => {};

  const ComponentSelector = (props) =>
    !type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;
  return (
    <div className="form">
      <div className="login">
        <img src={logoImg} alt="" />
        <span>人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {ComponentSelector({ form, FormItem, Input })}
      </Form>
      <Row>
        <Button block={true} type="primary">
          登陆
        </Button>
      </Row>
      <Row className="ft-12">
        <Col span={6}>忘记密码？</Col>
        <Col
          span={18}
          className="align-right"
          onClick={() => setType(!type ? 1 : 0)}
        >
          {!type ? '使用手机号进行登录' : '使用账户和密码进行登录'}
          {IconMap.arrRowRight}
        </Col>
      </Row>
    </div>
  );
};

export default login;
