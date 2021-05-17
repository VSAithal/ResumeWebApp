import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../../../assets/styles/contact.module.css";
export const ContactLeftContainer = () => {
  return (
    <Row>
      <Col md={12} xs={12} sm={12}>
        <Card className={styles.funFactsCard}>
          <Card.Body>
            <Card.Title className={styles.funFactIcons}>
              <span className="lnr lnr-map-marker"></span>
            </Card.Title>
            <Card.Subtitle className={styles.funFactsTitle}>
              San Francisco
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xs={12} sm={12}>
        <Card className={styles.funFactsCard}>
          <Card.Body>
            <Card.Title className={styles.funFactIcons}>
              <span className="lnr lnr-phone-handset"></span>
            </Card.Title>
            <Card.Title className={styles.funFactsTitle}>
              415-832-2000
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xs={12} sm={12}>
        <Card className={styles.funFactsCard}>
          <Card.Body>
            <Card.Title className={styles.funFactIcons}>
              <span className="lnr lnr-envelope"></span>
            </Card.Title>
            <Card.Subtitle className={styles.funFactsTitle}>
              alex@example.com
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
