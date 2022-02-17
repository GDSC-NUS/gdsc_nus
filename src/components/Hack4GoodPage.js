import React, { useState } from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer.js";
import logo from "../assets/ProjectsPage/hglogo.png";
import headerLogo from "../assets/ProjectsPage/HFG_Logo.png";
import ourThemes from "../assets/Hack4GoodPage/ourThemes.png";
import timeline from "../assets/Hack4GoodPage/timeline.png";
import firstPrize from "../assets/Hack4GoodPage/1st-prize.png";
import secondPrize from "../assets/Hack4GoodPage/2nd-prize.png";
import thirdPrize from "../assets/Hack4GoodPage/3rd-prize.png";
import firstWorkshop from "../assets/Hack4GoodPage/workshop1.png";
import secondWorkshop from "../assets/Hack4GoodPage/workshop2.png";
import thirdWorkshop from "../assets/Hack4GoodPage/workshop3.png";
import organizer from "../assets/Hack4GoodPage/organizer.png";
// import sponsorOsa from "../assets/Hack4GoodPage/sponsor-osa.png";
import sponsorGIC from "../assets/Hack4GoodPage/sponsor-gic.jpg";
import sponsorTW from "../assets/Hack4GoodPage/sponsor-tw.jpg";
import sponsorSl2 from "../assets/Hack4GoodPage/sponsor-sl2.png";
import sponsorQuest from "../assets/Hack4GoodPage/sponsor-quest.png";
import FaqDropdownArrow from "../assets/Hack4GoodPage/faq-dropdown-arrow.png";
// import monk from "../assets/Hack4GoodPage/panel-company-monk.png";
// import better from "../assets/Hack4GoodPage/panel-company-better.png";
// import ogp from "../assets/Hack4GoodPage/panel-company-ogp.png";
// import jeremy from "../assets/Hack4GoodPage/panel-jeremy.jpg";
// import shawn from "../assets/Hack4GoodPage/panel-shawn.jpg";
// import alexis from "../assets/Hack4GoodPage/panel-alexis.jpg";
// import gift from "../assets/Hack4GoodPage/ps-gift.jpg";
// import girls from "../assets/Hack4GoodPage/ps-girls.png";
// import access from "../assets/Hack4GoodPage/ps-access.jpg";
// import booklet from "../assets/Hack4GoodPage/booklet.pdf";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Faq from "react-faq-component";
import { Grid, Icon, Image, Divider, Button } from "semantic-ui-react";
// import PdfRenderer from "./PdfRenderer";

// const panelJudges = [
//   {
//     profileImg: jeremy,
//     name: "Jeremy Au",
//     accreditations: [
//       "Head of Strategic Projects, Monk's Hill Ventures.",
//       "Harvard MBA.",
//       "Forbes 30 Under 30.",
//       "Cofounder, Conjunct Consulting",
//     ],
//     companyImg: monk,
//   },
//   {
//     profileImg: shawn,
//     name: "Shawn Low",
//     accreditations: [
//       "Co-founder of Better.com, valued at $4 billion as of their Series D raise.",
//       "Amongst Better’s accolades include LinkedIn's #1 Start-Up in the US, Forbes Fintech 50 and CNBC Disruptor 50.",
//       "Former BCG Consultant",
//     ],
//     companyImg: better,
//   },
//   {
//     profileImg: alexis,
//     name: "Alexis Goh",
//     accreditations: [
//       "Software Engineer at Open Government Products.",
//       "Stanford Master of Computer Science (Artificial Intelligence).",
//       "Previously a computer vision researcher at Whiterabbit.ai",
//     ],
//     companyImg: ogp,
//   },
// ];

// const PanelJudgeComponent = ({ judge }) => (
//   <div class="h4g-panel-judges-component">
//     <img
//       src={judge.profileImg}
//       alt="judge"
//       class="h4g-panel-judges-component-profile-img"
//     />
//     <h4 class="h4g-panel-judges-component-name">{judge.name}</h4>
//     <ul>
//       {judge.accreditations.map((accreditation) => (
//         <li>{accreditation}</li>
//       ))}
//     </ul>
//     <img
//       src={judge.companyImg}
//       alt="company"
//       style={{ width: "50%" }}
//       class="h4g-panel-judges-component-company-img"
//     />
//   </div>
// );

