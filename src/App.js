import "./App.css";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <Courses />
    </>
  );
}

export default App;
