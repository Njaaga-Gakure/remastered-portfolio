import { styled } from "styled-components";
import ToggleDarkBtns from "./ToggleDarkBtns";
import { useAppContext } from "../contexts/app_context";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  BsFillWrenchAdjustableCircleFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

const Sidebar = () => {
  const { isDarkMode, closeSidebar } = useAppContext();
  console.log(isDarkMode);
  return (
    <Wrapper className="sidebar-container">
      <div
        className={
          isDarkMode ? "sidebar sidebar-dark" : "sidebar sidebar-light"
        }
      >
        <ul
          className={
            isDarkMode ? "sidebar-links sidebar-links-dark" : "sidebar-links"
          }
        >
          <li>
            <a onClick={closeSidebar} href="#home">
              {" "}
              <BiHome /> home
            </a>
          </li>
          <li>
            <a onClick={closeSidebar} href="#about">
              <CgProfile /> about
            </a>
          </li>
          <li>
            <a onClick={closeSidebar} href="#skills">
              <BsFillWrenchAdjustableCircleFill /> skills
            </a>
          </li>
          <li>
            <a onClick={closeSidebar} href="#portfolio">
              <BsBriefcaseFill /> portfolio
            </a>
          </li>
          <li>
            <a onClick={closeSidebar} href="#contacts">
              <MdContactPhone /> contacts
            </a>
          </li>
        </ul>
        <ToggleDarkBtns />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    padding: 1rem 0;
    width: 400px;
    margin: 2rem auto;
    border-radius: var(--border-radius-3);
    box-shadow: var(--shadow-1);
    z-index: 10;
  }
  .sidebar-light {
    background: rgba(0, 0, 0, 0.8);
  }
  .sidebar-dark {
    background: rgba(255, 255, 255, 0.8);
  }
  .sidebar-links {
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--gray-50);
      transition: var(--transition);
      padding: 0.25rem 2rem;
      &:hover {
        background: var(--primary-700);
        padding-left: 2.5rem;
        color: var(--gray-50);
      }
      svg {
        font-size: 1.25rem;
      }
    }
  }
  .sidebar-links-dark {
    a {
      color: var(--gray-900);
    }
  }
  .sidebar {
    .toggle-dark-btn-container {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  @media (max-width: 576px) {
    .sidebar {
      width: 90vw;
    }
  }
`;
export default Sidebar;
