import styled from "styled-components";
import Tab from "./Tab";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header1 bg="#ff5421">Start learning today</Header1>
        <Header2>Online Courses From Leading Experts</Header2>
        <Button bg="#ff5421" color="#fff">
          Find Course
        </Button>
        <Tab />
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 750px;
  background-image: url("./images/photos/001.jpg");
  color: white;
  color: rgba(0, 0, 0, 0.9);
`;

const HeaderContainer = styled.div`
  color: white;
`;

const Header1 = styled.div`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: #ff5421;
  margin-bottom: 22px;
  text-transform: uppercase;
`;

const Header2 = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  line-height: 80px;
  font-weight: 700;
  margin-bottom: 65px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  margin-bottom: 50px;
`;
