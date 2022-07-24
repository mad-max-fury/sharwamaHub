import React from "react";
import styled from "styled-components";
import { BiTrendingUp } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";
const SummaryCard = ({ icon, text, price, num }) => {
  return (
    <SummaryCardWrap>
      <SummaryCardHeader>
        <span>{icon ? icon : <AiFillTag />}</span>
        <span>
          <h4>{text}</h4>
        </span>
      </SummaryCardHeader>
      <SummaryCardBody>
        <span>{price ? <h1>&#8358;{price}</h1> : <h1>{num}</h1>}</span>
        <span>
          <BiTrendingUp />
        </span>
      </SummaryCardBody>
    </SummaryCardWrap>
  );
};

export { SummaryCard };

const SummaryCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 250px;
  height: 120px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const SummaryCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 80%;
  & > span:first-of-type {
    height: 2rem;
    width: 2rem;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SummaryCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 80%;
  & > span {
    display: flex;
    align-items: center;
    & h1 {
      margin: 0;
    }
    &:last-of-type {
      color: #000;
    }
  }
`;
