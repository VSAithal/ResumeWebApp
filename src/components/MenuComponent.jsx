import React, { Component } from "react";
import styles from "../assets/styles/nameContainer.module.css";
import profileImage from "../assets/images/photo_icon.jpg";
import { Card, Nav, Button } from "react-bootstrap";
import FooterComponent from "./Footer";
class MenuComponent extends Component {
  render() {
    const currentPage = this.props.currentPage;
    const handleHomeClick = this.props.handleHomeClick;
    const handleAboutMeClick = this.props.handleAboutMeClick;
    const handleBlogPageClick = this.props.handleBlogPageClick;
    const handleContactPageClick = this.props.handleContactPageClick;
    const handlePortfolioPageClick = this.props.handlePortfolioPageClick;
    const handleResumePageClick = this.props.handleResumePageClick;

    return (
      <>
        <Card className={styles.SideMenuContainer}>
          <Card.Body>
            <Card.Title className={styles.cardImage}>
              <img
                src={profileImage}
                className={styles.profileImage}
                alt="profile image"
              />
            </Card.Title>
            <Card.Text>
              <h2 className="h2">Alex Smith</h2>
              <h4 className="h4">Web Designer </h4>
            </Card.Text>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link
                className={
                  currentPage === "Home"
                    ? styles.menuItem_active
                    : styles.menuItem
                }
                onClick={() => handleHomeClick()}
              >
                Home
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                className={
                  currentPage === "AboutMe"
                    ? styles.menuItem_active
                    : styles.menuItem
                }
                onClick={() => handleAboutMeClick()}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                className={
                  currentPage === "ResumePage"
                    ? styles.menuItem_active
                    : styles.menuItem
                }
                onClick={() => handleResumePageClick()}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                className={
                  currentPage === "PortfolioPage"
                    ? styles.menuItem_active
                    : styles.menuItem
                }
                onClick={() => handlePortfolioPageClick()}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                className={
                  currentPage === "BlogPage"
                    ? styles.menuItem_active
                    : styles.menuItem
                }
                onClick={() => handleBlogPageClick()}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                className={
                  currentPage === "ContactPage"
                    ? styles.menuItem_active
                    : styles.menuItem
                }
                onClick={() => handleContactPageClick()}
              >
                Contact
              </Nav.Link>
            </Nav>
            <div className={styles.socialContainer}>
              <ul className={styles.socialListItems}>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="font-weight-bold">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <Button variant="outline-primary" className={styles.downloadButton}>
              Download CV
            </Button>{" "}
          </Card.Body>
          <FooterComponent />
        </Card>
      </>
    );
  }
}

export default MenuComponent;
