import {
  skillsUsingData as usingSkills,
  skillsLearningData as learningSkills,
} from "../utils/data";
import { styled } from "styled-components";
import Title from "./Title";
import { useAppContext } from "../contexts/app_context";

const Skills = () => {
  const { isDarkMode } = useAppContext();

  return (
    <Wrapper id="skills">
      <div className={isDarkMode ? "dark-bg" : "light-bg"}>
        <div className="center-container">
          <Title title="skills" />
          <div className="skills">
            <span className="skills-title">skills using :</span>
            <div className="skills-list">
              {usingSkills.map(({ id, name, icon, iconColor }) => {
                return (
                  <div key={id} className="skill">
                    <span className="skill-icon" style={{ color: iconColor }}>
                      {icon}
                    </span>
                    <p
                      className={
                        isDarkMode ? "skill-name text-dark" : "skill-name"
                      }
                    >
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skills">
            <span className="skills-title">skills learning :</span>
            <div className="skills-list">
              {learningSkills.map(({ id, name, icon, iconColor }) => {
                return (
                  <div key={id} className="skill">
                    <span className="skill-icon" style={{ color: iconColor }}>
                      {icon}
                    </span>
                    <p
                      className={
                        isDarkMode ? "skill-name text-dark" : "skill-name"
                      }
                    >
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .light-bg {
    background-color: var(--gray-50);
  }
  .dark-bg {
    background: var(--black-2);
  }
  .center-container {
    padding: 1rem 0;
  }
  .skills-title {
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    color: var(--primary-700);
    border: 1px solid var(--primary-700);
    padding: 0.5rem 1.5rem;
  }
  .skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: center;
  }
  .skill {
    margin: 3rem 0;
    text-align: center;
  }
  .skill-icon {
    font-size: 5rem;
  }
  .skill-name {
    margin: 0;
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    color: var(--gray-600);
  }
  .text-dark {
    color: var(--gray-50);
  }
`;
export default Skills;
