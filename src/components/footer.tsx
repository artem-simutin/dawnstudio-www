import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      {/* decoration */}
      <div></div>

      {/* main content */}
      <div className="max-w-container-desktop px-container-desktop"></div>

      {/* sub footer */}
      <div className="w-full flex justify-between items-center pb-6xl pt-8xl border-border-secondary">
        <span className="text-text-quaternary">
          © 2025 Dawn Studio. All rights reserved.
        </span>
        {/* icons */}
        <div className="flex gap-x-3xl">
          <span className="text">x</span>
          <span>a</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
