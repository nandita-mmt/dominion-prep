import React from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup } from "react-bootstrap";
import "./LoginSignup.scss";
import LoginSignupLogo from "../../Assets/images/Logo-login-page-logo.svg";

export default function Signup() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputLabel-root':{
            fontFamily:'Montserrat', 
                     
            '& .Mui-focused':{
                borderColor:'#fd4f00',
                fontSize: 12,
                // transform: `scale(2)`,             
            },
        },
        '& .MuiInputBase-input': {
          borderRadius: 24,
          innerHeight: 50,
          position: 'relative',
          backgroundColor: 'transparent',
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '10px 26px 10px 12px',
                  
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            'Montserrat',           
            
          ].join(','),
          '&:focus': {
            borderRadius: 24,
            borderColor: '#58585A',
            boxShadow: 'none',
            fontFamily:'Montserrat',    
          },
        },
      }));

    return (
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
                        <FormControl variant="standard" sx={{  minWidth: 200}}>
                            <InputLabel id="demo-simple-select-standard-label">Identify Yourself</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="identify"
                                input={<BootstrapInput />}
                                
                                MenuProps={{
                                    anchorOrigin: {
                                      vertical: "bottom",
                                      horizontal: "right"
                                    },
                                    transformOrigin: {                                   
                                      horizontal: "right"
                                    },
                                    getContentAnchorEl: null
                                    
                                  }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        {/* <Form.Floating className="input-container select-box">
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
                            </Form.Floating> */}

                        <Form.Floating className="input-container">
                            <Form.Control
                                id="floatingInputCustom1"
                                type="text"
                                placeholder="Enter Name"
                            />
                            <label htmlFor="floatingInputCustom">Enter Name</label>
                        </Form.Floating>
                        <Form.Floating className="input-container">
                            <Form.Control
                                id="floatingInputCustom2"
                                type="email"
                                placeholder="Enter Email Address"
                            />
                            <label htmlFor="floatingInputCustom">Enter Email Address</label>
                        </Form.Floating>
                        <Form.Floating className="input-container">
                            <Form.Control
                                id="floatingInputCustom3"
                                type="password"
                                placeholder="Enter Password"
                            />
                            <label htmlFor="floatingInputCustom">Enter Password</label>
                        </Form.Floating>
                        <Form.Floating className="input-container">
                            <Form.Control
                                id="floatingInputCustom4"
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
    )
}