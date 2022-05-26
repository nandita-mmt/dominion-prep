import React from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup } from "react-bootstrap";
import "./LoginSignup.scss";
import LoginSignupLogo from "../../Assets/images/Logo-login-page-logo.svg";

export default function Signup() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <React.Fragment>
            <div className="LoginSignupBody">
                <div className="LoginSignupContainer">
                    <div className="left-div">
                        <h1>DOMINION PREP</h1>
                        <h2>Signup</h2>
                        <div className="login-signgup-logo-container">
                            <img className="img-fluid" src={LoginSignupLogo} alt="" />
                        </div>
                    </div>
                    <div className="right-div">
                        <form onSubmit={handleSubmit(onSubmit)}>                          
                             <Form.Floating className="input-container select-box">
                                <Form.Control
                                    id="dropdownMenuButton1"
                                    type="select"
                                    placeholder="Identify Yourself"
                                    className="dropdown-toggle"
                                />
                                <label htmlFor="floatingInputCustom">Identify Yourself</label>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </Form.Floating>
                            {/* <div className="input-container select-box">
                                <select className="form-control" placeholder="Identify Yourself" {...register("dropdown")}>
                                    <option value="disabled selected hidden">Identify Yourself</option>
                                    <option value="parent ">parent </option>
                                    <option value=" teacher "> teacher </option>
                                    <option value=" volunteer "> volunteer </option>
                                    <option value=" intern"> intern</option>
                                </select>
                                <label htmlFor="email">Identify Yourself</label>
                            </div> */}
                            <Form.Floating className="input-container">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="Enter Name"
                                />
                                <label htmlFor="floatingInputCustom">Enter Name</label>
                            </Form.Floating>
                            <Form.Floating className="input-container">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="Enter Email Address"
                                />
                                <label htmlFor="floatingInputCustom">Enter Email Address</label>
                            </Form.Floating>
                            <Form.Floating className="input-container">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="password"
                                    placeholder="Enter Password"
                                />
                                <label htmlFor="floatingInputCustom">Enter Password</label>
                            </Form.Floating>
                            <Form.Floating className="input-container">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                <label htmlFor="floatingInputCustom">Confirm Password</label>
                            </Form.Floating>

                            {errors.exampleRequired && <span>This field is required</span>}
                            <button type="submit" className="white-button">Signup</button>
                        </form>
                        <p className="redirect-text">You have an account?
                            <a href="/login"><font>Login</font></a>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}