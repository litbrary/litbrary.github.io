import './login.scss';
import { Link } from 'react-router-dom';
export default function Login(){
    return (
        <div className="login">
            <div className="login__title">Library</div>
            <div className="login__body">
                <div className="login__body__title">Log In</div>
                <div className="login__body__form">
                    <div className="login__body__form__text">Email</div>
                    <input type="text" className="login__body__form__input" name="username" id="username"/>
                    <div className="login__body__form__text">Password</div>
                    <input type="password" className="login__body__form__input" name="password" id="password"/>
                    <div className="login__body__form__button">
                        <button className="signup__body__form__button__item">Submit</button>
                    </div>

                    <div className="login__body__form__signin">
                        <div className="login__body__form__signin__text">Don't have an account?</div>
                        <Link className="login__body__form__signin__link" to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}