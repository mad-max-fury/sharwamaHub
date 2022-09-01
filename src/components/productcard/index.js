import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../../features/product/cartslice";
import { toast } from "react-toastify";

const ProductCard = ({ addToCartI, product, src }) => {
  const cart = useSelector(getCartItems);
  const dispatch = useDispatch();
  const cartIndex = cart.findIndex((item) => item?.id === product?.id);
  const currentItem = cart[cartIndex];

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.info(`${product.name} added to cart`, {
      duration: 1000,
    });
  };
  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <CardWrap>
      <CardImage>
        <img src={product?.image} alt={` ${product?.name}`} />
      </CardImage>
      <CardInfo>
        <Details>
          <CardTitle>{product?.name}</CardTitle>
          <CardDescription>{product?.desc}</CardDescription>
        </Details>

        <AddToCartPrice>
          <CardPrice>
            <CardPriceTag>&#8358; {product?.price}</CardPriceTag>
            <span>Per one</span>
          </CardPrice>
          {[currentItem][0]?.quantity >= 1 ? (
            <AddRemove>
              <Remove onClick={() => handleRemove(product)}>-</Remove>
              <Quantity>{[currentItem][0]?.quantity}</Quantity>
              <Add onClick={() => handleAdd(product)}>+</Add>
            </AddRemove>
          ) : (
            <>
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
            </>
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
const AddRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  justify-self: end;
  gap: 0.5rem;
`;
const Remove = styled.div`
  font-weight: 700;
  font-size: clamp(1.4rem, 0.8vw, 1.4rem);
  color: ${colors.secondary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
  height: 2rem;
  width: 2rem;
  border: 2px solid ${colors.secondary};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Quantity = styled.div`
  font-weight: 700;
  font-size: clamp(1.2rem, 0.8vw, 1.4rem);
  color: ${colors.secondary};
  height: 2rem;
  width: fit-content;
  padding: 0 0.5rem;
  border: 2px solid ${colors.secondary};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Add = styled.div`
  font-weight: 700;
  font-size: clamp(1.4rem, 0.8vw, 1.4rem);
  color: ${colors.secondary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
  height: 2rem;
  width: 2rem;
  border: 2px solid ${colors.secondary};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const CardImage = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 18px;
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
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
`;
const CardDescription = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
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
