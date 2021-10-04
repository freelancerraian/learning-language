import React, { useEffect, useState } from 'react';
import Cart from '../cart/cart';
import './services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => {setServices(data);
            }); 
    }, []);
    
    return (
        <div className="services">
            <div className="container">
                <div className="text-services">
                    <h1 className="let-serv">Our Letest Services</h1>
                </div>
                <div className="row">
                    {
                        services.map(services => <Cart
                            key={services.key}
                            services={services}
                        >
                        </Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;