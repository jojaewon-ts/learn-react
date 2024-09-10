import React from 'react'
import InputField from "../component/InputField";
import PasswordField from "../component/PasswordField";
import LoginButton from "../component/LoginButton";
import SocialButton from "../component/SocialButton";

const Login = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>로그인</h1>
      <InputField />
      <PasswordField />
      <LoginButton />
      <p>계정이 없으신가요? <a href="#">가입하기</a></p>
      <p>or</p>
      <SocialButton />
    </div>
  )
}

export default Login
