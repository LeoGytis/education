import styled from "styled-components";
import { categoriesInfo } from "../utils/text";

const Categories = () => {
  return (
    <Container>
      <Header1 bg="#ff5421">Top categories</Header1>
      <Header2>Popular Online Categories</Header2>
      <CategoriesContainer>
        {categoriesInfo.map((tab, i) => {
          i += 1;
          return (
            <Categorie
              key={`tabcontainer-${i}`}
              image={`./images/photos/00${++i}` + `.jpg`}
              alt={tab.header}
            >
              <Content>
                <Icon
                  src={`./images/icons/00${++i}` + `.png`}
                  delay={i}
                  alt=""
                ></Icon>
                <Text>
                  <Header>{tab.header}</Header>
                  <CoursesCount>{tab.coursesCount}</CoursesCount>
                </Text>
              </Content>
            </Categorie>
          );
        })}
      </CategoriesContainer>
      <Button bg="#ff5421" color="#fff">
        View all categories
      </Button>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 100px;
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

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`;

const Categorie = styled.div`
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
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: flex-start;
`;

const Icon = styled.img`
  max-width: 42px;
  max-height: 42px;
  margin-right: 20px;
`;

const Text = styled.div`
  color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: flex-start;
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const CoursesCount = styled.div`
  display: flex;
  flex-direction: flex-start;
  font-size: 16px;
  font-weight: 400;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #ff5421;
  color: #fff;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
