import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { Socialmedia, Or, Img, Hyperlink } from '../components'
import LoginForm from '../layout/LoginForm/LoginForm'
import loginImage from '../public/images/Login-pana.png'

const Login = () => (
  <div className="container mt-md-3 shadow p-3">
    <div className="row justify-content-between mb-3 align-items-center">
      <div className="col-7">
        <span
          css={css`
            font-size: 0.8rem;
          `}
        >
          {' '}
          کاربر جدید هستید؟
        </span>
        <Hyperlink href="/signup" title="ثبت نام" />
      </div>
      <div
        className="col-5 "
        css={css`
          text-align: left;
        `}
      >
        {' '}
        <h6 className="text-primary mb-0">online SHOP.</h6>
      </div>
    </div>
    <div
      className="row"
      css={css`
        min-height: 80vh;
      `}
    >
      <div className="   col-md-8 col-lg-6 mx-lg-auto py-3">
        <h4>خوش آمدید</h4>
        <h6 className="text-center mb-2">ورود با</h6>
        <Socialmedia media={[BsGoogle, BsGithub]} />
        <Or />
        <LoginForm />
        <Hyperlink title=" بازگشت به صفحه ی اصلی" href="/" />
      </div>
      <div className=" d-none d-md-block col-md-4  position-relative ">
        <Img src={loginImage} />
      </div>
    </div>
  </div>
)

export default Login
