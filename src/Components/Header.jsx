import React, { useEffect } from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addOpenMenu } from "../Store/movieSlice";
import Logo from "../images/movix-logo.svg";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state?.movies?.openMenu);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 630) {
        dispatch(addOpenMenu(false));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const menuHandle = () => {
    dispatch(addOpenMenu(!menuOpen));
  };

  return (
    <>
      <div
        className={`flex relative z-50 ${
          menuOpen ? "bg-black-start" : "bg-transparent"
        } justify-between items-center`}
      >
        <div className="mx-10 mt-1 mb-1">
          <img src={Logo} alt="" />
        </div>
        <div className="hidden sm:flex sm:flex-col px-2">
          <HeaderMenu />
        </div>
        <div className="sm:hidden mx-5">
          {menuOpen ? (
            <RxCross2 onClick={menuHandle} className="text-xl text-white" />
          ) : (
            <MdOutlineDehaze
              className="text-white text-xl"
              onClick={menuHandle}
            />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <MobileMenu />
        </div>
      )}
    </>
  );
};

export default Header;
