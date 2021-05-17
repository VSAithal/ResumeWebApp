import React, { Component } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import styles from "../assets/styles/mainContainer.module.css";
import { MainContent } from "./MainContent";
import MenuComponent from "./MenuComponent";
import { NameContainer } from "./NameContainer";
class HomePage extends Component {
  state = {
    //   Personal Details
    personalDetails: [
      {
        aboutMe:
          "Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.",
        Age: 32,
        Residence: "USA",
        Address: "88 Some Street, Some Town",
        email: "email@example.com",
        phone: "+0123 123 456 789",
        Ecommerce:
          "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.",
        Copywriting:
          "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.",
        webDesign:
          "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.",
        management:
          "Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.",
        testimonials: {
          testimonial1: {
            content: "",
            author: "Julia Hickman",
            company: "Omni Source",
          },
        },
      },
    ],
    currentPage: "Home", // To store the current page
    menuClicked: false, //Side menu (three icon) menu click status
  };
  // Handle next button Click
  handleNextButtonClick = () => {
    if (this.state.currentPage === "Home") {
      this.setState({ currentPage: "AboutMe" });
    } else if (this.state.currentPage === "AboutMe") {
      this.setState({ currentPage: "ResumePage" });
    } else if (this.state.currentPage === "ResumePage") {
      this.setState({ currentPage: "PortfolioPage" });
    } else if (this.state.currentPage === "PortfolioPage") {
      this.setState({ currentPage: "BlogPage" });
    } else if (this.state.currentPage === "BlogPage") {
      this.setState({ currentPage: "ContactPage" });
    } else if (this.state.currentPage === "ContactPage") {
      this.setState({ currentPage: "Home" });
    }
  };
  //   Handle previous button click
  handlePreviousClick = () => {
    if (this.state.currentPage === "Home") {
      this.setState({ currentPage: "ContactPage" });
    } else if (this.state.currentPage === "ContactPage") {
      this.setState({ currentPage: "BlogPage" });
    } else if (this.state.currentPage === "BlogPage") {
      this.setState({ currentPage: "PortfolioPage" });
    } else if (this.state.currentPage === "PortfolioPage") {
      this.setState({ currentPage: "ResumePage" });
    } else if (this.state.currentPage === "ResumePage") {
      this.setState({ currentPage: "AboutMe" });
    } else if (this.state.currentPage === "AboutMe") {
      this.setState({ currentPage: "Home" });
    }
  };
  //   Side menu click function
  handleSideMenuClick = () => {
    if (!this.state.menuClicked) {
      this.setState({ menuClicked: true });
    } else {
      this.setState({ menuClicked: false });
    }
  };
  // Home button click
  handleHomeClick = () => {
    this.setState({ currentPage: "Home" });
    // Check if the side menu is open, if true then close
    if (this.state.menuClicked) {
        this.handleSideMenuClick();
    }
  };
  // About me button click
  handleAboutMeClick = () => {
    this.setState({ currentPage: "AboutMe" });
    // Check if the side menu is open, if true then close
    if (this.state.menuClicked) {
        this.handleSideMenuClick();
    }
  };
  // Resume button click
  handleResumePageClick = () => {
    this.setState({ currentPage: "ResumePage" });
    // Check if the side menu is open, if true then close
    if (this.state.menuClicked) {
        this.handleSideMenuClick();
    }
  };
  // Portfolio button click
  handlePortfolioPageClick = () => {
    this.setState({ currentPage: "PortfolioPage" });
    // Check if the side menu is open, if true then close
    if (this.state.menuClicked) {
        this.handleSideMenuClick();
    }
  };
  // Blog button click
  handleBlogPageClick = () => {
    this.setState({ currentPage: "BlogPage" });
    // Check if the side menu is open, if true then close
    if (this.state.menuClicked) {
        this.handleSideMenuClick();
    }
  };
  // Blog button click
  handleContactPageClick = () => {
    this.setState({ currentPage: "ContactPage" });
    // Check if the side menu is open, if true then close
    if (this.state.menuClicked) {
        this.handleSideMenuClick();
    }
  };

