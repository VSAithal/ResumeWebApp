import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "../../../assets/styles/contact.module.css";
// Common styles link
import mainStyles from "../../../assets/styles/mainStyle.module.css";
import GoogleMaps from "./GoogleMapsEmbedding";
export const ContactRightContainer = () => {
  return (
    <>
      <GoogleMaps />
      <div className="mt-4">
        <div className={mainStyles.pageSubTitle}>
          <h3 className={mainStyles.pageTitleSubHeading}>
            How Can I
            <span className={mainStyles.pageTitle_blueSpan}> Help You?</span>
          </h3>
        </div>
      </div>
      <div>
        <Row>
          <Col md={6} xs={6}>
            <Form.Group>
              <Form.Control
                className={styles.formElement}
                size="sm"
                type="text"
                placeholder="Full Name"
              />
              <Form.Control
                className={styles.formElement}
                size="sm"
                type="text"
                placeholder="Email Address"
              />
              <Form.Control
                className={styles.formElement}
                size="sm"
                type="text"
                placeholder="Subject"
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={6}>
            <Form.Control
              className={styles.formElement_textArea}
              as="textarea"
              placeholder="Message"
              rows={6}
              required
            />
          </Col>
          <Button variant="outline-primary" className={styles.goldButton}>
            Send Message
          </Button>{" "}
        </Row>
      </div>
    </>
  );
};
