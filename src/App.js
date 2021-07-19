import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Features from "./components/Features";
import TimelineSection from "./components/TimelineSection";
import Designs from "./components/Designs";
import Counter from "./components/Counter";
import Experts from "./components/Experts";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Testimonial2 from "./components/Testimonial2";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App relative ">
        <Header />
        <Banner />
        <Features />
        {/* <TimelineSection /> */}
        <Designs />
        <Counter />
        <Experts />
        <Pricing />
        <Portfolio />
        <Testimonial />
        <Testimonial2 />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
