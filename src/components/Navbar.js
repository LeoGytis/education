import styled from "styled-components";
import HamburgerSvg from "../components/Hamburger.svg";

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo src={`./images/educavo_logo.png`} alt="" />
        <NavTabs>
          <NavTab>Home</NavTab>
          <NavTab>About</NavTab>
          <NavTab>Courses</NavTab>
          <NavTab>Pages</NavTab>
          <NavTab>Blog</NavTab>
          <NavTab>Contact</NavTab>
        </NavTabs>
        <NavTools>Search Cart Login</NavTools>
        <HamContainer>
          <Hamburger src={HamburgerSvg} alt=""></Hamburger>
        </HamContainer>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 70px;
  color: white;
  border: 2px solid red;
  background-color: yellowgreen;
`;

const Logo = styled.img`
  display: flex;
  max-width: 100%;
  width: 18%;
  max-height: 30px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const NavTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavTab = styled.div`
  color: white;
`;

const NavTools = styled.div`
  color: white;
`;

const HamContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 18%;
  max-height: 30px;
  border: 2px dashed skyblue;
`;

const Hamburger = styled.img``;
