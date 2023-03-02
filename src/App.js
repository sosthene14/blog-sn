import React from "react";
import "./App.css";
import Home from "./screens/home_page/home";
import Entertainment from "./screens/articlesCategories/enternainment";
import Business from "./screens/articlesCategories/business";
import Science from "./screens/articlesCategories/science";
import Sport from "./screens/articlesCategories/sport";
import { motion } from "framer-motion";
import Contact from "./screens/articlesCategories/contact/contact";
import Health from "./screens/articlesCategories/health";
import Thechnology from "./screens/articlesCategories/technology";
import ArticleDetail from "./screens/articlesCategories/articleDetails";
import Test from "./screens/components/test";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Categorie/Business":
      component = <Business />;
      ;
      break;
    case "/Categorie/Divertissement":
      component = <Entertainment />;
      break;
    case "/Categorie/Sante":
      component = <Health />;
      break;
    case "/Categorie/Science":
      component = <Science />;
      break;
    case "/Categorie/Sport":
      component = <Sport />;
      break;
    case "/Categorie/Technologie":
      component = <Thechnology />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    case "/article/:link":
      component = <ArticleDetail/>;
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {component}
    </motion.div>
  );
}

export default App;
