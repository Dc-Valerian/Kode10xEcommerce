import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdCancel } from "react-icons/md";
import { UseAppDispatch, useAppSelector } from "../../global/Store";
import {
  addToCart,
  clearCart,
  remove,
  removeFromCart,
} from "../../global/ReduxState";

interface ExampleProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Example: React.FC<ExampleProps> = ({ open, setOpen }) => {
  const onCloseHandler = () => {
    setOpen(false);
  };

  const TotalPrice = (item: any) =>
    item.reduce(
      (allItems: number, oneItem: any) =>
        allItems + oneItem.cartQuantity * oneItem.price,
      0
    );

  const readFromMyCart = useAppSelector((state) => state.cart);

  const totalTotal = TotalPrice(readFromMyCart);

  const dispatch = UseAppDispatch();
  const readCart = useAppSelector((state) => state.cart);

  const phoneNumber = "+2347018549555";
  const message = encodeURIComponent(
    `Please I need  ${readCart} quantity of watch`
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setOpen(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-[white] w-[140%] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 mt-[70px]">
              <div className="sm:flex sm:items-start">
                <div className="flex items-center justify-between w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-gray-900"
                  >
                    Shopping cart
                  </Dialog.Title>
                  <div className="flex items-center ml-3 h-7">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <MdCancel
                        className="h-6 w-6"
                        aria-hidden="true"
                        onClick={onCloseHandler}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {readCart.map((product) => (
                      <li key={product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.productImage}
                            alt="watch"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a>{product.title}</a>
                              </h3>
                              <p className="ml-4">
                                ₦{product.price * product.cartQuantity}{" "}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="w-[45%] h-[80%] flex items-center justify-center ">
                              <div
                                className="w-[35%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton"
                                onClick={() => {
                                  dispatch(removeFromCart(product));
                                }}
                              >
                                -
                              </div>
                              <div className="w-[30%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton">
                                {product.cartQuantity}
                              </div>
                              <div
                                className={`w-[35%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton 
                       `}
                                onClick={() => {
                                  dispatch(addToCart(product));
                                }}
                              >
                                +
                              </div>
                            </div>
                            <p className="text-gray-500">
                              Qty {product.quantity}
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-[var(--myColor)] hover:text-[black]"
                                onClick={() => {
                                  dispatch(remove(product));
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{totalTotal}</p>
                </div>

                <button
                  className="bg-[grey] text-[white] w-[100px] h-[40px] rounded-md flex items-center justify-center mt-[10px]"
                  onClick={() => {
                    dispatch(clearCart());
                  }}
                >
                  Clear Cart
                </button>
                <div className="mt-[10px]">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-md border border-transparent bg-[var(--myColor)] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[black]"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p className="text-[17px]">
                    or{" "}
                    <a href="/">
                      <button
                        type="button"
                        className="font-medium text-[--myColor] hover:text-[black]"
                      >
                        Continue Shopping <span aria-hidden="true">&rarr;</span>
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Example;