// const problemStatements = [
//   {
//     img: access,
//     description: (
//       <p>
//         <b>Access</b> is a ground-up organisation providing non-academic
//         opportunities to underserved students through externships and
//         mentorships.
//       </p>
//     ),
//     problem:
//       "Traditionally, industry interest and understanding have been assessed by looking at past experiences on the resumes of youths. How can we better reflect their interest and understanding of different industries and jobs for better job matching?",
//   },
//   {
//     img: girls,
//     description: (
//       <p>
//         Founded in 2007 by Adriana Gascoigne, <b>Girls in Tech</b> is a
//         nonprofit organization dedicated to eliminating the gender gap in tech.
//       </p>
//     ),
//     problem:
//       "How do we get young girls interested in STEM (Science, Technology, Engineering, and Mathematics) from an early age? (Ideas for solutions can be STEM-related gamification, toys, video content etc.)",
//   },
//   {
//     img: gift,
//     description: (
//       <p>
//         <b>Gift-It-Forward</b> is a social enterprise in Singapore. It aims to
//         create more meaningful gifts and teach kids about generosity and helping
//         others, while simplifying the event planning and gift giving experience
//         for parents.
//       </p>
//     ),
//     problem:
//       "Kids, who receive most of these gifts through birthday celebrations should also learn to think about the impact this has on their environment and community. Design a solution that makes gifting more meaningful for both the recipient and communities in need, while reducing gift waste.",
//   },
//   {
//     img: sponsorOsa,
//     description: (
//       <p>
//         The <b>NUS Office of Student Affairs (OSA)</b> seizes every opportunity
//         and dedicates itself to provide and support the NUS student community in
//         all aspects of student life outside-of-the-classroom, including student
//         services, housing admission and residential life, student organisations,
//         student leaders’ training, community engagement, integration and service
//         learning, student support and wellness, as well as disability support.
//       </p>
//     ),
//     problem:
//       "How can we engage youths to adopt and use Asset-Based Community Development or a strength-based approach for community projects instead of the usual problem/gaps-based approach?",
//     problem2:
//       "How can we tap on technology to get youths to learn, understand and appreciate diversity/difference and participate in creating a more inclusive space?",
//   },
// ];

// const ProblemStatementsComponent = ({ problemStatement }) => (
//   <div class="h4g-problem-statement-component card-horizontal projects__project">
//     <div class="h4g-problem-statement-component-img-container">
//       <img alt="problem statement" src={problemStatement.img} />
//     </div>
//     <div class="h4g-problem-statement-description-container">
//       {problemStatement.description}
//       <Divider />
//       {problemStatement.problem}

//       {problemStatement.problem2 && (
//         <>
//           <br />
//           <br />
//           {problemStatement.problem2}
//         </>
//       )}
//     </div>
//   </div>
// );

const AboutComponent = () => (
  <section className="projects hack-section">
    <h2 className="hack-header">About HFG 2022</h2>
    <p className="hack-body" style={{ marginTop: "47px" }}>
      In collaboration with Conjunct Consulting, and sponsored by NUS OSA, DSC
      SoC presents Hack For Good, a student-run hackathon which seeks to inspire
      students to learn and use technology for social causes. Our innovation
      challenge is unique in that we are posing real problem statements provided
      by NPOs in Singapore.
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
    <div className="white-btn-border">
      <div className="white-btn-content">
        <a
          href="https://www.naver.com"
          target="_blank"
          className="white-btn-text"
        >
          Register
        </a>
      </div>
    </div>
  </section>
);

