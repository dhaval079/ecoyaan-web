import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='f1'>
          <h2 style={{ color: 'rgb(60, 166, 60)' }}>Ecoyaan</h2>
          <h3>Registered Address:</h3>
          <p>1-N-12T-781/1</p>
          <p>Sri Krishna Vilasa, Urvastores,</p>
          <p>Ashoknagar(MR), Mangalore,</p>
          <p>Dakshina Kannada- 575006, Karnataka, India</p>
        </div>
        <div className='f2'>
          <h3>Company</h3>
          <Link to='/about' className='stylenone'>
            <p>About us</p>
          </Link>
          <Link to='/contact' className='stylenone'>
            <p>Contact us</p>
          </Link>
          <p>Sell on Ecoyaan</p>
          <p>Careers</p>
        </div>
        <div className='f2'>
          <h3>Links</h3>
          <Link to='/privacypolicy' className='stylenone'>
            <p>Privacy policy</p>
          </Link>
          <Link to='/termsandconditions' className='stylenone'>
            <p>Terms & conditions</p>
          </Link>
        </div>
        <div className='f2'>
          <h3>Community</h3>
          <p>Announcements</p>
          <p>Answer center</p>
          <p>Discussion boards</p>
          <p>Giving works</p>
        </div>
        <div className='f2'>
          <h3>Subscribe Now</h3>
          <p>Subscribe your email for newsletter and featured news based on your interest</p>
          <div className='inputcontainer'>
            <span className='icon1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </span>
            <input type='text' placeholder='Enter your email' />
            <span className='icon2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </span>
          </div>
        </div>
        <div className='f2'>
      <h3>Follow Us</h3>
      <div className='follow-us-icons'>
      
        <a href="https://www.instagram.com/ecoyaan/">
          <FaInstagram className="social-icon" />
        </a>
      
        <a href="https://www.facebook.com/">
          <FaFacebook className="social-icon" />
        </a>
   
       
        <a href='https://www.linkedin.com/company/ecoyaan/'>
          <FaLinkedinIn className='social-icon'/>

        </a>
      </div>
    </div>
      </div>
      <div className='footerin2'>
        <h3 style={{ alignItems: 'center' }}>© 2023 - 2024, Ecoyaan TM</h3>
      </div>
    </div>
  );
};

export default Footer;
