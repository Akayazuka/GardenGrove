import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registerxstyle.css';

function useLoginx() {
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState('#register-form');

    const handleFormClick = (e, target) => {
        e.preventDefault();
        setActiveForm(target);
    };

    const handlePrevBtnClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return {
        activeForm,
        handleFormClick,
        handlePrevBtnClick,
    };
}

function Registerx() {
    const { activeForm, handleFormClick, handlePrevBtnClick } = useLoginx();

    return (
        <div className="login">
            <div className="panel_blur"></div>
            <div className="panel">
                <div className="panel__form-wrapper">
                    <button
                        type="button"
                        className="panel__prev-btn"
                        aria-label="Go back to home page"
                        title="Go back to home page"
                        onClick={handlePrevBtnClick}
                    >
                        <svg
                            fill="rgba(255,255,255,0.5)"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                        </svg>
                    </button>

                    <ul className="panel__headers">
                        <li className={activeForm === '#register-form' ? 'panel__header active':'panel__header' }>
                            <a
                                href="#register-form"
                                className="panel__link"
                                role="button"
                                onClick={(e) => handleFormClick(e, '#register-form')}
                            >
                                Sign Up
                            </a>
                        </li>
                        <li className={activeForm === '#login-form' ? 'panel__header active' : 'panel__header'}>
                            <a
                                href="#login-form"
                                className="panel__link"
                                role="button"
                                onClick={(e) => handleFormClick(e, '#login-form')}
                            >
                                Sign In
                            </a>
                        </li>
                    </ul>

                    <div className="panel__forms">
                        <form
                            className={activeForm === '#login-form' ? 'form panel__login-form' : 'form panel__login-form hidden'}
                            id="login-form"
                            method="post"
                            action="/"
                        >
                            <div class="form__row">
                                <input type="text" id="email" class="form__input" name="login-mail" data-validation="email"
                                    data-error="Invalid email address." required />
                                <span class="form__bar"></span>
                                <label for="email" class="form__label">E-mail</label>
                                <span class="form__error"></span>
                            </div>
                            <div class="form__row">
                                <input type="password" id="password" class="form__input" name="login-pass"
                                    data-validation="length" data-validation-length="8-25"
                                    data-error="Password must contain 8-25 characters." required />
                                <span class="form__bar"></span>
                                <label for="password" class="form__label">Password</label>
                                <span class="form__error"></span>
                            </div>
                            <div class="form__row">
                                <input type="submit" class="form__submit" value="Login" />
                                <a href="#password-form" class="form__retrieve-pass" role="button">Forgot Password?</a>
                            </div>
                        </form>

                        <form
                            className={activeForm === '#register-form' ? 'form panel__register-form' : 'form panel__register-form hidden'}
                            id="register-form"
                            method="post"
                            action="/"
                        >
                            <div class="form__row">
                            <input type="text" id="register-email" class="form__input" name="register-mail"
                                data-validation="email" data-error="Invalid email address." required/>
                                <span class="form__bar"></span>
                                <label for="register-email" class="form__label">E-mail</label>
                                <span class="form__error"></span>
                            </div>
                        <div class="form__row">
                            <input type="text" id="register-name" class="form__input" name="register-name"
                                data-validation="name" data-error="Invalid name." required/>
                                <span class="form__bar"></span>
                                <label for="register-name" class="form__label">Full Name</label>
                                <span class="form__error"></span>
                            </div>
                        <div class="form__row">
                            <input type="password" id="register-password" class="form__input" name="register-pass"
                                data-validation="length" data-validation-length="8-25"
                                data-error="Password must contain 8-25 characters" required/>
                                <span class="form__bar"></span>
                                <label for="register-password" class="form__label">Password</label>
                                <span class="form__error"></span>
                            </div>
                        <div class="form__row">
                            <input type="password" id="register-password-check" class="form__input"
                                name="register-repeat-pass" data-validation="confirmation"
                                data-validation-confirm="register-pass" data-error="Your passwords did not match." required/>
                                <span class="form__bar"></span>
                                <label for="register-password-check" class="form__label">Re-enter password</label>
                                <span class="form__error"></span>
                            </div>
                        <div class="form__row">
                            <input type="submit" class="form__submit" value="Get Started"/>
                            </div>
                        </form>

                        <form
                            className={activeForm === '#password-form' ? 'form panel__password-form' : 'form panel__password-form hidden'}
                            id="password-form"
                            method="post"
                            action="/"
                        >
                            <div class="form__row">
                            <p class="form__info">Can't log in? Please enter your email. We will send you an email with
                                instructions on how to reset your password.</p>
                        </div>
                        <div class="form__row">
                            <input type="text" id="retrieve-pass-email" class="form__input" name="retrieve-mail"
                                data-validation="email" data-error="Invalid email address." required/>
                                <span class="form__bar"></span>
                                <label for="retrieve-pass-email" class="form__label">E-mail</label>
                                <span class="form__error"></span>
                            </div>
                        <div class="form__row">
                            <input type="submit" class="form__submit" value="Send new password!"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registerx;
