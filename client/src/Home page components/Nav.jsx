import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Form from "./form/form";
import { Avatar } from '@mui/material';
import UsersLoading from "../ui/UsersLoading";
import { Link } from "react-router-dom";


const Nav = ({currentID, setCurrentId}) => {
  document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });

const user = null


  return (
    <nav className="nav__container">
      <img src={logo} className="SideBar__logo" alt="RMP logo" />
      <div className="search">
        <div className="search-box">
          <div className="search-field">
            <input placeholder="Search..." className="input" type="text" />
            <div className="search-box-icon">
              <button className="btn-icon-content">
                <i className="search-icon">
                  <svg
                    xmlns="://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      fill="#fff"
                    ></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        user ? (
          <>
         <Avatar className="" alt={user} src={user}>{user}</Avatar>
         <button className="button-confirm">Logout</button>
          </>
        ): (
          <UsersLoading currentID= {currentID} setCurrentId={setCurrentId}/>
        )?(
          <Link to={'/auth'}>
            <button className="button-confirm">Sign in</button>
          </Link>
        )
        : null
      }
      
    </nav>
  );
};

export default Nav;
