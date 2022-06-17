import React, { Component } from "react";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Previous } from "./images/icon-previous.svg";
import { ReactComponent as Next } from "./images/icon-next.svg";
import LeftSection from "./LeftSection";

class ImageModal extends Component {
    state = {
        products: ['product1', 'product2', 'product3', 'product4']
    }
    
  render() {
    if (!this.props.visible) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-0 flex justify-center items-center">
        <div className="p-2 rounded">
          <div className="pl-80 ml-40 mb-10">
            <Close
              className="stroke-white stroke-2"
              onClick={this.props.onClose}
            />
          </div>
          <div className="bg-white rounded-full static absolute translate-y-44 translate-x-28">
              <Previous className="fill-white m-2" />
          </div>
          <div className="bg-white rounded-full static absolute translate-y-44 translate-x-96">
          <Next className="fill-white m-2" />
          </div>
          <LeftSection className='relative'/>
          
        </div>
      </div>
    );
  }
}

export default ImageModal;
