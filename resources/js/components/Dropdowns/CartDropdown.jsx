import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StringFormater from "../../helpers/StringFormater.class";

function CartDropdown({ text, items }) {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [arrowDrop, setArrowDrop] = useState(false);
  const [itemQuantities, setItemQuantities] = useState({});

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setArrowDrop(!arrowDrop);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsVisible(false);
      setArrowDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Inicializar itemQuantities con las cantidades iniciales
  useEffect(() => {
    const initialQuantities = {};
    items.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setItemQuantities(initialQuantities);
  }, [items]);

  function amountIncrement(id) {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
    let buttonDecrement = document.getElementById(`btn-decrement-${id}`);
    buttonDecrement.classList.remove('disabled')
  }

  function amountDecrement(id) {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) - 1,
    }));
    let buttonIncrement = document.getElementById(`btn-increment-${id}`);
    buttonIncrement.classList.remove('disabled')
}

  function buttonIncrementDisabled(id){
    let buttonIncrement = document.getElementById(`btn-increment-${id}`);
    buttonIncrement.classList.add('disabled')
  }
  function buttonDecrementDisabled(id){
    let buttonDecrement = document.getElementById(`btn-decrement-${id}`);
    buttonDecrement.classList.add('disabled')
  }
  return (
    <div className="position-relative">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className={`navbar__drop-btn cart bg-light ${arrowDrop ? "text-primary" : ""}`}
        style={{ border: "none" }}
      >
        <i className="fas fa-shopping-cart"></i>
      </button>

      {isVisible && (
        <div ref={dropdownRef} className="navbar__drop-list position-absolute " style={{ display: "flow" }}>
          {items.map((item) => {
            return (
              <div className="d-flex align-items-center" key={item.id}>
                <a href={`/detail/${item.id}`} className="" onClick={() => { setIsVisible(false); setArrowDrop(false) }}>
                  <span>
                    {`${new StringFormater(item.name).constrainer(0, 15)}`}
                  </span>
                </a>
                <div className="navbar__drop-list--btn d-flex">
                  <button id={ `btn-increment-${ item.id }` } onClick={item.stock > itemQuantities[item.id] ? () => amountIncrement(item.id):() => buttonIncrementDisabled(item.id)} className="btn-increment">+</button>
                  <input type="number" onChange={ ()=>{} } value={itemQuantities[item.id] || item.quantity} className="w-auto ps-2" id={item.id} />
                  <button id={ `btn-decrement-${ item.id }` } onClick={itemQuantities[item.id] > 0 ? () => amountDecrement(item.id) : () => buttonDecrementDisabled(item.id)} className="btn-decrement">-</button>
                  <button className="d-flex justify-content-center">
                    <i className="fas fa-trash m-auto"></i>
                  </button>
                </div>
              </div>
            );
          })}
          <button className="show-cart btn btn-success d-flex w-100 justify-content-center">Ver carrito</button>
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
