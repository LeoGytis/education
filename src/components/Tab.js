import styled from "styled-components";
import { HeaderTabs } from "../data/text";
import React from "react";

const Tab = () => {
  console.log(HeaderTabs);
  return (
    <Container>
      Kas negerai?
      {HeaderTabs.map((tab, i) => {
        console.log(tab);

        <>
          <Header key={`tabheader-${i}`}>{tab.header}</Header>
          <Description>{tab.description}</Description>
        </>;
      })}
      <Item></Item>
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 80%;
  height: 50;
  border: 2px solid skyblue;
`;

const Item = styled.div`
  font-size: 22px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  border: 2px solid yellowgreen;
`;
const Description = styled.div`
  font-size: 22px;
`;
