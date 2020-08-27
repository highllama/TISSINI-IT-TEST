import React, { useState } from "react";
//COMPONENTS

//STYLE
import "../assets/styles/components/AddToCardButton.scss";
import AddCartModal from "./AddCartModal";

const AddToCardButton = ({ sizes, item }) => {
  
  const [modal, setModal] = useState(false);
  

  return (
    <>
      <button className="AddToCardButton" onClick={() => setModal(!modal)}>
        <i className="fas fa-cart-plus"></i> AGREGAR
      </button>
      {modal ? <AddCartModal sizes={sizes} setModal={setModal} item={item} /> : ""}
    </>
  );
};

export default AddToCardButton;
