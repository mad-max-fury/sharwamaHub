import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { GoToTop } from "../../components";

import { toast } from "react-toastify";

const CheckOrder = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.sharwamahub.com/api/v1/orders/${search}`
      );
      const data = await response.json();
      toast.success(data?.message);
      setProducts(data?.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <>
      <ShowCaseWraps>
        <InputWrap>
          <input
            type="text"
            placeholder="Enter your order number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            {loading ? "Search..." : " Search"}
          </button>
        </InputWrap>
        <ShowCaseItem>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error</div>
          ) : (
            <Wrapper>
              {!products?.order ? (
                <div> Search for an Order</div>
              ) : (
                <>
                  {products?.order?.orderItems?.map((item) => {
                    return (
                      <Productswrap>
                        <ImageWrap>
                          <img src={item?.photo} alt={`${item?.name}`} />
                        </ImageWrap>
                        <Row>
                          <span>{item?.name}</span>
                          <span>Quantity: {item?.quantity}</span>
                          <span>Amount: {item?.amount}</span>
                        </Row>
                      </Productswrap>
                    );
                  })}
                  <Customerdetails>
                    <h3>Customer Detail</h3>
                    <Name>
                      <span>Name:</span>
                      <span>{products?.order?.name} </span>
                    </Name>
                    <Delivery>
                      <span>Address:</span>
                      <span>{products?.order?.deliveryAddress} </span>
                    </Delivery>
                    <Phone>
                      <span>Phone:</span>
                      <span>{products?.order?.phonenumber}</span>
                    </Phone>
                    <OrderId>
                      <span>OrderId:</span>
                      <span>{products?.order?.orderId}</span>
                    </OrderId>
                  </Customerdetails>
                </>
              )}
            </Wrapper>
          )}
        </ShowCaseItem>
      </ShowCaseWraps>
      <GoToTop />
    </>
  );
};

export { CheckOrder };

export const ShowCaseWraps = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 50px auto;
  gap: 2rem;
  min-height: 80vh;
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

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  & > input {
    width: 100%;
    max-width: 600px;
    border-radius: 10px 0px 0px 10px;
    height: 55px;
    border: none;
    padding-left: 1rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d8f6d7;
  }
  & > button {
    width: 120px;
    height: 55px;
    border-radius: 0px 10px 10px 0px;
    border: none;
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 500;
    font-family: "montserrat", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: ${colors.primaryDark};
    }
  }
`;
export const ShowCaseItem = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 600px;
  padding: 1rem 1rem;
  border-radius: 10px;
  height: fit-content;
  margin: 0 auto;
  background-color: #f4f8f5;
`;
const Productswrap = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const Customerdetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  & h3 {
    grid-column: span 2;
    margin: 0;
  }
  & div > span:first-of-type {
    font-weight: 500;
    color: grey;
  }
  & div > span:last-of-type {
    font-weight: 300;
    color: #333;
    font-size: 15px;
    margin: 0 0.5rem;
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
const Name = styled.div`
  grid-column: span 2;
`;
const Delivery = styled.div`
  grid-column: span 2;
`;
const Phone = styled.div``;
const OrderId = styled.div``;
const ImageWrap = styled.div`
  height: 70px;
  width: 70px;
  & img {
    height: 100%;
    width: 100%;
  }
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  color: grey;
  & > span:first-of-type {
    grid-column: span 2;
    color: #000;
    font-weight: 500;
  }
`;
