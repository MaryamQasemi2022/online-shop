import React from 'react'

const InputCheckbox = () => {
  ;<div className="form-check">
    <label className="form-check-label " htmlFor="invalidCheck">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="invalidCheck"
        required
      />
      پذیرفتن قوانین و شرایط سایت
      <div className="invalid-feedback">You must agree before submitting.</div>
    </label>
  </div>
}

export default InputCheckbox
