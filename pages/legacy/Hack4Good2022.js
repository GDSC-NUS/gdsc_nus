import React, { useState, useEffect } from "react";
import Footer from "../../components/Legacy/Footer";
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
      benefit the NPO backing it. Register with a{" "}
      <strong>team of 2 to 4</strong> today!
    </p>
    <h2 className="hack-header">Our Themes</h2>
    <Image
      src="/assets/Hack4Good2022/ourThemes.png"
      style={{ marginTop: "90px" }}
    />
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
      Your team may choose from 1 of the 3 problem statements
    </p>
    <div className="hack-card">
      <img
        src="/assets/Hack4Good2022/npo-raise.jpg"
        alt="NPO logo"
        className="hack-card__image"
      />
      <div className="hack-card__textbox">
        <h2 className="hack-card__header">raiSE SG</h2>
        <p className="hack-card__body">
          How should we build resilience among social enterprises to support
          them through these difficult times of COVID-19?
        </p>
      </div>
    </div>
    <div className="hack-card">
      <img
        src="/assets/Hack4Good2022/npo-habitatSg.jpg"
        alt="NPO logo"
        className="hack-card__image"
      />
      <div className="hack-card__textbox">
        <h2 className="hack-card__header">Habitat Singapore</h2>
        <p className="hack-card__body">
          What are some alternate ways we can continue to effectively engage the
          public about the need for decent housing worldwide amidst the
          pandemic?
        </p>
      </div>
    </div>
    <div className="hack-card">
      <img
        src="/assets/Hack4Good2022/npo-dot.png"
        alt="NPO logo"
        className="hack-card__image"
      />
      <div className="hack-card__textbox">
        <h2 className="hack-card__header">Daughters of Tomorrow</h2>
        <p className="hack-card__body">
          How can we get employers to be open and hire women who have less
          social mobility and may not have access to livelihood opportunities?
        </p>
      </div>
    </div>
  </section>
);

