import getConfig from "next/config";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld, Link, YoutubeVideo } from "./components";
import { Popup } from "./components/Popup";
import { Carousel, CarouselCard } from "./components/carousel";
import { DropdownMenu, Navbar } from "./components/Navbar";

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

PLASMIC.registerComponent(YoutubeVideo, {
  name: "YoutubeVideo",
  props: {
    videoId: "string",
    className: "string",
  },
});

PLASMIC.registerComponent(Popup, {
  name: "Popup",
  props: {
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
