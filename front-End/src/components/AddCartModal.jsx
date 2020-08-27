import React, { useRef } from "react";
//STYLE
import "../assets/styles/components/AddCartModal.scss";
//REDUX
import { useDispatch } from "react-redux";
import { addProductAction } from "../redux/cartDuck";

const AddCartModal = ({ sizes, setModal, item }) => {
  const dispatch = useDispatch();
  const sizeRef = useRef();
  const countRef = useRef();

  const hanldeProduct = () => {
    dispatch(
      addProductAction(item, sizeRef.current.value, countRef.current.value)
    );
    setModal(false)
  };

  return (
    <div className="AddCartModal">
      <div className="AddCartModal__main">
        <div>
          <div className="AddCartModal__title">
            <button onClick={() => setModal(false)}>X</button>
            <h2>Agregar Producto</h2>
          </div>
        </div>
        <div className="AddCartModal__selectZone">
          <div>
            <h3>Selecciona un Tamaño</h3>
          </div>
          <select name="size" ref={sizeRef}>
            {sizes.map((item) => (
              <option key={Object.keys(item)} value={Object.keys(item)}>
                {Object.keys(item)}
              </option>
            ))}
          </select>
          <div>
            <h3>Selecciona la cantidad</h3>
          </div>
          <select name="cantidad" ref={countRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div className="AddCartModal__selectZone__addButton">
            <button onClick={() => hanldeProduct()}>AGREGAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCartModal;
