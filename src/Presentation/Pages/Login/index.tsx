import Footer from '@/Presentation/Components/Footer';
import React from 'react';
import './styles.scss';

export default function Login(): JSX.Element {
  return (
    <>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo"></div>
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1
                  className="instagram-text-logo instagram-text-logo-container coreSpriteLoggedOutWordmark"
                  data-metatip="true"
                >
                  Instagram
                </h1>
              </div>
              <input type="text" placeholder="Phone number, username, or email" />
              <input type="text" placeholder="Password" />
              <button className="form-btn" type="submit">
                Log in
              </button>
              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook"></i> Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don&#39;t have an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
