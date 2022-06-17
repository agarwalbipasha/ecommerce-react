import React, { Component } from "react";
import Thumbnails from "./Thumbnails";
import ProductImage from "./Product1";


class LeftSection extends Component {
  state = {
    thumbnails: ["thumbnail1", "thumbnail2", "thumbnail3", "thumbnail4"],
  };

  render() {
    return (
      <section className="w-full p-4 m-4">
        <ProductImage />
        <div className="flex justify-evenly w-3/4 mx-12">
          {this.state.thumbnails.map((thumbnail) => (
            <Thumbnails thumbnail={thumbnail} key={thumbnail} />
          ))}
        </div>        
      </section>
    );
  }
}

export default LeftSection;
