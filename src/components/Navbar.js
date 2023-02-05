import styled from "styled-components";
import { ReactComponent as HamburgerSvg } from "../utils/Hamburger.svg";
import Icons from "../utils/Icons";

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo src={`./images/educavo_logo.png`} alt="" />
        <NavMenu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Courses</MenuItem>
          <MenuItem>Pages</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Contact</MenuItem>
        </NavMenu>
        <NavTools>
          <StyledIcon name={"search"}></StyledIcon>
          <StyledIcon name={"shopbag"}></StyledIcon>
          <StyledIcon name={"profile"}></StyledIcon>
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
  display: inline-block;
  position: relative;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 2px;
  margin: 15px;
  &:hover {
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #ff5421;
    transform-origin: bottom center;
    transition: transform 0.5s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }
`;

const NavTools = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledIcon = styled(Icons)`
  font-size: 1.6rem;
  padding: 5px;
  color: #fff;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
    color: #ff5421;
  }
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
`;
