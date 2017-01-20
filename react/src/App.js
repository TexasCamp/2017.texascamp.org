import React, { Component } from 'react';
import logo from '../images/drupal-texas-camp.png';
import twitter from '../images/twitter.png';
import subscribe from '../images/subscribe.png';
import paperclip from '../images/paper-clip.png';
import './App.css';
import './normalize.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="branding">
          <div className="logo">
            <img src={logo} alt="Drupal Texas Camp 2017" />
          </div>
        </div>
        <div className="communication">
          <div className="newsletter">
            <h2>Extra!</h2>
            <p>Sign up to receive the Texas Camp newsletter</p>
            {/** Begin MailChimp Signup Form */}
            <div id="mc_embed_signup" className="mc_form">
              <form action="//texascamp.us14.list-manage.com/subscribe/post?u=570bd5ca3ae1bf17bce28a1ad&amp;id=076e5f40d9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address </label>
                    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email" />
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                      <img src={subscribe} alt="Subscribe" height="22" />
                    </button>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response"></div>
                    <div className="response" id="mce-success-response"></div>
                  </div>
                  {/** real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div aria-hidden="true">
                    <input type="text" name="b_570bd5ca3ae1bf17bce28a1ad_076e5f40d9" tabIndex="-1" value="" />
                  </div>
                </div>
              </form>
            </div>
            {/** End mc_embed_signup */}
          </div>
          <div className="twitter">
            <a href="https://twitter.com/drupaltexascamp"><img src={twitter} alt="Twitter" width="45" /></a>
          </div>
        </div>
        <div className="sponsors">
          <div className="inner">
            <h2>Sponsors</h2>
            <p>If you or your company is interested in partnering with Texas Camp, we have several levels of sponsorship available. Download the Sponsor Prospectus to learn more.</p>
            <div className="prospectus">
              <a href="/sites/default/files/texas-camp-sponsor-prospectus.pdf">
                <img src={paperclip} alt="Download Sponsor Prospectus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
