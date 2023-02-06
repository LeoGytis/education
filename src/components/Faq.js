import styled from "styled-components";
import { offerInfo, questionsInfo } from "../utils/text";

const Faq = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
          <Header>Frequently Asked Questions</Header>
          <QuestionsContainer>
            {questionsInfo.map((question, i) => {
              return (
                <Question key={`Questioncontainer-${i}`}>
                  {question.question}
                </Question>
              );
            })}
          </QuestionsContainer>
        </LeftSide>
        <RightSide></RightSide>
      </Content>
    </Container>
  );
};

export default Faq;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;
  background-color: #f9f8f8;
`;

const Header = styled.div`
  max-width: 400px;
  font-size: 30px;
  line-height: 46px;
  font-weight: 700;
  margin-bottom: 26px;
`;

const QuestionsContainer = styled.div`
  max-width: 400px;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
`;

const Question = styled.div`
  max-width: 400px;
  font-size: 16px;
  line-height: 46px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const RightSide = styled.div`
  height: 600px;
  width: 50%;
  background-image: url("./images/photos/030.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
