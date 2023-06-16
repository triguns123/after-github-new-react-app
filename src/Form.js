import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';
const Form = () => {
    const captchaRef = useRef(null)
    // function onChange(value) {
    //     console.log("Captcha value:", value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
    }

    return (
        <form onSubmit={handleSubmit} >
            <div>Sattwik Contact Form</div>
            <label htmlFor="name">Sattwik Name</label>
            <input type="text" id="name" className="input" />
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
            />
            {/* <reCAPTCHA
                ref={recaptchaRef}
                // size="invisible"
                sitekey="6LeH4nwmAAAAAGFGnI-82Cz5nenenjZ-YAVH_t-Z"
                onChange={onChange}
            /> */}
            <button>Submit</button>
        </form>
    )
}

export default Form