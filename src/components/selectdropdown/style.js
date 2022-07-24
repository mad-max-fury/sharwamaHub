import { ListboxButton, ListboxPopover, ListboxList } from "@reach/listbox";
import "@reach/listbox/styles.css";

import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  & > div {
    width: 100% !important;
  }
  > span {
    font-family: Nunito;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.5px;
    color: ${colors.chinese_black};
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const MenuList = styled(ListboxButton)`
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 3.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  border: 3px solid rgba(217, 217, 217, 1) !important;
  border-radius: 10px;
  color: grey;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &:hover {
    border: 3px solid ${colors.chinese_black} !important;
  }
`;

export const PopOver = styled(ListboxPopover)`
  transition: all 0.3s ease-in-out;
  background: #ffffff;
  position: absolute;
  bottom: 11%;
  box-shadow: 0px 10px 40px -7px ${colors.secondary_color};
  height: fit-content;
  border-radius: 15px;
  border: none !important;
  outline: none !important;
  > [data-reach-listbox-list] {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 15px;

    > [data-reach-listbox-option] {
      border-bottom: 1px solid rgba(58, 67, 116, 0.15);
      padding: 8px;
      border-radius: 15px;
      transition: all 0.5s ease-in-out;

      &:last-of-type {
        border-bottom: unset;
      }
      &:hover {
        transition: all 0.5s ease-in-out;
        background: ${colors.primary_cadium_violet};
      }
    }
  }
`;
export const ListboxI = styled(ListboxList)`
  border: 1px solid red !important;
`;
