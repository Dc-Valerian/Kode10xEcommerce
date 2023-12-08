import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Dialog } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import "../../App.css";
import "./HeaderStyles.css";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Example from "../../pages/CartPage/Cart2";
import { useAppSelector } from "../../global/Store";

const Header = () => {
  const readCartQuantity = useAppSelector((state) => state.totalQuantity);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);
  const onToggleDropdown = () => setDrop(!drop);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div
        className=" w-[100%] h-[70px] flex justify-center top-0 
          fixed z-20 bg-[white]"
      >
        <div className="w-[95%] flex items-center justify-between">
          <NavLink to="/">
            <div className="h-[90px] w-[160px] top-0 flex items-center justify-center z-[99999] ">
              <img
                src="https://res.cloudinary.com/dbpcptmco/image/upload/v1701695953/WhatsApp_Image_2023-12-02_at_04.56.01_9fa268ad-removebg-preview_qmfbvw.png"
                className=" w-[100%] h-[100%] object-cover"
              />
            </div>
          </NavLink>

          <div
            className={`items-center mt-[12px] text-[var(--accent)] text-[20px] hidden  lg:flex`}
          >
            <NavLink to="/">
              <h3 className="mr-[55px] m-[10px  font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--black)]   transition transform hover:scale-x-100">
                Home
              </h3>
            </NavLink>

            <div
              className="flex cursor-pointer items-center justify-center pr-[30px] mr-[40px] border-b-2 border-transparent hover:border-[var(--black)] transition transform hover:scale-x-100 relative "
              onClick={onToggleDropdown}
              ref={dropdownRef}
            >
              <h3 className="font-medium cursor-pointer">Category</h3>
              <IoIosArrowDown className="absolute right-0 top-0 bottom-0 m-auto h-4 w-4" />

              {drop && (
                <div className="absolute top-full left-0 bg-[white] text-black px-[5px]  py-[5px] shadow-md border flex">
                  <div className="w-[130px]">
                    <Link
                      to="category"
                      smooth={true}
                      duration="900"
                      offset={-140}
                    >
                      <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-[#F3F4F6] hover:text-[var(--myColor)] transition transform hover:scale-x-100">
                        Casio
                      </h3>
                    </Link>
                    <Link to="rolex" smooth={true} duration="900" offset={-140}>
                      <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-[#F3F4F6] hover:text-[var(--myColor)]  transition transform hover:scale-x-100 ">
                        G shock
                      </h3>
                    </Link>
                    <Link
                      to="category"
                      smooth={true}
                      duration="900"
                      offset={-140}
                    >
                      <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-[#F3F4F6] hover:text-[var(--myColor)]  transition transform hover:scale-x-100">
                        Skmei
                      </h3>
                    </Link>
                    <Link to="rolex" smooth={true} duration="900" offset={-140}>
                      <h3 className="text-[20px] font-medium cursor-pointer py-1 px-4 hover:bg-[#F3F4F6] hover:text-[var(--myColor)]  transition transform hover:scale-x-100">
                        Others
                      </h3>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/shop-now">
              <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--black)]  transition transform hover:scale-x-100">
                Shop
              </h3>
            </NavLink>

            <Link to="contact" smooth={true} duration="1000">
              <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent hover:border-[var(--black)]  transition transform hover:scale-x-100">
                Contact Us
              </h3>
            </Link>
            <NavLink to="/admin-login" style={{ textDecoration: "none" }}>
              <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent hover:border-[var(--black)]  transition transform hover:scale-x-100">
                Admin Login
              </h3>
            </NavLink>
          </div>

          <div
            className={`icons flex w-[9%] items-center justify-end `}
          >
            <div
              className="
              hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.09]
              "
              onClick={toggleDialog}
            >
              <RiShoppingCartLine className="text-[28px]  absolute" />
              <div className=" bg-[var(--myColor)] w-[20px] h-[20px] rounded-full flex items-center justify-center text-[14px] relative left-[18px] bottom-[8px] text-[white]">
                {readCartQuantity}
              </div>
            </div>
          </div>

          <div
            onClick={onOpenHandler}
            className="text-[33px] cursor-pointer lg:hidden mt-[12px] md:text-[30px]"
          >
            <HiMenuAlt3 />
          </div>

          <Example open={isDialogOpen} setOpen={setIsDialogOpen} />

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            className="fixed top-0 right-0 h-full w-[60vw] md:w-[60%] z-50 "
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
                      className="mr-[55px] m-[10px] text-[20px] font-sm text-[var(--black)]  cursor-pointer border-b-2 border-transparent hover:border-grey-500 transition transform hover:scale-x-100"
                    >
                      Home
                    </h3>

                    <h3
                      onClick={onCloseHandler}
                      className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent text-[var(--black)]  hover:border-grey-500 transition transform hover:scale-x-100"
                    >
                      Shop
                    </h3>

                    <NavLink
                      to="/admin-login"
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="m-[10px]  text-[20px] text-[var(--black)]  font-sm cursor-pointer border-b-2 border-transparent hover:border-grey-500 transition transform hover:scale-x-100">
                        Admin Login
                      </h3>
                    </NavLink>
                  </div>

                  <div>
                    <h3 className="text-[15px] flex  text-center text-[var(--black)] ">
                      Copyright © KODE10X 2023 | Built by Valerian & Faithia
                    </h3>
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
