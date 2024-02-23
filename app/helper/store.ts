import { create } from "zustand";
import { StaticImageData } from "next/image";
import VintageBg from "../assets/vintage-bg.png";
import WeduBg from "../assets/wedu-bg.png";
import JavascriptIcon from "../assets/js-icon.png";
import ReactIcon from "../assets/react-icon.png";
import VueIcon from "../assets/vue-icon.png";
import TypeScriptIcon from "../assets/typescript-icon.png";
import NextIcon from "../assets/next-js-icon.png";
import TailwindIcon from "../assets/tailwind-css-icon.jpg";
import firebaseIcon from "../assets/firebase-icon.png";
import gitIcon from "../assets/git-icon.png";
import githubIcon from "../assets/github-icon.png";
import responsiveIcon from "../assets/responsive-icon.png";
import ZustandIcon from "../assets/zustand-icon.jpg";
import HTMLIcon from "../assets/html-icon.png";
import CSSIcon from "../assets/css-icon.png";
import WeDu from "../assets/wedu-card.png";
import VintageCarGrg from "../assets/VintageGarageWebsiteCardImg.png";
import MacasCookieHouse from "../assets/MacasCookieHse.png";

interface zustandStoreInterface {
  aboutMeToggle: boolean;
  setAboutMeToggle: (data: boolean) => void;
  myProjects: any;
  languages: languagesInterface[];
  frontEndFrameworks: frontEndFrameworksInterface[];
  dataBases: databaseInterface[];
  otherTools: otherToolsInterface[];
  formInputs: string[];
  sectionIds: string[];
  myWork: myWorkInterface[];
}

interface languagesInterface {
  title: string;
  name: string;
  icon: StaticImageData;
}

interface frontEndFrameworksInterface {
  name: string;
  icon: StaticImageData;
}

interface databaseInterface {
  name: string;
  icon: StaticImageData;
}

interface otherToolsInterface {
  name: string;
  icon: StaticImageData;
}

interface myWorkInterface {
  name: string;
  link: string;
  image: StaticImageData;
  source: string;
}

export const useZustandStore = create<zustandStoreInterface>((set, get) => ({
  aboutMeToggle: false,
  setAboutMeToggle: (data) => {
    set({
      aboutMeToggle: data,
    });
  },
  myProjects: [
    {
      name: "Vintage Car Garage",
      link: "https://vintage-car-garage-template.netlify.app",
      background: VintageBg,
    },
    {
      name: "Wedu Template",
      link: "https://wedu-template.netlify.app",
      background: WeduBg,
    },
  ],
  languages: [
    {
      title: "Languages",
      name: "Javascript",
      icon: JavascriptIcon,
    },
    {
      title: "",
      name: "HTML5",
      icon: HTMLIcon,
    },
    {
      title: "",
      name: "CSS",
      icon: CSSIcon,
    },
  ],
  frontEndFrameworks: [
    {
      name: "React.js",
      icon: ReactIcon,
    },
    {
      name: "Next.js",
      icon: NextIcon,
    },
    {
      name: "Vue.js",
      icon: VueIcon,
    },
    {
      name: "Typescript",
      icon: TypeScriptIcon,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
    },
    {
      name: "Zustand",
      icon: ZustandIcon,
    },
  ],
  dataBases: [
    {
      name: "Firebase",
      icon: firebaseIcon,
    },
  ],
  otherTools: [
    {
      name: "Git",
      icon: gitIcon,
    },
    {
      name: "Github",
      icon: githubIcon,
    },
    {
      name: "Responsive Web Design",
      icon: responsiveIcon,
    },
  ],
  formInputs: [
    "First_Name",
    "Last_Name",
    "Company",
    "Email_Address",
    "Phone_Number",
  ],
  sectionIds: ["Contact", "Stack"],
  myWork: [
    {
      name: "Wedu Template",
      link: "https://wedu-template.netlify.app/",
      image: WeDu,
      source: "https://github.com/JetX26/Wedu-Template",
    },
    {
      name: "Vintage Car Garage",
      link: "https://vintage-car-garage-template.netlify.app/",
      image: VintageCarGrg,
      source: "https://github.com/JetX26/Vintage-Car-Garage",
    },
    {
      name: "Macas Cookie House",
      link: "https://macascookiehouse.netlify.app/",
      image: MacasCookieHouse,
      source: "https://github.com/JetX26/Macas-Cookie-House",
    },
  ],
}));
