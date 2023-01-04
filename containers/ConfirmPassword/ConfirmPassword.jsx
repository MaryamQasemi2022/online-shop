import React from 'react'

import { Label, Input, TogglePasswordbtn } from '../../components'

const ConfirmPassword = ({
  setConfirmPasswordRef = () => {},
  confirmPasswordRef,
}) => (
  <>
    <Label htmlFor="validationconfirmpassword">تکرار رمز عبور</Label>
    <div className="position-relative ">
      <Input
        cssAdd="background-image:none !important;
      border-color: #c294cc !important;
      &:focus{
        box-shadow:0 0 0 0.25rem rgba(133, 41, 153, 0.25) !important ;
      }
      & ~.password-toggle-btn{
        right:0.625rem !important
      }
    }"
        id="validationconfirmpassword"
        placeholder=" "
        setInputRef={setConfirmPasswordRef}
        type="password"
        name="confirmpasswordUser"
        pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$"
        required
      />
      <TogglePasswordbtn passwordRef={confirmPasswordRef} />
    </div>
  </>
)

export default ConfirmPassword
