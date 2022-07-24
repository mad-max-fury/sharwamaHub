import React from "react";
import {
  FooterWrap,
  FooterContentWrap,
  FooterNav,
  FooterCredit,
  FooterLink,
} from "./style";

const Footer = () => {
  return (
    <FooterWrap id="contact">
      <FooterContentWrap>
        <FooterNav>
          <FooterLink href="https://facebook.com/">Facebook</FooterLink>

          <FooterLink href="https://instagram.com/">Instagram</FooterLink>

          <FooterLink href="https://linkedIn.com/">Whatsapp</FooterLink>
        </FooterNav>
        <FooterCredit>©2022 Sharwarma Hub, All rights reserved.</FooterCredit>
      </FooterContentWrap>
    </FooterWrap>
  );
};

export { Footer };
