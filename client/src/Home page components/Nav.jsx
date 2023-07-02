import React from "react";

const Nav = () => {
    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
      
        let currentDropdown
        if (isDropdownButton) {
          currentDropdown = e.target.closest("[data-dropdown]")
          currentDropdown.classList.toggle("active")
        }
      
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
          if (dropdown === currentDropdown) return
          dropdown.classList.remove("active")
        })
      })

  return (
    <nav className="nav__container">
      <div class="search">
        <div class="search-box">
          <div class="search-field">
            <input placeholder="Search..." class="input" type="text" />
            <div class="search-box-icon">
              <button class="btn-icon-content">
                <i class="search-icon">
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
      <div className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          className="bell"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        
        <div class="header">
    <div class="dropdown" data-dropdown>
      <button class="link card_load" data-dropdown-button></button>
      <div class="dropdown-menu">
      <form className="nav__form">
            <div name="title">
              Upload project
            </div>
            <input
              type="name"
              placeholder="Project Name"
              name="ProjectName"
              className="input_"
            />
            <input
              type="text"
              placeholder="Description"
              name="Description"
              className="input_"
            />
            <input
              type="file"
              placeholder=""
              name=""
              className="input_"
            />
            <button className="button-confirm">Logout →</button>
          </form>
      </div>
    </div>
  </div>
      </div>
    </nav>
  );
};

export default Nav;
