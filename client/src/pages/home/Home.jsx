import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <Slide
        slidesToShow={5}
        arrowsScroll={3}
        className="slide"
        isPopular={true}
      >
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <Link className="link menuLink" to="/gigs?cat_main=awrudu">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>
                  Awrudu Foods
                  <br />
                  (අවුරුදු ආහාර)
                </span>
              </div>
            </Link>

            <Link className="link menuLink" to="/gigs?cat_main=general">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>
                  General Foods
                  <br />
                  (සාමාන්‍ය ආහාර)
                </span>
              </div>
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=rice">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />

                <div className="line"></div>
                <span>
                  Local Rice
                  <br />
                  (දේශීය සහල්)
                </span>
              </div>
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=spices">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>
                  Local Spices
                  <br />
                  (දේශීය කුළුබඩු)
                </span>
              </div>
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=curry">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>
                  Local Drinks
                  <br />
                  (දේශීය පාන)
                </span>
              </div>
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=drinks">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>
                  Local Sweets
                  <br />
                  (දේශීය රසකැවිලි)
                </span>
              </div>
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=sweets">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>
                  Local Curry
                  <br />
                  (දේශීය ව්‍යංජන)
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Sri Lanka's every traditional food at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality foods at every price point.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right seller to begin working on your order within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Payment system
            </div>
            <p>You can easily pay for your orders using helarasaya.lk.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Contact our team for more information or If you want help from us.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4} isPopular={false}>
        {projects.map((x) => (
          <ProjectCard key={x.id} card={x} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
