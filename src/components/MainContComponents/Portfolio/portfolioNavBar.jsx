import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../../../assets/styles/portfolio.module.css";
export const PortfolioNavBar = ({ onNavListClick, selectedCategory }) => {
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link
            className={
              selectedCategory === "All"
                ? styles.portfolioLinks_active
                : styles.portfolioLinks
            }
            onClick={() => onNavListClick("All")}
          >
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={
              selectedCategory === "Detailed"
                ? styles.portfolioLinks_active
                : styles.portfolioLinks
            }
            onClick={() => onNavListClick("Detailed")}
          >
            Detailed
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={
              selectedCategory === "Mockups"
                ? styles.portfolioLinks_active
                : styles.portfolioLinks
            }
            onClick={() => onNavListClick("Mockups")}
          >
            Mockups
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={
              selectedCategory === "SoundCloud"
                ? styles.portfolioLinks_active
                : styles.portfolioLinks
            }
            onClick={() => onNavListClick("SoundCloud")}
          >
            SoundCloud
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={
              selectedCategory === "Vimeo"
                ? styles.portfolioLinks_active
                : styles.portfolioLinks
            }
            onClick={() => onNavListClick("Vimeo")}
          >
            Vimeo Videos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={
              selectedCategory === "YouTube"
                ? styles.portfolioLinks_active
                : styles.portfolioLinks
            }
            onClick={() => onNavListClick("YouTube")}
          >
            YouTube Videos
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
