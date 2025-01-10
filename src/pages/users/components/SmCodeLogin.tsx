import react from 'react';
import { Button } from 'antd';
import IconMap from 'components/IconMap';

const SmCodeLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem>
        <Input prefix={IconMap.mobileIcon} placeholder="请输入手机号码"></Input>
      </FormItem>
      <FormItem>
        <Input
          prefix={IconMap.codeIcon}
          placeholder="请输入验证码"
          addonAfter={<Button>获取验证码</Button>}
        ></Input>
      </FormItem>
    </>
  );
};

export default SmCodeLogin;
