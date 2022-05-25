import React from "react";
import { useForm } from "react-hook-form";
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
                            <img src={LoginSignupLogo} alt="" />
                        </div>
                    </div>
                    <div className="right-div">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-container">
                                <input type="email" className="form-control" placeholder="Identify Yourself"  {...register("identify")} />
                                <label htmlFor="email">Identify Yourself</label>
                            </div>
                            <div className="input-container">
                                <input type="text" className="form-control" placeholder="Enter Name"  {...register("name")} />
                                <label htmlFor="email">Enter Name</label>
                            </div>
                            <div className="input-container">
                                <input type="email" className="form-control" placeholder="Enter Email Address"  {...register("email")} />
                                <label htmlFor="email">Enter Email Address</label>
                            </div>
                            <div className="password-container input-container">
                                <input type="password" className="form-control" placeholder="Enter Password"  {...register("password")} />
                                <label htmlFor="email">Enter Password</label>
                            </div>
                            <div className="password-container input-container">
                                <input type="password" className="form-control" placeholder="Confirm Password"  {...register("password")} />
                                <label htmlFor="email">Confirm Password</label>
                            </div>

                            {/* errors will return when field validation fails  */}
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