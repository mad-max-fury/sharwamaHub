import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../colors";
import { jsplash } from "../../assets";
export const HeroSectionWrap = styled.section`
  height: calc(100vh - 100px);
  position: relative;
  max-height: 62rem;
  margin: 0 auto;
  margin-bottom: 13rem;
  max-width: 1550px;
  @media (max-width: 650px) {
    height: fit-content;
    max-height: fit-content;
  }
  @media (min-width: 651px) and (max-width: 1250px) {
    width: 100%;
    height: fit-content;
  }
  &::before {
    content: "";
    height: 25rem;
    width: 20rem;
    background-image: url(${jsplash});
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -20rem;
    position: absolute;
    z-index: 1;
    left: 0;
  }
`;
export const BgWrap = styled.div`
  position: relative;
  border-radius: 16px;
  width: 40%;
  height: 65vh;
  max-height: 30rem;
  margin: auto 0;
  background-color: ${colors.primary};
  isolation: isolate;
  & > img {
    position: absolute;
    width: 100%;
    object-fit: contain;
    bottom: -70px;
    right: -2px;
    z-index: 1;
  }
  @media screen and (max-width: 650px) {
    margin: 0 auto;
    padding-top: 20px;
    left: 0%;
    width: 100%;
    height: 340px;
    /* z-index: -1; */

    & > img {
      width: 100% !important;
      /* height: 100% !important; */
      bottom: -20px;
      object-fit: cover;
    }
  }
  @media (min-width: 651px) and (max-width: 1100px) {
    display: none;
  }
  @media (min-width: 1101px) and (max-width: 1300px) {
    width: 80%;
  }

  & > div {
    position: absolute;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: ${colors.white};
    padding: 10px 20px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    z-index: 2;
    gap: 1rem;
    & > span {
      display: flex;
      /* flex-direction: column; */
    }
    &.first {
      top: 50px;
      left: -100px;
    }
    &.second {
      top: 40%;
      right: -100px;
    }
    &.third {
      bottom: 50px;
      left: -100px;
    }
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
`;
export const HeroInner = styled.div`
  font-family: "DM Sans", sans-serif;
  width: 55%;
  height: fit-content;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 650px) {
    width: 100%;
    margin-left: 0;
    padding-left: 0rem;
    margin-top: 0;
    /* border: 1px solid red; */
  }

  @media (min-width: 651px) and (max-width: 1300px) {
    width: fit-content;
  }
  /* @media screen and (max-width: 600px) {
    width: 100%;
  } */
`;
export const TextUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    width: 90%;
    font-size: 2.8rem;
    margin: 0;
    padding: 0;

    & > span {
      font-size: 2.8rem;
      font-weight: bold;

      color: ${colors.secondary};
    }
  }
  p {
    width: 68%;
    line-height: 1.8;
    color: grey;
    margin: 0;
  }

  @media screen and (max-width: 850px) {
    /* height: 218px; */

    h1 {
      width: 100%;
      font-size: 31.3px;
      font-family: Orbitron, sans-serif;

      & > span {
        font-size: 1.8rem;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.secondary};
      }
    }
    p {
      width: 90%;
      font-size: 12.8px;
      line-height: 21px;
    }
  }

  @media (min-width: 851) and (max-width: 950px) {
    h1 {
      width: 100%;
      font-size: 31.3px;
      font-family: Orbitron, sans-serif;

      & > span {
        font-size: 1.8rem;
        font-weight: 400;
        font-family: Orbitron, sans-serif;
        color: ${colors.secondary};
      }
    }
    p {
      width: 90%;
      font-size: 12.8px;
      line-height: 21px;
    }
  }
`;
export const BtnWrap = styled.div`
  width: fit-content !important;
  display: flex;
  align-self: start;
  gap: 2rem;
  & > span > button {
    margin: 0;
    & span {
      font-size: clamp(14px, 4vw, 20px);
    }
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    /* border: 1px solid green; */
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    /* border: 1px solid green; */
  }
`;
export const FooterSocial = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
export const FooterLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-self: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;

  &:hover {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;
