import React from 'react';
import Logo from "../Assets/logo-6 1.png";
import footer from '../Assets/footer.png';
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook, AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

function Footer() {
    return (
        <div className='footer'>
            <div className='first'>
                <img src={Logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                <div className='first-icons'>
                    <AiFillYoutube size={23} className='first-ic' />
                    <AiFillLinkedin size={23} className='first-ic' />
                    <AiFillTwitterSquare size={23} className='first-ic' />
                    <AiFillFacebook size={23} className='first-ic' />
                    <AiFillInstagram size={23} className='first-ic' />
                </div>
            </div>
            <div className='second'>
                <h2>QUICK LINKS</h2>
                <ul>
                    <li>Products</li>
                    <li>Classifieds</li>
                    <li>Contact us</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className='second'>
                <h2>CUSTOMER AREA</h2>
                <ul>
                    <li>My Account</li>
                    <li>Orders</li>
                    <li>Tracking List</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Return policy</li>
                    <li>My Cart</li>
                </ul>
            </div>
            <div className='second'>
                <h2>Vendor AREA</h2>
                <ul>
                    <li>Partner with us</li>
                    <li>Training</li>
                    <li>Procedures</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='final'>
                <h2>CONTACT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <div className='final-third'>
                    <div className='cont'>
                        <img src={footer} alt="footer" />
                        <div>
                            <p>Have any question?</p>
                            <h4>+ 123 456 789</h4>
                        </div>
                    </div>
                    <button>CHAT</button>
                </div>
                <div className='download'>
                    <div className='app-store'>
                        <AiFillApple size={40} color='#ffffff' />
                        <div>
                            <p>Download on the</p>
                            <h3>App Store</h3>
                        </div>
                    </div>
                    <div className='google-play'>
                        <BsGooglePlay size={35} color='#ffffff' />
                        <div>
                            <p>GET IT ON</p>
                            <h3>Google Play</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
