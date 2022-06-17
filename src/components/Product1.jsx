import ImageModal from "./ImageModal";
import React, { useState } from "react";

const ProductImage = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <React.Fragment>
      <div
        className="p-40 mx-24 w-1/2 bg-center bg-cover bg-no-repeat rounded-lg bg-product1"
        onClick={() => setShowMyModal(true)}
      ></div>
      <ImageModal onClose={handleOnClose} visible={showMyModal} />
    </React.Fragment>
  );
};

export default ProductImage;
