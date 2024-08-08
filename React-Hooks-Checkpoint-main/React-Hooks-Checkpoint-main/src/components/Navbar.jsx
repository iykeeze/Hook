import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md p-2 ">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {/* brand logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/5801/5801262.png"
          alt="brand logo"
          className="w-14"
        />
        <h2 className="text-blue-500 tracking-wide">Movie app</h2>
        {/* *********************** */}
      </div>
    </nav>
  );
};

export default Navbar;
