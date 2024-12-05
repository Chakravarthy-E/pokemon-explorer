import React from "react";
import Logo from "../logo";
import Search from "../search";

function Navbar() {
  return (
    <nav className="px-10 py-2 w-full flex items-center justify-between">
      <Logo />
      <Search />
    </nav>
  );
}

export default Navbar;
