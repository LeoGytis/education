import styled from "styled-components";
import { testimonialText } from "../utils/text";

const Testimonial = () => {
  return (
    <Container>
      <Header1>Testimonial</Header1>
      <Header2>What Students Saying</Header2>
      <Content>
        <MarkIcon />
        <Text></Text>
        <Photo></Photo>
        <Name></Name>
        <Speciality></Speciality>
      </Content>
    </Container>
  );
};

export default Testimonial;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url("./images/photos/040.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header1 = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: #ff5421;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Header2 = styled.div`
  font-size: 36px;
  line-height: 46px;
  font-weight: 800;
  color: #101010;
  margin-bottom: 26px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;

const MarkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;

const Speciality = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;
