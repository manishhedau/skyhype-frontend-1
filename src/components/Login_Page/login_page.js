import './login_page.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import validator from 'validator';
import { Link, useHistory } from 'react-router-dom';
import { initialGlobalStore } from '../../stores/login_reducer';

import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocalUserId } from '../../services/local';

const LoginPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const history = useHistory();
    // const [number, setNumber] = useState("");

    // const handleChange = () => {
    //     const inputDOM = document.getElementById("number-input");
    //     console.log(inputDOM.innerText);
    //     setNumber(inputDOM.innerText);
    //     // setNumber(inputDOM.innerHTML);
    // }

    // const validateNumber = async () => {
    //     const validation = await axios.get("http://localhost:8080/login/").then(res=> res.data);
    //     console.log(validation);

    //     return validation.length > 0  ? true : false;
    // }

    // const validateEmail = async () => {
    //     const validation = await axios.get("http://localhost:8080/login/email").then(res => res.data);
    //     console.log(validation);
    //     return validation.length >0  ? true : false;
    // }

    const validateData = async (inputEmail, inputMobile) => {
        console.log("going to validate login credentials!");
        try {
            console.log("Inside the try block.")
            const validation = await axios.put("http://localhost:8080/login/", { email: inputEmail, mobile_number: inputMobile });
            dispatch(initialGlobalStore(validation.data));
            setLocalUserId(validation.data._id)
            console.log("Status code : ", validation);
            history.push('/user-details');

        }
        catch (error) {
            console.log("Error occuried.");
            if (error.response && error.response.status === 400) {
                // console.log("Error : ", error.response);
                // setError(error.response)
                setError("User Does not Exist");
            }
        }
    }

    const handleSubmit = (event) => {
        setError("");
        event.preventDefault();
        const inputDOM = document.getElementById("number-input");
        const emailDOM = document.getElementById("email-input");
        let currentNumber = inputDOM.value
        let currentEmail = emailDOM.value
        // console.log(validator.isEmail(emailDOM.value));

        currentNumber = currentNumber.split('').filter(num => num !== " ").slice(1, currentNumber.length - 1).join('');
        // console.log(currentNumber);

        if (inputDOM.value === "" || emailDOM.value === "") {
            setError("Please fill up all the fields");
            console.log(error);
        }

        else if (!validator.isMobilePhone(currentNumber) || currentNumber.length !== 10 || !validator.isEmail(currentEmail)) {
            setError("Invalid Input Format");
            console.log(error);
        }

        else {
            validateData(currentEmail, currentNumber);
        }
    }

    return (
        <div className="login-page">

            <div className="login-form">

                <div className="form-content">

                    <h1>Welcome Back</h1>
                    <h4>Login using Mobile Number and Email</h4>

                    <form style={{ height: "60%", width: "70%" }} method="PUT">
                        <input id="email-input" name="email" type="email" placeholder="Email" required />
                        <div className="form-group">
                            <IntlTelInput preferredCountries={['in']} format={true} onlyCountries={["in"]} placeholder="Mobile Number" fieldId="number-input" className="form-control" /><br />
                            {/* <small className="form-text text-muted">You will receive and OTP on your number</small> */}
                        </div>

                        <p>New to SkyHype?<Link to="/signup"> Create an account </Link></p>

                        <div id="error-message">{error}</div>

                        <button className="btn btn-block btn-dark" type="submit" onClick={handleSubmit} style={{ width: "auto", display: "flex" }}>Login</button>


                    </form>

                </div>

            </div>

            <div className="wallpaper-image">
                <h1>SkyHype</h1>
            </div>

        </div>
    );
}

export default LoginPage;