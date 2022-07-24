import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { GoToTop, ProductCard } from "../../components";
import { useSelector } from "react-redux";
import {
  getAllCategory,
  getAllProducts,
  getProductsError,
  getProductsLoading,
} from "../../features/product/productslice";
const Shop = () => {
  const category = useSelector(getAllCategory);
  const products = useSelector(getAllProducts);
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);
  const [tabs, setTabs] = useState(category[0]);
  return (
    <>
      <ShowCaseWraps>
        <MButtonWrap>
          {[...category].map((item, i) => (
            <MButton
              key={i}
              className={item === tabs ? "active" : null}
              onClick={() => setTabs(item)}
            >
              {item}
            </MButton>
          ))}
        </MButtonWrap>
        <ShowCaseItem>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error</div>
          ) : (
            products.map((item) => (
              <ProductCard key={item.id} product={item} addToCartI />
            ))
          )}
        </ShowCaseItem>
      </ShowCaseWraps>
      <GoToTop />
    </>
  );
};

export { Shop };

export const ShowCaseWraps = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  gap: 2rem;
  margin-bottom: 1rem;
  & > h3 {
    font-size: 42px;
    font-weight: 500;
    line-height: 52px;
    @media (max-width: 600px) {
      font-size: 34px;
      line-height: 32px;
      font-weight: 350;
    }
  }
`;

export const MButton = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.primary};
  color: #000;
  font-size: 18px;
  font-weight: 700;
  min-width: 170px;
  margin: 0 auto;
  height: 67px;
  border-radius: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px transparent;
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px ${colors.primary};
    color: ${colors.primary};
    cursor: pointer;
  }
  &.active {
    box-shadow: 0 0 10px ${colors.primary};
    color: ${colors.white};
    background-color: ${colors.primary};
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    height: 50px;
    width: 100px;
  }
`;
export const MButtonWrap = styled.div`
  //overflow-x horizontal scroll
  overflow-x: scroll;
  overflow-y: auto;
  max-width: 100%;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  margin-top: 3rem;
  gap: 2rem;
  justify-content: space-between;

  //get rid of scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ShowCaseItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;