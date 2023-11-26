import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import img from "../../assets/IMG-20231115-WA0004.jpg";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const [click, setClick] = useState(false);

  const Toggle = () => {
    setClick(!click);
  };

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const changeHeaderColor = () => {
    setShow(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <section>
      <div
        className={`w-[100%] h-[80px] flex justify-center ${
          show ? "fixed bg-[red] z-10" : "bg-[green] fixed z-10"
        }`}
      >
        <div className="w-[95%] flex items-center justify-between">
          <img src={img} alt="" className="md:h-[30px]" />

          <div className="flex items-center mt-[12px] lg:hidden">
            <NavLink to="/">
              <h3 className="mr-[55px] m-[10px] text-[15px] text-[brown] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                Home
              </h3>
            </NavLink>
            <NavLink to="/recipies">
              <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                Recipies
              </h3>
            </NavLink>
            <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              About Us
            </h3>
            <NavLink to="/contact-us">
              <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                Contact Us
              </h3>
            </NavLink>
          </div>

          <div className="flex items-center w-[200px] lg:hidden">
            <>
              <button
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition mt-[15px] relative"
                onClick={Toggle}
              >
                <span className="sr-only">Menu</span>
                <div className="h-[45px] w-[45px] bg-gray-400 text-white flex justify-center items-center text-[24px] rounded-full object-cover">
                  Valerian Pedro
                </div>

                <p className="ms-2 text-left text-xs sm:block">
                  <strong className="flex font-semibold text-[18px] text-[#fff]">
                    Valerian Pedro
                  </strong>

                  <span className="text-white"> Valerian Pedro </span>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-4 h-5 w-5 text-white transition sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>

                {click ? (
                  <div className="absolute top-[50px] end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg">
                    <div className="pl-[19px] pt-[12px]">
                      <a
                        href="#"
                        className="flex rounded-lg  text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        Log out
                      </a>

                      <a
                        href="#"
                        className="flex rounded-lg mt-[15px] text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        Diactivate Account
                      </a>
                    </div>
                  </div>
                ) : null}
              </button>
            </>
            ) : (
            <>
              <NavLink to="/sign-in">
                <div className="flex items-center mt-[12px] lg:hidden">
                  <button className="w-[150px] h-[45px] rounded-md text-[#fff] border border-[#fff]">
                    Sign In
                  </button>
                </div>
              </NavLink>
            </>
          </div>

          <div
            onClick={onOpenHandler}
            className="text-[#fff] text-[33px] cursor-pointer hidden lg:flex mt-[12px] md:text-[30px]"
          >
            <FiMenu />
          </div>

          <Dialog
            open={open}
            onClose={onCloseHandler}
            className="fixed inset-0 bg-white text-black z-50 "
            aria-labelledby="dialog-title"
          >
            <div className="h-screen flex-col lg:flex hidden">
              <div className="flex justify-between items-center p-4 shadow-md">
                <h5 className="text-[24px] font-medium">Menu</h5>
                <button
                  className="text-black text-[19px]"
                  onClick={onCloseHandler}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="flex flex-col py-3 px-2 overflow-y-auto h-[100%]">
                <NavLink to="/">
                  <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                    Home
                  </h3>
                </NavLink>
                <NavLink to="/recipies">
                  <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                    Recipies
                  </h3>
                </NavLink>
                <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                  About Us
                </h3>
                <NavLink to="/contact-us">
                  <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                    Contact Us
                  </h3>
                </NavLink>
                <>
                  <button
                    type="button"
                    className="group flex shrink-0 items-center rounded-lg transition mt-[15px] relative"
                    onClick={Toggle}
                  >
                    <span className="sr-only">Menu</span>
                    <div className="h-[45px] w-[45px] bg-gray-400 text-white flex justify-center items-center text-[24px] rounded-full object-cover">
                      VP
                    </div>

                    <p className="ms-2 text-left text-xs sm:block">
                      <strong className="flex font-semibold text-[18px]">
                        Valerian Pedro
                      </strong>

                      <span className=""> Valerianpedro04gmail.com</span>
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ms-4 h-5 w-5 text-white transition sm:block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    {click ? (
                      <div className="absolute top-[50px] left-[0px] end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg">
                        <div className="pl-[19px] pt-[12px]">
                          <a
                            href="#"
                            className="flex rounded-lg  text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Log out
                          </a>

                          <a
                            href="#"
                            className="flex rounded-lg mt-[15px] text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Diactivate Account
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </button>
                </>
                ) : (
                <>
                  <NavLink to="/sign-in">
                    <div className="flex items-center mt-[12px] lg:hidden">
                      <button className="w-[150px] h-[45px] rounded-md border border-[lightgray]">
                        Sign In
                      </button>
                    </div>
                  </NavLink>
                </>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Header;
