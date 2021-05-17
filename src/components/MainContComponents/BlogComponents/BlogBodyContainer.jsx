import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../../../assets/styles/blog.module.css";
export const BlogBodyContainer = ({ blogData }) => {
  return (
    <>
      <Row className="m-3">
          {/* Looping through the blog data */}
        {blogData.map((item, i) => (
          <Col md={6} key={i}>
            <Card className={styles.blogContainer}>
              <div className={styles.imageContainer}>
                <Card.Img
                  variant="top"
                  src={item.blogURL}
                  className={styles.imageStyles}
                />
                <div className={styles.imageChild}>
                  <span>{item.blogType}</span>
                </div>
                <div className={styles.imageMask}></div>
              </div>
              <Card.Body className="p-2">
                <small className="text-muted">{item.blogDate}</small>
                <Card.Title className={styles.blogDesc}>
                  {item.blogDesc}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
