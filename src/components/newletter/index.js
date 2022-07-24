import React from "react";
import styled from "styled-components";
import { illustration, svgpath } from "../../assets";
import { colors } from "../../colors";
import { Button } from "../button";

const Newsletter = () => {
  return (
    <NewsletterWrap>
      <NewsletterForm>
        <ImageWrap>
          <img src={illustration} alt="" />
        </ImageWrap>
        <FormWrap>
          <NewsletterFormTitle>
            Get notified about any update
          </NewsletterFormTitle>
          <NewsletterFormInput>
            <input type="text" placeholder="Enter your email" />
            <span>
              <button>Subscribe</button>
            </span>
          </NewsletterFormInput>
        </FormWrap>
      </NewsletterForm>
    </NewsletterWrap>
  );
};

export { Newsletter };

const NewsletterWrap = styled.div`
  height: 50vh;
  max-height: 25rem;
  width: 100%;
  display: flex;
`;
const NewsletterForm = styled.div`
  height: 35vh;
  max-height: 20rem;

  width: 100%;
  max-width: 1000px;
  border-radius: 16px;
  background-color: ${colors.primary};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  position: relative;
  isolation: isolate;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${svgpath});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  /* background-image: ${`url(${svgpath})`}; */
`;
const ImageWrap = styled.div`
  height: 7rem;
  width: 8rem;
  & img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const NewsletterFormTitle = styled.div`
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;
const NewsletterFormInput = styled.div`
  display: flex;
  height: 3rem;
  width: 400px;
  border-radius: 6px;
  background-color: ${colors.white};
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  & input {
    height: 100%;
    width: 90%;
    border-radius: inherit;
    outline: 0;
    border: none;
    padding-left: 1rem;
  }
  & > span {
    width: 150px;
    margin: auto 0.2rem;
    height: 95%;
    & button {
      height: 100%;
      width: 100%;
      border: none;
      border-radius: 6px;
      background-color: ${colors.primary};
      color: ${colors.white};
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
      }
    }
  }
`;
const NewsletterFormButton = styled.div``;
