import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <Educations theme={this.props.theme} />
            </div>
          </Fade>

          {/* {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null} */}
        </div>

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
