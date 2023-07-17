import { styled } from "styled-components";
import Title from "./Title";
import { useAppContext } from "../contexts/app_context";

const About = () => {
  const { isDarkMode } = useAppContext();

  return (
    <Wrapper id="about">
      <div className={isDarkMode ? "about-dark-bg" : "about-light-bg"}>
        <div className="center-container">
          <Title title="About" />
          <p className={isDarkMode ? "about-text text-dark" : "about-text"}>
            Passionate self-taught JavaScript developer adept at front-end using
            Reactjs. Eager to contribute to impactful projects and enhance
            professional skills. Open to opportunities from potential employers.
            Let's connect!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-light-bg {
    background: var(--gray-50);
  }
  .about-dark-bg {
    background: var(--black-1);
  }
  .center-container {
    padding: 2rem 0;
  }
  .about-text {
    letter-spacing: var(--letter-spacing-2);
    color: var(--gray-600);
  }
  .text-dark {
    color: var(--gray-50);
  }
  @media (min-width: 574px) {
    text-align: center;
  }
`;
export default About;
