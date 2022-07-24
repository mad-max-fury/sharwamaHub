import styled from "styled-components";
import { colors } from "../../colors";

export const ShowCaseWraps = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  gap: 2rem;
  margin-bottom: 1rem;
  & > h3 {
    font-size: 42px;
    font-weight: 500;
    line-height: 52px;
    @media (max-width: 600px) {
      font-size: 34px;
      line-height: 32px;
      font-weight: 350;
    }
  }
  @media (max-width: 1300px) {
    width: 90%;
  }
`;
export const Wrap = styled.div`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
`;
export const Heading = styled.h3`
  margin: 0 auto;
  font-size: clamp(2rem, 2vw, 3.8rem);
  font-weight: 700;
`;
export const SHeading = styled.h5`
  color: ${colors.secondary};
  margin: 0 auto;
`;

export const MButton = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.primary};
  color: #000;
  font-size: 18px;
  font-weight: 700;
  min-width: 170px;
  margin: 0 auto;
  height: 67px;
  border-radius: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px ${colors.primary};
    color: ${colors.primary};
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    height: 50px;
    width: 100px;
  }
`;
export const MButtonWrap = styled.div`
  //overflow-x horizontal scroll
  overflow-x: scroll;
  overflow-y: auto;
  max-width: 100%;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  gap: 2rem;
  justify-content: space-between;

  //get rid of scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ShowCaseItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;
