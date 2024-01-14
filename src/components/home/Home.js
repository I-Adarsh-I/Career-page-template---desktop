import React from "react";
import { Fade } from "react-awesome-reveal";
import "./home.css";
import Navbar from "../navbar/Navbar";
import Card, { BenefitCard } from "../cards/Card";
import JobPost from "../jobPost/JobPost";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <Navbar />
      <Fade cascade damping={0.1} duration={"1000"}>
        <div className="container main-hero-sec">
          <div className="hero-sec">
            <h1 className="hero-head">Discover your new career</h1>
            <p className="hero-description">
              Come be part of our team – bring your ideas, ingenuity and
              determination to make a difference, and we’ll solve some of the
              world’s biggest challenges. Across industries and around the
              globe, we work with exceptional people and companies—using
              advanced technologies, data and AI to create 360° value for our
              clients, people and communities.
            </p>
            <button className="btn btn-outline-secondary blue-outline">
             <Link to="job-sec" smooth={true} spy={true} duration={500}>View all open roles</Link> 
            </button>
          </div>
        </div>
      <Card />
      <BenefitCard />
      <JobPost />
      </Fade>
    </>
  );
}

export default Home;
