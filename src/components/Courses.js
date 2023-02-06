import styled from "styled-components";
import { iconPop, waveBeat } from "../utils/Animations";
import Icons from "../utils/Icons";
import { coursesInfo } from "../utils/text";

const Courses = () => {
  return (
    <Container>
      <Header1>Select Courses</Header1>
      <Header2>Explore Popular Courses</Header2>
      <CoursesContainer>
        {coursesInfo.map((course, i) => {
          return (
            <Course>
              <Image
                key={`coursecontainer-${i}`}
                image={`./images/photos/01${-1 + ++i}` + `.jpg`}
                alt={course.header}
              />
              <Content>
                <Rating>
                  <Star name={"star"} />
                  <Star name={"star"} />
                  <Star name={"star"} />
                  <Star name={"star"} />
                  <Star name={"star"} fill={"#4B4B49"} padding={"10px"} />1
                  rating
                </Rating>
                <Header>{course.header}</Header>
                <GreyLine />
                <Counter>
                  <StudentsCount>
                    <StudentsIcon name={"students"}></StudentsIcon>
                    {course.students}
                  </StudentsCount>
                  <LessonsCount>
                    {course.lessons}
                    <LessonsIcon name={"lessons"} />
                  </LessonsCount>
                </Counter>
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
  overflow: hidden;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  padding: 30px 20px;
  background-image: url(${({ image }) => image || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: all 0.5s ease-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 35px;
  overflow: hidden;
  z-index: 1;
  border: 1px solid red;
`;

const Rating = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const Star = styled(Icons)`
  fill: ${({ fill }) => fill || "#fcb903"};
  padding-right: ${({ padding }) => padding || 0};
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: #ff5421;
  }
  transition: all 0.3s ease;
`;

const GreyLine = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 25px 0 0;
  padding: 25px 0 0;
  font-size: 14px;
  border-top: 1px solid #f4f0f0;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StudentsCount = styled.div`
  font-size: 14px;
  font-weight: 400;

  color: black;
`;

const LessonsCount = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

const StudentsIcon = styled(Icons)`
  font-size: 20px;
  margin-bottom: -3px;
  color: #ff5421;
  margin-right: 8px;
`;

const LessonsIcon = styled(Icons)`
  font-size: 20px;
  margin-bottom: -3px;
  color: #ff5421;
  margin-left: 8px;
`;
