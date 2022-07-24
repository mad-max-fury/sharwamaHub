import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/product/cartslice";
import { nanoid } from "@reduxjs/toolkit";

const ProductCard = ({ addToCartI, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <CardWrap>
      <CardImage>
        <img src={product?.image} />
      </CardImage>
      <CardInfo>
        <Details>
          <CardTitle>{product?.name}</CardTitle>
          <CardDescription>
            Regular (chicken or beef with one sausage).
          </CardDescription>
        </Details>

        <AddToCartPrice>
          <CardPrice>
            <CardPriceTag>&#8358; {product?.price}</CardPriceTag>
            <span>Per one</span>
          </CardPrice>
          {addToCartI && (
            <AddToCartButton onClick={handleAddToCart}>
              <Button
                text={"Add to cart"}
                Icon={AiOutlineShoppingCart}
                filled
                size={"20"}
                bgColor={colors.primary}
              />
            </AddToCartButton>
          )}
        </AddToCartPrice>
      </CardInfo>
    </CardWrap>
  );
};

export { ProductCard };

const CardWrap = styled.div`
  height: 412px;
  width: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
  border-radius: 14px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0px 4px 168px 0px hsla(0, 0%, 0%, 0.25);
  padding: 0.65rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
    cursor: pointer;
  }
`;

const CardImage = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 18px;
  background-color: #000;
  overflow: hidden;
  & > img {
    height: 100%;
    width: 100%;
    border-radius: 18px;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  height: 48%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8;
`;
const CardDescription = styled.div`
  font-size: 0.9rem;
  color: grey;
`;
const CardPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & > span {
    font-size: 0.8rem;
    color: grey;
  }
`;
const CardPriceTag = styled.div`
  font-size: 1rem;
  margin: 0;
  width: fit-content;
  white-space: nowrap;
  font-weight: 700;
`;
const AddToCartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 100%;
  border-top: 1px solid #e6e6e6;
  padding: 0.5rem 0;
`;
const Details = styled.div``;
const AddToCartButton = styled.div``;
