import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Hyperlink } from '../../components'
import { InputEmail, InputPassword } from '../../containers'

const LoginForm = () => {
  const router = useRouter()
  const [emailRef, setEmailRef] = useState(null)
  const [passwordRef, setPasswordRef] = useState(null)
  const [formData, setFormData] = useState({})
  // console.log(passwordRef, emailRef)

  const submitForm = (event) => {
    if (!event.target.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    if (event.target.checkValidity()) {
      event.preventDefault()
      setFormData({
        password: passwordRef.current.value,
        email: emailRef.current.value,
      })
      router.push('/')
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
      <div className=" col-sm-10 col-lg-8  ">
        <InputPassword
          setPasswordRef={setPasswordRef}
          passwordRef={passwordRef}
        />
        <Hyperlink title="فراموشی رمز عبور" href="/" />
        <br />
      </div>
      <div className="col-sm-10 col-lg-8">
        <Button>ارسال</Button>
      </div>
    </form>
  )
}
export default LoginForm
