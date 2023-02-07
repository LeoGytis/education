import styled from "styled-components";
import { testimonialText } from "../utils/text";

const Testimonial = () => {
  return (
    <Container>
      <Header1>Testimonial</Header1>
      <Header2>What Students Saying</Header2>
      <Text>{testimonialText.comment}</Text>

      <Content>
        <Carousel>
          <MarkIcon src={"./images/icons/010.png"} alt="" />
          <Text>{alert(testimonialText[name])}</Text>
          <Text>TEKSTAS CIA</Text>
          <Photo></Photo>
          <Name>{testimonialText.Name}</Name>
          <Speciality></Speciality>
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
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 600px;
  padding: 30px;
  border: 3px solid red;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 500px;
  border: 2px dashed goldenrod;
`;

const MarkIcon = styled.img`
  max-width: 42px;
  max-height: 42px;
  border: 3px solid green;
`;

const Text = styled.div`
  width: 200px;
  height: 50px;
  color: #fff;
`;
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Speciality = styled.div`
  width: 100%;
  max-height: 600px;
  margin: 10px;
`;
