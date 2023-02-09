import styled from "styled-components";
import { ReactComponent as HamburgerSvg } from "../utils/Hamburger.svg";
import Icons from "../utils/Icons";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const Navbar = () => {
  return (
    <>
      <Container>
        <Row>
          <Logo src={`./images/logo/educavo_logo_black.png`} alt="" />
          <Menu>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
            <Link activeClass="active" smooth spy to="courses">
              Courses
            </Link>
            <Link activeClass="active" smooth spy to="pages">
              Pages
            </Link>
            <Link activeClass="active" smooth spy to="blog">
              Blog
            </Link>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </Menu>
          <Tools>
            <StyledIcon name={"search"}></StyledIcon>
            <StyledIcon name={"shopbag"}></StyledIcon>
            <StyledIcon name={"profile"}></StyledIcon>
            <HamContainer>
              <Hamburger />
            </HamContainer>
          </Tools>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: lightgrey;
  box-shadow: 0px 5px 50px 5px rgba(0, 0, 0, 0.9);
  z-index: 99;
  position: fixed;
  top: 0px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
`;

const Row = styled.div`
  max-width: 1270px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #111;
  background-color: yellowgreen;
`;

const Logo = styled.img`
  width: 200px;
  padding: 30px 0 30px 0;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MenuItem = styled(Link)`
  position: relative;
  font-size: 20px;
  font-weight: 700;
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

const Tools = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledIcon = styled(Icons)`
  font-size: 26px;
  padding: 5px;
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
  fill: #111;
  background-color: none;
  height: ${({ heigth }) => heigth || "40px"}; //just testing
  &:hover {
    cursor: pointer;
    fill: ${({ hoverColor }) => hoverColor || "#ff5421"}; //just testing
  }
  transition: all 0.5s ease;
`;
