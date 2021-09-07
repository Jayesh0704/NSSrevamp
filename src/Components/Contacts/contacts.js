import React, { useState, useEffect } from 'react';
import classes from "./contacts.scss";
import Footer from "../Footer/footer";
import axios from 'axios';
import { FormGroup } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from './mapLoader.json';

const defaultMapLoaderOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid"
    }
};

const Map = () => {
    const [mapLoading, setMapLoading] = useState(true);
    const [animationCompleted, setanimationCompleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setanimationCompleted(true);
        }, 4000);
    }, []);

    return (
        <React.Fragment>
            {
                !animationCompleted ? (
                    <Lottie options={defaultMapLoaderOptions} />
                ) : (
                    <React.Fragment>
                        {
                            mapLoading ? (
                                <Lottie options={defaultMapLoaderOptions} />
                            ) : null
                        }
                        <iframe loading="lazy" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=BITS%20Pilani+(NSS%20BITS%20Pilani)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" onLoad={() => setMapLoading(false)}></iframe>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

const Contacts = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const url1 = 'https://sheet.best/api/sheets/25c88114-88cd-438b-a017-066cc9a056c9';
    const url2 = "https://sheet.best/api/sheets/5e0c7761-3e9a-411e-8356-c9ca84d5bc3a";


    const submitHandler = e => {
        e.preventDefault();
        setFormData({ name: "", email: "", message: "" });
    
        const d = new Date();

        axios.post(Math.random() < 0.5 ? url1 : url2, { ...formData, date: d.toDateString(), time: d.toTimeString() }).then( response => {
            console.log(response.data);
        });
    }
    
    return (
        <React.Fragment>
            <div className={`${classes.contactBody} contactBody container-fluid`}>
                <div className="row mb-3">
                    <div className={`${classes.mapContainer} mapContainer`}>
                        <Map />
                    </div>
                </div>
                <div className="row">
                    <h1 id="top" className="mt-5">Contact Us</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md mt-5">
                        <h2>Points of Contact</h2>
                        <div className="row mt-4">
                            <h3>Address</h3>
                            <p>BITS Pilani, Pilani Campus, Rajasthan-333031</p>
                        </div>
                        <div className="row mt-4">
                            <h3>Web Address</h3>
                            <p><a>www.bit-pilani.ac.in/</a></p>
                        </div>
                        <div className="row mt-4">
                            <h3>President</h3>
                            <p>
                                ABCDEFG
                                <br />
                                Phone: +91 XXXXXXXXXX
                            </p>
                        </div>
                        <div className="row mt-4">
                            <h3>Vice President</h3>
                            <p>
                                ABCDEFG
                                <br />
                                Phone: +91 XXXXXXXXXX
                            </p>
                        </div>
                        <div className="row mt-4">    
                            <h3>Secretary</h3>
                            <p>
                                ABCDEFG
                                <br />
                                Phone: +91 XXXXXXXXXX
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md mt-5">
                        <div className={`${classes.contactForm} contactForm`}>
                            <form action="#" method="POST" onSubmit={submitHandler}>
                                <h2>Leave us a feedback</h2>
                                <FormGroup>
                                    <label className="row" for="name">
                                        <div className={`${classes.inputHead} inputHead`}>
                                            Name
                                        </div>
                                    </label>
                                    <input className="row ml-0" type="text" id="name" name="name" value={formData.name} onChange={
                                        (e) => {
                                            setFormData({ email: formData.email, message: formData.message, [e.target.name]: e.target.value });
                                        } 
                                    } placeholder="James Bond" />
                                </FormGroup>
                                <FormGroup>
                                    <label className="row" for="email">
                                        <div className={`${classes.inputHead} inputHead`}>
                                            E-mail
                                        </div>
                                    </label>
                                    <input className="row ml-0" type="text" id="email" name = "email" value = {formData.email} onChange={
                                                (e) => {
                                                    setFormData({ name: formData.name, message: formData.message, [e.target.name]: e.target.value });
                                                } 
                                            } placeholder="abc@xyz.com" />
                                </FormGroup>
                                <FormGroup>
                                    <label className="row" for="message">
                                        <div className={`${classes.inputHead} inputHead`}>
                                            Message
                                        </div>
                                    </label>
                                    <textarea className="row ml-0" id="message" name = "message" value = {formData.message} onChange={
                                        (e) => {
                                            setFormData({ email: formData.email, name: formData.name, [e.target.name]: e.target.value });
                                        } 
                                    } rows="4" cols="50" placeholder="Hey there, I wanted to say hi and that..."/>
                                </FormGroup>
                                <input type="submit" value="Send message"/>              
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Contacts;