import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import roomlogo from './assets/room-5.jpg'
import arrow from './assets/arrow_img.png'
import group from './assets/Group 24.png'
import group2 from './assets/group25.png'
const Home = ({ toggle_home }) => {
    return (
        <div className="App">
            <div className="upper_part">
                <div className="mob" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px', maxWidth: "1140px", margin: '5px auto' }}>
                    <a href="home.html" class="navbar-brand">Event<span className="colored">stan</span></a>
                    <Button style={{ backgroundColor: "#F47824" }} onClick={() => toggle_home()}>Become a Professional</Button>
                </div>
                <div className="banner-content">
                    <h2 className="banner-title">We don’t just create events we create memories</h2>
                    <p className="banner-text">EVENTSTAN is where all your personal and corporate event needs meet under one roof. You choose, and we deliver.</p>
                </div>
            </div>
            <div className="bg-dark-yellow">
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} md={5}>
                                <div className="video-section">
                                    <img class="img-fluid w-100 border-radius" src={roomlogo} />
                                </div>
                            </Col>
                            <Col xs={12} md={5} style={{ paddingTop: '25px' }}>
                                <h2 class="title">Who we are?</h2>
                                <p class="p-text">
                                    We are the perfect amalgam of technology and event planning &amp; organizing. We know what it takes to create a successful event. We do all the work so you can enjoy and share the jubilant mood with everyone. We make sure your event checklist is complete with all the shenanigans.
                                    .
                  </p>
                                <p class="p-text">We bring life to every event, we are EVENTSTAN.</p>
                            </Col>
                        </Row>

                    </Container>

                </div>
            </div>
            <div className="application_sec">
                <Container>
                    <h2 style={{ color: 'black', textAlign: 'center' }} className="title">What makes us different from other <br />  applications?</h2>
                    {/* <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
          </div> */}
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div class="card">
                            <img src={arrow} alt="" class="mb-4" />
                            <h3> Broad spectrum of events  </h3>
                            <p>
                                EVENTSTAN is all about variety and versatility. Contact us for birthdays, weddings, anniversaries, corporate events, live concerts, product launch, and even college events.
                </p>
                        </div>
                        <div class="card">
                            <img src={arrow} alt="" class="mb-4" />
                            <h3> Broad spectrum of events  </h3>
                            <p>
                                EVENTSTAN is all about variety and versatility. Contact us for birthdays, weddings, anniversaries, corporate events, live concerts, product launch, and even college events.
                </p>
                        </div>
                        <div class="card">
                            <img src={arrow} alt="" class="mb-4" />
                            <h3> Broad spectrum of events  </h3>
                            <p>
                                EVENTSTAN is all about variety and versatility. Contact us for birthdays, weddings, anniversaries, corporate events, live concerts, product launch, and even college events.
                </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="joining-us-bg space">
                <Container>
                    <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Benifits of joining us</h2>
                    {/* <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
          </div> */}
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div class="card cardy">
                            <img src={group} alt="" class="mb-4" />
                            <h3> Complete peace of mind  </h3>
                            <p>
                                EVENTSTAN is all about punctuality and commitment, that’s what we strive for.
                </p>
                        </div>
                        <div class="card cardy">
                            <img src={group} alt="" class="mb-4" />
                            <h3> Complete peace of mind  </h3>
                            <p>
                                EVENTSTAN is all about punctuality and commitment, that’s what we strive for.
                </p>
                        </div>
                        <div class="card cardy">
                            <img src={group} alt="" class="mb-4" />
                            <h3> Complete peace of mind  </h3>
                            <p>
                                EVENTSTAN is all about punctuality and commitment, that’s what we strive for.
                </p>
                        </div>
                        <div class="card cardy">
                            <img src={group} alt="" class="mb-4" />
                            <h3> Complete peace of mind  </h3>
                            <p>
                                EVENTSTAN is all about punctuality and commitment, that’s what we strive for.
                </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="application_sec para3" >
                <Container>
                    <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Want to join us as a professional?</h2>
                    <br />
                    <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }} onClick={() => toggle_home()}>Become a Professional</Button>
                    </div>
                    <br />
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div class="card">
                            <img src={group2} alt="" class="mb-4" />
                            <h3>Introduce yourself </h3>
                            <p>
                                Who you are, what you do, what do you love the most about what you do, things that matter.
                </p>
                        </div>
                        <div class="card">
                            <img src={group2} alt="" class="mb-4" />
                            <h3> Introduce yourself </h3>
                            <p>
                                Who you are, what you do, what do you love the most about what you do, things that matter.
                </p>
                        </div>
                        <div class="card">
                            <img src={group2} alt="" class="mb-4" />
                            <h3> Introduce yourself </h3>
                            <p>
                                Who you are, what you do, what do you love the most about what you do, things that matter.
                </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="Contact_sec mr-0">
                <Container className="contact_container">
                    <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Contact us</h2>
                    <br />
                    <form>
                        <div class="form-group">
                            <label>Full name</label>
                            <input type="text" class="form-control" placeholder="Enter your name" />
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label>Mobile number</label>
                                    <input type="number" class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label >Email ID</label>
                                    <input type="email" class="form-control" placeholder="Enter Email ID " />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label >Message</label>
                            <textarea class="form-control" rows="6" placeholder="Write here"></textarea>
                        </div>
                        <Button className="btn">Submit</Button>
                    </form>
                </Container>
            </div>

        </div>
    );
}

export default Home;
