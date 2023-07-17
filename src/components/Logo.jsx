import { styled } from "styled-components";
import { useAppContext } from "../contexts/app_context";
const Logo = () => {
  const { isDarkMode } = useAppContext();
  return (
    <Wrapper className="logo">
      <h3
        className={`${isDarkMode ? "logo-text logo-text-light" : "logo-text"}`}
      >
        G<span>akure</span>
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo-text {
    font-family: "Quicksand", sans-serif;
    /* text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8); */
    margin: 0;
    padding-right: 5px;
    letter-spacing: var(--letter-spacing-2);
    color: var(--gray-600);
    font-weight: 700;
    span {
      color: var(--primary-600);
    }
  }
  .logo-text-light {
    color: var(--gray-200);
  }
`;
export default Logo;
