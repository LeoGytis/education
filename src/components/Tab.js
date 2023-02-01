import styled from "styled-components";
import { HeaderTabs } from "../data/text";
import React from "react";

const Tab = () => {
  console.log(HeaderTabs);
  return (
    <Container>
      {HeaderTabs.map((tab, i) => {
        return (
          <TabContainer key={`tabcontainer-${i}`}>
            <Icon src={++i}></Icon>
            <Text>
              <Header>{tab.header}</Header>
              <Description>{tab.description}</Description>
            </Text>
          </TabContainer>
        );
      })}
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 960px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #171f32;
  padding: 20px 15px;
  margin: 10px;
  border-radius: 5px;
  /* position: relative;
  transition: all 0.3s ease; */
`;

const Icon = styled.img.attrs(({ src }) => ({
  src: `./images/icons/00${src}` + `.png`,
  alt: ""
}))`
  max-width: 50px;
  width: 100%;
  margin-right: 20px;
`;

const Text = styled.div``;

const Header = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;
