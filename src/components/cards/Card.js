import React from "react";
import "./cards.css";
import careerJson from "../config/careerCard.json";
import benefitCardData from "../config/benefitCardData.json";
import life from '../Assets/medical.png' 


function Card() {
  return (
    <div>
      <div className="parent" id="project_card">
        {careerJson &&
          careerJson.map((data, index) => {
            return (
              <div className="card-main-container" key={index}>
                <div className="l-con" style={{ padding: "0 40px 0 0" }}>
                  <h1 className="card-head">
                    <span className="card-title-span"></span>
                    {data.title}
                  </h1>
                  <p className="main-card-description-l color-gray">{data.description}</p>
                  <p className="main-card-description-l color-gray">{data.description2}</p>
                  <button className="btn btn-outline-secondary card-btn">
                    Go to jobs
                  </button>
                </div>
                <div className="r-con">
                  <div className="rt-con">
                    <div style={{ width: "fit-content" }}>
                      <img src={data.imgUrl} alt="Career" width={"100%"} />
                    </div>
                  </div>
                  <div className="rb-con"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function BenefitCard() {
  return (
    <>
      <div className="parent" id="project_card">
        {benefitCardData &&
          benefitCardData.map((data, index) => {
            return (
              <div className="card-main-container" key={index}>
                <div className="l-con">
                  <div className="rt-con">
                    <div style={{ width: "fit-content" }}>
                      <img src={data.imgUrl} alt="Career" width={"100%"} />
                    </div>
                  </div>
                </div>
                <div className="r-con" style={{ padding: "0 0 0 40px" }}>
                  <h1 className="card-head">
                    <span className="card-title-span">{data.title}</span>
                    
                  </h1>
                  {data.cardDetail && data.cardDetail.map((data,index)=>{
                    return(
                  <div className="card border-0" style={{width: "100%"}} key={index}>
                    <div className="card-body">
                      <div className="logo-con"><img src={data.icon} alt="" width={'35px'}/></div>
                      <h5 className="card-title">{data.Btitle}</h5>
                      <p className="card-text color-gray">
                        {data.Bdescription}
                      </p>
                    </div>
                  </div>
                    )
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export { BenefitCard };
export default Card;
