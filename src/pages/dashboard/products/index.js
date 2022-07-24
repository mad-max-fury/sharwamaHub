import React, { useState } from "react";
import styled from "styled-components";
import { Dropdown, ProductCard } from "../../../components";
import { MdOutlineAdd } from "react-icons/md";
import { AddProduct, CreateCate } from "./components";
import { colors } from "../../../colors";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      <Main>
        <Widget>
          <span>
            {" "}
            <input placeholder="Search for an item..." name="product-search" />
          </span>
          <div>
            <AddButtonWrap onClick={() => setShowCreateModal(true)}>
              <AddButton>Create Category</AddButton>
              <span>
                <MdOutlineAdd size={25} />
              </span>
            </AddButtonWrap>
            <AddButtonWrap onClick={() => setShowModal(true)}>
              <AddButton>Add Product</AddButton>
              <span>
                <MdOutlineAdd size={25} />
              </span>
            </AddButtonWrap>
          </div>
        </Widget>

        <ItemsWrap>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
            (item, i) => {
              return <ProductCard addToCart />;
            }
          )}
        </ItemsWrap>
      </Main>
      <AddProduct showModal={showModal} setShowModal={setShowModal} />
      <CreateCate
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
      />
    </>
  );
};

export { Products };

const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  gap: 2rem;
`;

const Widget = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  & > span {
    width: 300px;
    height: 3rem;
    border-radius: 5px;
    background-color: ${colors.white};
    border: 1px solid #ccc;
    & input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: inherit;
      padding: 0.5rem;
      font-size: 1rem;
      outline: none;
    }
  }
  & > div {
    display: flex;
    gap: 1rem;
  }
`;

const AddButtonWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  padding: 0 32px;
  display: flex;
  gap: 0.5rem;
  background: ${colors.primary};
  border: none;
  cursor: pointer;
  outline: 0;

  color: ${colors.white};
  font-size: 1rem;
  font-weight: 300;
  border-radius: 0.5rem;
`;
const AddButton = styled.h4``;

const ItemsWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  width: 100%;
`;
