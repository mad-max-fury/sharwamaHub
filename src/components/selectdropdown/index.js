//

import { useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = () => {
  const [value, setValue] = useState("Pending");
  const [show, setShow] = useState(false);
  return (
    <Wrap>
      <button onClick={() => setShow(!show)}>
        {value} <FaAngleDown />
      </button>
      <Select value={value}>
        <option>{value}</option>
      </Select>
      <SelectClone show={show}>
        {["Delivered", "Pending", "Cancelled"].map((item, i) => (
          <li
            onClick={() => {
              setValue(item);
              setShow(!show);
            }}
            className={item === value && "active"}
          >
            {item}
          </li>
        ))}
      </SelectClone>
    </Wrap>
  );
};

export { Dropdown };

const Wrap = styled.div`
  display: flex;
  position: relative;
  height: 2rem;
  max-width: 150px;
  width: 150px;
  & > button {
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #333;
    outline: 0;
    border-radius: 6px;
    border: 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  }
`;
const Select = styled.select`
  display: none;
`;
const SelectClone = styled.ul`
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: ${({ show }) => (show ? "500" : "-500")};
  top: ${({ show }) => show && "80%"};
  left: 0;
  width: ${({ show }) => (show ? "clamp(120px, 5vw, 150px)" : 0)};
  overflow: hidden;
  height: ${({ show }) => (show ? "fit-content" : 0)};
  background-color: #fff;
  box-shadow: 0px 0px 4px grey;
  list-style: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0;
  transform: ${({ show }) => (show ? "translateY(-.5rem) " : "translateY(-2)")};
  & > li {
    width: 100%;
    height: fit-content;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }
    &.active {
      background-color: #333;
      color: #fff;
    }
  }
`;
