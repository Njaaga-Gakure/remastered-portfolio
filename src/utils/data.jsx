import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const skillsUsingData = [
  { id: 1, name: "HTML5", icon: <AiFillHtml5 />, iconColor: "#e34c26" },
  { id: 2, name: "CSS3", icon: <FaCss3Alt />, iconColor: "#264de4" },
  {
    id: 3,
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    iconColor: "#F0DB4F",
  },
  { id: 4, name: "React js", icon: <FaReact />, iconColor: "#61dbfb" },
];
const skillsLearningData = [
  {
    id: 1,
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    iconColor: "#007acc",
  },
  {
    id: 2,
    name: "TailWind",
    icon: <BiLogoTailwindCss />,
    iconColor: "#4dc0b5",
  },
  {
    id: 3,
    name: "nodejs",
    icon: <FaNodeJs />,
    iconColor: "#3C873A",
  },
  { id: 4, name: "expressjs", icon: <SiExpress />, iconColor: "#303030" },
  { id: 5, name: "mongodb", icon: <BiLogoMongodb />, iconColor: "#4DB33D" },
];

export { skillsUsingData, skillsLearningData };
