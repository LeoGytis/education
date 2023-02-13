import { HeaderTabsInfo } from "../utils/texts";
import React from "react";
import styled from "styled-components";
import { waveBeat } from "../utils/Animations";

const Tabs = () => {
  return (
    <Container>
      {HeaderTabsInfo.map((tab, i) => {
        return (
          <TabContainer key={`tabcontainer-${i}`}>
            <Icon src={`./images/icons/00${++i}` + `.png`} delay={i} alt="" />
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

export default Tabs;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1270px;
  margin-bottom: 100px;
`;

const TabContainer = styled.div`
  // add flex: 1 1 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #171f32;
  padding: 20px 15px;
  margin: 10px;
  border-radius: 5px;

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
  }
  animation-name: ${waveBeat};
  animation-duration: 3s;
  animation-delay: ${({ delay }) => delay * 0.5 + "s"};
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
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
