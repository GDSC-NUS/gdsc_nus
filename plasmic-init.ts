import getConfig from "next/config";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld, YoutubeVideo } from "./components";
import { Button, Carousel, CarouselCard } from "./components/carousel";

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
  }
})

PLASMIC.registerComponent(CarouselCard, {
  name: "CarouselCard",
  props: {
    className: "string",
    showButton: "boolean",
    image: "string",
    button: "slot",
  }
})

PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    className: "string",
    label: "string",
    href: "string",
  }
})