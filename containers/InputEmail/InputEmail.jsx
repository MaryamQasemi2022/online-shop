import React from 'react'
import { Input, Label } from '../../components'

const InputEmail = ({ setEmailRef = () => {} }) => (
  <>
    <Label htmlFor="validationemail"> ایمیل</Label>
    <Input
      setInputRef={setEmailRef}
      id="validationemail"
      type="email"
      name="emailUser"
      placeholder=" "
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    />
    <div className="invalid-feedback">ایمیل صحیح وارد کنید</div>
  </>
)

export default InputEmail
