import './signup.scss';
export default function Signup(){
    return (
        <div className="signup">
            <div className="signup__title">Library</div>
            <div className="signup__body">
                <div className="signup__body__title">Sign Up</div>
                <div className="signup__body__form">
                    <div className="signup__body__form__text">Username</div>
                    <input type="text" className="signup__body__form__input" name="username" id="username"/>

                    <div className="signup__body__form__text">Email</div>
                    <input type="text" className="signup__body__form__input" name="email" id="email"/>

                    <div className="signup__body__form__text">Password</div>
                    <input type="password" className="signup__body__form__input" name="password" id="password"/>

                    <div className="signup__body__form__text">Confirm Password</div>
                    <input type="password" className="signup__body__form__input" name="confirm_password" id="confirm_password"/>
                    
                    <div className="signup__body__form__button">
                        <button className="signup__body__form__button__item">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}