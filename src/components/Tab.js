import styled from "styled-components";
import { HeaderTabs } from "../data/text";
import React from "react";

const Tab = () => {
  console.log(HeaderTabs);
  return (
    <Container>
      {HeaderTabs.map((tab, i) => {
        console.log("first", ++i);
        return (
          <TabContainer key={`tabcontainer-${i}`}>
            <Icon src={i}></Icon>
            <>
              <Header>{tab.header}</Header>
              <Description>{tab.description}</Description>
            </>
          </TabContainer>
        );
      })}
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 100%;
  height: 50;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid skyblue;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #171f32;
  margin: 10px;
`;

const Icon = styled.img.attrs(({ src }) => ({
  src: `./images/icons/00${src}` + `.png`,
  alt: ""
}))`
  width: 100%;
  height: 150px;
`;

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
