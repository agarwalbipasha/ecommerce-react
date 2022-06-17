import React, { useState } from "react";
import { ReactComponent as CartImage } from "./images/icon-cart.svg";
import { ReactComponent as Delete } from "./images/icon-delete.svg";

const Cart = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [visibility, setVisibility] = useState(false);

  let lists = [...props.items];
  let newList = [];

  const addItem = (image) => {
    let lists = [...props.items];
    console.log(lists.filter(item => item.image == image))
    // return lists.filter(item => item.image == image)
  };

  const handleToggle = () => {
    setVisibility(!visibility);
  };

  const getCartClassName = () => {
    let cartClassName =
      "bg-white p-4 text-black flex flex-col rounded mt-1 text-sm w-32 shadow-lg transition-all duration-500 ease-in overflow-visible absolute";
    cartClassName += visibility ? " visible" : " hidden";
    return cartClassName;
  };

  const hideDropdown = () => setDropdown(false);

  console.log(lists);
  return (
    <div
      className="p-0 px-6 pt-0 text-white bg-white content-center cursor-pointer leading-tight transition duration-150 ease-in-out overflow-visible "
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-content="newData"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={hideDropdown}
    >
      <CartImage className="relative" onClick={handleToggle} />
      <div className={getCartClassName()}>
        {props.invisible === false ? (
          <div className="border-2">
            <h2 className=" border-y-2">Cart</h2>
            <ul>
              {lists.map((item) => (
                <li key={item.name} className="px-2 py-1 flex">
                  <div
                    className={`p-4 bg-cover bg-center bg-norepeat ${item.image}`}
                  ></div>
                  <div>
                    Fall Limited Edition Sneakers
                    <span>
                      {item.price} X {item.quantity}
                    </span>
                    ${Number(item.price.slice(1)) * item.quantity}
                  </div>
                  <button>{/* <Delete onClick={removeRow} /> */}</button>
                </li>
              ))}
            </ul>
            <button className="bg-orange text-white">Checkout</button>
          </div>
        ) : (
          <div className="">
            <h2 className="font-bold border-b-2 border-lightGrayishBlue">
              Cart
            </h2>
            <p className="text-center p-4">Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
