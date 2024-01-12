import React from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
import Card, { BenefitCard } from "../cards/Card";
import JobPost from "../jobPost/JobPost";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container main-hero-sec">
        <div className="hero-sec">
          <h1 className="hero-head">Discover your new career</h1>
          <p className="hero-description">
            Come be part of our team – bring your ideas, ingenuity and
            determination to make a difference, and we’ll solve some of the
            world’s biggest challenges. Across industries and around the globe,
            we work with exceptional people and companies—using advanced
            technologies, data and AI to create 360° value for our clients,
            people and communities.
          </p>
          <button className="btn btn-outline-secondary">
            View all open roles
          </button>
        </div>
      </div>
      <Card />
      <BenefitCard />
      <JobPost />
    </>
  );
}

export default Home;
