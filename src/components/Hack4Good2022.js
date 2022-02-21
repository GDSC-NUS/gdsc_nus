import React, { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer.js";
import headerLogo from "../assets/Hack4Good2022/hfg2022_logo.svg";
import ourThemes from "../assets/Hack4Good2022/ourThemes.png";
import timeline from "../assets/Hack4Good2022/timeline.png";
import firstPrize from "../assets/Hack4Good2022/1st-prize.png";
import secondPrize from "../assets/Hack4Good2022/2nd-prize.png";
import thirdPrize from "../assets/Hack4Good2022/3rd-prize.png";
import firstWorkshop from "../assets/Hack4Good2022/workshop1.png";
import secondWorkshop from "../assets/Hack4Good2022/workshop2.png";
import thirdWorkshop from "../assets/Hack4Good2022/workshop3.png";
import organizer from "../assets/Hack4Good2022/organizer.png";
import sponsorGIC from "../assets/Hack4Good2022/sponsor-gic.svg";
import sponsorTW from "../assets/Hack4Good2022/sponsor-tw.png";
import sponsorSl2 from "../assets/Hack4Good2022/sponsor-sl2.png";
import sponsorQuest from "../assets/Hack4Good2022/sponsor-quest.png";
import FaqDropdownArrow from "../assets/Hack4Good2022/faq-dropdown-arrow.png";
import telegram from "../assets/Hack4Good2022/telegram.png";
import insta from "../assets/Hack4Good2022/insta.png";
import linkedin from "../assets/Hack4Good2022/linkedin.png";
import email from "../assets/Hack4Good2022/email.png";
import monk from "../assets/Hack4Good2022/panel-company-monk.png";
import better from "../assets/Hack4Good2022/panel-company-better.png";
import ogp from "../assets/Hack4Good2022/panel-company-ogp.png";
import jeremy from "../assets/Hack4Good2022/panel-jeremy.jpg";
import shawn from "../assets/Hack4Good2022/panel-shawn.jpg";
import alexis from "../assets/Hack4Good2022/panel-alexis.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Faq from "react-faq-component";
import { Image } from "semantic-ui-react";

const AboutComponent = () => (
  <section className="projects hack-section">
    <h2 className="hack-header">About HFG 2022</h2>
    <p className="hack-body" style={{ marginTop: "47px" }}>
      DSC NUS presents Hack For Good, a student-run hackathon which seeks to
      inspire students to learn and use technology for social causes. Our
      innovation challenge is unique in that we are posing real problem
      statements provided by NPOs in Singapore.
    </p>
    <p className="hack-body">
      Participating teams are expected to create technological prototypes as
      part of their solution to tackle their chosen statement and directly
      benefit the NPO backing it. We want to be practical and do real good with
      this initiative. We are hoping to foster collaborations between the club,
      corporate sponsors, NPOs and the students in this event!
    </p>
    <h2 className="hack-header">Our Themes</h2>
    <Image src={ourThemes} style={{ marginTop: "90px" }} />
    <a href="https://gdsc.community.dev/e/mp83tu/" target="_blank">
      <div className="white-btn-border">
        <div className="white-btn-content">
          <text className="white-btn-text">Register</text>
        </div>
      </div>
    </a>
  </section>
);

const ProblemStatementsComponent = () => (
  <section className="projects hack-section">
    <h2 className="hack-header">Problem Statements</h2>
    <p className="hack-body">
      To be released on the opening ceremony
      {/* Your team may choose from 1 of the 3 problem statements */}
    </p>
    {/* <div className="hack-card">
      <img src={logo} alt="NPO logo" className="hack-card__image" />
      <div className="hack-card__textbox">
        <h2 class="hack-card__header">NPO Name</h2>
        <p className="hack-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          rhoncus est pellentesque elit ullamcorper dignissim. Sed egestas
          egestas fringilla phasellus faucibus scelerisque. Aenean pharetra
          magna ac placerat vestibulum.
        </p>
      </div>
    </div>
    <div className="hack-card">
      <img src={logo} alt="NPO logo" className="hack-card__image" />
      <div className="hack-card__textbox">
        <h2 class="hack-card__header">NPO Name</h2>
        <p className="hack-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          rhoncus est pellentesque elit ullamcorper dignissim. Sed egestas
          egestas fringilla phasellus faucibus scelerisque. Aenean pharetra
          magna ac placerat vestibulum.
        </p>
      </div>
    </div>
    <div className="hack-card">
      <img src={logo} alt="NPO logo" className="hack-card__image" />
      <div className="hack-card__textbox">
        <h2 class="hack-card__header">NPO Name</h2>
        <p className="hack-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          rhoncus est pellentesque elit ullamcorper dignissim. Sed egestas
          egestas fringilla phasellus faucibus scelerisque. Aenean pharetra
          magna ac placerat vestibulum.
        </p>
      </div>
    </div> */}
  </section>
);

const ScheduleComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  let scheduleSectionClassName =
    tabIndex == 0
      ? "projects hack-section hack-schedule-background__first"
      : "projects hack-section hack-schedule-background__second";
  return (
    <section className={`${scheduleSectionClassName}`}>
      <h2 className="hack-header">Schedule</h2>
      <p style={{ fontWeight: "bold", fontSize: "2rem", color: "#8B0000" }}>
        *** 7th March is a Zoom event, while 19th March will be held
        face-to-face at Seminar Room 1 (SR 1)
      </p>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="hack-tabcontainer"
        selectedTabClassName="hack-tab__selected with-underline"
      >
        <TabList className="hack-tablist">
          <Tab className="hack-tab">7 Mar</Tab>
          <Tab className="hack-tab">19 Mar</Tab>
        </TabList>

        <TabPanel
          className="hack-tabpanel"
          selectedClassName="hack-tabpanel__selected"
        >
          <p className="hack-body__time">06:00pm - 06:05pm</p>
          <p className="hack-body__activity">DSC Introduction</p>
          <p className="hack-body__time">06:05pm - 06:15pm</p>
          <p className="hack-body__activity">HFG Introduction</p>
          <p className="hack-body__time">06:15pm - 06:45pm</p>
          <p className="hack-body__activity">
            Sharing of problem statements by NPOs
          </p>
          <p className="hack-body__time">06:45pm - 07:00pm</p>
          <p className="hack-body__activity">Sharing by sponsors</p>
        </TabPanel>
        <TabPanel
          className="hack-tabpanel"
          selectedClassName="hack-tabpanel__selected"
        >
          <p className="hack-body__time">01:30pm - 02:30pm</p>
          <p className="hack-body__activity">Event set-up</p>
          <p className="hack-body__time">02:30pm - 02:40pm</p>
          <p className="hack-body__activity">Participants' Arrival</p>
          <p className="hack-body__time">02:40pm - 02:50pm</p>
          <p className="hack-body__activity">Opening address by DSC Lead</p>
          <p className="hack-body__time">02:50pm - 03:00pm</p>
          <p className="hack-body__activity">Opening address by Prof Sharon</p>
          <p className="hack-body__time">03:00pm - 04:50pm</p>
          <p className="hack-body__activity">
            Final round pitching by finalists
          </p>
          <p className="hack-body__time">04:50pm - 05:10pm</p>
          <p className="hack-body__activity">Judges Deliberation</p>
          <p className="hack-body__time">05:10pm - 05:30pm</p>
          <p className="hack-body__activity">Annoucement of top 3 teams</p>
        </TabPanel>
      </Tabs>
    </section>
  );
};

const PrizesComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = [firstPrize, secondPrize, thirdPrize];
  return (
    <section className="projects hack-section">
      <h2 className="hack-header">Prizes</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        containerClass="hack-prize__carousel"
        itemClass="hack-prize__item"
      >
        {images.map((img) => (
          <Image src={img} className="hack-prize__image" />
        ))}
      </Carousel>
    </section>
  );
};

const WorkshopComponent = () => (
  <section className="projects hack-section">
    <h2 className="hack-header">Workshops</h2>
    <div className="hack-workshops">
      <img
        src={firstWorkshop}
        alt="workshop 1"
        className="hack-workshops__image"
      />
      <div className="hack-workshops__textbox">
        <h2 class="hack-workshops__header">Name of Workshop</h2>
        <p className="hack-workshops__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
          aliquam etiam erat velit scelerisque in dictum non. Faucibus pulvinar
          elementum integer enim neque volutpat ac tincidunt. Consequat id porta
          nibh venenatis cras sed.
        </p>
      </div>
    </div>
    <div className="hack-workshops">
      <div className="hack-workshops__textbox">
        <h2 class="hack-workshops__header" style={{ textAlign: "right" }}>
          Name of Workshop
        </h2>
        <p className="hack-workshops__body" style={{ textAlign: "right" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
          aliquam etiam erat velit scelerisque in dictum non. Faucibus pulvinar
          elementum integer enim neque volutpat ac tincidunt. Consequat id porta
          nibh venenatis cras sed.
        </p>
      </div>
      <img
        src={secondWorkshop}
        alt="workshop 2"
        className="hack-workshops__image"
      />
    </div>
    <div className="hack-workshops">
      <img
        src={thirdWorkshop}
        alt="workshop 2"
        className="hack-workshops__image"
      />
      <div className="hack-workshops__textbox">
        <h2 class="hack-workshops__header">Name of Workshop</h2>
        <p className="hack-workshops__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
          aliquam etiam erat velit scelerisque in dictum non. Faucibus pulvinar
          elementum integer enim neque volutpat ac tincidunt. Consequat id porta
          nibh venenatis cras sed.
        </p>
      </div>
    </div>
  </section>
);

const panelJudges = [
  {
    profileImg: jeremy,
    name: "Jeremy Au",
    accreditations: [
      "Head of Strategic Projects, Monk's Hill Ventures.",
      "Harvard MBA.",
      "Forbes 30 Under 30.",
      "Cofounder, Conjunct Consulting",
    ],
    companyImg: monk,
  },
  {
    profileImg: shawn,
    name: "Shawn Low",
    accreditations: [
      "Co-founder of Better.com, valued at $4 billion as of their Series D raise.",
      "Amongst Better’s accolades include LinkedIn's #1 Start-Up in the US, Forbes Fintech 50 and CNBC Disruptor 50.",
      "Former BCG Consultant",
    ],
    companyImg: better,
  },
  {
    profileImg: alexis,
    name: "Alexis Goh",
    accreditations: [
      "Software Engineer at Open Government Products.",
      "Stanford Master of Computer Science (Artificial Intelligence).",
      "Previously a computer vision researcher at Whiterabbit.ai",
    ],
    companyImg: ogp,
  },
];

const JudgesComponent = () => {
  return (
    <>
      <h2 className="hack-header">Judges</h2>
      <div className="hack-judges__panel">
        {panelJudges.map((judge) => (
          <JudgeComponent judge={judge} />
        ))}
      </div>
    </>
  );
};

const JudgeComponent = ({ judge }) => {
  return (
    <div class="hack-judges__judge">
      <img src={judge.profileImg} alt="judge" class="hack-judges__image" />
      <h4 class="hack-judges__name">{judge.name}</h4>
      <ul>
        {judge.accreditations.map((accreditation) => (
          <li className="hack-judges__accreditation">{accreditation}</li>
        ))}
      </ul>
      <img src={judge.companyImg} alt="company" class="hack-judges__company" />
    </div>
  );
};

const SponsorsComponent = () => (
  <>
    <h2 className="hack-header">Sponsors</h2>
    <h2 className="hack-sponsor__header with-underline">Gold</h2>
    <div className="hack-sponsor__group">
      <img
        src={sponsorGIC}
        alt="GIC"
        className="hack-sponsor__gold"
        style={{ transform: "scale(0.6)" }}
      />
      <img src={sponsorTW} alt="Thoughtworks" className="hack-sponsor__gold" />
    </div>
    <h2 className="hack-sponsor__header with-underline">Silver</h2>
    <div className="hack-sponsor__group">
      <img
        src={sponsorQuest}
        alt="QuestVentures"
        className="hack-sponsor__silver"
        style={{ transform: "scale(0.7)" }}
      />
    </div>
    <h2 className="hack-sponsor__header with-underline">Bronze</h2>
    <div className="hack-sponsor__group">
      <img
        src={sponsorSl2}
        alt="Sustainable Living Lab"
        className="hack-sponsor__bronze"
        style={{ transform: "scale(0.8)" }}
      />
    </div>
  </>
);

const OrganizerComponent = () => (
  <>
    <h2 className="hack-header">Organizer</h2>
    <Image src={organizer} />
  </>
);

const FaqsComponent = () => {
  const data = {
    rows: [
      {
        title: "I don't have a team. Can my project be done solo?",
        content: "No, a team should be composed of at least 2 members.",
      },
      {
        title:
          "I am registering alone / do not have a full team. How do I look for teammates?",
        content: `A Telegram group will be created to facilitate communication amongst the participants. Feel 
        free to look for team members there. More details will be released later.`,
      },
      {
        title:
          "I am not from Singapore. Am I eligible to participate in the hackathon?",
        content: `No, this hackathon is opened to participants currently residing in Singapore. As our finale 
        round is conducted face-to-face at NUS campus, we expect all shortlisted participants to turn 
        up physically.`,
      },
      {
        title: "Do I have to be a software developer to join this hackathon?",
        content: `No. We encourage participants with a diverse range of skillsets and experience. As with all 
        hackathons, there are non-technical elements as well.`,
      },
      {
        title: "How much does it cost to join this hackathon?",
        content: "Participation in Hack for Good is free-of-charge.",
      },
    ],
  };
  const config = {
    arrowIcon: <Image src={FaqDropdownArrow} className="hack-faq___arrow" />,
  };
  return (
    <>
      <h2 className="hack-header">FAQs</h2>
      <div className="hack-faq__container">
        <Faq data={data} config={config} />
      </div>
    </>
  );
};

const ContactUsComponent = () => (
  <header class="home-header hack-contact-us__bg">
    <h2 className="hack-header white-header">Contact Us</h2>
    <div className="hack-contact-us__links">
      <a href="https://t.me/dscnus" target="_blank">
        <img src={telegram} className="hack-contact-us__image" />
      </a>
      <hr className="hack-contact-us__white-line" />
      <a href="https://www.instagram.com/dscnus/" target="_blank">
        <img src={insta} className="hack-contact-us__image" />
      </a>
      <hr className="hack-contact-us__white-line" />
      <a href="https://www.linkedin.com/company/dscnus" target="_blank">
        <img src={linkedin} className="hack-contact-us__image" />
      </a>
      <hr className="hack-contact-us__white-line" />
      <a href="mailto:ops.head.dscnus@gmail.com" target="_blank">
        <img src={email} className="hack-contact-us__image" />
      </a>
    </div>
  </header>
);

const Hack4Good2022 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hack-background">
      <PageHeader />
      <header class="home-header hackathon-header">
        <Image src={headerLogo} className="hack-logo" />
        <a href="https://gdsc.community.dev/e/mp83tu/" target="_blank">
          <div className="blue-btn-border">
            <div className="blue-btn-content">
              <text className="blue-btn-text">Register</text>
            </div>
          </div>
        </a>
      </header>
      <AboutComponent />
      <ProblemStatementsComponent />
      <div className="hack-timeline">
        <Image src={timeline} className="hack-timeline__image" />
      </div>
      <ScheduleComponent />
      <PrizesComponent />
      {/* <WorkshopComponent /> */}
      <section className="projects hack-section">
        {/* <JudgesComponent /> */}
        <SponsorsComponent />
      </section>
      <section className="projects hack-section">
        <OrganizerComponent />
        <FaqsComponent />
      </section>
      <ContactUsComponent />
      <Footer />
    </div>
  );
};

export default Hack4Good2022;
