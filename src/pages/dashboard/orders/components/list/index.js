import React from "react";
import styled from "styled-components";
import { colors } from "../../../../../colors";

const List = ({ status, i, text }) => {
  return (
    <ListWrap key={i}>
      <span>sharwama</span>
      <span>#1232</span>
      <span>July 15, 2022</span>
      <span>Prince chijioke</span>
      <span>1200</span>
      <span>
        {" "}
        <Span status={status}></Span>
        <Span2 status={status}>{text}</Span2>
      </span>
    </ListWrap>
  );
};

export { List };

const ListWrap = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: ${colors.white};

  & > span {
    display: flex;
    text-align: center;
    height: 100%;
    width: calc((1 / 6) * 100%);
    align-items: center;
    justify-content: start;
    padding-left: 1rem;
    display: flex;
    gap: 0.5rem;
  }
  &:nth-of-type(even) {
    background-color: #333333;
  }
  &:nth-of-type(odd) {
    background-color: #232323;
  }
  &:first-of-type {
    border-radius: 0px 0px 0px 0px;
    transform: scale(1.01);
    cursor: pointer;
    color: ${colors.primary};
    box-shadow: 0px 0px 0px 2px #333;
  }

  &:last-of-type {
    border-radius: 0px 0px 10px 10px;
    transform: scale(1.01);
    cursor: pointer;
    color: ${colors.primary};
    box-shadow: 0px 0px 0px 2px #333;
  }
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    color: ${colors.primary};
  }
`;

const Span = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === "Pending"
      ? "gold"
      : status === "Cancelled"
      ? "red"
      : colors.primary};
`;
const Span2 = styled.span`
  color: ${({ status }) =>
    status === "Pending"
      ? "gold"
      : status === "Cancelled"
      ? "red"
      : colors.primary};
`;
