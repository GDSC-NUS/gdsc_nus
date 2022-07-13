import React, { Component } from "react";
import NextLink from "next/link";
import { Divider } from "semantic-ui-react";
import PageHeader from "../../components/Legacy/PageHeader";
import Footer from "../../components/Legacy/Footer";
import { appOpen } from "../../components/Legacy/utils";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <PageHeader />
        <header class="home-header">
          <div class="home-header__text-box">
            <h1 class="heading-primary">
              <span class="heading-primary--main">Developer Student Clubs</span>
              <Divider />
              <span class="heading-primary--sub">
                #TECHFOR
                <span style={{ color: "#ea3f31" }}>G</span>
                <span style={{ color: "#4285f4" }}>O</span>
                <span style={{ color: "#f4b400" }}>O</span>
                <span style={{ color: "#0f9d58" }}>D</span>
              </span>
            </h1>
          </div>
        </header>
        {appOpen && (
          <section className="section-home">
            <div className="section-home__content section-home__content-reverse">
              <div class="section-home__image-box">
                <img
                  className="section-home__image"
                  alt="Sign Up"
                  src="/assets/HomePage/signup.png"
                />
              </div>
              <div class="section-home__text-box">
                <h2 class="heading-secondary">
                  Sign ups for AY21/22 are open!
                </h2>
                <p>
                  We are so excited to welcome you to the DSC family!
                  <br />
                  Find out more about our teams and roles below.
                  <br />
                  <br />
                  Sign ups close 21 August 2359.
                </p>
                {/* href="/recruitment" */}
                <NextLink href="#">
                  <div className="btn btn-yellow">Apply now</div>
                </NextLink>
              </div>
            </div>
          </section>
        )}
        <section className="section-home section-blue">
          <div className="section-home__content">
            <div class="section-home__text-box">
              <h2 class="heading-secondary">Who Are We?</h2>
              <p>
                DSC comprises of members who are passionate learners of
                technology and aims to make a difference in the society.
                <br />
                We come together to push our mission of #TechforGood.
              </p>
              {/* href="/team" */}
              <NextLink href="#">
                <div className="btn btn-yellow">Our Team</div>
              </NextLink>
            </div>
            <div className="section-home__image-box">
              <img
                src="/assets/HomePage/whoarewe.jpg"
                alt="Who Are We"
                className="section-home__image"
              />
            </div>
          </div>
        </section>
        <section className="section-home">
          <div className="section-home__content section-home__content-reverse">
            <div class="section-home__image-box">
              <img
                className="section-home__image"
                alt="What We Do"
                src="/assets/HomePage/whatwedo.jpg"
              />
            </div>
            <div class="section-home__text-box">
              <h2 class="heading-secondary">What we do?</h2>
              <p>
                By equipping our members with the relevant skills and industry
                knowledge, we aspire our members to give back for the betterment
                of the community.{" "}
              </p>
              {/* href="/about" */}
              <NextLink href="#">
                <div className="btn btn-yellow">About Us</div>
              </NextLink>
            </div>
          </div>
        </section>
        <section className="section-vertical">
          <h2 class="heading-secondary recent-events__header">Recent Events</h2>
          <div className="recents">
            {/* href="/hack4good" */}
            <NextLink href="#">
              <div className="recents__card cursor-pointer">
                <div className="recents__image-box">
                  <img
                    alt="Hack for good 2020"
                    src="/assets/HomePage/hackforgood2021.png"
                  />
                </div>
                <h2>Hack for Good 2021</h2>
              </div>
            </NextLink>
            {/* href="/events" */}
            <NextLink href="#">
              <div className="recents__card cursor-pointer">
                <div className="recents__image-box">
                  <img
                    alt="Tech for Good Workshops"
                    src="/assets/HomePage/workshop.jpg"
                  />
                </div>
                <h2>Tech for Good Workshops</h2>
              </div>
            </NextLink>
            {/* href="/legacy/past-webinar" */}
            <NextLink href="#">
              <div className="recents__card cursor-pointer">
                <div className="recents__image-box">
                  <img alt="Industry Talks" src="/assets/HomePage/talk.jpg" />
                </div>
                <h2>Industry Talks</h2>
              </div>
            </NextLink>
            {/* href="/hack4good2020" */}
            <NextLink href="#">
              <div className="recents__card cursor-pointer">
                <div className="recents__image-box">
                  <img
                    alt="Hack for good 2020"
                    src="/assets/HomePage/hackforgood.jpeg"
                  />
                </div>
                <h2>Hack for Good 2020</h2>
              </div>
            </NextLink>
            <div className="recents__card">
              <div className="recents__image-box">
                <img
                  alt="SEA Google Developers Submit"
                  src="/assets/HomePage/event1.jpg"
                />
              </div>
              <h2>SEA Google Developer Submit</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="Core Team" src="/assets/HomePage/event2.jpg" />
              </div>
              <h2>Launch of DSC Core Team</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img
                  alt="Grand Launch Party"
                  src="/assets/HomePage/event3.jpg"
                />
              </div>
              <h2>DSC Grand Launch Party!</h2>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
