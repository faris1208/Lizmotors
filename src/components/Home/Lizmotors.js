import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
// import { CiLocationOn } from "react-icons/ci";
// import basket from "../Img/first-car.jpeg";

function Lizmotors() {
  return (
    <div className='Lizmotors-container'>
        <nav>
            <div className='Liz-Nav'>
                <div className='Lizmotors'>
                    <h2>Lizmotors</h2>
                </div>
                <div className='Lizmotors-List'>
                    <ul>
                        <li>
                            <div className='pro'>
                                <p>PRODUCTION</p>
                                <IoChevronDown className='Down' />
                            </div> 
                        </li>
                        <li>
                            <div className='pro'>
                                <p>PRODUCT</p>
                                <IoChevronDown className='Down' />
                            </div> 
                        </li>
                        <li>
                            <div className='pro'>
                                <p>RESOURCES</p>
                                <IoChevronDown className='Down' />
                            </div> 
                        </li>
                        <li>
                            <div className='pro'>
                                <p>SERVICES</p>
                                <IoChevronDown className='Down' />
                            </div> 
                        </li>
                        <li>
                            <div className='pro'>
                                <p>CONTACTS</p>
                                {/* <IoChevronDown className='Down' /> */}
                            </div> 
                        </li>
                        <li>
                            <div className='pro'>
                                <p>SUPPORT</p>
                                {/* <IoChevronDown className='Down' /> */}
                            </div> 
                        </li>
                    </ul>
                </div>
                <div className='Lizmotors-button'>
                    <button className='get-started-btn'>Get Started</button>
                    <button className='login-btn'>Login</button>
                </div>
            </div>
        </nav>
        <div className='Section-container'>
            <section>
                <div className='Section-head'>
                    {/* <img src={basket} alt="" className="basket-image" width="100%" /> */}
                    <h1>Production</h1>
                    <p>Hey Guys, Have a look at our new design about Production landing page. don’t forget to check the attachment have a look at our new design about Cars</p>
                    <button className='Learn'>Learn More</button>
                </div>
            </section>
        </div>

        <div className='what-we-do'>
            <div className='Improve'>
                <p>What We Do</p>
                <h3>Improve Your Experience With Us</h3>
            </div>
            <div className='Mission'>
                <div className='Mission-Text'>
                    <h3>Our Mission</h3>
                    <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual.</p>
                </div>
                <div className='Mission-Text'>
                    <h3>Our Vision</h3>
                    <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual.</p>
                </div>
            </div>
        </div>

        <footer>
            <div className='Footer-container'>
                <div className='Lizmotors-Follows'>
                    <h2>Lizmotors</h2>
                    <div className='Follows'>
                        <p>Follow us on:</p>
                        <div className='media'>
                            <FaFacebookSquare className='facebook' />
                            <FaXTwitter className='facebook' />
                            <FaLinkedin className='facebook' />
                            <IoLogoYoutube className='facebook' />
                            <FaInstagramSquare className='facebook' />
                        </div>
                    </div>
                    <div className='call'>
                        <IoMdCall className='call-icon' />
                        <p>+234-804-0000-0000</p>
                    </div>
                    {/* <div className='call'>
                        <CiLocationOn className='location-icon' />
                        <p></p>
                    </div> */}
                </div>

                <div className='Services-Head'>
                    <h3>SERVICES</h3>
                    <p>INVESTMENT MANAGMENT</p>
                    <p>FINANCIAL PLANNING</p>
                    <p>INSURANCE SOLUTIONS</p>
                    <p>PROPERTY MANAGEMENT</p>
                    <p>Experience Design</p>
                    <p>Marketing Strategy</p>
                    <p>Strategic Planning</p>
                </div>

                <div className='Services-Head'>
                    <h3>About us</h3>
                    <p>Company Profile</p>
                    <p>Engineering</p>
                    <p>Pricing</p>
                    <p>Partners</p>
                    <p>News</p>
                    <p>careers</p>
                    <p>Contact Us</p>
                </div>

                <div className='Services-Head'>
                    <h3>SUPPORT</h3>
                    <p>Service and Maintenance</p>
                    <p>Training</p>
                    <p>Technical Documentation</p>
                </div>

                <div className='Services-Head'>
                    <h3>Recent news</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                </div>
            </div>

            <div className='footer-last'>
                <p>@2024 Lizmotors Construction. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Lizmotors