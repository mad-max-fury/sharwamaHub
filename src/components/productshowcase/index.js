import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../productcard";
import {
  Heading,
  ShowCaseWraps,
  MButton,
  MButtonWrap,
  SHeading,
  Wrap,
  ShowCaseItem,
} from "./style";

const Showcase = () => {
  return (
    <ShowCaseWraps id="menu">
      <Wrap>
        <SHeading>Our Menu</SHeading>
        <Heading>The Most Popular</Heading>
      </Wrap>

      <ShowCaseItem>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ShowCaseItem>
      <MButtonWrap>
        <MButton>
          <Link to={"/shop"}>See More</Link>
        </MButton>
      </MButtonWrap>
    </ShowCaseWraps>
  );
};

export { Showcase };
