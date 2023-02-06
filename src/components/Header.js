import styled from "styled-components";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <Container>
      <Header1 bg="#ff5421">Start learning today</Header1>
      <Header2>Online Courses From Leading Experts</Header2>
      <Button bg="#ff5421" color="#fff">
        Find Course
      </Button>
      <Tabs />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 100px;
  height: 750px;
  background-image: url("./images/photos/001.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
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
  cursor: pointer;
  padding: 15px 60px;
  margin-bottom: 50px;
  background-color: #ff5421;
  color: white;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
