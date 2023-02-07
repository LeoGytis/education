import styled from "styled-components";
import { testimonialText } from "../utils/text";

const Testimonial = () => {
  return (
    <Container>
      <Header1>Testimonial</Header1>
      <Header2>What Students Saying</Header2>
      <Content>
        <Carousel>
          <MarkIcon src={"./images/icons/010.png"} alt="" />
          <Text>{testimonialText[0].comment}</Text>
          <Photo></Photo>
          <Name>{testimonialText[0].name}</Name>
          <Speciality>{testimonialText[0].speciality}</Speciality>
        </Carousel>
      </Content>
    </Container>
  );
};

export default Testimonial;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  color: #fff;
  margin-bottom: 26px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 600px;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 600px;
  border: 2px dashed goldenrod;
`;

const MarkIcon = styled.img`
  max-width: 55px;
  max-height: 55px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  width: 80%;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  border: 3px dotted green;
`;

const Photo = styled.div`
  margin: 10px;
  width: 42px;
  height: 42px;
  background-image: url("./images/photos/030.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  border: 3px solid red;
`;

const Name = styled.div`
  width: 100px;
  margin: 10px;
  border: 2px;
  border: 3px solid red;
`;

const Speciality = styled.div`
  margin: 10px;
  width: 100px;
  border: 3px solid red;
`;
