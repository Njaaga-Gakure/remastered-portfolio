import { styled } from "styled-components";
import { useAppContext } from "../contexts/app_context";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleDarkBtns = () => {
  const { isDarkMode, setDarkMode, setLightMode, closeSidebar } =
    useAppContext();
  return (
    <Wrapper className="toggle-dark-btn-container">
      <button
        onClick={() => {
          setDarkMode();
          closeSidebar();
        }}
        className={
          isDarkMode ? "btn btn-secondary btn-active" : "btn btn-secondary"
        }
      >
        <MdDarkMode />
      </button>
      <button
        onClick={() => {
          setLightMode();
          closeSidebar();
        }}
        className={
          !isDarkMode ? "btn btn-secondary btn-active" : "btn btn-secondary"
        }
      >
        <MdLightMode />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: var(--border-radius-3);
    svg {
      font-size: 1.05rem;
    }
  }
  .btn-active {
    background: var(--primary-700);
    color: var(--gray-50);
  }
`;
export default ToggleDarkBtns;
