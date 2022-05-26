import React from "react";
import { useForm } from "react-hook-form";
import "./LoginSignup.scss";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import LoginSignupLogo from "../../Assets/images/Logo-login-page-logo.svg";

export default function ChangePassword() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <React.Fragment>
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
                                    type="password"
                                    placeholder="Enter new password"
                                />
                                <label htmlFor="floatingInputCustom">Enter new password</label>
                            </Form.Floating>
                            <Form.Floating className="input-container">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="password"
                                    placeholder="Confirm new password"
                                />
                                <label htmlFor="floatingInputCustom">Confirm new password</label>
                            </Form.Floating>

                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <button type="submit" className="white-button">Change Password</button>
                        </form>
                        <p className="redirect-text">Don’t have an account?
                            <a href="/signup"><font> Signup</font></a>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}