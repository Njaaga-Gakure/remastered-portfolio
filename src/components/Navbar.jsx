import Logo from "./Logo";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { useAppContext } from "../contexts/app_context";
import ToggleDarkBtns from "./ToggleDarkBtns";

const Navbar = () => {
  const { isDarkMode, isSidebarOpen, openSidebar, closeSidebar } =
    useAppContext();
  return (
    <Wrapper>
      <div className="center-container">
        <div className="nav-header">
          <Logo />
          {isSidebarOpen ? (
            <button onClick={closeSidebar} className="toggle-btn">
              <RxCross1 />
            </button>
          ) : (
            <button onClick={openSidebar} className="toggle-btn">
              <AiOutlineMenu />
            </button>
          )}
        </div>
        <ul className={isDarkMode ? "nav-links nav-links-light" : "nav-links"}>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
        </ul>
        <ToggleDarkBtns />
      </div>
      {isSidebarOpen && <Sidebar />}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  padding: 1rem 0;
  height: 5rem;
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toggle-btn {
    background: transparent;
    padding: 0.5rem;
    border-color: transparent;
    transition: var(--transition);
    color: var(--primary-700);
    cursor: pointer;
    &:hover {
      color: var(--primary-600);
    }
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links,
  .toggle-dark-btn-container {
    display: none;
  }
  .sidebar-container {
    margin: 0;
    position: absolute;
    top: 3rem;
    right: 2rem;
  }
  @media (min-width: 992px) {
    .toggle-btn {
      display: none;
    }
    .center-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      letter-spacing: var(--letter-spacing-2);
      text-transform: capitalize;
      a {
        color: var(--gray-600);
        transition: var(--transition);
        &:hover {
          color: var(--primary-600);
          border-bottom: 1px solid var(--primary-600);
        }
      }
    }
    .nav-links-light {
      a {
        color: var(--gray-200);
      }
    }
    .toggle-dark-btn-container {
      display: flex;
      gap: 0.5rem;
    }
    .sidebar-container {
      display: none;
    }
  }
`;
export default Navbar;
