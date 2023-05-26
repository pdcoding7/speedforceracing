import React from "react";
import styled from "styled-components";
import { useState } from "react";

const SidebarLink = styled.a`
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  font-size: 18px;
  text-decoration: none;
  border-top: 3px solid gray;
  background-color: #fff;

  &:hover {
    background: #d3d3d3;
    border-left: 4px solid #000;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const DropdownLink = styled.a`
    background: darkslategray;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: #fff;

    &:hover {
      background: grey;
      cursor: pointer;
    }
  `;
  return (
    <div>
      <SidebarLink href={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink href={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
};

export default SubMenu;
