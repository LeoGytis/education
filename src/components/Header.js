import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div>
        <h2>Start learning today</h2>
        <h1>Online Courses From Leading Experts</h1>
        <Button bg="yellowgreen" color="#fff">
          Get Started For Free
        </Button>
      </div>
      {/* <Image src="./images/photos/001.jpg" alt="" /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url("./images/photos/001.jpg");
  color: white;
`;

const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
