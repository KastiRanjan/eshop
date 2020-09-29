import React, { useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";

const Dropdown = ({ value, options, onChange, className, button, link }) => {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setIsActive(false);
  };

  return (
    <li ref={dropdownRef} className={`${className} dropdown `}>
      <a className="dropdown__toggler flex" onClick={(e) => setIsActive(!isActive)}>
        {button} {value}
        <span>
          <FaCaretDown className="dropdown__icon" />
        </span>
      </a>
      {link}

      <ul className={isActive ? "dropdown__menu open" : "dropdown__menu"}>
        {options.map((opt, index) => (
          <li className="dropdown__menuItem" key={index} onClick={(e) => handleChange(opt.short)}>
            <Link to={opt.url} className="dropdown__link">
              {opt.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
