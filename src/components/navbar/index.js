import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { logo } from "../../assets";
import { CartPreview } from "../cartpreview";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { getCartTotalQuantity } from "../../features/product/cartslice";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const CartTotalQuantity = useSelector(getCartTotalQuantity);
  const path = window.location;
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const onClose = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <CartPreview isModalOpen={isModalOpen} onClose={onClose} />
      <NavCon>
        <NavWrap>
          <Logo>
            <Linked to={"/"}>
              <img src={logo} alt="logo" />
            </Linked>
          </Logo>
          <CartWrap>
            <Cart
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setIsOpen(false);
              }}
            >
              <span>{CartTotalQuantity}</span>
              <AiOutlineShoppingCart color="grey" size={"25px"} />
            </Cart>
            <Hamburger
              onClick={() => {
                setIsOpen(!isOpen);
                setIsModalOpen(false);
              }}
            >
              {isOpen ? (
                <AiOutlineClose color={colors.secondary} size={"25px"} />
              ) : (
                <FaBars color="grey" size={"25px"} />
              )}
            </Hamburger>
          </CartWrap>
          <NavItems isOpen={isOpen}>
            <ul>
              <li>
                <LinkedH
                  className={
                    path.pathname === "/" && path.hash === "" && "active"
                  }
                  to={"/"}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </LinkedH>
              </li>
              <li>
                <LinkedH
                  to="/#menu"
                  className={
                    path.pathname === "/" && path.hash === "#menu" && "active"
                  }
                  scroll={(el) => scrollWithOffset(el, 120)}
                  onClick={() => setIsOpen(false)}
                >
                  Menu
                </LinkedH>
              </li>
              <li>
                <Linked
                  to={"/shop"}
                  className={path.pathname === "/shop" && "active"}
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Linked>
              </li>
              <li>
                <Linked
                  to={"/checkorder"}
                  className={path.pathname === "/checkorder" && "active"}
                  onClick={() => setIsOpen(false)}
                >
                  Check Orders
                </Linked>
              </li>
              <li>
                <LinkedH
                  to={"/#contact"}
                  className={
                    path.pathname === "/" &&
                    path.hash === "#contact" &&
                    "active"
                  }
                  scroll={(el) => scrollWithOffset(el, 100)}
                  onClick={() => setIsOpen(false)}
                >
                  Contact us
                </LinkedH>
              </li>
            </ul>
            <div className="big">
              <Cart
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setIsOpen(false);
                }}
              >
                <span>{CartTotalQuantity}</span>
                <AiOutlineShoppingCart color="grey" size={"25px"} />
              </Cart>
            </div>

            <div
              onClick={() => {
                setIsOpen(false);
                navigate("/shop");
              }}
            >
              <Button
                text={"Book Now"}
                filled
                bgColor={colors.primary}
                noIcon
              />
            </div>
          </NavItems>
        </NavWrap>
      </NavCon>
    </>
  );
};

export { Navbar };
//animation for the navbar

const NavCon = styled.div`
  width: 100%;
  height: fit-content;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #fff;
`;
const NavWrap = styled.nav`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  /* border: 1px solid green; */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width: 90%;
  }
`;
const CartWrap = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
      font-size: 1rem;
      font-weight: semibold;
      font-family: "montserrat", sans-serif;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 80px;
    right: 0;
    width: ${(props) => (props.isOpen ? "65%" : "0")};
    height: ${(props) => props.isOpen && "fit-content"};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${(props) => (props.isOpen ? "1.5rem" : "0")};
    background-color: ${colors.white};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) =>
      isOpen
        ? `translateX(0)

    `
        : "translateX(100%)"};
    transition: all 0.3s ease-in-out;

    & > ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    & > div.big {
      display: none;
    }
  }
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  position: relative;
  cursor: pointer;
  & > span {
    position: absolute;
    top: -10px;
    right: 0px;
    background-color: ${colors.secondary};
    color: ${colors.white};
    font-size: 0.8rem;
    font-weight: bold;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
  }
`;

const Logo = styled.div`
  width: fit-content;
  /* border: 1px solid red; */
  & > a {
    & > img {
      height: 50px;
      width: 100px;
    }
  }
`;

const Linked = styled(Link)`
  text-decoration: none;
  color: unset;
  transition: all 0.3s ease-in-out;
  &.active {
    color: ${colors.secondary};
    font-weight: 700;
  }
  &:hover {
    transition: all 0.3s ease-in-out;

    color: ${colors.secondary};
    /* font-weight: 700; */
  }
`;
const LinkedH = styled(HashLink)`
  text-decoration: none;
  color: unset;
  transition: all 0.3s ease-in-out;
  &.active {
    color: ${colors.secondary};
    font-weight: 700;
  }
  &:hover {
    transition: all 0.3s ease-in-out;

    color: ${colors.secondary};
    /* font-weight: 700; */
  }
`;
