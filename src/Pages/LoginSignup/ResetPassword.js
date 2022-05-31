import React from "react";
import { useForm } from "react-hook-form";
import "./LoginSignup.scss";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import LoginSignupLogo from "../../Assets/images/Logo-login-page-logo.svg";

export default function ResetPassword() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
            <div className="LoginSignupBody">
                <div className="LoginSignupContainer">
                    <div className="left-div">
                        <h1>DOMINION PREP</h1>
                        <h2>Reset Password</h2>
                        <div className="login-signgup-logo-container">
                            <img className="img-fluid" src={LoginSignupLogo} alt="" />
                        </div>
                    </div>
                    <div className="right-div">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Floating className="input-container">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="Enter Email Address"
                                />
                                <label htmlFor="floatingInputCustom">Enter Email Address</label>
                            </Form.Floating>                           

                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <button type="submit" className="white-button" href="/change-password">Send link</button>
                        </form>
                        <p className="redirect-text">Don’t have an account?
                            <a href="/signup"><font> Signup</font></a>
                        </p>
                    </div>
                </div>
            </div>        
    )
}