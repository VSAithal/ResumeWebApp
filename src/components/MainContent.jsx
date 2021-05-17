import React from "react";
import { AboutMeContainer } from "./MainContComponents/AboutMeContainer";
import { HomeContainer } from "./MainContComponents/HomeContainer";
import ResumeContainer from "./MainContComponents/ResumeComponents/ResumeContainer";
import PortfolioContainer from "./MainContComponents/Portfolio/PortfolioContainer";
import BlogContainer from "./MainContComponents/BlogComponents/BlogContainer";
import { ContactContainer } from "./MainContComponents/ContactComponent/ContactContainer";
export const MainContent = ({ personalDetails, currentPage }) => {
  var nextPage;
  if (currentPage == "Home") {
    nextPage = <HomeContainer />;
  } else if (currentPage == "AboutMe") {
    nextPage = <AboutMeContainer personalDetails={personalDetails} />;
  } else if (currentPage == "ResumePage") {
    nextPage = <ResumeContainer />;
  } else if (currentPage == "PortfolioPage") {
    nextPage = <PortfolioContainer />;
  } else if (currentPage == "BlogPage") {
    nextPage = <BlogContainer />;
  } else if (currentPage == "ContactPage") {
    nextPage = <ContactContainer />;
  }
  return <>{nextPage}</>;
};
