import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

// homepage main route 
// import Homepage from "./component/Homepage";

// Login and signup page 
import LoginPage from "./Pages/LoginSignup/Login";
import SignupPage from "./Pages/LoginSignup/Signup";
import ResetPasswordPage from "./Pages/LoginSignup/ResetPassword";
import ChangePasswordPage from "./Pages/LoginSignup/ChangePassword";

// Dashboard screens 
import DashboardLayout from "./Components/DashboardLayout/DashboardLayout";
import ParentApplicationForm from "./Pages/ParentApplicationForm/ParentApplicationFrom";
import ChildApplicationForm from "./Pages/ChildApplicationForm/ChildApplicationForm";

ReactDOM.render(
	<React.Fragment>
		<BrowserRouter >
			{/* <App />*/}
			<Routes>
				{/* user unprotected routes  */}
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/reset-password' element={<ResetPasswordPage />} />
				<Route path='/change-password' element={<ChangePasswordPage />} />

				{/* user protected routes  */}
				<Route path='/dashboard' element={<DashboardLayout />}>
					<Route path='parent-application-form' element={<ParentApplicationForm />} />
					<Route path='add-child-application-form' element={<ChildApplicationForm />} />
				</Route>


			</Routes>


		</BrowserRouter>
	</React.Fragment>,
	document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
