import React from 'react';
import './about.css';
import img from '../img/about-us.png';

const About = () => {
    return (
        <section className="about-area mt-5" id="about-area">
            <div className="container-fluid container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={img} alt="About us" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase introduce pt-5">
                            <span>let Me</span><br />
                            <span>Introduce</span><br />
                            <span>Our Self</span>
                        </h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">
                                Self-study programs allow learning without having a teacher present, and the courses can supplement or replace classroom instruction.
                            </p>
                            <p className="para">
                                Universities use self-study programs for less-commonly taught languages, where having professors is not feasible. Self-study programs are available on paper, audio files, video files, smartphone apps, computers, or any combination.
                            </p>
                        </div>
                        <button type="button" className="btn button cvbtn primary-button">download cv</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;