import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
          <section className='footer-subscription'>
              <p className='footer-subscription-heading'>
                  Join the Adventure newsletter to receive our best vacation deals
              </p>
              <p className='footer-subscription-text'>
                  You can unsubscribe at any time.
              </p>
              <div className='input-areas'>
                  <form>
                      <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                      <Button buttonStyle='btn-outline'>Subscribe</Button>
                  </form>
              </div>
          </section>

          <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/sign-up'>Destinations</Link>
                        <Link to='/sign-up'>Sponsorships</Link>
                        <Link to='/sign-up'>Support</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/sign-up'>Facebook</Link>
                        <Link to='/sign-up'>Youtube</Link>
                        <Link to='/sign-up'>Twitter</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Policy</h2>
                        <Link to='/sign-up'>Anti-spam Policy</Link>
                        <Link to='/sign-up'>Booking Conditions</Link>
                        <Link to='/sign-up'>Green Policy</Link>
                        <Link to='/sign-up'>Privacy Notice</Link>
                    </div>
                </div>
           </div>
      </div>
    )
}

export default Footer
