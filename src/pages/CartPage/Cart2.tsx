import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdCancel } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../APIS/Store";
import { useParams } from "react-router-dom";
import { SingleProducts2 } from "../../APIS/Api";
import { useQuery } from "@tanstack/react-query";
import { addToCart, removeFromCart } from "../../APIS/ReduxState";

interface ExampleProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Product {
  id: number;
  name: string;
  href: string;
  color: string;
  price: string;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://media.istockphoto.com/id/650233226/photo/military-style-watch.jpg?s=612x612&w=0&k=20&c=PknuHX2Dh0SN2JTKF60Ftxowdiwoudc_zTu9Vd2UD-w=",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

const Example: React.FC<ExampleProps> = ({ open, setOpen }) => {
  const onCloseHandler = () => {
    setOpen(false);
  };

  const { productID } = useParams();
  const dispatch = useAppDispatch();

  const readMyCart = useAppSelector((state) => state.cart);

  const readSingleItem = readMyCart.filter((item) => item._id === productID);

  // const TotalPrice = (item: any) =>
  //   item.reduce(
  //     (allItems: number, oneItem: any) =>
  //       allItems + oneItem.CartQuantity * oneItem.price,
  //     0
  //   );

  const disabledStyle = "disabled-div";

  const OneProducts = useQuery({
    queryKey: ["oneProduct", productID],
    queryFn: () => {
      return SingleProducts2(productID);
    },
  });

  const phoneNumber = "+2349059493764";
  const message = encodeURIComponent(
    `${OneProducts?.data?.data.title}has been ordered `
  );

  const productQuantity = OneProducts?.data?.data?.quantity || 0;

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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
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
                    {products.map((product) => (
                      <li key={product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product.href}>{product.name}</a>
                              </h3>
                              <p className="ml-4">{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.color}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="w-[45%] h-[80%] flex items-center justify-center ">
                              <div
                                className="w-[20%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton"
                                onClick={() => {
                                  dispatch(
                                    removeFromCart(OneProducts?.data?.data)
                                  );
                                }}
                              >
                                -
                              </div>
                              <div className="w-[20%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton">
                                {readSingleItem[0]?.CartQuantity}
                              </div>
                              <div
                                className={`w-[20%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton ${
                                  readSingleItem[0]?.CartQuantity ===
                                  productQuantity
                                    ? disabledStyle
                                    : ""
                                }`}
                                onClick={() => {
                                  if (
                                    readSingleItem[0]?.CartQuantity !==
                                    OneProducts?.data?.data.quantity
                                  ) {
                                    dispatch(
                                      addToCart(OneProducts?.data?.data)
                                    );
                                  }
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
                  <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
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
                    <button
                      type="button"
                      className="font-medium text-[--myColor] hover:text-[black]"
                    >
                      Continue Shopping <span aria-hidden="true">&rarr;</span>
                    </button>
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
