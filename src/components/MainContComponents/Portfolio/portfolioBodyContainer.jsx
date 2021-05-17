import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../../../assets/styles/portfolio.module.css";
export const PortfolioBodyContainer = ({ filteredlist }) => {
  return (
    <>
      {/* Looping through the filtered list based on the user's click on the navbar */}
      {filteredlist.map((item, i) => (
        <>
          <Col xs={6} md={4} key={i}>
            <div className={styles.imageContainer}>
              <Image
                src={item.portURL}
                thumbnail
                className={styles.imageStyle}
              />
              <div className={styles.imageChild}>
                <span>{item.categoryName}</span>
              </div>
              <div className={styles.iconChild}>
                <i className={item.childIcon}></i>
              </div>
            </div>
            <h4 className={styles.imageHeading}>{item.portName}</h4>
          </Col>
        </>
      ))}
    </>
  );
};
