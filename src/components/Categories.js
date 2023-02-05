import styled from "styled-components";
import { categoriesInfo } from "../utils/text";

const Categories = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header1 bg="#ff5421">Top categories</Header1>
        <Header2>Popular Online Categories</Header2>
        <CategoriesContainer>
          {categoriesInfo.map((tab, i = 3) => {
            return (
              <Categorie
                key={`tabcontainer-${i}`}
                image={`./images/photos/00${++i}` + `.jpg`}
              >
                <Icon
                  src={`./images/icons/00${++i}` + `.png`}
                  delay={i}
                  alt=""
                ></Icon>
                <>
                  <Header>{tab.header}</Header>
                  <CoursesCount>{tab.coursesCount}</CoursesCount>
                </>
              </Categorie>
            );
          })}
        </CategoriesContainer>
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
  font-weight: 600;
  margin-bottom: 10px;
  color: #ff5421;
  text-transform: uppercase;
`;

const Header2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  font-size: 36px;
  line-height: 46px;
  font-weight: 800;
  margin-bottom: 65px;

  color: #101010;
`;

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`;

const Categorie = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #171f32;
  padding: 20px 15px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid yellowgreen;
  background-image: ${({ image }) => image || "none"};
  background-image: url("./images/photos/001.jpg");

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const Icon = styled.img`
  max-width: 50px;
  width: 100%;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const CoursesCount = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;