const ProblemStatementsComponent = () => (
  <section className="projects hack-section">
    <h2 className="hack-header">Problem Statements</h2>
    <p className="hack-body">
      Your team may choose from 1 of the 3 problem statements
    </p>
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
          <p className="hack-body__time">10:00am - 11:00am</p>
          <p className="hack-body__activity">Loren Ipsum</p>
          <p className="hack-body__time">11:00am - 12:00pm</p>
          <p className="hack-body__activity">Lorem ipsum dolor sit amet</p>
          <p className="hack-body__time">12:00pm - 01:00pm</p>
          <p className="hack-body__activity">Lorem ipsum dolor</p>
          <p className="hack-body__time">01:00pm - 02:00pm</p>
          <p className="hack-body__activity">Loren Ipsum</p>
          <p className="hack-body__time">02:00pm - 03:00pm</p>
          <p className="hack-body__activity">Lorem ipsum dolor sit amet</p>
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

const JudgesAndSponsorsComponent = () => (
  <section className="projects hack-section">
    <h2 className="hack-header">Judges</h2>
    <h2 className="hack-header">Sponsors</h2>
    <h2 className="hack-sponsor__header with-underline">Gold</h2>
    <div className="hack-sponsor__group">
      <img src={sponsorGIC} alt="GIC" className="hack-sponsor__gold" />
      <img src={sponsorTW} alt="Thoughtworks" className="hack-sponsor__gold" />
    </div>
    <h2 className="hack-sponsor__header with-underline">Silver</h2>
    <div className="hack-sponsor__group">
      <img
        src={sponsorQuest}
        alt="QuestVentures"
        className="hack-sponsor__silver"
      />
    </div>
    <h2 className="hack-sponsor__header with-underline">Bronze</h2>
    <div className="hack-sponsor__group">
      <img
        src={sponsorSl2}
        alt="Sustainable Living Lab"
        className="hack-sponsor__bronze"
      />
    </div>
  </section>
);

const OrganizerFaqsContactUsComponent = () => {
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
  const styles = {
    //rowContentTextSize: "25px",
    //rowContentPaddingBottom: "20px",
  };
  const config = {
    arrowIcon: <Image src={FaqDropdownArrow} className="hack-faq___arrow" />,
  };
  return (
    <section className="projects hack-section">
      <h2 className="hack-header">Organizer</h2>
      <Image src={organizer} />
      <h2 className="hack-header">FAQs</h2>
      <div className="hack-faq__container">
        <Faq data={data} styles={styles} config={config} />
      </div>
      <h2 className="hack-header">Contact Us</h2>
    </section>
  );
};

const Hack4GoodPage = () => {
  return (
    <div className="hack-background">
      <PageHeader />
      <header class="home-header hackathon-header">
        <Image src={headerLogo} />
        <div className="black-btn-border">
          <div className="black-btn-content">
            <a
              href="https://www.google.com"
              target="_blank"
              className="black-btn-text"
            >
              Register
            </a>
          </div>
        </div>
      </header>
      <AboutComponent />
      <ProblemStatementsComponent />
      <div className="hack-timeline">
        <Image src={timeline} className="hack-timeline__image" />
      </div>
      <ScheduleComponent />
      <PrizesComponent />
      <WorkshopComponent />
      <JudgesAndSponsorsComponent />
      <OrganizerFaqsContactUsComponent />
      {/* <h3 class="h4g-section-title">Problem Statements</h3>
      <div class="h4g-problem-statements-container">
        {problemStatements.map((problemStatement) => (
          <ProblemStatementsComponent problemStatement={problemStatement} />
        ))}
      </div>
      <h3 class="h4g-section-title">Panel Judges</h3>
      <Grid
        stackable
        centered
        padded
        columns={3}
        className="h4g-panel-judges-component-grid"
      >
        {panelJudges.map((judge) => (
          <Grid.Column
            centered
            tablet={16}
            largeScreen={5}
            widescreen={5}
            class="h4g-panel-judges-component-grid-column"
          >
            <PanelJudgeComponent judge={judge} />
          </Grid.Column>
        ))}
      </Grid>
      <div className="h4g-sponsor-logos">
        <h3>Sponsors:</h3>
        <Image.Group size="small">
          <Image src={sponsorOsa} className="h4g-sponsor-osa-logo" />
          <Image src={sponsorQuest} />
          <Image src={sponsorSl2} />
          <Image src={sponsorPaypal} />
        </Image.Group>
      </div>
      <PdfRenderer file={booklet} /> */}
      <Footer />
    </div>
  );
};

export default Hack4GoodPage;
