import ReCAPTCHA from "react-google-recaptcha";
// import React, { useRef } from 'react';
import React from 'react';
const Form = () => {
    const recaptchaRef = React.createRef();
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <form onSubmit={() => { recaptchaRef.current.execute(); }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="input" />
            <ReCAPTCHA
                ref={recaptchaRef}
                // size="invisible"
                sitekey="6LeH4nwmAAAAAGFGnI-82Cz5nenenjZ-YAVH_t-Z"
                onChange={onChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form