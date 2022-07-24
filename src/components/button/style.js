import styled from "styled-components";
import { colors } from "../../colors";

export const ButtonWrapper = styled.button`
  border-radius: 35px;
  padding: 15px 32px;
  background-color: ${({ filled, bgColor }) =>
    !filled && !bgColor
      ? "transparent"
      : filled && bgColor
      ? bgColor
      : !filled && bgColor
      ? "transparent"
      : colors.secondary};
  color: ${({ filled, bgColor }) =>
    !filled && !bgColor
      ? colors.white
      : filled && !bgColor
      ? colors.white
      : !filled && bgColor
      ? bgColor
      : filled && bgColor
      ? colors.white
      : colors.secondary};
  font-family: "DM Sans", sans-serif;
  border: none;
  outline: none;
  /* margin-left: 30px; */
  cursor: pointer;
  text-decoration: none;
  display: flex;
  white-space: nowrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  transition: all 0.2s ease-in-out;
  border: 2px solid
    ${({ filled, bgColor }) =>
      filled && bgColor
        ? bgColor
        : !filled && bgColor
        ? bgColor
        : colors.secondary};
  gap: 8px;
  & > span.last-span {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: unset;
    border: 2px solid ${colors.secondary};
    color: ${colors.secondary};
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    padding: 10px 15px;
    /* margin-left: 15px; */
    font-size: 13px;
    & > span {
      font-size: 10px;
    }
  }
`;
