import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Dialog } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import "../../App.css";
import "./HeaderStyles.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);
  const onToggleDropdown = () => setDrop(!drop);

  const changeHeaderColor = () => {
    setShow(window.scrollY >= 180);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDrop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    document.addEventListener("mousedown", handleClickOutside); // Listen for clicks outside dropdown
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div
        className={` w-[100%] h-[70px] flex justify-center top-0 bg-[] ${
          show ? "fixed bg-[#FFFFFF] z-[100] bgg" : " fixed z-[1] bg-[]"
        }`}
      >
        <div className="w-[95%] flex items-center justify-between">
          <div
            className={` name text-[23px] h-[45px] w-[130px] top-0 flex items-center justify-center text-[var(--accent)] animate-pulse  z-[99999]  ${
              show ? "text-[var(--accent)]" : "text-[var(--white)]"
            }`}
          >
            KODE10X
          </div>

          <div
            className={`items-center mt-[12px] text-[var(--accent)] text-[20px] hidden  lg:flex ${
              show ? "text-[var(--accent)]" : "text-[var(--white)]"
            }`}
          >
            <h3 className="mr-[55px] m-[10px  font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--white)]   transition transform hover:scale-x-100">
              Home
            </h3>
            <div
              className="flex cursor-pointer items-center justify-center pr-[30px] mr-[40px] border-b-2 border-transparent hover:border-[var(--white)] transition transform hover:scale-x-100 relative "
              onClick={onToggleDropdown}
              ref={dropdownRef}
            >
              <h3 className="font-medium cursor-pointer">Category</h3>
              <IoIosArrowDown className="absolute right-0 top-0 bottom-0 m-auto h-4 w-4" />

              {drop && (
                <div className="absolute top-full left-0 bg-[brown] text-black w-[200px] py-2 shadow-md border border-[#12C5E4]">
                  <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-yellow-500 transition transform hover:scale-x-100">
                    Watch
                  </h3>
                  <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-yellow-500 transition transform hover:scale-x-100">
                    NeckLace
                  </h3>
                  <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-yellow-500 transition transform hover:scale-x-100">
                    Wrist Bands
                  </h3>
                </div>
              )}
            </div>

            <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--white)]  transition transform hover:scale-x-100">
              Shop
            </h3>
            <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent hover:border-[var(--white)]  transition transform hover:scale-x-100">
              Contact Us
            </h3>
          </div>

          <div className={`icons flex w-[6%] items-center justify-between `}>
            <div
              className="
            hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.09]
            "
            >
              <FiHeart
                className={`text-[28px]  absolute   ${
                  show ? "text-[var(--accent)]" : "text-[var(--white)]"
                } `}
              />
              <div className=" bg-[var(--myColor)] w-[20px] h-[20px] rounded-full flex items-center justify-center text-[14px] relative left-[18px] bottom-[8px] text-[white]">
                0
              </div>
            </div>

            <div
              className="
            hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.09]
            "
            >
              <FaCartArrowDown 
                className={`text-[28px]  absolute   ${
                  show ? "text-[var(--accent)]" : "text-[var(--white)]"
                } `}
              />
              <div className="bg-[var(--myColor)] w-[20px] h-[20px] rounded-full flex items-center justify-center text-[14px] relative left-[18px] bottom-[8px] text-[white]">
                0
              </div>
            </div>
          </div>

          <div
            onClick={onOpenHandler}
            className={`text-[33px] cursor-pointer  lg:hidden mt-[12px] md:text-[30px]    ${
              show ? "text-[var(--accent)]" : "text-[var(--white)]"
            } `}
          >
            <HiMenuAlt3 />
          </div>

          <Dialog
            open={open}
            onClose={onCloseHandler}
            className="fixed top-0 right-0 h-full w-[60vw] md:w-[60%] z-50"
            aria-labelledby="dialog-title"
          >
            <div className="h-screen flex">
              <div
                className="fixed top-0 left-0 h-full w-[50%] bg-black bg-opacity-50"
                onClick={onCloseHandler}
              ></div>
              <div className="fixed top-0 right-0 bg-[white] text-black w-[50%] h-full md:w-[65%]">
                <div className="flex justify-end p-4  shadow-md h-[80px]">
                  <button
                    className="text-[var(--black)] text-[30px] "
                    onClick={onCloseHandler}
                  >
                    <GrClose />
                  </button>
                </div>

                <div className="flex flex-col py-3 px-2 overflow-y-auto text-[var(--accent)] justify-between  h-[80%]">
                  <div>
                    <h3
                      onClick={onCloseHandler}
                      className="mr-[55px] m-[10px] text-[20px] font-sm text-[var(--black)]  cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100"
                    >
                      Home
                    </h3>

                    <h3
                      onClick={onCloseHandler}
                      className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent text-[var(--black)]  hover:border-yellow-500 transition transform hover:scale-x-100"
                    >
                      Shop
                    </h3>

                    <h3
                      onClick={onCloseHandler}
                      className="mr-[55px] m-[10px]  text-[20px] text-[var(--black)]  font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100"
                    >
                      Contact Us
                    </h3>
                  </div>

                  <div>
                    <text className="text-[15px] flex  text-center text-[var(--black)] ">
                      Copyright © KODE10X 2023 | Built by Valerian & Faithia
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Header;
