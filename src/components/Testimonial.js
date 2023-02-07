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
  color: #fff;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 600px;
  background-color: rgba(23, 31, 50, 0.5882352941176471);
  padding: 40px 20px;
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
  margin-bottom: 10px;
`;

const Photo = styled.div`
  width: 110px;
  height: 100%;
  background-image: url("./images/photos/user01.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Speciality = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
