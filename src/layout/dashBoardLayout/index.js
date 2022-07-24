import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { motion } from "framer-motion";
import { SideNav } from "../../components";

const DashBoardLayout = ({ children }) => {
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <SideNav />
      <InnerWrap>
        <Main>{children}</Main>
      </InnerWrap>
    </Wrapper>
  );
};

export { DashBoardLayout };

const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  display: flex;
  gap: 1rem;
  /* border: 1px solid red; */
`;
const Main = styled.main`
  height: fit-content;
  width: 100%;
  background: ${colors.white};
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  @media (max-width: 768px) {
    max-width: 95%;
    margin: 0 auto;
  }
  @media (min-width: 769px) and (max-width: 1350px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;
`;
