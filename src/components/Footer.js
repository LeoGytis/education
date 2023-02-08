import styled from "styled-components";
import Icons from "../utils/Icons";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Logo src={`./images/logo/educavo_logo.png`} alt="" />
          <MediaText>
            Please contact me for more information about my work and
            opportunites. Your can reach me on social media!
          </MediaText>
          <MediaIcons>
            <SocialMediaIcon name={"facebook"} />
            <SocialMediaIcon name={"twitter"} />
            <SocialMediaIcon name={"pinterest"} />
            <SocialMediaIcon name={"google"} />
            <SocialMediaIcon name={"instagram"} />
          </MediaIcons>
        </Column>
        <Column>
          <Header>Address</Header>
          <AddressRow>
            <AddressLine>
              <AddressIcon name={"location"} />
              Maironio g. 24, Vilnius
            </AddressLine>
            <AddressLine background-color={"red"}>
              <AddressIcon name={"phone"} />
              +370 682 12888
            </AddressLine>
            <AddressLine>
              <AddressIcon name={"mail"} />
              leogytis@gmail.com
            </AddressLine>
          </AddressRow>
        </Column>
        <Column>
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
        </Column>
        <Column>
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
        </Column>
        {/* <BottomContainer>
          <GreyLine />
        </BottomContainer> */}
      </Row>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #151515;
`;

const Row = styled.div`
  max-width: 1270px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #151515;
  color: #fff;
  padding: 200px 0px 90px 0px;
  font-size: 12px;
`;

const Column = styled.div`
  flex: 0 0 auto;
  width: 25%;
  /* border: 1px solid red; */
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const MediaText = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding-right: 60px;
`;

const MediaIcons = styled.div`
  margin-top: 25px;
`;

const SocialMediaIcon = styled(Icons)`
  font-size: 18px;
  margin-right: 12px;
  &:hover {
    cursor: pointer;
    color: #ff5421;
  }
  transition: all 0.3s ease;
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

const AddressRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressLine = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 14px;
`;

const AddressIcon = styled(Icons)`
  font-size: 22px;
  margin: 0 8px -5px 0;
  color: #ff5421;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  transition: all 0.3s ease;
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

const BottomContainer = styled.div`
  font-size: 12px;
  width: 100%;
  height: 100px;
  border: 2px dashed cyan;
`;

const GreyLine = styled.div`
  margin: 30px 10px 0px 10px;
  border-top: 1px solid #505050; ;
`;
