import React from "react";
import styled from "styled-components";
import { mockup } from "../../assets";
import { colors } from "../../colors";
import { Button } from "../button";

const OrderNow = () => {
  return (
    <OrderNowWrap>
      <Inner>
        <TextWrap>
          <Heading>Simple Way To Order Your Sharwama</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit. Ornare aenean mauris pharetra morbi
            <br /> condimentum.
          </Paragraph>
          <span>
            {" "}
            <Button
              text={"Order With Whatsapp Now"}
              noIcon
              filled
              size={"20"}
              bgColor={colors.primary}
            />
          </span>
        </TextWrap>

        <ImageWrap>
          <img src={mockup} />
        </ImageWrap>
      </Inner>
    </OrderNowWrap>
  );
};

export { OrderNow };

const OrderNowWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 5rem 0;
`;
const Inner = styled.div`
  width: 100%;
  height: 70vh;

  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  justify-content: space-between;

  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (min-width: 1301px) {
    max-height: 30rem;
  }
  @media (max-width: 713px) {
    flex-direction: column;
    align-items: start;
    height: fit-content;
    margin: 0 auto;
    gap: 1.5rem;
  }
`;
const TextWrap = styled.div`
  width: 50%;
  height: fit-content;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  & > span {
    width: fit-content;
  }

  @media (max-width: 713px) {
    width: 95%;
    height: fit-content;
    flex-direction: column;
    align-items: start;
    margin: 0 auto;
    gap: 1rem;
    & > span {
      & > button {
        padding: 15px 32px;
        & span {
          font-size: clamp(14px, 4vw, 20px);
        }
      }
    }
  }
`;
const Heading = styled.h1`
  font-size: clamp(2rem, 2vw, 3.8rem);
  margin: 0;
  line-height: 1;
  font-weight: 700;
  color: #000;
`;
const Paragraph = styled.p`
  margin: 0;
  font-size: 1rem;
`;
const ImageWrap = styled.div`
  width: fit-content;
  height: 85%;
  max-height: 30rem;
  margin: auto;
  & > img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;
