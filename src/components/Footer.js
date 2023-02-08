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
          <Logo src={`./images/logo/educavo_logo.png`} alt="" />
          Please contact me for more information about my work and opportunites.
          Have a nice day and goodbye!
          <MediaIcons>
            <SocialMediaIcon name={"facebook"} />
            <SocialMediaIcon name={"twitter"} />
            <SocialMediaIcon name={"pinterest"} />
            <SocialMediaIcon name={"google"} />
            <SocialMediaIcon name={"instagram"} />
          </MediaIcons>
        </SocialMedia>
        <Address>
          <Header>Address</Header>
          <AddressContent>
            <AddressIcon name={"address"} />
            <AddressText> Maironio g. 24, 01125 Vilnius</AddressText>
            <AddressIcon name={"phone"} />
            <AddressText> +370 682 12888</AddressText>
            <AddressIcon name={"mail"} />
            <AddressText> leogytis@gmail.com</AddressText>
          </AddressContent>
        </Address>
        <Courses>
          <Header>Courses</Header>
          <Course>
            <SquareIcon name={"square"} />
            Course Two
          </Course>
          <Course>
            <SquareIcon name={"square"} />
            Single Course
          </Course>
          <Course href="#">
            <SquareIcon name={"square"} />
            Profile
          </Course>
          <Course>
            <SquareIcon name={"square"} />
            Login/Register
          </Course>
        </Courses>
        <RecentPosts>
          <Header>Recent Posts</Header>
          <Post>
            <Photo src={`./images/photos/061.jpg`} alt="" />
            <PostContent>
              <PostHeader>High School Program Starting Soon 2024</PostHeader>
              <PostDate>
                <CalendarIcon name={"date"} />
                October 15, 2020
              </PostDate>
            </PostContent>
          </Post>
          <Post>
            <Photo src={`./images/photos/062.jpg`} alt="" />
            <PostContent>
              <PostHeader>Shutdown Of Schools Extended To Aug 31</PostHeader>
              <PostDate>
                <CalendarIcon name={"date"} />
                March 25, 2023
              </PostDate>
            </PostContent>
          </Post>
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
  color: #fff;
`;

const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  background-color: #171f32;
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
  &:hover {
    opacity: 0.9;
  }
`;

const Content = styled.div`
  display: flex;
  width: 900px;
  font-size: 12px;
`;

const SocialMedia = styled.div`
  flex: 1;
  font-size: 12px;
  width: 400px;
  height: 200px;
  /* border: 2px dashed red; */
`;

const Logo = styled.img`
  display: flex;
  width: 200px;
  padding: 30px 0 30px 0;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const MediaIcons = styled.div`
  margin: 30px 35px 0 35px;
  padding: 10px;
  border-top: 1px solid #f4f0f0;
`;

const SocialMediaIcon = styled(Icons)`
  font-size: 15px;
  margin-bottom: -5px;
  margin-right: 8px;
`;

const Address = styled.div`
  flex: 1;
  width: 400px;
  font-size: 12px;
  height: 300px;
  /* border: 2px dashed green; */
`;

const Header = styled.div`
  display: inline-block;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 32px;

  border-bottom: 3px solid #ff5421;
`;

const AddressContent = styled.div`
  font-size: 12px;
`;

const AddressIcon = styled(Icons)`
  font-size: 20px;
  margin-bottom: -5px;
  color: #ff5421;
  margin-right: 8px;
`;

const AddressText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Courses = styled.div`
  flex: 1;
  font-size: 12px;
  width: 400px;
  height: 100px;
  /* border: 2px dashed blue; */
`;

const SquareIcon = styled(Icons)`
  font-size: 5px;
  margin: 0 8px 2px 0;
  color: #ff5421;
`;

const Course = styled.div`
  font-size: 16px;
  padding-bottom: 3px;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #ff5421;
  }
  transition: all 0.5s ease;
`;

const RecentPosts = styled.div`
  flex: 1;
  font-size: 12px;
  width: 400px;
  height: 100px;
  /* border: 2px dashed goldenrod; */
`;

const Post = styled.div`
  display: flex;
  font-size: 12px;
  padding-bottom: 15px;
`;

const Photo = styled.img`
  max-width: 80px;
  max-height: 100px;
  margin-right: 10px;
  border-radius: 4px;
`;

const PostContent = styled.div`
  width: 150px;
`;

const PostHeader = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: #ff5421;
  }
  transition: all 0.5s ease;
`;

const CalendarIcon = styled(Icons)`
  font-size: 15px;
  margin: 0 8px -2px 0;
  color: #ff5421;
`;

const PostDate = styled.div`
  font-size: 12px;
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
