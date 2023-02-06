import "./App.css";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <Courses />
      <Offer />
      <Faq />
    </>
  );
}

export default App;
