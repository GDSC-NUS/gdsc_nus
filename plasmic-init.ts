import getConfig from "next/config";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import CountDownTimerDays from "./components/CountdownTimer/CountdownTimerDays";
import CountDownTimerHours from "./components/CountdownTimer/CountdownTimerHours";
import CountDownTimerMinutes from "./components/CountdownTimer/CountdownTimerMinutes";
import Outline from "./components/Outline";
import { HelloWorld, Link } from "./components";
import { Popup } from "./components/Popup";
import { Carousel, CarouselCard } from "./components/carousel";
import { DropdownMenu, Navbar } from "./components/Navbar";
import { registerYouTube, youtubeMeta } from "@plasmicpkgs/react-youtube";
import Workshop from "./components/workshop/Workshop";
import WorkshopCard from "./components/workshop/WorkshopCard";
import TitleBox from "./components/Dropdownable/TitleBox";
import TagFilter from "./components/workshop/TagFilter";

const { publicRuntimeConfig } = getConfig();
const {
  NEXT_PUBLIC_PLASMIC_PREVIEW,
  NEXT_PUBLIC_PLASMIC_PROJECT_ID,
  NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN,
} = publicRuntimeConfig;

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: NEXT_PUBLIC_PLASMIC_PROJECT_ID, // ID of a project you are using
      token: NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN, // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: NEXT_PUBLIC_PLASMIC_PREVIEW === "false" ? false : true,
});

PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    className: "string",
    verbose: "boolean",
    children: "slot",
  },
});

registerYouTube(PLASMIC, youtubeMeta);

PLASMIC.registerComponent(Popup, {
  name: "Popup",
  props: {
    preview: "boolean",
    windowClassName: "string",
    popupBoxClassName: "string",
    clickableClassName: "string",
    clickable: "slot",
    popupBox: "slot",
  },
});

PLASMIC.registerComponent(Carousel, {
  name: "Carousel",
  props: {
    className: "string",
    children: "slot",
    showIndicators: "boolean",
    IndicatorsClassName: "string",
    showArrows: "boolean",
    ArrowsClassName: "string",
    leftArrowChild: "slot",
    rightArrowChild: "slot",
    autoplay: "boolean",
    activeKey: {
      type: "choice",
      options: (props) => {
        return Array(props.children!.length)
          .fill(0)
          .map((_, index) => index.toString());
      },
      editOnly: true,
    },
  },
});

PLASMIC.registerComponent(CarouselCard, {
  name: "CarouselCard",
  props: {
    className: "string",
    children: "slot",
  },
});

PLASMIC.registerComponent(Link, {
  name: "Link",
  props: {
    link: "string",
    openInNewTab: "boolean",
    className: "string",
    children: "slot",
  },
});

PLASMIC.registerComponent(Navbar, {
  name: "Navbar",
  props: {
    children: "slot",
    className: "string",
    editMobile: "boolean",
    mobileWidthRange: "number",
  },
});

PLASMIC.registerComponent(DropdownMenu, {
  name: "DropdownMenu",
  props: {
    children: "slot",
    className: "string",
    menuTitle: "string",
  },
});

PLASMIC.registerComponent(Workshop, {
  name: "Workshop",
  props: {
    title: "string",
    children: "slot",
    className: "string",
    showTags: "boolean",
  },
});

PLASMIC.registerComponent(WorkshopCard, {
  name: "WorkshopCard",
  props: {
    className: "string",
    title: "string",
    date: "string",
    excerpt: "string",
    tags: "string",
    image: "slot",
    popupSpeakers: "slot",
    popupImage: "slot",
    popupDescription: "slot",
    preview: "boolean",
  },
});

PLASMIC.registerComponent(CountDownTimerDays, {
  name: "CountDownTimerDays",
  props: {
    className: "string",
    endDate: "string",
  },
});

PLASMIC.registerComponent(CountDownTimerHours, {
  name: "CountDownTimerHours",
  props: {
    className: "string",
    endDate: "string",
  },
});

PLASMIC.registerComponent(CountDownTimerMinutes, {
  name: "CountDownTimerMinutes",
  props: {
    className: "string",
    endDate: "string",
  },
});

PLASMIC.registerComponent(Outline, {
  name: "Outline",
  props: {
    className: "string",
    children: "slot",
    largeSize: "boolean",
  },
});

PLASMIC.registerComponent(TitleBox, {
  name: "TitleBox",
  props: {
    className: "string",
    children: "slot",
    title: "slot",
  },
});
