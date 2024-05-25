import React from "react";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="left">
        <h1>MoviesOn</h1>
      </div>
      <div class="right">
        <input type="checkbox" id="check" />
        <label for="check" class="checkBtn">
          <i class="fa fa-bars"></i>
        </label>
        <ul class="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutus">Contact us</a>
          </li>
          <li>
            <label for="check" class="closeBtn">
              <i
                class="fa fa-window-close"
                style={{ color: "red", fontSize: "36px", cursor: "pointer" }}
              />
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
