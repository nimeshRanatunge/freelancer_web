import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  // const currentUser = {
  //   id: 1,
  //   username: "Anna",
  //   isSeller: false,
  // };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  const handleLogout = async()=>{
    try{
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    // not in homepage (pathname!=="/") , navbar is going to active (white) always active==true or pathname NOT EQUAL TO /
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">හෙළ<b className="rasa">රසය</b>.lk</span>
          </Link>
          {/* <span className="dot">.</span> */}
        </div>
        <div className="links">
          <span>How it works</span>
          <span>About us</span>
          <span>Contact us</span>
          <Link to="/login" className="link">How to cook</Link>

          {/* //not appear until register as a seller or client
          //if not a registered user, signin and join button will appear as 2nd arg */}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={currentUser.img || "/img/down.png"}
                alt="x"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/myGigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* not in homepage , this bar is going to active (show) always */}
      {(active || pathname !== "/") && (
        // react fragments when using multiple comps
        <>
          <hr />
          <div className="menu" onClick={refreshPage}>
            <Link className="link menuLink" to="/gigs?cat_main=awrudu">
              Awrudu Foods (අවුරුදු ආහාර)
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=general">
              General Foods (සාමාන්‍ය ආහාර)
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=rice">
              Local Rice (දේශීය සහල්)
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=spices">
              Spices (දේශීය කුළුබඩු)
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=curry">
              Local Curry (දේශීය ව්‍යංජන)
            </Link>
            <Link className="link menuLink" to="/gigs?cat_main=drinks">
             Local Drinks (දේශීය පාන)
            </Link> 
            <Link className="link menuLink" to="/gigs?cat_main=sweets">
             Local Sweets (දේශීය රසකැවිලි)
            </Link> 
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
