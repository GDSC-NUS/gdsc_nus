import getConfig from "next/config";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld, Link, YoutubeVideo } from "./components";
import { Carousel, CarouselCard } from "./components/carousel";
import DropdownMenu from "./components/Navbar/DropdownMenu";
import Navbar from "./components/Navbar/Navbar";
import TabPanel from "./components/Tabs/TabPanel"

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
    height: "number",
    width: "number",
    className: "string",
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
    autoplay: "boolean",
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
    className: "string",
    children: "slot",
  },
});

PLASMIC.registerComponent(DropdownMenu, {
  name: "DropdownMenu",
  props: {
    className: "string",
    clickedColor: "string",
    children: "slot",
  },
});

PLASMIC.registerComponent(TabPanel, {
  name: "TabPanel",
  props: {
    title: "string",
    children: "slot",
  },
});
