import React, { Component } from "react";
import styles from "../assets/styles/footer.module.css";
class FooterComponent extends Component {
  render() {
    return (
      <>
        <footer className="text-center">
          <div className={styles.footerBody}>
            © 2020 &nbsp; All rights reserved.
          </div>
        </footer>
      </>
    );
  }
}

export default FooterComponent;