  render() {
    console.log("this.state.personalDetails", this.state.personalDetails);
    return (
      <>
      <div className={styles.animationBackground}></div>
        <Container fluid="md" className={styles.mainDiv}>
          <Row>
            <Col className="d-none d-lg-block" md={4}>
              <NameContainer />
            </Col>
            <Col md={8} className="p-4">
              <MainContent
                personalDetails={this.state.personalDetails}
                currentPage={this.state.currentPage}
                nextClickEvent={this.handleNextButtonClick}
                previosClickEvent={this.handlePreviousClick}
              />
            </Col>
          </Row>
        </Container>
        {/* Next previous container */}
        <ButtonGroup vertical className={styles.buttonGroup}>
          <Button
            className={styles.nextButton}
            onClick={() => this.handleNextButtonClick()}
          >
            <i className="fa fa-angle-right"></i>
          </Button>
          <Button
            className={styles.previousButton}
            onClick={() => this.handlePreviousClick()}
          >
            <i className="fa fa-angle-left"></i>
          </Button>
        </ButtonGroup>
        {/* Menu list container */}
        <ButtonGroup vertical className={styles.menuButtonGroup}>
          <Button
            className={styles.nextButton}
            onClick={() => this.handleHomeClick()}
            // To hold back the active class
            style={this.state.currentPage === "Home"
                  ? {color: "#04b4e0"}
                  : {color: "#b5b6b7"}
              }
          >
            <span className="lnr lnr-home"></span>
            <span className={styles.titleAnimate}>Home</span>
          </Button>
          
          <Button
            className={styles.otherButtons}
            onClick={() => this.handleAboutMeClick()}
            // To hold back the active class
            style={this.state.currentPage === "AboutMe"
                  ? {color: "#04b4e0"}
                  : {color: "#b5b6b7"}
              }
          >
            <span className="lnr lnr-user"></span>
            <span className={styles.titleAnimate}>About Me</span>
          </Button>
          <Button
            className={styles.otherButtons}
            onClick={() => this.handleResumePageClick()}
            // To hold back the active class
            style={this.state.currentPage === "ResumePage"
                  ? {color: "#04b4e0"}
                  : {color: "#b5b6b7"}
              }
          >
            <span className="lnr lnr-graduation-hat"></span>
            <span className={styles.titleAnimate}>Resume</span>
          </Button>
          <Button
            className={styles.otherButtons}
            onClick={() => this.handlePortfolioPageClick()}
            // To hold back the active class
            style={this.state.currentPage === "PortfolioPage"
                  ? {color: "#04b4e0"}
                  : {color: "#b5b6b7"}
              }
          >
            <span className="lnr lnr-briefcase"></span>
            <span className={styles.titleAnimate}>Portfolio</span>
          </Button>
          <Button
            className={styles.otherButtons}
            onClick={() => this.handleBlogPageClick()}
            // To hold back the active class
            style={this.state.currentPage === "BlogPage"
                  ? {color: "#04b4e0"}
                  : {color: "#b5b6b7"}
              }
          >
            <span className="lnr lnr-book"></span>
            <span className={styles.titleAnimate}>Blog</span>
          </Button>
          <Button
            className={styles.previousButton}
            onClick={() => this.handleContactPageClick()}
            // To hold back the active class
            style={this.state.currentPage === "ContactPage"
                  ? {color: "#04b4e0"}
                  : {color: "#b5b6b7"}
              }
          >
            <span className="lnr lnr-envelope"></span>
            <span className={styles.titleAnimate}>Contact</span>
          </Button>
        </ButtonGroup>
        {/* Small screen menu section */}
        {this.state.menuClicked ? (
          <MenuComponent
            currentPage={this.state.currentPage}
            handleHomeClick={this.handleHomeClick}
            handleAboutMeClick={this.handleAboutMeClick}
            handleBlogPageClick={this.handleBlogPageClick}
            handleContactPageClick={this.handleContactPageClick}
            handlePortfolioPageClick={this.handlePortfolioPageClick}
            handleResumePageClick={this.handleResumePageClick}
          />
        ) : (
          <></>
        )}
        <div
          className={
            this.state.menuClicked
              ? styles.changeContainer
              : styles.menuBarContainer
          }
          onClick={() => this.handleSideMenuClick()}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </>
    );
  }
}
export default HomePage;
