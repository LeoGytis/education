import styled from "styled-components";
import { ReactComponent as HamburgerSvg } from "../data/Hamburger.svg";

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo src={`./images/educavo_logo.png`} alt="" href="#" />
        <NavMenu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Courses</MenuItem>
          <MenuItem>Pages</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Contact</MenuItem>
        </NavMenu>
        <NavTools>
          <ToolItem>Search</ToolItem>
          <ToolItem>Cart</ToolItem>
          <ToolItem>Login</ToolItem>
          <HamContainer>
            <Hamburger />
          </HamContainer>
        </NavTools>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: yellowgreen;
`;

const Logo = styled.img`
  display: flex;
  width: 200px;
  padding: 30px 0 30px 0;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const NavTools = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ToolItem = styled.div`
  padding: 5px;
`;

const HamContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  height: 40px;
`;

const Hamburger = styled(HamburgerSvg)`
  max-height: 20px;
  padding: 10px;
  fill: white;
  background-color: none;
  height: ${({ heigth }) => heigth || "40px"};
  &:hover {
    cursor: pointer;
    fill: ${({ hoverColor }) => hoverColor || "#ff5421"};
  }
  transition: all 0.3s ease;
`;
