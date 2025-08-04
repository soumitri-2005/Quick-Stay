import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useLocalStorage } from "usehooks-ts";

const Navbar = ({ switchTheme }) => {
  // for toggle btn
  const [isToggled, setToggle] = useLocalStorage("theme-toggle", false);
  useEffect(() => {
    if (isToggled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isToggled]);

  return (
    <div
      className="flex items-center justify-between px-4 md:px-8
    border-b border-gray-200/60 py-3 text-[var(--black-one)] bg-[var(--white-one)] transition-all
    duration-300"
    >
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="h-9 invert opacity-80 logo-img"
        />
      </Link>

      <div className="flex justify-center items-center">
        <div onClick={switchTheme} className="cursor-pointer mr-5 mt-1">
          <Expand
            duration={750}
            className="text-xl"
            toggled={isToggled}
            toggle={() => setToggle(!isToggled)}
            style={{ color: isToggled ? "black" : "white" }}
          />
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
