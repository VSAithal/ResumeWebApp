import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
} from 'react-bootstrap';
import styles from '../../assets/styles/mainContainer.module.css';
// Common styles link
import mainStyles from '../../assets/styles/mainStyle.module.css';

import testimonialImage1 from '../../assets/images/testimonial-1.jpg';
import testimonialImage2 from '../../assets/images/testimonial-2.jpg';
import client1 from '../../assets/images/client-1.png';
import client2 from '../../assets/images/client-2.png';
import client3 from '../../assets/images/client-3.png';
import client4 from '../../assets/images/client-4.png';
export const AboutMeContainer = ({personalDetails}) => {
    console.log("personalDetails --- About me",personalDetails)
    return(
        personalDetails.map((outputItem,i) => 
            <Container className={mainStyles.contentArea} key={i}>
                {/* About me content starts here */}
                    <div className={mainStyles.pageTitle}>
                        <h2 className={mainStyles.pageTitleHeading}>About
                        <span className={mainStyles.pageTitle_blueSpan}> Me</span>
                        </h2>
                    </div>
                {/* Personal details starts here */}
                <Row >
                  <Col xs={12} md={7} xs={12} sm={12}>
                     <p>
                         {outputItem.aboutMe}
                     </p>
                  </Col>
                  <Col xs={12} md={5}sm={12}>
                    <Row>
                        {/* Age Row */}
                       <Col xs={4} md={4} sm={4} className={styles.personalTitle}>
                            <label>Age</label>
                       </Col>
                       <Col xs={8} md={8} sm={8}>
                          {outputItem.Age}
                       </Col>
                       {/* Residence Row */}
                       <Col xs={4} md={4} sm={4} className={styles.personalTitle}>
                            <label>Residence</label>
                       </Col>
                       <Col xs={8} md={8} sm={8}>
                          {outputItem.Residence}
                       </Col>
                        {/* Address  Row */}
                        <Col xs={4} md={4} sm={4} className={styles.personalTitle}>
                            <label>Address</label>
                       </Col>
                       <Col xs={8} md={8} sm={8}>
                          {outputItem.Address}
                       </Col>
                        {/* e-mail  Row */}
                        <Col xs={4} md={4} sm={4} className={styles.personalTitle}>
                            <label>e-mail</label>
                       </Col>
                       <Col xs={8} md={8} sm={8}>
                          {outputItem.email}
                       </Col>
                       {/* Phone   Row */}
                       <Col xs={4} md={4} sm={4} className={styles.personalTitle}>
                            <label>Phone </label>
                       </Col>
                       <Col xs={8} md={8} sm={8}>
                          {outputItem.phone}
                       </Col>
                    </Row>
                  </Col>
                </Row>

                {/* What I do content starts here */}
                <div className="mt-5">
                    <div className={mainStyles.pageSubTitle}>
                        <h3 className={mainStyles.pageTitleSubHeading}>What
                            <span className={mainStyles.pageTitle_blueSpan}> I Do</span>
                        </h3>
                   </div>
                   {/* What I do Items starts here */}
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Subtitle>
                                        <span className="lnr lnr-store lnrIcons" ></span>
                                    </Card.Subtitle>
                                    <Card.Title className={styles.subHeadings}>Ecommerce</Card.Title>
                                    <Card.Text>
                                        {outputItem.Ecommerce}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Subtitle>
                                        <span className="lnr lnr-pencil lnrIcons" ></span>
                                    </Card.Subtitle>
                                    <Card.Title className={styles.subHeadings}>Copywriting</Card.Title>
                                    <Card.Text>
                                        {outputItem.Copywriting}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Subtitle>
                                        <span className="lnr lnr-laptop-phone lnrIcons"></span>
                                    </Card.Subtitle>
                                    <Card.Title className={styles.subHeadings}>Web Design</Card.Title>
                                    <Card.Text>
                                        {outputItem.webDesign}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Subtitle>
                                    <span className="lnr lnr-flag lnrIcons"></span>
                                    </Card.Subtitle>
                                    <Card.Title className={styles.subHeadings}>Management</Card.Title>
                                    <Card.Text>
                                        {outputItem.management}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                   {/* What I do Items ends here */}
                </div>
                {/* Testimonials content starts here */}
                <div className="mt-5 my-5">
                    <div className={mainStyles.pageSubTitle}>
                        <h3 className={mainStyles.pageTitleSubHeading}>Testimonials
                        </h3>
                   </div>
                   <div className="pull-right carouselButtonGroup">
                        <Button variant="outline-primary" size="sm" className={styles.carouselButton}><i className="fa fa-angle-left"></i></Button>
                        <Button variant="outline-primary" size="sm" className={styles.carouselButton}><i className="fa fa-angle-right"></i></Button>
                 </div>
                </div>
                {/* Individual testimony */}
                <Row>
                    <Col md={6} xs={12}>
                        <Card className={styles.testimonialContainer}>
                            <div className={styles.testimonialImageDiv}>
                              <Card.Img variant="top" src={testimonialImage1} className={styles.testimonialImage}/>
                            </div>
                            <Card.Body>
                                {/* <Card.Title></Card.Title> */}
                                <Card.Text className="mt-5">
                                Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.
                                </Card.Text>
                                <div>
                                    <Card.Title className={styles.testimonialAuthor}>Julia Hickman</Card.Title>
                                    <Card.Title className={styles.testimonialAuthorInfo}>Omni Source</Card.Title>
                                    <div className={styles.testimonialAuthorQuote}>
                                         <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xs={12}>
                        <Card className={styles.testimonialContainer}>
                                <div className={styles.testimonialImageDiv}>
                                <Card.Img variant="top" src={testimonialImage2} className={styles.testimonialImage}/>
                                </div>
                                <Card.Body>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text className="mt-5">
                                    Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.
                                    </Card.Text>
                                    <div>
                                        <Card.Title className={styles.testimonialAuthor}>Robert Watkins</Card.Title>
                                        <Card.Title className={styles.testimonialAuthorInfo}>Endicott Shoes</Card.Title>
                                        <div className={styles.testimonialAuthorQuote}>
                                            <i className="fa fa-quote-right"></i>
                                         </div>
                                    </div>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
                {/* Clients Section starts */}
                <div className="mt-5 my-3">
                    <div className={mainStyles.pageSubTitle}>
                        <h3 className={mainStyles.pageTitleSubHeading}>Clients
                        </h3>
                   </div>
                   <div className="pull-right carouselButtonGroup">
                        <Button variant="outline-primary" size="sm" className={styles.carouselButton}><i className="fa fa-angle-left"></i></Button>
                        <Button variant="outline-primary" size="sm" className={styles.carouselButton}><i className="fa fa-angle-right"></i></Button>
                 </div>
                </div>
                <Row className="ml-1">
                    <Col md={3} xs={6}>
                        <a href="#">
                             <img src={client1} alt="logo" title="Logo" className={styles.clientsCarouselImages}/>
                        </a>
                    </Col>
                    <Col md={3} xs={6}>
                        <a href="#">
                             <img src={client2} alt="logo" title="Logo" className={styles.clientsCarouselImages}/>
                        </a>
                    </Col>
                    <Col md={3} xs={6} className="d-none d-sm-block">
                        <a href="#">
                             <img src={client3} alt="logo" title="Logo" className={styles.clientsCarouselImages}/>
                        </a>    
                    </Col>
                    <Col md={3} xs={6} className="d-none d-sm-block">
                         <a href="#">
                             <img src={client4} alt="logo" title="Logo" className={styles.clientsCarouselImages}/>
                        </a>    
                    </Col>
                 </Row>
                {/* Pricing Section starts */}
                <div className="mt-5 my-3">
                    <div className={mainStyles.pageSubTitle}>
                        <h3 className={mainStyles.pageTitleSubHeading}>Pricing
                        </h3>
                   </div>
                </div>
                <Row>
                    <Col md={6} xs={10} sm={10}>
                        <Card className={styles.priceCard}>
                            <Card.Body>
                                <p style={{display: 'flex', justifyContent: 'center'}}>Silver</p>
                                <Card.Title className={styles.priceTag}>$67</Card.Title>
                                <Card.Title className={styles.monthDescription}>per month</Card.Title>
                                <Button variant="outline-secondary" className={styles.silverButton}>Free Trial</Button>{' '}
                                <Card.Text  className={styles.priceContent}>
                                Lorem ipsum dolor Pellentesque scelerisque Morbi eu sagittis
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xs={10} sm={10}>
                        <Card className={styles.priceCard}>
                            <Card.Body>
                                <p className={styles.goldSubTitle}>Gold</p>
                                <Card.Title className={styles.priceTag}>$128</Card.Title>
                                <Card.Title className={styles.monthDescription}>per month</Card.Title>
                                <Button variant="outline-primary" className={styles.goldButton}>Free Trial</Button>{' '}
                                <Card.Text className={styles.priceContent}>
                                Lorem ipsum dolor Pellentesque scelerisque Morbi eu sagittis Donec non diam
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* Fun facts Section starts */}
                <div className="mt-5 my-3">
                    <div className={mainStyles.pageSubTitle}>
                    <h3 className={mainStyles.pageTitleSubHeading}>Fun
                            <span className={mainStyles.pageTitle_blueSpan}> Facts</span>
                        </h3>
                   </div>
                </div>
                <Row>
                    <Col md={4} xs={10} sm={10}>
                        <Card className={styles.funFactsCard}>
                            <Card.Body>
                                <Card.Title className={styles.funFactIcons}>
                                  <span className="lnr lnr-heart"></span>
                                </Card.Title>
                                <Card.Subtitle className={styles.funFactsTitle}>Happy Clients</Card.Subtitle>
                                <Card.Subtitle className={styles.funFactsSubTitle}>578</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={10} sm={10}>
                        <Card className={styles.funFactsCard}>
                            <Card.Body>
                                <Card.Title className={styles.funFactIcons}>
                                 <span className="lnr lnr-clock"></span>
                                </Card.Title>
                                <Card.Subtitle className={styles.funFactsTitle}>Working Hours</Card.Subtitle>
                                <Card.Subtitle className={styles.funFactsSubTitle}>4,780</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={10} sm={10}>
                        <Card className={styles.funFactsCard}>
                            <Card.Body>
                                <Card.Title className={styles.funFactIcons}>
                                    <span className="lnr lnr-star"></span>
                                </Card.Title>
                                <Card.Title className={styles.funFactsTitle} >Awards Won</Card.Title>
                                <Card.Subtitle className={styles.funFactsSubTitle}>15</Card.Subtitle>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    )
}
