import styled from "styled-components";
import Icons from "../utils/Icons";

const Footer = () => {
  return (
    <Container>
      <SubscribeContainer>
        <SubmitIcon src={`./images/icons/011.png`} />
        <SubHeader>Subscribe to Newsletter</SubHeader>
        <TextField type="text" placeholder="Your email" />
        <Button>Submit</Button>
      </SubscribeContainer>
      <Content>
        <SocialMedia>
          Please contact me for more information about my work and opportunites.
          <Icons>
            <SocialMediaIcon name={"facebook"} />
            <SocialMediaIcon name={"twitter"} />
            <SocialMediaIcon name={"pinterest"} />
            <SocialMediaIcon name={"google"} />
            <SocialMediaIcon name={"instagram"} />
          </Icons>
        </SocialMedia>
        <Address>
          <Header>Address</Header>
        </Address>
        <Courses>
          <Header>Courses</Header>
        </Courses>
        <RecentPosts>
          <Header>Recent Posts</Header>
        </RecentPosts>
      </Content>
      {/* <Bottom>
        <GreyLine />
      </Bottom> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #151515;
`;

const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  background-color: #171f32;
  color: #fff;
  border-radius: 3px;
  padding: 40px 20px;
`;

const SubmitIcon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 20px;
`;

const SubHeader = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-right: 20px;
`;

const TextField = styled.input`
  font-size: 14px;
  color: #505050;
  padding: 14px 100px 14px 30px;
  outline: none;
  border: none;
  border-radius: 2px 0 0 2px;
  ::placeholder {
    color: #505050;
  }
`;

const Button = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 13px 32px;
  border-radius: 0 2px 2px 0;
  border: none;
  cursor: pointer;
  background-color: #ff5421;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;

const Content = styled.div`
  display: flex;
  width: 900px;
  font-size: 12px;
  color: #fff;
  /* border: 5px dashed cyan; */
`;

const SocialMedia = styled.div`
  flex: 1;
  font-size: 12px;
  width: 400px;
  height: 200px;
  border: 2px dashed red;
`;

const SocialMediaIcon = styled(Icons)`
  font-size: 15px;
  margin-bottom: -5px;
  color: #fff;
  margin-right: 8px;
`;

const Address = styled.div`
  flex: 1;
  width: 400px;
  font-size: 12px;
  height: 100px;
  border: 2px dashed green;
`;

const Header = styled.div`
  font-size: 18px;
  color: #ff5421;
  text-transform: uppercase;
`;

const Courses = styled.div`
  flex: 1;
  font-size: 12px;
  width: 400px;
  height: 100px;
  border: 2px dashed blue;
`;

const RecentPosts = styled.div`
  flex: 1;

  font-size: 12px;
  width: 400px;
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

const AddressIcon = styled(Icons)`
  font-size: 45px;
  margin-bottom: -5px;
  color: #ff5421;
  margin-right: 8px;
`;
