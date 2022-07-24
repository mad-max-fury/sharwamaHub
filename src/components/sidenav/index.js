import React, { useState } from "react";
import styled from "styled-components";
import { dashBoardRoutes } from "../../appRouter/routes";
import { colors } from "../../colors";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { getUser, logout } from "../../features/auth/loginslice";
import { useDispatch, useSelector } from "react-redux";

const SideNav = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const handleLogOut = () => dispatch(logout());
  return (
    <SideBarWrap>
      <Profile>
        <ProfileImg src="https://randomuser.me/api/portraits/" />
        <ProfileName>
          <Name>{user?.name} </Name>
          {/* <Surname>Anowor</Surname> */}
        </ProfileName>
        <ProfileEmail>
          <Email>{user?.email}</Email>
        </ProfileEmail>
      </Profile>
      <Nav>
        {dashBoardRoutes.map(({ name, path, icon }, i) => (
          <NavItem
            className={i === activeTab && "active"}
            key={i}
            onClick={() => setActiveTab(i)}
          >
            <NavItemLink to={path}>
              <span>{icon}</span>
              <span>{name}</span>
            </NavItemLink>
          </NavItem>
        ))}
      </Nav>

      <Footer>
        <FooterItem>
          <FooterItemLink onClick={handleLogOut}>
            <span>
              <MdOutlineLogout size={25} />
            </span>
            <span>Logout</span>
          </FooterItemLink>
        </FooterItem>
      </Footer>
    </SideBarWrap>
  );
};

export { SideNav };
const SideBarWrap = styled.aside`
  width: 100%;
  max-width: 250px;
  height: 100vh;
  background: #232323;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 1rem 0;
  height: fit-content;
  gap: 0.2rem;
  width: 80%;
  margin: 1rem auto;
`;
const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
`;
const ProfileName = styled.div`
  display: flex;
  color: #ddd;
  font-size: 0.8rem;
  gap: 0.5rem;
`;
const Name = styled.h1`
  margin: 0;
`;
const Surname = styled.h2`
  margin: 0;
`;
const ProfileEmail = styled.div`
  color: #ddd;
  font-size: 0.7rem;
`;
const Email = styled.h3`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
`;
const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  color: grey;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &.active {
    border-left: 2px solid #fff;
    background: #333;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    border-left: 2px solid #fff;
    background: #333;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
const NavItemLink = styled(Link)`
  display: flex;
  gap: 0.85rem;
  width: 78%;
  margin: 0 auto;
  text-decoration: none;
  color: unset;
  & > span {
    align-items: center;
    display: flex;
    text-align: center;
    font-size: 1.2rem;
  }
`;
const Footer = styled.footer`
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  color: #f5f5f5;
  &:hover {
    background: #f5f5f5;
    color: #232323;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const FooterItemLink = styled.a`
  display: flex;
  gap: 0.85rem;
  width: 78%;
  margin: 0 auto;

  & > span {
    align-items: center;
    display: flex;
    text-align: center;
    font-size: 1.2rem;
  }
`;
