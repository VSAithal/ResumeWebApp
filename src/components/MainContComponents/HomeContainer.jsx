import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import styles from "../../assets/styles/mainContainer.module.css";
export const HomeContainer = () => {
  return (
    <Jumbotron fluid className={styles.homeContainer}>
      <Container>
        <h1 className={styles.homeTitle}>Alex Smith</h1>
        <p className={styles.homeSubTitle}>Web Designer</p>
      </Container>
    </Jumbotron>
  );
};
