import React, { useState, useRef, useEffect } from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

function Dropdown({ text, items }) {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [ arrowDrop, setArrowDrop ] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setArrowDrop(!arrowDrop)
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


  return (
    <div className="position-relative">
      <button ref={buttonRef} onClick={handleToggle} className={`navbar__drop-btn bg-light ${ arrowDrop ? 'text-primary' : ''}`}>
        {text}
        <i className={`fa-solid fa-caret-${ arrowDrop ? 'up primary' : 'down'}`}></i>
      </button>

      {isVisible && (
        <div ref={dropdownRef} className="navbar__drop-list position-absolute">
          {items.map((item, index) => {
            if ( item.router ) {
                return (
                    <Link to={ item.href } key={ index } onClick={ () => {setIsVisible(false); setArrowDrop(false)}} >
                        <i className={ item.icon }></i>
                        <span>{ item.name }</span>
                    </Link>
                );
            }
            return (
                <a href={ item.href } key={ index } className="" onClick={ () => {setIsVisible(false); setArrowDrop(false)} }>
                    <i className={ item.icon }></i>
                    <span>{ item.name }</span>
                </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
