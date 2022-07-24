import React from "react";
import { bcook, deli, fdrone } from "../../assets";
import {
  HowItWorksWraps,
  Heading,
  ItemsRow,
  Item,
  Wrap,
  SHeading,
  ItemHeading,
  ItemParagraph,
  ItemImageWrap,
} from "./style";
const HowItWorks = () => {
  return (
    <HowItWorksWraps>
      <Wrap>
        <SHeading>Our Services</SHeading>
        <Heading>How It Works</Heading>
      </Wrap>
      <ItemsRow>
        <ItemTemp src={deli} />
        <ItemTemp src={bcook} />
        <ItemTemp src={fdrone} />
      </ItemsRow>
    </HowItWorksWraps>
  );
};

export { HowItWorks };

const ItemTemp = ({ src }) => {
  return (
    <Item>
      <ItemImageWrap>
        <img src={src} alt="how it work image" />
      </ItemImageWrap>
      <ItemHeading>Easy to order</ItemHeading>
      <ItemParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare aenean
        mauris.{" "}
      </ItemParagraph>
    </Item>
  );
};
