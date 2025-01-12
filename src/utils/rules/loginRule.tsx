export const loginRule = {
  userRules: [
    { required: true, message: '用户名不能为空' },
    { min: 6, message: '用户名长度不正确' },
    { max: 12, message: '用户名长度不正确' },
  ],
  passwordRules: [
    { required: true, message: '密码不能为空' },
    { min: 6, message: '密码长度不正确' },
    { max: 12, message: '密码长度不正确' },
  ],
  mobileRules: [
    {
      validator: (rule, val) => {
        const mobileReg = /^1[3-8]\d{9}$/;
        switch (true) {
          case !Boolean(val):
            return Promise.reject('请输入正确的手机号');
          case !mobileReg.test(val):
            return Promise.reject('请输入正确的手机号');
          default:
            return Promise.resolve();
        }
      },
    },
  ],
  codeRules: [
    { required: true, message: '验证码不能为空' },
    { min: 6, message: '验证码长度不正确' },
    { max: 6, message: '验证码长度不正确' },
  ],
};
