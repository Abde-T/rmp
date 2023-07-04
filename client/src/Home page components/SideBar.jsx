import React from "react";
import { HomeIcon, InboxIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "./HomePage.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
const SideBar = () => {
  const array1 = [1, 2, 3, 4, 5, 6];
  return (
    <div className="SideBar__container">

      <SideNav
        defaultSelected="home"
        className="SideBar__nav"
        style={{
          backgroundColor: "#e6e6e7",
          padding: "20px 0",
          textAlign: "center",
          color: "#242424",
          boxShadow: "2px 102px 0 1.5px #242424",
        }}
      >
        <SideNav.Toggle
          style={{
            filter: "invert()",
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home"
          style={{
            margin: '16px 0',
          }}
          >
            <NavIcon>
              <Link to={"/"}>
                <SidebarLink Icon={HomeIcon} />
              </Link>
            </NavIcon>
            <NavText
              style={{
                fontFamily: "Glitch Goblin",
                color: "#242424",
              }}
            >
              Home
            </NavText>
          </NavItem>

          <NavItem eventKey="Messages">
            <NavIcon>
              <SidebarLink Icon={InboxIcon} />
            </NavIcon>
            <NavText
              style={{
                fontFamily: "Glitch Goblin",
                color: "#242424",
              }}
            >
              Messages
            </NavText>
            <NavItem eventKey="Messages/linechart">
              <NavText
                style={{
                  fontFamily: "Glitch Goblin",
                  color: "#242424",
                }}
              >
                Line Chart
              </NavText>
            </NavItem>
            <NavItem eventKey="Messages/barchart">
              <NavText
                style={{
                  fontFamily: "Glitch Goblin",
                  color: "#242424",
                }}
              >
                Bar Chart
              </NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="Following">
            <NavText
              style={{
                fontFamily: "Glitch Goblin",
                color: "#242424",
              }}
            >
              Following
            </NavText>
          </NavItem>
          {array1.fill(
            <NavItem eventKey="dev" >
              <NavIcon>
                <button className=" dev__card" data-dropdown-button></button>
              </NavIcon>
              <NavText
                style={{
                  fontFamily: "Glitch Goblin",
                  color: "#242424",
                }}
              >
                Dev__Name
              </NavText>
            </NavItem>
          )}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

function SidebarLink({ text, Icon }) {
  return (
    <li className="icon__list">
      <Icon className="icon" />
      <span className="icon__text">{text}</span>
    </li>
  );
}
export default SideBar;
