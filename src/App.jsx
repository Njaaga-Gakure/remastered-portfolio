import { Navbar, Hero, About, Skills, Portfolio, Contacts } from "./components";
import { useAppContext } from "./contexts/app_context";
function App() {
  const { isDarkMode } = useAppContext();
  return (
    <div
      className={`${
        isDarkMode ? "full-page dark-mode-bg container" : "full-page container"
      }`}
    >
      <Navbar />
      <Hero />
      {/* <About />
      <Skills />
      <Portfolio />
      <Contacts /> */}
    </div>
  );
}

export default App;
