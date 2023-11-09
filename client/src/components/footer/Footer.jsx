import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Awrudu Foods<br/>(අවුරුදු ආහාර)</span>
            <span>General Foods<br/>(සාමාන්‍ය ආහාර)</span>
            <span>Local Rice<br/>(දේශීය සහල්)</span>
            <span>Local Spices<br/>(දේශීය කුළුබඩු)</span>
            <span>Local Drinks<br/>(දේශීය පාන)</span>
            <span>Local Sweets<br/>(දේශීය රසකැවිලි)</span>
            <span>Local Curry<br/>(දේශීය ව්‍යංජන)</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>About us</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on helarasaya.lk</span>
            <span>Buying on helarasaya.lk</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Forum</span>
            <span>Blog</span>
            <span>Invite a Friend</span>
          </div>
          <div className="item">
            <h2>More for you</h2>
            <span>Cooking tutorials</span>
            <span>Local food shops</span>
            <span>Nutrutional benifits</span>
            <span>How helarasaya.lk works</span>
            {/* <span>Working Not Working</span> */}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Helarasaya.lk</h2>
            <span>©Nimesh Solutions Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <img className="accept" src="/img/we_accept.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
