import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiNextui,
  SiReactquery,
  SiRedux,
  SiGit,
  SiGithub,
  SiOpenzeppelin,
  SiMui,
  SiMongodb,
} from "react-icons/si";
import { IoShield } from "react-icons/io5";
import { PiGraph } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { TbStackMiddle } from "react-icons/tb";

export const techData = [
  {
    category: "Languages & Frameworks",
    items: [
      {
        icon: <SiNextdotjs />,
        title: "Next.js",
        id: "1",
        href: "https://nextjs.org",
      },
      {
        icon: <SiReact />,
        title: "React.js",
        id: "2",
        href: "https://react.dev",
      },
      {
        icon: <SiTypescript />,
        title: "TypeScript",
        id: "3",
        href: "https://www.typescriptlang.org",
      },
      {
        icon: <SiJavascript />,
        title: "JavaScript",
        id: "4",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: <SiHtml5 />,
        title: "HTML",
        id: "5",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        icon: <SiCss3 />,
        title: "CSS",
        id: "6",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  {
    category: "State & Data Management",
    items: [
      {
        icon: <SiOpenzeppelin />,
        title: "zustand",
        id: "15",
        href: "https://github.com/pmndrs/zustand",
      },
      {
        icon: <SiRedux />,
        title: "React Context",
        id: "14",
        href: "https://react.dev/reference/react/createContext",
      },
      {
        icon: <SiReactquery />,
        title: "React Query",
        id: "13",
        href: "https://tanstack.com/query",
      },
      {
        icon: <PiGraph />,
        title: "RESTful API",
        id: "17",
        href: "https://restfulapi.net/",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { icon: <SiGit />, title: "Git", id: "18", href: "https://git-scm.com/" },
      {
        icon: <SiGithub />,
        title: "GitHub",
        id: "19",
        href: "https://github.com/farzankln",
      },
      {
        icon: <IoShield />,
        title: "nextAuth.js",
        id: "20",
        href: "https://next-auth.js.org/",
      },
      {
        icon: <SiMongodb />,
        title: "MongoDB",
        id: "21",
        href: "https://cloud.mongodb.com/",
      },
    ],
  },
  {
    category: "Styling & Libraries",
    items: [
      {
        icon: <SiTailwindcss />,
        title: "Tailwind CSS",
        id: "8",
        href: "https://tailwindcss.com",
      },
      {
        icon: <SiBootstrap />,
        title: "Bootstrap",
        id: "7",
        href: "https://getbootstrap.com/",
      },
      {
        icon: <SiMui />,
        title: "Material-UI",
        id: "9",
        href: "https://mui.com/",
      },
      {
        icon: <SiFramer />,
        title: "Framer Motion",
        id: "10",
        href: "https://www.framer.com/motion/",
      },
      {
        icon: <SiShadcnui />,
        title: "shadcn",
        id: "11",
        href: "https://ui.shadcn.com/",
      },
      {
        icon: <SiNextui />,
        title: "nextUI",
        id: "12",
        href: "https://nextui.org/",
      },
    ],
  },

  {
    category: "Advanced Concepts",
    items: [
      {
        icon: <MdOutlineWeb />,
        title: "Responsive Design",
        id: "22",
        href: "https://www.w3schools.com/html/html_responsive.asp",
      },
      {
        icon: <IoDocumentOutline />,
        title: "Technical Documentation",
        id: "23",
        href: "https://de.wikipedia.org/wiki/Technische_Dokumentation",
      },
      {
        icon: <TbStackMiddle />,
        title: "middleware",
        id: "24",
        href: "https://nextjs.org/docs/14/pages/building-your-application/routing/middleware",
      },
    ],
  },
];
