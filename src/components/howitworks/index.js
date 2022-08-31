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
        <ItemTemp
          src={deli}
          textHeading="Easy to Order"
          paragraph="Place your orders with eaase by sending a simplified message to us"
        />
        <ItemTemp
          src={bcook}
          textHeading="Best Quality"
          paragraph="Our recipes are home-made, assuring you of a perfect blend of ingredients for your delight."
        />
        <ItemTemp
          src={fdrone}
          textHeading="Fast Delivery"
          paragraph="Once your order is confirmed, delivery only takes about 10 minutes(based on your location)"
        />
      </ItemsRow>
    </HowItWorksWraps>
  );
};

export { HowItWorks };

const ItemTemp = ({ src, paragraph, textHeading }) => {
  return (
    <Item>
      <ItemImageWrap>
        <img src={src} alt="how it work image" />
      </ItemImageWrap>
      <ItemHeading>{textHeading}</ItemHeading>
      <ItemParagraph>{paragraph}</ItemParagraph>
    </Item>
  );
};
