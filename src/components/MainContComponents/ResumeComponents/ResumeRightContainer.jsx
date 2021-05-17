import React from "react";
import { ProgressBar, Col, Row, Badge } from "react-bootstrap";
import styles from "../../../assets/styles/resume.module.css";
// Common styles link
import mainStyles from "../../../assets/styles/mainStyle.module.css";
export const ResumeRightContainer = ({
  designDetails,
  codingDetails,
  knowledgeList,
}) => {
  return (
    <>
      {/* Design details */}
      <div className={mainStyles.pageSubTitle}>
        <h3 className={mainStyles.pageTitleSubHeading}>
          Design
          <span className={mainStyles.pageTitle_blueSpan}> Skills</span>
        </h3>
      </div>
      <div className="mb-5">
        {designDetails.map((item,i) => (
          <div key={i}>
            <Row>
              <Col md={10} xs={10}>
                <p className={styles.proficiencyTitle}>{item.name}</p>
              </Col>
              <Col md={2} xs={2} className="pull-right">
                <p className={styles.proficiencyLevel}>{item.proficiency}%</p>
              </Col>
            </Row>
            <ProgressBar
              variant="info"
              now={item.proficiency}
              className={styles.progressBar}
            />
          </div>
        ))}
      </div>
      {/* Coding  details */}
      <div className={mainStyles.pageSubTitle}>
        <h3 className={mainStyles.pageTitleSubHeading}>
          Coding
          <span className={mainStyles.pageTitle_blueSpan}> Skills</span>
        </h3>
      </div>
      <div className="mb-5">
        {codingDetails.map((item, i) => (
          <div key={i}>
            <Row>
              <Col md={10} xs={10}>
                <p className={styles.proficiencyTitle}>{item.name}</p>
              </Col>
              <Col md={2} xs={2} className="pull-right">
                <p className={styles.proficiencyLevel}>{item.proficiency}%</p>
              </Col>
            </Row>
            <ProgressBar
              variant="info"
              now={item.proficiency}
              className={styles.progressBar}
            />
          </div>
        ))}
      </div>
      {/* Knowledge  details */}
      <div className={mainStyles.pageSubTitle}>
        <h3 className={mainStyles.pageTitleSubHeading}>Knowledges</h3>
      </div>
      <div className="mb-5">
        <Row>
          <Col md={10} xs={10} className={styles.badgesList}>
            {knowledgeList.map((item,i) => (
              <h5 key={i}>
                <Badge variant="info" className={styles.Badge}>
                  {item}
                </Badge>
              </h5>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};
