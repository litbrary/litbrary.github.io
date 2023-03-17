import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login(){
    const baseURL = 'https://litbrary.pythonanywhere.com/auth/';
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const MySwal = withReactContent(Swal);
    const handleClick = () => {
        axios.post(baseURL, {
            "email": email,
            "password": password,
            })
            .then(response => {

                //set JWT token to local
                localStorage.setItem("access", response.data.access);
                localStorage.setItem("refresh", response.data.refresh);
                
                //set token to axios common header
                window.location.href = "/";
            })
            .catch(function () {
            MySwal.fire({
                title: 'Error!',
                text: 'Login failed! Email or Password is wrong',
                icon: 'error',
                confirmButtonText: 'Okay',
            })
            });
    }
 

    window.onpopstate = () => {
        navigate("/");
    }


    return (
        <div className="login">
            <div className="login__title">Library</div>
            <div className="login__body">
                <div className="login__body__title">Log In</div>
                <div className="login__body__form">
                    <div className="login__body__form__text">Email</div>
                    <input type="text" className="login__body__form__input" name="email" id="email" onInput={e => setEmail(e.target.value)}/>
                    <div className="login__body__form__text">Password</div>
                    <input type="password" className="login__body__form__input" name="password" id="password" onInput={e => setPassword(e.target.value)}/>
                    <div className="login__body__form__button">
                        <button className="signup__body__form__button__item" onClick={handleClick}>Submit</button>
                    </div>

                    <div className="login__body__form__signin">
                        <div className="login__body__form__signin__text">Don't have an account?</div>
                        <Link className="login__body__form__signin__link" to="/signup">Sign Up</Link>
                        or
                        <Link className="login__body__form__signin__link" to="/">Continue as a Guest</Link>  
                    </div>
                </div>
            </div>
        </div>
    )
}