const ScheduleComponent = () => {
  const [tabIndex, setTabIndex] = useState(1);
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
            Problem statements sharing by NPOs
          </p>
          <p className="hack-body__time">06:45pm - 07:00pm</p>
          <p className="hack-body__activity">Sharing by sponsors</p>
        </TabPanel>
        <TabPanel
          className="hack-tabpanel"
          selectedClassName="hack-tabpanel__selected"
        >
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
          <p className="hack-body__activity">Announcement of top 3 teams</p>
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
  const images = [
    "/assets/Hack4Good2022/1st-prize.png",
    "/assets/Hack4Good2022/2nd-prize.png",
    "/assets/Hack4Good2022/3rd-prize.png",
  ];
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
        {images.map((img, index) => (
          <Image src={img} className="hack-prize__image" key={index} />
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
        src="/assets/Hack4Good2022/workshop1.png"
        alt="workshop 1"
        className="hack-workshops__image"
      />
      <div className="hack-workshops__textbox">
        <h2 className="hack-workshops__header">Name of Workshop</h2>
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
        <h2 className="hack-workshops__header" style={{ textAlign: "right" }}>
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
        src="/assets/Hack4Good2022/workshop2.png"
        alt="workshop 2"
        className="hack-workshops__image"
      />
    </div>
    <div className="hack-workshops">
      <img
        src="/assets/Hack4Good2022/workshop3.png"
        alt="workshop 2"
        className="hack-workshops__image"
      />
      <div className="hack-workshops__textbox">
        <h2 className="hack-workshops__header">Name of Workshop</h2>
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
    profileImg: "/assets/Hack4Good2022/panel-jeremy.jpg",
    name: "Jeremy Au",
    accreditations: [
      "Head of Strategic Projects, Monk's Hill Ventures.",
      "Harvard MBA.",
      "Forbes 30 Under 30.",
      "Cofounder, Conjunct Consulting",
    ],
    companyImg: "/assets/Hack4Good2022/panel-company-monk.png",
  },
  {
    profileImg: "/assets/Hack4Good2022/panel-shawn.jpg",
    name: "Shawn Low",
    accreditations: [
      "Co-founder of Better.com, valued at $4 billion as of their Series D raise.",
      "Amongst Better’s accolades include LinkedIn's #1 Start-Up in the US, Forbes Fintech 50 and CNBC Disruptor 50.",
      "Former BCG Consultant",
    ],
    companyImg: "/assets/Hack4Good2022/panel-company-better.png",
  },
  {
    profileImg: "/assets/Hack4Good2022/panel-alexis.jpg",
    name: "Alexis Goh",
    accreditations: [
      "Software Engineer at Open Government Products.",
      "Stanford Master of Computer Science (Artificial Intelligence).",
      "Previously a computer vision researcher at Whiterabbit.ai",
    ],
    companyImg: "/assets/Hack4Good2022/panel-company-ogp.png",
  },
];

const JudgesComponent = () => {
  return (
    <>
      <h2 className="hack-header">Judges</h2>
      <div className="hack-judges__panel">
        {panelJudges.map((judge, index) => (
          <JudgeComponent judge={judge} key={index} />
        ))}
      </div>
    </>
  );
};

const JudgeComponent = ({ judge }) => {
  return (
    <div className="hack-judges__judge">
      <img src={judge.profileImg} alt="judge" className="hack-judges__image" />
      <h4 className="hack-judges__name">{judge.name}</h4>
      <ul>
        {judge.accreditations.map((accreditation, index) => (
          <li className="hack-judges__accreditation" key={index}>
            {accreditation}
          </li>
        ))}
      </ul>
      <img
        src={judge.companyImg}
        alt="company"
        className="hack-judges__company"
      />
    </div>
  );
};

const goldSponsors = [
  {
    image: (
      <img
        src="/assets/Hack4Good2022/sponsor-dsta.png"
        alt="DSTA"
        className="hack-sponsor__gold"
      />
    ),
    content: (
      <>
        <p className="hack-workshops__body">
          The Defence Science and Technology Agency (DSTA) brings you to the
          forefront of cybersecurity, digital transformation and engineering.
          From working on software development and systems integration to
          unmanned technologies and artificial intelligence, you can have an
          impact on Singapore’s defence.
        </p>
        <p className="hack-workshops__body">
          Achieve your fullest potential with opportunities to build your
          technical expertise and hone your competencies in diverse domains. You
          can also expect an immersive learning experience, where you will work
          with bright minds and collaborate with global industry experts.
        </p>
        <p className="hack-workshops__body">
          DSTA is recognised as one of the top 10 employers in the Engineering
          &amp; IT sector, where our engineers and IT professionals work
          alongside procurement specialists to deliver state-of-the-art
          capabilities for Singapore’s peace and security.
        </p>
        <p className="hack-workshops__body">
          Internship opportunities and a meaningful career await you.
        </p>
      </>
    ),
  },
  {
    image: (
      <img
        src="/assets/Hack4Good2022/sponsor-gic.svg"
        alt="GIC"
        className="hack-sponsor__gold"
        style={{ transform: "scale(0.6)" }}
      />
    ),
    content: (
      <p className="hack-workshops__body" style={{ textAlign: "center" }}>
        GIC is one of the three investment entities in Singapore that manage the
        Government’s reserves, alongside the Monetary Authority of Singapore
        (MAS) and Temasek. They manage most of the Government’s financial
        assets, investing for the long term with an aim to preserve and enhance
        the international purchasing power of the funds placed in its care.
      </p>
    ),
  },
  {
    image: (
      <img
        src="/assets/Hack4Good2022/sponsor-tw.png"
        alt="Thoughtworks"
        className="hack-sponsor__gold"
        style={{ marginBottom: "20px" }}
      />
    ),
    content: (
      <>
        <p className="hack-workshops__body">
          Thoughtworks is a leading global technology consultancy that
          integrates strategy, design and software engineering to enable
          enterprises and technology disruptors across the globe to thrive as
          modern digital businesses.
        </p>
        <p className="hack-workshops__body">
          They leverage on their experience to improve clients’ ability to
          respond to change; utilize data assets to unlock new sources of value;
          create adaptable technology platforms that move with business
          strategies; and rapidly design, deliver and evolve exceptional digital
          products and experiences at scale.
        </p>
      </>
    ),
  },
];

const GoldSponsorsComponent = () => {
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
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      containerClass="hack-prize__carousel"
      itemClass="hack-prize__item"
    >
      {goldSponsors.map((sponsor, index) => {
        const { image, content } = sponsor;
        return (
          <div className="hack-judges__judge" key={index}>
            {image}
            <div className="hack-workshops__textbox" key={index}>
              {content}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

const SponsorsComponent = () => (
  <>
    <h2 className="hack-header">Introducing our Sponsors</h2>
    <GoldSponsorsComponent />
    <h2 className="hack-sponsor__header with-underline">Gold</h2>
    <div className="hack-sponsor__group">
      <img
        src="/assets/Hack4Good2022/sponsor-gic.svg"
        alt="GIC"
        className="hack-sponsor__gold"
        style={{ transform: "scale(0.6)" }}
      />
      <img
        src="/assets/Hack4Good2022/sponsor-tw.png"
        alt="Thoughtworks"
        className="hack-sponsor__gold"
      />
      <img
        src="/assets/Hack4Good2022/sponsor-dsta.png"
        alt="DSTA"
        className="hack-sponsor__gold"
        style={{ transform: "scale(0.8)" }}
      />
    </div>
    <h2 className="hack-sponsor__header with-underline">Silver</h2>
    <div className="hack-sponsor__group">
      <img
        src="/assets/Hack4Good2022/sponsor-quest.png"
        alt="QuestVentures"
        className="hack-sponsor__silver"
        style={{ transform: "scale(0.7)" }}
      />
      <img
        src="/assets/Hack4Good2022/sponsor-citibank.png"
        alt="Citibank"
        className="hack-sponsor__silver"
        style={{ transform: "scale(0.9)" }}
      />
    </div>
    <h2 className="hack-sponsor__header with-underline">Bronze</h2>
    <div className="hack-sponsor__group">
      <img
        src="/assets/Hack4Good2022/sponsor-sl2.png"
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
    <Image src="/assets/Hack4Good2022/organizer.png" />
  </>
);

const FaqsComponent = () => {
  const data = {
    rows: [
      {
        title: "I don't have a team. Can my project be done solo?",
        content:
          "No, a team should be composed of at least 2 members, up to a maximum of 4.",
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
      {
        title: "How would we submit our project?",
        content:
          "Project submission will be done via Devpost. Link will be sent via email to the participants.",
      },
      {
        title: "I am not from NUS. Am I eligible to participate in this event?",
        content:
          "Yes, all students from institutes of higher learning (junior colleges, polytechnics, NSFs, Universities) are welcomed.",
      },
      {
        title: "Are prizes given to each team member?",
        content:
          "Yes, each member of the winning team will receive one of the listed prizes.",
      },
    ],
  };
  const config = {
    arrowIcon: (
      <Image
        src="/assets/Hack4Good2022/faq-dropdown-arrow.png"
        className="hack-faq___arrow"
      />
    ),
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
  <header className="home-header hack-contact-us__bg">
    <h2 className="hack-header white-header">Contact Us</h2>
    <div className="hack-contact-us__links">
      <a href="https://t.me/dscnus" target="_blank">
        <img
          src="/assets/Hack4Good2022/telegram.png"
          className="hack-contact-us__image"
        />
      </a>
      <hr className="hack-contact-us__white-line" />
      <a href="https://www.instagram.com/dscnus/" target="_blank">
        <img
          src="/assets/Hack4Good2022/insta.png"
          className="hack-contact-us__image"
        />
      </a>
      <hr className="hack-contact-us__white-line" />
      <a href="https://www.linkedin.com/company/dscnus" target="_blank">
        <img
          src="/assets/Hack4Good2022/linkedin.png"
          className="hack-contact-us__image"
        />
      </a>
      <hr className="hack-contact-us__white-line" />
      <a href="mailto:ops.head.dscnus@gmail.com" target="_blank">
        <img
          src="/assets/Hack4Good2022/email.png"
          className="hack-contact-us__image"
        />
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
      {/* <PageHeader /> */}
      <header className="home-header hackathon-header">
        <Image
          src="/assets/Hack4Good2022/hfg2022_logo.svg"
          className="hack-logo"
        />
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
        <Image
          src="/assets/Hack4Good2022/timeline.png"
          className="hack-timeline__image"
        />
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
