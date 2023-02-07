import styled from "styled-components";
import Icons from "../utils/Icons";

const Footer = () => {
  return (
    <Container>
      <SubscribeContainer>Subscribe here</SubscribeContainer>
      <Content>
        <SocialMedia></SocialMedia>
        <Address></Address>
        <Courses></Courses>
        <RecentPosts></RecentPosts>
      </Content>
      <Bottom>
        <GreyLine />
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const SubscribeContainer = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const Content = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const SocialMedia = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const Address = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const Courses = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const RecentPosts = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const Bottom = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  border: 2px dashed goldenrod;
`;

const GreyLine = styled.div`
  margin: 30px 10px 0px 10px;
  border-top: 1px solid #f4f0f0;
`;
