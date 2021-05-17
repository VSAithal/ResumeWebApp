import React, { Component } from "react";
import { Container } from "react-bootstrap";
import mainStyles from "../../../assets/styles/mainStyle.module.css";
import { BlogBodyContainer } from "./BlogBodyContainer";
class BlogContainer extends Component {
  state = {
    // Blog object list
    blogList: [
      {
        id: 1,
        blogType: "Design",
        blogDate: "05 Mar 2020",
        blogURL: require("../../../assets/images/blogImages/blog_post_1.jpg")
          .default,
        blogDesc: "Why I Switched to Sketch For UI Design",
      },
      {
        id: 2,
        blogType: "UI",
        blogDate: "23 Feb 2020",
        blogURL: require("../../../assets/images/blogImages/blog_post_2.jpg")
          .default,
        blogDesc: "Best Practices for Animated Progress Indicators",
      },
      {
        id: 3,
        blogType: "Design",
        blogDate: "06 Feb 2020",
        blogURL: require("../../../assets/images/blogImages/blog_post_3.jpg")
          .default,
        blogDesc: "Designing the Perfect Feature Comparison Table",
      },
      {
        id: 3,
        blogType: "UI",
        blogDate: "07 Jan 2020",
        blogURL: require("../../../assets/images/blogImages/blog_post_4.jpg")
          .default,
        blogDesc: "An Overview of E-Commerce Platforms",
      },
    ],
  };
  render() {
    return (
      <Container className={mainStyles.contentArea}>
        {/* Blog content starts here */}
        <div className={mainStyles.pageTitle}>
          <h2 className={mainStyles.pageTitleHeading}>Blog</h2>
        </div>
        <BlogBodyContainer blogData={this.state.blogList} />
      </Container>
    );
  }
}
export default BlogContainer;
