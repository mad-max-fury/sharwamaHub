import React, { useState } from "react";

import { HeroSectionWrap, HeroInner, BgWrap, BtnWrap, TextUp } from "./style";
import { BsArrowRightShort } from "react-icons/bs";
import { sharwarma } from "../../assets";
import { Button } from "../button";
import { colors } from "../../colors";
import { BsArrowRepeat, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => navigate("/shop");
  return (
    <HeroSectionWrap>
      <Inner>
        <HeroInner>
          <TextUp>
            <h1>
              Your Favourite
              <br /> Sharwama Delivered <br />
              <span> Hot</span> & <span>Fresh</span>
            </h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget purus, nullam ipsum amet in sit cursus nibh.
              Tellus, aenean vitae aenean pharetra tellus in. Cursus vitae, nec,
              u
            </p> */}
          </TextUp>
          <BtnWrap>
            <span onClick={handleClick}>
              <Button
                text={"Order Now"}
                Icon={BsArrowRightShort}
                filled
                size={"30"}
                bgColor={colors.primary}
              />
            </span>
          </BtnWrap>
        </HeroInner>

        <BgWrap>
          <div className="first">
            <span>
              <BsArrowRepeat />
            </span>
            <span>The flavour factory</span>
          </div>
          <div className="third">
            <span>
              <BsWhatsapp />
            </span>
            <span>
              <span>+234 916 035 9650</span>
            </span>
          </div>

          <img src={sharwarma} alt="sharwarma" />
        </BgWrap>
      </Inner>
    </HeroSectionWrap>
  );
};

export { HeroSection };

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    padding-left: 0rem;
    padding-bottom: 2rem;
    margin-bottom: 13rem;
    width: 90%;
    height: fit-content;
    gap: 3rem;
  }
  @media (min-width: 651px) and (max-width: 1300px) {
    width: 90%;
    margin: 0 auto;
  }
`;
