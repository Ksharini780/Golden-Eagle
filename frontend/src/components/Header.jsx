import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gold">
      <Navbar />
    </header>
  );
}

export default Header;
