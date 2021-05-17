import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainStyles from "../../../assets/styles/mainStyle.module.css";
import { ContactLeftContainer } from "./ContactLeftContainer";
import { ContactRightContainer } from "./ContactRightContainer";
export const ContactContainer = () => {
  return (
    <Container className={mainStyles.contentArea}>
      {/* Blog content starts here */}
      <div className={mainStyles.pageTitle}>
        <h2 className={mainStyles.pageTitleHeading}>Contact</h2>
      </div>
      <Row>
        <Col md={4}>
          <ContactLeftContainer />
        </Col>
        <Col md={8}>
          <ContactRightContainer />
        </Col>
      </Row>
    </Container>
  );
};
