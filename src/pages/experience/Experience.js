import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="educations-body-div">
                {experience.experience.map((degree) => {
                  return <DegreeCard degree={degree} theme={theme} />;
                })}
              </div>
            </div>
          </Fade>
        </div>

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
