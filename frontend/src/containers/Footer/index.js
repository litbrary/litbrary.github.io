import React from "react";
import "./footer.scss"
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__title">Lit🔥Brary</div>
            <div className="footer__body">
                <div className="footer__body__text">
                    ©2023 Nama Company<br/> All Rights Reserved
                </div>
                <div className="footer__body__link">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>    
                </div>
            </div>
        </div>
    );
}