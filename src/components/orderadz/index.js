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
          <Heading>
            Simple Way To Order
            <br /> Your Sharwama
          </Heading>
          <Paragraph>
            Your orders are given utmost priority when they
            <br />
            are sent to our DM via WhatsApp.
          </Paragraph>
          <a href="https://api.whatsapp.com/send?phone=2349160359650">
            {" "}
            <Button
              text={"Order With Whatsapp Now"}
              noIcon
              filled
              size={"20"}
              bgColor={colors.primary}
            />
          </a>
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
  font-size: clamp(2.5rem, 2vw, 4.2rem);
  margin: 0;
  line-height: 1.2;
  font-weight: 900;
  color: #000;
  margin-bottom: 0.6rem;
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
