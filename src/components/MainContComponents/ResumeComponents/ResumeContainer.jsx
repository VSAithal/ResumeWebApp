import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../assets/styles/resume.module.css";
// Common styles link
import mainStyles from "../../../assets/styles/mainStyle.module.css";

import { ResumeLeftContainer } from "./ResumeLeftContainer";
import { ResumeRightContainer } from "./ResumeRightContainer";
import certificateLogo1 from "../../../assets/images/client-1.png";
class ResumeContainer extends Component {
  state = {
    // Education List
    timelineEducationData: [
      {
        id: 1,
        year: "2008",
        university: "University of Studies",
        position: "Frontend Development",
        workDescription:
          "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
      },
      {
        id: 2,
        year: "2007",
        university: "University of Studies",
        position: "Graphic Design",
        workDescription:
          "Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.",
      },
    ],
    // Experience List
    timelineExperienceData: [
      {
        id: 1,
        year: "2016 - Current",
        comapny: "Google",
        position: "Lead Ui/Ux Designer",
        workDescription:
          "Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.",
      },
      {
        id: 2,
        year: "2013 - 2016",
        company: "Adobe",
        position: "Senior Ui/Ux Designer",
        workDescription:
          "Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.",
      },
      {
        id: 3,
        year: "2011 - 2013",
        company: "Google",
        position: "Junior Ui/Ux Designer",
        workDescription:
          "Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.",
      },
    ],
    // Design list
    designDetails: [
      {
        id: 1,
        name: "Web Design",
        proficiency: "95",
      },
      {
        id: 2,
        name: "Print Design",
        proficiency: "65",
      },
      {
        id: 3,
        name: "Logo Design",
        proficiency: "80",
      },
      {
        id: 4,
        name: "Graphic Design",
        proficiency: "90",
      },
    ],
    // Coding details
    codingDetails: [
      {
        id: 1,
        name: "JavaScript",
        proficiency: "95",
      },
      {
        id: 2,
        name: "PHP",
        proficiency: "85",
      },
      {
        id: 3,
        name: "HTML/CSS",
        proficiency: "100",
      },
      {
        id: 4,
        name: "Smarty/Twig",
        proficiency: "75",
      },
      {
        id: 5,
        name: "Perl",
        proficiency: "90",
      },
    ],
    // Knowledge list
    knowledgeList: [
      "Marketing",
      "Print",
      "Digital Design",
      "Social Media",
      "Time Management",
      "Communication",
      "Problem-Solving",
      "Social Networking",
      "Flexibility",
    ],
    // Certification details
    certificationsList: [
      {
        id: 1,
        title: "Psyhology of Intertnation Design",
        memberID: "Membership ID: XXXX",
        date: "19 April 2018",
      },
      {
        id: 2,
        title: "Psyhology of Intertnation Design",
        memberID: "Membership ID: XXXX",
        date: "19 April 2018",
      },
    ],
  };
  render() {
    return (
      <Container className={mainStyles.contentArea}>
        {/* Blog content starts here */}
        <div className={mainStyles.pageTitle}>
          <h2 className={mainStyles.pageTitleHeading}>Resume</h2>
        </div>
        <Row>
          <Col md={6} xs={10}>
            <ResumeLeftContainer
              educationData={this.state.timelineEducationData}
              experienceData={this.state.timelineExperienceData}
            />
          </Col>
          <Col md={6} xs={10}>
            <ResumeRightContainer
              designDetails={this.state.designDetails}
              knowledgeList={this.state.knowledgeList}
              codingDetails={this.state.codingDetails}
            />
          </Col>
        </Row>
        {/* Knowledge  details */}
        <div className={mainStyles.pageSubTitle}>
          <h3 className={mainStyles.pageTitleSubHeading}>Certificates</h3>
        </div>
        <Row>
          {this.state.certificationsList.map((item) => (
            <Col md={6} xs={12}>
              <div className={styles.certificateStyle}>
                <div className={styles.certificateLogo}>
                  <img src={certificateLogo1} alt="certificate Logo" />
                </div>
                <div className={styles.certificateDescription}>
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                  <div className={styles.certificateId}>
                    <span>{item.memberID}</span>
                  </div>
                  <div className={styles.certificateDate}>
                    <span>{item.date}</span>
                  </div>
                  <div className={styles.certificateCompany}>
                    <span></span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default ResumeContainer;
