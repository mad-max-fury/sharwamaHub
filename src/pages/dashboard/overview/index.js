import React from "react";
import styled from "styled-components";
import { ChartComponent2, List2, SummaryCard } from "./components";
import { BiBarChartAlt } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa";
import { ChartComponent } from "./components/chart";
import { Line, PolarArea } from "react-chartjs-2";
const OverviewPage = () => {
  return (
    <OverviewWrap>
      <TopWrap>
        <LDiv>
          <SumWrap>
            <SummaryCard price={"7,4897.67"} text="Total Sales" />
            <SummaryCard
              icon={<BiBarChartAlt />}
              price={"748.67"}
              text="Total Profit"
            />
            <SummaryCard
              text="Total Orders"
              num={"500"}
              icon={<FaLayerGroup />}
            />
          </SumWrap>
          <ChartWrap>
            <ChartComponent ChartType={Line} />
          </ChartWrap>
        </LDiv>
      </TopWrap>
      <BottomNav>
        <Heading>Top selling products</Heading>
        <Table>
          <THead>
            <TableNav>
              <NavItem>Product name</NavItem>
            </TableNav>
            <TableNav>
              <NavItem>Sold</NavItem>
            </TableNav>
            <TableNav>
              <NavItem>Total sales</NavItem>
            </TableNav>
            <TableNav>
              <NavItem>Stock status</NavItem>
            </TableNav>
          </THead>
          <TBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <List2 i={i} key={i} />
            ))}
          </TBody>
        </Table>
      </BottomNav>
    </OverviewWrap>
  );
};

export { OverviewPage };
const OverviewWrap = styled.main`
  width: 97%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
`;
const Heading = styled.h3``;
const TopWrap = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-between;
`;
const BottomNav = styled.div`
  width: 100%;
  min-height: 80vh;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;
`;
const THead = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: grey;
  border-bottom: 1px solid #ccc;
`;
const TBody = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.1rem; */
  width: 100%;
`;
const TableNav = styled.div`
  display: flex;
  text-align: center;
  height: 100%;
  width: calc((1 / 4) * 100%);
  align-items: center;
  justify-content: start;
  padding-left: 1rem;
  &:first-of-type {
    width: calc((2 / 4) * 100%);
  }
`;
const NavItem = styled.div``;
const LDiv = styled.div`
  /* border: 1px solid red; */
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;
const SumWrap = styled.div`
  width: 100%;
  min-height: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  & > div {
    &:first-child {
      background-color: #daeaf0;
    }
    &:last-child {
      background-color: #e3f49a;
    }
    &:nth-child(2) {
      background-color: #dcd2ee;
    }
  }
`;
const ChartWrap = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  min-height: 55vh;
`;
const RDiv = styled.div`
  border: 1px solid red;
  width: 100%;
  max-width: 400px;
  margin: 0 1rem;
`;
