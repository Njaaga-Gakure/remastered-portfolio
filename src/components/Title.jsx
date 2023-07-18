import { styled } from "styled-components";
import { useAppContext } from "../contexts/app_context";
const Title = ({ title }) => {
  const { isDarkMode } = useAppContext();
  return (
    <Wrapper className="title">
      <h2 className={isDarkMode ? "title-text text-dark" : "title-text"}>
        {title}
      </h2>
      {/* <div className="underline"></div> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 2rem;
  .title-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-2);
    color: var(--gray-700);
    margin: 0;
  }
  .text-dark {
    color: var(--gray-50);
  }
  .title-text::first-letter {
    color: var(--primary-700);
  }
  /* .underline {
    width: 8rem;
    height: 0.15rem;
    background: var(--primary-700);
  } */
  @media (min-width: 574px) {
    text-align: center;
    .underline {
      margin: 0 auto;
    }
  }
`;
export default Title;
