import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Categories />
    </>
  );
}

export default App;
