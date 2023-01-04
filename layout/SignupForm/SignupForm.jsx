import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Button } from '../../components'
import { InputEmail, InputPassword, ConfirmPassword } from '../../containers'

const SignupForm = () => {
  const router = useRouter()
  const [emailRef, setEmailRef] = useState(null)
  const [passwordRef, setPasswordRef] = useState(null)
  const [confirmPasswordRef, setConfirmPasswordRef] = useState(null)
  const [formData, setFormData] = useState({})
  const [sucess, setSucess] = useState(' ')
  const submitForm = (event) => {
    if (
      !event.target.checkValidity() ||
      confirmPasswordRef.current.value !== passwordRef.current.value
    ) {
      event.preventDefault()
      event.stopPropagation()
      setSucess('no')
    }
    if (
      event.target.checkValidity() &&
      passwordRef.current.value === confirmPasswordRef.current.value
    ) {
      event.preventDefault()
      setFormData({
        password: passwordRef.current.value,
        confirmPasswordRef: confirmPasswordRef.current.value,
        email: emailRef.current.value,
      })
      setSucess('yes')

      setTimeout(() => {
        router.push('/')
      }, 2000)
    }

    event.target.classList.add('was-validated')
  }
  return (
    <form
      method="post"
      onSubmit={submitForm}
      className="row g-3 needs-validation justify-content-center"
      noValidate
    >
      <div className="col-sm-10 col-lg-8">
        <InputEmail setEmailRef={setEmailRef} />
      </div>
      <div className=" col-sm-10 col-lg-8 ">
        <InputPassword
          setPasswordRef={setPasswordRef}
          passwordRef={passwordRef}
          pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$"
        />
        <ul>
          <li>پسورد حداقل 8 رقمی باشد</li>
          <li>فاصله نداشته باشه</li>
          <li>حداقل یک عددو حرف بزرگ و حرف کوچک داشه باشد</li>
          <li> شامل حداقل یک کارکتر خاص مانند !@#$%^&* بجز (_) باشد</li>
        </ul>
        <ConfirmPassword
          setConfirmPasswordRef={setConfirmPasswordRef}
          confirmPasswordRef={confirmPasswordRef}
        />
        {sucess === 'no' && (
          <div
            css={css`
              width: 100%;
              margin-top: 0.25rem;
              font-size: 0.875em;
              color: #dc3545;
            `}
          >
            رمز عبور با یکدیگر مطابقت ندارند یا کلمه ی عبور اشتباه می باشد
          </div>
        )}
        {sucess === 'yes' && (
          <div
            css={css`
              width: 100%;
              margin-top: 0.25rem;
              font-size: 0.875em;
              color: green;
            `}
          >
            موفق شدی!
          </div>
        )}
      </div>
      <div className="col-sm-10 col-lg-8">
        <Button>ارسال</Button>
      </div>
    </form>
  )
}
export default SignupForm
