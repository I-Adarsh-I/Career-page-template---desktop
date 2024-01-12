import React from "react";
import "./navbar.css";
import headerLogo from "../Assets/indexify-logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="header">
        <div className="link">
            <img
              className="divmuibox-root-icon"
              alt="Tensorlake"
              src={headerLogo}
            />
            <div className="divmuistack-root">
              <div className="tensorlake">TensorLake</div>
              <div className="span">
                <div className="indexify">Indexify</div>
              </div>
          </div>
        </div>
        <div className="divmuistack-root1">
          <div className="frame">
            <div className="link-button">
              <Link to={"/"} className="link-btn-instance">
                Documentation
              </Link>
            </div>
            <div className="link-button">
              <Link to={"/"} className="link-btn-instance">
                Gallery
              </Link>
            </div>
            <div className="link-button">
              <Link to={"/"} className="link-btn-instance">
                Careers
              </Link>
            </div>
            <div className="link-button">
              <Link to={"/"} className="link-btn-instance">
                Submit
              </Link>
            </div>
            <div className="link-button">
              <Link to={"/"} className="link-btn-instance">
                Create Account
              </Link>
            </div>
            <div className="link-button">
              <Link to={"/"} className="link-btn-instance">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
