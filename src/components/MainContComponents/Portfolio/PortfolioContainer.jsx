import React, { Component } from "react";
import { Nav, Container, Row } from "react-bootstrap";
import styles from "../../../assets/styles/portfolio.module.css";
// Common styles link
import mainStyles from "../../../assets/styles/mainStyle.module.css";
import { PortfolioBodyContainer } from "./portfolioBodyContainer";
import { PortfolioNavBar } from "./portfolioNavBar";
class PortfolioContainer extends Component {
  state = {
    //   Total data
    portfolioList: [
      {
        id: 1,
        portName: "SoundCloud Audio",
        category: "SoundCloud",
        categoryName: "SoundCloud",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio1.jpg")
            .default,
        childIcon: "lnr lnr-volume-high",
      },
      {
        id: 2,
        portName: "Detailed Project 2",
        category: "Detailed",
        categoryName: "Detailed",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio2.jpg")
            .default,
        childIcon: "lnr lnr-file-empty",
      },
      {
        id: 3,
        portName: "Vimeo Video 1",
        category: "Vimeo",
        categoryName: "Vimeo Video",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio3.jpg")
            .default,
        childIcon: "lnr lnr-camera-video",
      },
      {
        id: 4,
        portName: "Detailed Project 1",
        category: "Detailed",
        categoryName: "Detailed",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio4.jpg")
            .default,
        childIcon: "lnr lnr-file-empty",
      },
      {
        id: 5,
        portName: "Mockup Design 1",
        category: "Mockups",
        categoryName: "Mockups",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio5.jpg")
            .default,
        childIcon: "fa fa-image",
      },
      {
        id: 6,
        portName: "YouTube Video 1",
        category: "YouTube",
        categoryName: "YouTube Video",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio6.jpg")
            .default,
        childIcon: "lnr lnr-camera-video",
      },
    ],
    // Filtered data based on the user's click
    currentData: [
      {
        id: 1,
        portName: "SoundCloud Audio",
        category: "SoundCloud",
        categoryName: "SoundCloud",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio1.jpg")
            .default,
        childIcon: "lnr lnr-volume-high",
      },
      {
        id: 2,
        portName: "Detailed Project 2",
        category: "Detailed",
        categoryName: "Detailed",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio2.jpg")
            .default,
        childIcon: "lnr lnr-file-empty",
      },
      {
        id: 3,
        portName: "Vimeo Video 1",
        category: "Vimeo",
        categoryName: "Vimeo Video",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio3.jpg")
            .default,
        childIcon: "lnr lnr-camera-video",
      },
      {
        id: 4,
        portName: "Detailed Project 1",
        category: "Detailed",
        categoryName: "Detailed",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio4.jpg")
            .default,
        childIcon: "lnr lnr-file-empty",
      },
      {
        id: 5,
        portName: "Mockup Design 1",
        category: "Mockups",
        categoryName: "Mockups",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio5.jpg")
            .default,
        childIcon: "fa fa-image",
      },
      {
        id: 6,
        portName: "YouTube Video 1",
        category: "YouTube",
        categoryName: "YouTube Video",
        portURL:
          require("../../../assets/images/portfolioImages/portfolio6.jpg")
            .default,
        childIcon: "lnr lnr-camera-video",
      },
    ],
    selectedCategory: "All",
  };

  // Filter the content list based on the nav click | Added by Vidyasagar Aithal
  handleListClick = (category) => {
    console.log("category", category);
    this.setState({ selectedCategory: category });
    if (category === "All") {
      this.setState({ currentData: this.state.portfolioList });
    } else if (category === "Detailed") {
      let filteredList = this.state.portfolioList.filter((item) => {
        return item.category === category;
      });
      this.setState({ currentData: filteredList });
    } else if (category === "SoundCloud") {
      let filteredList = this.state.portfolioList.filter((item) => {
        return item.category === category;
      });
      this.setState({ currentData: filteredList });
    } else if (category === "Mockups") {
      let filteredList = this.state.portfolioList.filter((item) => {
        return item.category === category;
      });
      this.setState({ currentData: filteredList });
    } else if (category === "Vimeo") {
      let filteredList = this.state.portfolioList.filter((item) => {
        return item.category === category;
      });
      this.setState({ currentData: filteredList });
    } else if (category === "YouTube") {
      let filteredList = this.state.portfolioList.filter((item) => {
        return item.category === category;
      });
      this.setState({ currentData: filteredList });
    }
  };
  render() {
    return (
      <>
        <Container className={mainStyles.contentArea}>
          {/* Portfolio content starts here */}
          <div className={mainStyles.pageTitle}>
            <h2 className={mainStyles.pageTitleHeading}>Portfolio</h2>
          </div>
          {/* Navbar starts here */}
          <PortfolioNavBar
            selectedCategory={this.state.selectedCategory}
            onNavListClick={this.handleListClick}
          />

          <Row className={styles.portfolioContainer}>
            <PortfolioBodyContainer filteredlist={this.state.currentData} />
          </Row>
        </Container>
      </>
    );
  }
}
export default PortfolioContainer;
