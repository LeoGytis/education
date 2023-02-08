import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Container>
      <Row>
        <Icon src={`./images/icons/011.png`} />
        <SubHeader>Subscribe to Newsletter</SubHeader>
        <TextField type="text" placeholder="Your email" />
        <Button>Submit</Button>
      </Row>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  max-width: 1270px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: yellowgreen;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 85%;
  background-color: #171f32;
  border-radius: 3px;
  padding: 40px 20px;
  color: #fff;
`;

const Icon = styled.img`
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
