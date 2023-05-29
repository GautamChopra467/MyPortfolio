import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./components/Themes";
import { Switch, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import SkillsPage from "./components/SkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
      <SoundBar />
        {/* For framer-motion on page change */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutPage} />
            {/* <Route exact path="/blog" component={BlogPage} /> */}
            <Route exact path="/blog" component={MainPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={SkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
