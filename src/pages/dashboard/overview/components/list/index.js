import React from "react";
import styled from "styled-components";

const List2 = ({ i }) => {
  return (
    <ListWrap key={i * Math.random()}>
      <ListItem>
        <ImgWrap>
          <img
            src="https://static.toiimg.com/thumb/64696930.cms?imgsize=329052&width=800&height=800"
            alt="product image link"
          />
        </ImgWrap>
        <span>Product Name</span>
      </ListItem>
      <ListItem>
        <span>400 Pcs</span>
      </ListItem>
      <ListItem>
        <span>$8,500</span>
      </ListItem>
      <ListItem>
        <span>Out Of Stock</span>
      </ListItem>
    </ListWrap>
  );
};

export { List2 };

const ListWrap = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:nth-of-type(even) {
    background-color: #fff;
  }
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
`;
const ListItem = styled.div`
  display: flex;
  text-align: center;
  height: 100%;
  width: calc((1 / 4) * 100%);
  align-items: center;
  justify-content: start;
  padding-left: 1rem;
  &:first-of-type {
    width: calc((2 / 4) * 100%);
    display: flex;
    gap: 1.5rem;
  }
`;
const ImgWrap = styled.div`
  height: clamp(2rem, 10vw, 3.5rem);
  width: clamp(2rem, 10vw, 3.5rem);
  border-radius: 4px;
  & > img {
    height: 100%;
    width: 100%;
    border-radius: 4px;
    object-fit: contain;
  }
`;
