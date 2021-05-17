import React from "react";
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import styles from "../../../assets/styles/resume.module.css";
// Custom styles for timeline
const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#04b4e0",
  borderDotColor: "#04b4e0",
  titleColor: "#222",
  titleFontSize: "15px",
  subtitleColor: "#bf9765",
  textColor: "#555",
};
export const ResumeLeftContainer = ({ educationData, experienceData }) => {
  return (
    <>
      <div className={styles.pageSubTitle}>
        <h3 className={styles.pageTitleSubHeading}>Education</h3>
      </div>
      <div className="timeLineContainer">
        <Timeline theme={customTheme} dateFormat="ll">
          {educationData.map((item, i) => (
            <Container key={i}>
              <YearContent startDate={item.year} className={styles.yearValue} />
              <BodyContent>
                <Section title={item.position} className={styles.TitleName}>
                  <Description text={item.workDescription} />
                </Section>
              </BodyContent>
            </Container>
          ))}
        </Timeline>
      </div>
      <div className={styles.pageSubTitle}>
        <h3 className={styles.pageTitleSubHeading}>Experience</h3>
      </div>
      <div className="timeLineContainer">
        <Timeline theme={customTheme} dateFormat="ll">
          {experienceData.map((items, i) => (
            <Container  key={i}>
              <YearContent
                startDate={items.year}
                className={styles.yearValue}
              />
              <BodyContent>
                <Section title={items.position} className={styles.TitleName}>
                  <Description text={items.workDescription} />
                </Section>
              </BodyContent>
            </Container>
          ))}
        </Timeline>
      </div>
    </>
  );
};
