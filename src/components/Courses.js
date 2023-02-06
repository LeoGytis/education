import styled from "styled-components";
import { iconPop, waveBeat } from "../utils/Animations";
import { coursesInfo } from "../utils/text";

const Courses = () => {
  return (
    <Container>
      <Header1>Select Courses</Header1>
      <Header2>Explore Popular Courses</Header2>
      <CoursesContainer>
        {coursesInfo.map((tab, i) => {
          return (
            <Course>
              <Image
                key={`tabcontainer-${i}`}
                image={`./images/photos/01${-1 + ++i}` + `.jpg`}
                alt={tab.header}
              />
              <Content>
                <Rating></Rating>
                <Header>{tab.header}</Header>
                <StudentsCount>{tab.coursesCount}</StudentsCount>
                <LessonsCount>{tab.coursesCount}</LessonsCount>
              </Content>
            </Course>
          );
        })}
      </CoursesContainer>
    </Container>
  );
};

export default Courses;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f9f8f8;
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

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  width: 100%;
  max-width: 1200px;
  gap: 10px;
  margin-bottom: 34px;
`;

const Course = styled.div`
  font-size: 36px;
  line-height: 46px;
  font-weight: 800;
  color: #101010;
  margin-bottom: 26px;
  background-color: #fff;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  padding: 30px 20px;
  margin: 10px;
  border-radius: 5px;
  background-image: url(${({ image }) => image || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  &:hover {
    cursor: pointer;
    transform: scale(0.98);
    transition: all 0.5s ease;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Rating = styled.div`
  color: #fff;
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const StudentsCount = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
const LessonsCount = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
