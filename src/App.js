import styled from "styled-components";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import NewsUpdate from "./components/NewsUpdate";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      {/* <Navbar />
      <Header />
      <Categories />
      <Courses />
      <Offer />
      <Faq />
      <Testimonial /> 
      <NewsUpdate />*/}
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
