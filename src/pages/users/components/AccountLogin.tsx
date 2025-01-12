import react from 'react';
import IconMap from 'components/IconMap';
import { loginRule } from '@/utils/rules';

const AccountLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem name="accountName" rules={loginRule.userRules} hasFeedback>
        <Input prefix={IconMap.userIcon} placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem name="password" rules={loginRule.passwordRules} hasFeedback>
        <Input.Password
          prefix={IconMap.passwordIcon}
          placeholder="请输入密码"
        ></Input.Password>
      </FormItem>
    </>
  );
};

export default AccountLogin;
