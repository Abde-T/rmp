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
import logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <div className="SideBar__container">
      <div className="SideBar__wrapper">
        <div className="burger__logo--wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="burger"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <img src={logo} className="SideBar__logo" alt="RMP logo" />
        </div>
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
      </div>
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
