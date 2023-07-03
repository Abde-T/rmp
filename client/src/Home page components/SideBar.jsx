import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "./HomePage.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
const SideBar = () => {
  const array1 = [1, 2, 3, 4, 5, 6];
  return (
    <div className="SideBar__container">
      {/* <div className="SideBar__wrapper">
        <Link to={"/"}>
          <SidebarLink Icon={HomeIcon} text={"Home"} />
        </Link>
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button className="SideBar__button">Post</button>
      </div> */}
      <SideNav
        defaultSelected="home"
        className="SideBar__nav"
        style={{ backgroundColor: "#242424", padding: "20px 0" }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Link to={"/"}>
                <SidebarLink Icon={HomeIcon} />
              </Link>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>

          <NavItem eventKey="Messages">
            <NavIcon>
              <SidebarLink Icon={InboxIcon} />
            </NavIcon>
            <NavText>Messages</NavText>
            <NavItem eventKey="Messages/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="Messages/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="Following">
            <NavText>Following</NavText>
          </NavItem>
          {array1.fill(
            <NavItem eventKey="dev">
              <NavIcon>
                <button
                  className=" dev__card"
                  data-dropdown-button
                ></button>
              </NavIcon>
              <NavText>Dev__Name</NavText>
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
