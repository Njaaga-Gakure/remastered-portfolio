import React from "react";
import { styled } from "styled-components";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { useAppContext } from "../contexts/app_context";
const Hero = () => {
  const { isDarkMode } = useAppContext();
  return (
    <Wrapper id="home">
      <div className="center-container">
        <h1 className={isDarkMode ? "hero-title text-dark" : "hero-title"}>
          Hi, I'm <br />
          <span>Brian Gakure</span>
        </h1>
        <span className="hero-role">front-end developer</span>
        <div className="link-container">
          <a
            target="_blank"
            rel="nonreferrer"
            href="https://github.com/Njaaga-Gakure/"
          >
            <BsGithub className={isDarkMode ? "svg-dark-mode" : "null"} />
          </a>
          <a>
            <BsTwitter className={isDarkMode ? "svg-dark-mode" : "null"} />
          </a>
          <a
            target="_blank"
            rel="nonreferrer"
            href="https://www.linkedin.com/in/brian-gakure-0a2320188/"
          >
            <BsLinkedin className={isDarkMode ? "svg-dark-mode" : "null"} />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0;
  .hero-title {
    margin: 0;
    color: var(--black-2);
    letter-spacing: var(--letter-spacing-2);
    span {
      color: var(--primary-700);
    }
  }
  .hero-role {
    display: inline-block;
    padding: 0.25rem 1rem;
    margin-top: 0.5rem;
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    color: var(--primary-800);
    border: 1px solid var(--primary-800);
    /* border-radius: var(--border-radius-1); */
  }
  .link-container {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    a {
      svg {
        font-size: 1.5rem;
        color: var(--primary-700);
        color: var(--black-1);
        transition: var(--transition);
        &:hover {
          color: var(--primary-600);
          transform: scale(1.2);
        }
      }
    }
  }
  .link-container {
    a {
      .svg-dark-mode {
        color: var(--gray-50);
      }
    }
  }
  .btn {
    margin-top: 1rem;
  }
  .text-dark {
    color: var(--gray-50);
  }
  @media (min-width: 574px) {
    text-align: center;
    .link-container {
      justify-content: center;
    }
  }
`;
export default Hero;
