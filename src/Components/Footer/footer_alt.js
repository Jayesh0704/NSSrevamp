import React from 'react';
import classes from "./footer_alt.scss";
//import { NavLink } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';


const footer_alt = (props) => {
    return (
        <footer class="ct-footer">
            
            <div className={`${classes.follow} follow`}>
                Follow us on
            </div>
            <div className={`${classes.mediaContainer} mediaContainer`}>
                <div className={`${classes.socialMedia} socialMedia`}>
                    <a href="https://www.linkedin.com/company/nss-bits-pilani" target="_blank"><img src="/assets/image 11.png" /></a>
                    <a href="https://instagram.com/nssbitspilani?utm_medium=copy_link" target="_blank"><img src="/assets/image 9.png" /></a>
                    <a href="https://youtube.com/user/nssbits" target="_blank"><img src="/assets/image 10.png" /></a>
                    <a href="https://www.facebook.com/nssbits/" target="_blank"><img src="/assets/image 12.png" /></a>
                    <a href="https://twitter.com/nssbits?s=09" target="_blank"><img src="/assets/image 13.png" /></a>
                </div>
            </div>
            
            
            <div class="alt_container">
                <ul class="ct-footer-list text_center">
                    <li>
                        <h2 class="ct-footer-list-header">NSS BITS PILANI</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <NavLink to={'/aboutus#top'}>About us</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/aboutus#mid'}>Meet the team</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contactus#top'}>Contact us</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">DEPARTMENTS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                               <NavLink to={`/departments/CLP`}>CLP</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/D3'}>D3</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/Desco'}>Desco</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/EPD'}>EPD</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/Events'}>Events</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/HPA'}>HPA</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/Parishod'}>Parishod</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/School'}>School</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/departments/Umang'}>Umang</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">EVENTS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <NavLink to={'events/Junoon'}>Junoon</NavLink>
                            </li>
                            <li>
                               <NavLink to={'events/Blood Donation Camp'}>Blood Donation Camp</NavLink>
                            </li>
                            <li>
                                <NavLink to={'events/Shop For A Smile'}>Shop For A Smile</NavLink>
                            </li>
                            <li>
                                <NavLink to={'events/Conferencia De Youth'}>Conferencia De Youth</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">OUR PARTNERS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a href="https://www.bitsaa.org/">BITSAA</a>
                            </li>
                            <li>
                                <a href="https://www.worldwildlife.org/">World Wildlife Fund</a>
                            </li>
                            <li>
                                <a href="http://dishafoundationindia.in/">Disha Foundation</a>
                            </li>
                            <li>
                                <a href="http://www.deepalaya.org/">Deepaiaya</a>
                            </li>
                            <li>
                                <a href="http://www.tenderheartngo.org/">Tender Heart</a>
                            </li>
                            <li>
                                <a href="http://www.umangindia.org/">Umang Jaipur</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="ct-footer-post">
                
                <div class="alt_container">
                    <div class="inner-right">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/nssbits/">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/nssbitspilani?utm_medium=copy_link">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/nss-bits-pilani">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/nssbits?s=09">Twitter</a>
                                </li>
                            </ul>
                    </div>
                    <div class="inner-right-500">
        
                                <div>
                                    <a href="https://www.facebook.com/nssbits/">Facebook</a>
                                </div>
                                <div>
                                    <a href="https://instagram.com/nssbitspilani?utm_medium=copy_link">Instagram</a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/company/nss-bits-pilani">LinkedIn</a>
                                </div>
                                <div>
                                    <a href="https://twitter.com/nssbits?s=09">Twitter</a>
                                </div>
    
                    </div>
                    <div class="inner-left">
                        <p>
                            © 2021 NSS BITS PILANI. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer_alt;