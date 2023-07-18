import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { nanoid } from "nanoid";

const skillsUsingData = [
  { id: nanoid(), name: "HTML5", icon: <AiFillHtml5 />, iconColor: "#e34c26" },
  { id: nanoid(), name: "CSS3", icon: <FaCss3Alt />, iconColor: "#264de4" },
  {
    id: nanoid(),
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    iconColor: "#F0DB4F",
  },
  { id: nanoid(), name: "React js", icon: <FaReact />, iconColor: "#61dbfb" },
];
const skillsLearningData = [
  {
    id: nanoid(),
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    iconColor: "#007acc",
  },
  {
    id: nanoid(),
    name: "TailWind",
    icon: <BiLogoTailwindCss />,
    iconColor: "#4dc0b5",
  },
  {
    id: nanoid(),
    name: "nodejs",
    icon: <FaNodeJs />,
    iconColor: "#3C873A",
  },
  {
    id: nanoid(),
    name: "expressjs",
    icon: <SiExpress />,
    iconColor: "#303030",
  },
  {
    id: nanoid(),
    name: "mongodb",
    icon: <BiLogoMongodb />,
    iconColor: "#4DB33D",
  },
];

export { skillsUsingData, skillsLearningData };
