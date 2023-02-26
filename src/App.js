import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import NewsUpdate from "./components/NewsUpdate";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <MainHome />
      <Categories />
      <Courses />
      {/* <Offer /> // sekantis */}
      <Faq />
      <Testimonial />
      <NewsUpdate />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
