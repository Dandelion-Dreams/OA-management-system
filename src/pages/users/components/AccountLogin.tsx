import react from 'react';
import IconMap from 'components/IconMap';

const AccountLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem>
        <Input prefix={IconMap.userIcon} placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem>
        <Input.Password
          prefix={IconMap.passwordIcon}
          placeholder="请输入密码"
        ></Input.Password>
      </FormItem>
    </>
  );
};

export default AccountLogin;
