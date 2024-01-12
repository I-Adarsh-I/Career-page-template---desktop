import React from "react";
import "./jobpost.css";
import jd from "../config/jd.json";

function JobPost() {
  return (
    <div>
      <div className="container parent-con-job">
        <div className="job-post-main-con">
          <div className="job-post-head">
            <h1 className="job-post-head-title">Current Openings</h1>
            <p className="job-post-head-para">
              We are more than just a workplace, we are a family
            </p>
          </div>
          <div className="container scrollable-list scrollbar-black bordered-black square thin">
          {jd &&
            jd.map((jobDetails, index) => {
              return (
                  <div className="card job-card" key={index}>
                    <div className="card-r-sec">
                      <div className="card-title">
                        <h5 className="job-post-head-para">{jobDetails.jobTitle}</h5>
                      </div>
                      <div className="card-subtitle mb-1 text-muted">
                        <p className="small-text text-muted">{jobDetails.loaction}</p>
                      </div>
                    </div>
                    <div className="card-l-sec">
                      <button className="btn btn-outline-secondary color-blue">
                        Apply Now
                      </button>
                      <p className="text-muted small-text">{jobDetails.timeline}</p>
                    </div>
                  </div>
              );
            })}
            </div>
            <button className="btn btn-outline-secondary mt-3">View all job openings</button>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
