import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../cart/cart';
import './home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => {setServices(data);
            });
    }, []);
    services.splice(4);

    return (
        <div>
            <div className="home">
                <h1 className="heading">Learn Diffrent Language <br /> To Improve Your Self</h1>
                <h4>Best Way To Learn</h4>
                <div className="button-sec">
                    <button type="button" className="btn button primary-button text-uppercase"><NavLink className="nav-link cus-nav" to="/services">Get Services</NavLink></button>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        services.map(services => <Cart
                            key={services.key}
                            services={services}
                        >
                        </Cart>)
                    }
                    <div className="button-sec">
                        <button type="button" className="btn button primary-button text-uppercase"><NavLink className="nav-link cus-nav" to="/services">More Services</NavLink></button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Home;