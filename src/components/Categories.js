import styled from "styled-components";

const Categories = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header1 bg="#ff5421">Top categories</Header1>
        <Header2>Popular Online Categories</Header2>
        <Button bg="#ff5421" color="#fff">
          View all categories
        </Button>
      </HeaderContainer>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 750px;
  color: #101010;
`;

const HeaderContainer = styled.div`
  color: white;
`;

const Header1 = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ff5421;
  text-transform: uppercase;
`;

const Header2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  font-size: 40px;
  line-height: 46px;
  font-weight: 900;
  margin-bottom: 65px;

  color: #101010;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  margin-bottom: 50px;
`;
