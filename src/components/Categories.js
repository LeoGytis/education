import styled from "styled-components";
import { iconPop, textPop, waveBeat } from "../utils/Animations";
import { categoriesInfo } from "../utils/text";

const Categories = () => {
  return (
    <Container>
      <Header1>Top categories</Header1>
      <Header2>Popular Online Categories</Header2>
      <CategoriesContainer>
        {categoriesInfo.map((tab, i) => {
          return (
            <Categorie
              key={`tabcontainer-${i}`}
              image={`./images/photos/00${1 + ++i}` + `.jpg`}
              alt={tab.header}
            >
              <Content>
                <Icon
                  src={`./images/icons/00${2 + ++i}` + `.png`}
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
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  width: 100%;
  max-width: 1200px;
  gap: 10px;
  margin-bottom: 34px;
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
  box-shadow: inset 100px 0px 100px 5px rgba(0, 0, 0, 0.9);
  &:hover {
    cursor: pointer;
    transform: scale(0.98);
    transition: all 0.5s ease;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Icon = styled.img`
  max-width: 42px;
  max-height: 42px;
  margin: 0 30px 0 10px;
  ${Categorie}:hover & {
    animation-name: ${iconPop};
    animation-duration: 2s;
    animation-delay: 0.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`;

const Text = styled.div`
  color: #fff;
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
  ${Categorie}:hover & {
    animation-name: ${waveBeat};
    animation-duration: 2s;
    animation-delay: 0.8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`;

const CoursesCount = styled.div`
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
