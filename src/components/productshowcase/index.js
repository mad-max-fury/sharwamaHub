import React from "react";
import { Link } from "react-router-dom";
import {
  burger,
  chickensalad,
  milkshake,
  popcorn,
  sandwich1,
  sharwama1,
  smoothies,
  smoked,
} from "../../assets";
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
        <ProductCard
          product={{
            id: 8,
            name: "Sharwama",
            price: "1300 - 2800",
            image: sharwama1,
            desc: "A refreshing blend of fresh fruits like strawberries, bananas and guava, this smoothie recipe is enough to make your summer days delightful.",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Burger",
            price: "1500 - 2500",
            image: burger,
            desc: "An equally delicious build, featuring a Beyond Meat patty, smoky corn tortilla chips (brushed with Honest hot sauce and deep-fried)",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Sandwich",
            price: "1500 - 2500",
            image: sandwich1,
            desc: "This is a sweet and spicy sandwich is loaded with a fine vegetable filling of cabbage, carrot, onion.",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Milk Shake",
            price: "2000",
            image: milkshake,
            desc: "There’s really nothing better than treating yourself to a milkshake on a hot day!",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Chicken Salad",
            price: "1500",
            image: chickensalad,
            desc: "A family favorite chicken salad made from baked thighs and breasts sprinkled with rosemary.",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Pop Corn",
            price: "500 - 1000",
            image: popcorn,
            desc: "The evergreen, tasty, and addictive snack popped out from a fine blend of roasted corn kernels & tossed with butter, spices & flavours.",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Smoothies",
            price: "100 - 2000",
            image: smoothies,
            desc: "A refreshing blend of fresh fruits like strawberries, bananas and guava, this smoothie recipe is enough to make your summer days delightful.",
          }}
        />
        <ProductCard
          product={{
            id: 8,
            name: "Ice Cream",
            price: "500 - 5500",
            image: smoked,
            desc: "An old fashioned vanilla ice cream recipe that everyone loves!",
          }}
        />
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
