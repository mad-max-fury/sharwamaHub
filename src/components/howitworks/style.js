import styled from "styled-components";
import { leftpepper, rightpepper } from "../../assets";
import { colors } from "../../colors";

export const HowItWorksWraps = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1550px;
  margin: 0 auto;
  margin-bottom: 20rem;
  position: relative;
  isolation: isolate;
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
  &::before {
    content: "";
    height: 25rem;
    width: 20rem;
    background-image: url(${leftpepper});
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -25rem;
    position: absolute;
    z-index: 1;
    left: 0;
  }
  &::after {
    content: "";
    height: 25rem;
    width: 20rem;
    background-image: url(${rightpepper});
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -25rem;
    position: absolute;
    z-index: 1;
    right: 0;
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

export const ItemsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  height: fit-content;
  align-items: start;
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const Item = styled.div`
  max-width: 270px;
  /* margin: auto; */
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  position: relative;
`;

export const ItemHeading = styled.h3`
  font-weight: 700;
  margin: 0;
  @media screen and (max-width: 600px) {
    font-weight: 300;
  }
`;
export const ItemParagraph = styled.p`
  text-align: center;
  color: grey;
  margin: 0;
`;
export const ItemImageWrap = styled.div`
  height: 10rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SHeading = styled.h5`
  color: ${colors.secondary};
  margin: 0 auto;
`;
