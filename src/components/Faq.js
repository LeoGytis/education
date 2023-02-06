import styled from "styled-components";
import { offerInfo } from "../utils/text";

const Offer = () => {
  return (
    <Container>
      <LeftSide></LeftSide>
      <RightSide>
        <Content>
          <Header1>20% Offer Running - Join Today</Header1>
          <Header2>{offerInfo}</Header2>
          <Button>Register Now</Button>
        </Content>
      </RightSide>
    </Container>
  );
};

export default Offer;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 600px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const LeftSide = styled.div`
  width: 50%;
  height: 600px;
  background-image: url("./images/photos/020.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const RightSide = styled.div`
  display: flex;

  width: 50%;
  background-image: url("./images/photos/021.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 130px 70px;
  margin-bottom: 34px;
  color: #fff;
`;

const Header1 = styled.div`
  max-width: 400px;
  font-size: 36px;
  line-height: 46px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Header2 = styled.div`
  max-width: 400px;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  max-width: 200px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 16px 35px;
  border: none;
  cursor: pointer;
  background-color: #ff5421;
  color: #fff;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
