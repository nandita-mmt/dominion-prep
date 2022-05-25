import React from "react";
import { useForm } from "react-hook-form";
import "./LoginSignup.scss";
import LoginSignupLogo from "../../Assets/images/Logo-login-page-logo.svg";

export default function ResetPassword() {
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
                            <img src={LoginSignupLogo} alt="" />
                        </div>
                    </div>
                    <div className="right-div">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="password-container input-container">
                                <input type="password" className="form-control" placeholder="Enter new password"  {...register("password")} />
                                <label htmlFor="email">Enter new password</label>
                            </div>
                            <div className="password-container input-container">
                                <input type="password" className="form-control" placeholder="Confirm new password"  {...register("password")} />
                                <label htmlFor="email">Confirm new password</label>
                            </div>
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