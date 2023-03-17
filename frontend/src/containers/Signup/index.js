import React from 'react';
import './signup.scss';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function Signup(){
    const baseURL = 'https://litbrary.pythonanywhere.com/user/';
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const MySwal = withReactContent(Swal);
    const handleClick = () => {
        if (password !== confirmPassword){
            MySwal.fire({
                title: 'Error!',
                text: 'Password and Confirm Password must be the same!',
                icon: 'error',
                confirmButtonText: 'Okay',
            })
        } else {
            axios.post(baseURL, {
                "username": username,
                "email": email,
                "password": password,
              })
              .then(function () {
                MySwal.fire({
                    title: 'Success!',
                    text: 'You have successfuly created new account!',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                    customClass:{
                        fontFamily: 'DM Sans',
                    }
                  }).then(function () {
                    // Redirect the user
                    window.location.href = "/";
                  });
              })
              .catch(function () {
                MySwal.fire({
                    title: 'Error!',
                    text: 'An error has occured! The username and/or email might already been used',
                    icon: 'error',
                    confirmButtonText: 'Okay',
                })
              });
        }
        
    }
    return (
        <div className="signup">
            <div className="signup__title">Library</div>
            <div className="signup__body">
                <div className="signup__body__title">Sign Up</div>
                <div className="signup__body__form">
                    <div className="signup__body__form__text">Username</div>
                    <input type="text" className="signup__body__form__input" name="username" id="username" onInput={e => setUsername(e.target.value)}/>

                    <div className="signup__body__form__text">Email</div>
                    <input type="text" className="signup__body__form__input" name="email" id="email" onInput={e => setEmail(e.target.value)}/>

                    <div className="signup__body__form__text">Password</div>
                    <input type="password" className="signup__body__form__input" name="password" id="password" onInput={e => setPassword(e.target.value)}/>

                    <div className="signup__body__form__text">Confirm Password</div>
                    <input type="password" className="signup__body__form__input" name="confirm_password" id="confirm_password" onInput={e => setConfirmPassword(e.target.value)}/>
                    
                    <div className="signup__body__form__button">
                        <button className="signup__body__form__button__item" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}