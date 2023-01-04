import React from 'react'

import { Label, Input, TogglePasswordbtn } from '../../components'

const InputPassword = ({
  setPasswordRef = () => {},
  passwordRef,
  pattern = '.{1,}',
}) => (
  <>
    <Label htmlFor="validationpassword"> رمز عبور</Label>
    <div className="position-relative password-toggle">
      <Input
        id="validationpassword"
        placeholder=" "
        setInputRef={setPasswordRef}
        type="password"
        name="passwordUser"
        pattern={pattern}
        required
      />
      <TogglePasswordbtn passwordRef={passwordRef} />
    </div>
  </>
)

export default InputPassword
