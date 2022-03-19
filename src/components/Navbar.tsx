import React from "react";

import "./navbar/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="w-full h-auto md:h-screen sm:h-64 pt-16 flex flex-col Banner_banner__OLIvm">
        <div className="flex">
          <div className="ml-auto items-center flex flex-col">
            <div className="flex flex-col opacity-80">
              <div className="text-xs">organized by</div>
              <div className="text-5xl font-bold mt-1">PIXY</div>
            </div>
            <div className="mt-6 cursor-pointer">
              <div className="bg-cyan px-3 py-2 text-2xl font-bold">
                -&gt; CONNECT WALLET
              </div>
              <div className="bg-yellow px-5 py-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
