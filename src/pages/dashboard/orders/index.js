import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../../components/selectdropdown";
import { List } from "./components";

const Orders = () => {
  return (
    <OrderWrap>
      <Widget>
        <span>
          <h2>All Orders</h2>
        </span>

        <div>
          <span>
            <h4>sort by</h4>
          </span>
          {/* <select>
            <option>Delivered</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select> */}
          <Dropdown />
        </div>
      </Widget>
      <Table>
        <THead>
          <span>Products</span>
          <span>Order ID</span>
          <span>Date</span>
          <span>Customer Name</span>
          <span>Amount</span>
          <span>Status</span>
        </THead>
        <TBody>
          {[
            "Pending",
            "Completed",
            "Cancelled",
            "Pending",
            "Completed",
            "Cancelled",
            "Pending",
            "Completed",
            "Cancelled",
            "Pending",
            "Completed",
            "Cancelled",
            "Pending",
            "Completed",
            "Cancelled",
            "Pending",
            "Completed",
            "Cancelled",
          ].map((item, i) => {
            return <List status={item} i={i} text={item} />;
          })}
        </TBody>
      </Table>
    </OrderWrap>
  );
};

export { Orders };

const OrderWrap = styled.main`
  min-height: 100vh;
  width: 95%;
  margin: 0 auto;
  /* border: 1px solid red; */
  padding: 1rem;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Widget = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;

  & > div {
    display: flex;
    gap: 0.8rem;
    & > span {
      h4 {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;
`;

const THead = styled.div`
  height: 3rem;
  background-color: #f5f5f5;
  border-radius: 6px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  transform: scale(1.01);
  & > span {
    display: flex;
    text-align: center;

    height: 100%;
    width: calc((1 / 6) * 100%);
    align-items: center;
    justify-content: start;
    padding-left: 1rem;
  }
`;
const TBody = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.1rem; */
  width: 100%;
`;
