import React, { Component } from "react";
import {} from "semantic-ui-react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import different from "../assets/AboutUsPage/different.jpg";

class AboutUsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {<PageHeader />}
        <header className="home-header about-header">
          <div className="home-header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">About DSC</span>
            </h1>
            <section>
              <div className="about-header__content">
                <div className="mission-vision">
                  <h2 className="mission-vision__header">Our Mission</h2>
                  <p className="mission-vision__paragraph">
                    To cultivate empathetic & passionate learners of technology
                    while equipping them with relevant skills and industry
                    insights.
                  </p>
                </div>
                <div className="mission-vision">
                  <h2 className="mission-vision__header">Our Vision</h2>
                  <p className="mission-vision__paragraph">
                    We strive for the betterment of society through technology.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </header>
        <section className="section-home">
          <div className="section-home__content">
            <div className="section-home__image-box">
              <div>
                <iframe
                  title="Developer Student Clubs Leaders Summit - Goa 2018"
                  frameborder="0"
                  border="0"
                  allowfullscreen
                  aria-label="YouTube Video, Developer Student Clubs Leaders Summit - Goa 2018"
                  src="https://www.youtube.com/embed/DcN_hcHXR_0"
                  className="section-home__video"
                ></iframe>
              </div>
            </div>
            <div className="section-home__text-box">
              <h2 className="heading-secondary">What is DSC?</h2>
              <p>
                Developer Student Clubs (DSC) is a programme presented by Google
                Developers. DSCs are university-based community groups where
                students can experience personal growth through developing
                solutions for their communities. Google does not own or manage
                DSCs- they are run by the Lead from each university. Watch the
                video to learn more!
              </p>
            </div>
          </div>
        </section>
        <section className="section-home">
          <div className="section-home__content">
            <div className="section-home__text-box">
              <h2 className="heading-secondary">How is DSC different?</h2>
              <p>
                We set ourselves apart from the other DSC chapters by focusing
                on developing diverse solutions (not restricted to mobile and
                apps) for Non-Profit Organizations. Areas we are interested in
                include but are not limited to: the environment, education,
                elderly, children, healthcare, special needs and anything
                related to benefiting communities.
              </p>
            </div>
            <div className="section-home__image-box">
              <img
                className="section-home__image"
                alt="What We Do"
                src={different}
              />
            </div>
          </div>
        </section>
        <section className="section-vertical section-green">
          <div className="section-vertical__text-box">
            <h1 className="heading-secondary">How did we start?</h1>
            <p>
              Our Lead (Jason Yip) signed up to represent Developer Student Club
              NUS and was fortunate enough attend the DSC Southeast Asia Summit
              in Kuala Lumpur in 2019. The 7 Leads from Singapore had the
              opportunity to meet other Leads from SEA and Googlers from all
              over the world! Check out the life-changing event.
            </p>
          </div>
          <div className="section-vertical__image-box">
            <iframe
              title="Developer Student Clubs Leaders Summit - Goa 2018"
              frameborder="0"
              src="https://www.youtube.com/embed/lBMvXIsTVDQ"
              allowfullscreen
              border="0"
              class="section-home__video"
            ></iframe>
          </div>
        </section>
        {<Footer />}
      </div>
    );
  }
}

export default AboutUsPage;
