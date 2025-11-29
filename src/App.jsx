import Banner from "../components/Banner"
import Header from "../components/Header"
import HeaderArea from "../components/HeaderArea"
import Services from "../components/Services"


function App() {
  return (
    <>
  <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
  {/* ***** Preloader End ***** */}
  {/* ***** Header Area Start ***** */}
  <Header />
  {/* ***** Header Area End ***** */}
  <HeaderArea />
  <Banner />
  <Services />
  
  <div id="about" className="about-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="section-heading">
            <h4>
              About <em>What We Do</em> &amp; Who We Are
            </h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eismod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box-item">
                <h4>
                  <a href="#">Maintance Problems</a>
                </h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4>
                  <a href="#">24/7 Support &amp; Help</a>
                </h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4>
                  <a href="#">Fixing Issues About</a>
                </h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4>
                  <a href="#">Co. Development</a>
                </h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div className="col-lg-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eismod tempor idunte ut labore et dolore adipiscing magna.
              </p>
              <div className="gradient-button">
                <a href="#">Start 14-Day Free Trial</a>
              </div>
              <span>*No Credit Card Required</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-image">
            <img src="assets/images/about-right-dec.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="clients" className="the-clients">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading">
            <h4>
              Check What <em>The Clients Say</em> About Our App Dev
            </h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eismod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="naccs">
            <div className="grid">
              <div className="row">
                <div className="col-lg-7 align-self-center">
                  <div className="menu">
                    <div className="first-thumb active">
                      <div className="thumb">
                        <div className="row">
                          <div className="col-lg-4 col-sm-4 col-12">
                            <h4>David Martino Co</h4>
                            <span className="date">30 November 2021</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span className="category">Financial Apps</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 col-12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span className="rating">4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumb">
                        <div className="row">
                          <div className="col-lg-4 col-sm-4 col-12">
                            <h4>Jake Harris Nyo</h4>
                            <span className="date">29 November 2021</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span className="category">Digital Business</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 col-12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span className="rating">4.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumb">
                        <div className="row">
                          <div className="col-lg-4 col-sm-4 col-12">
                            <h4>May Catherina</h4>
                            <span className="date">27 November 2021</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span className="category">
                              Business &amp; Economics
                            </span>
                          </div>
                          <div className="col-lg-4 col-sm-4 col-12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span className="rating">4.7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumb">
                        <div className="row">
                          <div className="col-lg-4 col-sm-4 col-12">
                            <h4>Random User</h4>
                            <span className="date">24 November 2021</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span className="category">New App Ecosystem</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 col-12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span className="rating">3.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="last-thumb">
                      <div className="thumb">
                        <div className="row">
                          <div className="col-lg-4 col-sm-4 col-12">
                            <h4>Mark Amber Do</h4>
                            <span className="date">21 November 2021</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span className="category">Web Development</span>
                          </div>
                          <div className="col-lg-4 col-sm-4 col-12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span className="rating">4.3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <ul className="nacc">
                    <li className="active">
                      <div>
                        <div className="thumb">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="client-content">
                                <img src="assets/images/quote.png" alt="" />
                                <p>
                                  “Lorem ipsum dolor sit amet, consectetur
                                  adpiscing elit, sed do eismod tempor idunte ut
                                  labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing
                                  elit massive big blasta.”
                                </p>
                              </div>
                              <div className="down-content">
                                <img
                                  src="assets/images/client-image.jpg"
                                  alt=""
                                />
                                <div className="right-content">
                                  <h4>David Martino</h4>
                                  <span>CEO of David Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="client-content">
                                <img src="assets/images/quote.png" alt="" />
                                <p>
                                  “CTO, Lorem ipsum dolor sit amet, consectetur
                                  adpiscing elit, sed do eismod tempor idunte ut
                                  labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing
                                  elit massive big blasta.”
                                </p>
                              </div>
                              <div className="down-content">
                                <img
                                  src="assets/images/client-image.jpg"
                                  alt=""
                                />
                                <div className="right-content">
                                  <h4>Jake H. Nyo</h4>
                                  <span>CTO of Digital Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="client-content">
                                <img src="assets/images/quote.png" alt="" />
                                <p>
                                  “May, Lorem ipsum dolor sit amet, consectetur
                                  adpiscing elit, sed do eismod tempor idunte ut
                                  labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing
                                  elit massive big blasta.”
                                </p>
                              </div>
                              <div className="down-content">
                                <img
                                  src="assets/images/client-image.jpg"
                                  alt=""
                                />
                                <div className="right-content">
                                  <h4>May C.</h4>
                                  <span>Founder of Catherina Co.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="client-content">
                                <img src="assets/images/quote.png" alt="" />
                                <p>
                                  “Lorem ipsum dolor sit amet, consectetur
                                  adpiscing elit, sed do eismod tempor idunte ut
                                  labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing
                                  elit massive big blasta.”
                                </p>
                              </div>
                              <div className="down-content">
                                <img
                                  src="assets/images/client-image.jpg"
                                  alt=""
                                />
                                <div className="right-content">
                                  <h4>Random Staff</h4>
                                  <span>Manager, Digital Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="thumb">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="client-content">
                                <img src="assets/images/quote.png" alt="" />
                                <p>
                                  “Mark, Lorem ipsum dolor sit amet, consectetur
                                  adpiscing elit, sed do eismod tempor idunte ut
                                  labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing
                                  elit massive big blasta.”
                                </p>
                              </div>
                              <div className="down-content">
                                <img
                                  src="assets/images/client-image.jpg"
                                  alt=""
                                />
                                <div className="right-content">
                                  <h4>Mark Am</h4>
                                  <span>CTO, Amber Do Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="pricing" className="pricing-tables">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading">
            <h4>
              We Have The Best Pre-Order <em>Prices</em> You Can Get
            </h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eismod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item-regular">
            <span className="price">$12</span>
            <h4>Standard Plan App</h4>
            <div className="icon">
              <img src="assets/images/pricing-table-01.png" alt="" />
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>20 TB of Storage</li>
              <li className="non-function">Life-time Support</li>
              <li className="non-function">Premium Add-Ons</li>
              <li className="non-function">Fastest Network</li>
              <li className="non-function">More Options</li>
            </ul>
            <div className="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item-pro">
            <span className="price">$25</span>
            <h4>Business Plan App</h4>
            <div className="icon">
              <img src="assets/images/pricing-table-01.png" alt="" />
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>50 TB of Storage</li>
              <li>Life-time Support</li>
              <li>Premium Add-Ons</li>
              <li className="non-function">Fastest Network</li>
              <li className="non-function">More Options</li>
            </ul>
            <div className="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item-regular">
            <span className="price">$66</span>
            <h4>Premium Plan App</h4>
            <div className="icon">
              <img src="assets/images/pricing-table-01.png" alt="" />
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>120 TB of Storage</li>
              <li>Life-time Support</li>
              <li>Premium Add-Ons</li>
              <li>Fastest Network</li>
              <li>More Options</li>
            </ul>
            <div className="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer id="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading">
            <h4>
              Join our mailing list to receive the news &amp; latest trends
            </h4>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-3">
          <form id="search" action="#" method="GET">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <fieldset>
                  <input
                    type="address"
                    name="address"
                    className="email"
                    placeholder="Email Address..."
                    autoComplete="on"
                    required=""
                  />
                </fieldset>
              </div>
              <div className="col-lg-6 col-sm-6">
                <fieldset>
                  <button type="submit" className="main-button">
                    Subscribe Now <i className="fa fa-angle-right" />
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>Contact Us</h4>
            <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
            <p>
              <a href="#">010-020-0340</a>
            </p>
            <p>
              <a href="#">info@company.co</a>
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Free Apps</a>
              </li>
              <li>
                <a href="#">App Engine</a>
              </li>
              <li>
                <a href="#">Programming</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">App News</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">App Dev Team</a>
              </li>
              <li>
                <a href="#">Digital Web</a>
              </li>
              <li>
                <a href="#">Normal Apps</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget">
            <h4>About Our Company</h4>
            <div className="logo">
              <img src="assets/images/white-logo.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="copyright-text">
            <p>
              Copyright © 2022 Chain App Dev Company. All Rights Reserved.
              <br />
              Design:{" "}
              <a
                href="https://templatemo.com/"
                target="_blank"
                title="css templates"
              >
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default App
