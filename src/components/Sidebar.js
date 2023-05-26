import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../data";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: #15171c;
  margin-top: 0px;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: none;

  @media screen and (max-width: 1230px) {
    display: flex;
  }
`;

const NavIcon = styled.a`
  margin-left: 0.8rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  margin-bottom: 6px;
`;

const SidebarNav = styled.nav`
  background: #000;
  width: 20vw;
  display: flex;
  justify-content: center;
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  tranistion: 350ms;
  z-index: 10;
  top: 3px;
  min-width: 220px;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  border-bottom: 2px solid #000;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Nav>
        <NavIcon>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap onClick={showSidebar}>
          <NavIcon>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default Sidebar;
