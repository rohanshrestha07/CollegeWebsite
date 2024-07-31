import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import { RefObject, useEffect } from "react";

interface HeaderProps {
  paRrf: RefObject<HTMLDivElement>; // Adjust the type according to the actual element or component
}
export default function Header({ paRrf }:HeaderProps) {
  const location = useLocation();
  useEffect(() => {
    paRrf.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, paRrf]);

  const listStyle =
    // "list-none float-left text-md uppercase cursor-pointer text-black hover:text-slate-300 ml-28 transition-all";
    "list-none float-left text-lg uppercase font-bold cursor-pointer  ml-28 ";
  // position: sticky; top: 0px; z-index: 9999; width: 100%;
  return (
    <>
      <div className="h-10 bg-[#001E2B]">
        <p className="text-xs pl-10 pt-3 text-white font-mono font-semibold">
          <Link to={"/register"}>
            <span className="bg-[#B1FF05] text-black font-thin p-1 px-2 rounded-3xl mr-3">
              Join Now
            </span>
          </Link>
          We're announcing the enrollment of this year, starting from July 10.
        </p>
      </div>
      <div className="bg-white sticky top-0 w-[100%] shadow-2xl">
        <div className=" w-full h-24 grid grid-flow-col container mx-auto overflow-hidden ">
          <div className="col-span-2">
            <Logo></Logo>
          </div>
          <div className="col-span-7">
            <ul className="text-black float-end my-9 mx-10 ml-10">
              <Link className={listStyle} to={"/"}>
                {location.pathname == "/" ? (
                  <p className="border-b-2 border-black">Home</p>
                ) : (
                  "Home"
                )}
              </Link>
              <Link className={listStyle} to={"/about"}>
                {location.pathname == "/about" ? (
                  <p className="border-b-2 border-black">About us</p>
                ) : (
                  "About US"
                )}
              </Link>
              <Link className={listStyle} to={"/ourTeam"}>
                {location.pathname == "/ourTeam" ? (
                  <p className="border-b-2 border-black">Our Team</p>
                ) : (
                  "Our Team"
                )}
              </Link>
              <Link className={listStyle} to={"/contact"}>
                {location.pathname == "/contact" ? (
                  <p className="border-b-2 border-black">Contact</p>
                ) : (
                  "Contact"
                )}
              </Link>
            </ul>
          </div>
          <div className="col-span-3">
            <ul className="my-9 text-center  border-gray-700">
              <Link
                to={"/login"}
                className="mx-6 font-semibold text-white px-4 py-2 rounded-2xl bg-[#6D2DF6] hover:bg-[#8450f5] transition-all cursor-pointer"
              >
                Login
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
