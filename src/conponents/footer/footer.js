import React from 'react';
import './footer.css';
import logo from '../img/logo.png';

const Footer = () => {
    return (
        <div>
            <footer class="footer-area">
                <div class="container">
                    <div class="">
                        <div class="site-logo text-center py-4">
                           <img src={logo} alt="" />
                        </div>
                        <div class="social text-center">
                            <h5 class="text-uppercase">follow me</h5>
                            <a href="https://www.facebook.com/kazi.raian.16/"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/raiankazi/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
                            <a href="https://twitter.com/raian_kazi"><i class="fab fa-twitter"></i></a>
                        </div>
                        <div class="copyrights text-center">
                            <p class="para">
                                Copyright 2020 All rights reserved . This template is made with by
                                <a href="/"><span> Kazi Raian</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;