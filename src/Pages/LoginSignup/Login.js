import React from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./LoginSignup.scss";
import LoginSignupLogo from "../../Assets/images/Logo-login-page-logo.svg";

export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
            <div className="LoginSignupBody">
                <div className="LoginSignupContainer">
                    <div className="left-div">
                        <h1>DOMINION PREP</h1>
                        <h2>Login</h2>
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
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                            <Form.Floating className="password-container input-container">
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="password"
                                    placeholder="Enter Password"
                                />
                                <label htmlFor="floatingPasswordCustom">Enter Password</label>
                                <a href="/reset-password"><span className="reset-password-link">Reset Password</span></a>
                            </Form.Floating>                             
                            <div className="input-group">
                                <input type="checkbox" name="selectTc" {...register('selectTc')} id="selectTc"
                                />
                                <p>Remember me</p>
                            </div>

                            {errors.exampleRequired && <span>This field is required</span>}
                            <button type="submit" className="white-button">Login</button>
                        </form>
                        <p className="redirect-text">Don’t have an account?
                            <a href="/signup"><font> Signup</font></a>
                        </p>
                    </div>
                </div>
            </div>
       
    )
}