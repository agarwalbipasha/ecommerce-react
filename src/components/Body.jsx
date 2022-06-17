import React, { Component } from "react";
import { ReactComponent as Minus } from "./images/icon-minus.svg";
import { ReactComponent as Plus } from "./images/icon-plus.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
// import { ReactComponent as Delete } from "./images/icon-delete.svg";
import LeftSection from "./LeftSection";

class Body extends Component {
  
  render() {
    return (
      <div className="flex flex-col items-center md:flex-row px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* image in left */}
        <LeftSection />
        {/* content in right */}
        <section className="flex flex-col mb-32 space-y-2 p-6 md:w-4/7 text-left">
          <p className="max-w-md text-orange font-bold uppercase px-0">
            Sneaker Company
          </p>
          <h1 className="text-4xl font-bold text-left md:text-5xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-grayishBlue text-xl ">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex ">
            <p className="font-bold text-4xl">$125</p>
            <div className="p-2 py-1 bg-lightGrayishBlue mx-6 rounded-lg text-orange font-bold text-xl">
              <p>50%</p>
            </div>
          </div>
          <div className="font-bold text-2xl line-through text-grayishBlue">
            $250
          </div>
          <div className="flex justify-start space-x-12 flex-col space-y-4 items-center md:flex-row">
            <div className="bg-lightGrayishBlue flex items-center rounded-lg space-x-8 px-4 py-3">
              <Minus count={this.props.count} onClick={this.props.decreaseCount} />
              <div>{this.props.count}</div>
              <Plus count={this.props.count} onClick={this.props.increaseCount} />
            </div>
            <button
              className="bg-orange px-16 py-3 rounded-lg flex"
              onClick={this.props.changeVisibility}
            >
              <div>
                <Cart
                  className="fill-current"
                  invisible={this.props.invisible}
                  count={this.props.count}
                />
              </div>
              <div className="px-4 text-white">Add to cart</div>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
