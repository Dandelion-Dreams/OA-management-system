import react, { useState } from 'react';
import { Button } from 'antd';
import IconMap from 'components/IconMap';
import { loginRule } from '@/utils/rules';

const SmCodeLogin = ({ Input, FormItem, form }) => {
  const [disabled, setDisabled] = useState(true);
  const checkMobile = async () => {
    try {
      const data = await form.validateFields(['mobile']);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };

  const [currentStatus, setCurrentStatus] = useState(true);
  let [currentTime, setCurrentTime] = useState(60);

  const _sendSmCode = () => {
    setCurrentStatus(false);
    setDisabled(true);
    runTime();
  };
  const runTime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        setCurrentTime(60);
        return;
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };

  return (
    <>
      <FormItem name="mobile" rules={loginRule.mobileRules} hasFeedback>
        <Input
          prefix={IconMap.mobileIcon}
          placeholder="请输入手机号码"
          onChange={checkMobile}
        ></Input>
      </FormItem>
      <FormItem name="code" rules={loginRule.codeRules} hasFeedback>
        <Input
          prefix={IconMap.codeIcon}
          placeholder="请输入验证码"
          addonAfter={
            <Button disabled={disabled} onClick={_sendSmCode}>
              {currentStatus ? '获取验证码' : `${currentTime}秒后重新发送`}
            </Button>
          }
        ></Input>
      </FormItem>
    </>
  );
};

export default SmCodeLogin;
