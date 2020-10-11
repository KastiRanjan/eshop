import React, { useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";

const Dropdown = ({ value, options, onChange, className, button, link }) => {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleChange = (selectedValue) => {
    selectedValue !== undefined && onChange(selectedValue);
    setIsActive(false);
  };

  return (
    <li ref={dropdownRef} className={`${className} dropdown `}>
      <a
        className="dropdown__toggler flex"
        onMouseEnter={(e) => setIsActive(true)}
        onMouseLeave={(e) => setIsActive(false)}
      >
        {button} {value}
        <span>
          <FaCaretDown className="dropdown__icon" />
        </span>
      </a>
      {link}

      <ul
        className={isActive ? "dropdown__menu open" : "dropdown__menu"}
        onMouseEnter={(e) => setIsActive(true)}
        onMouseLeave={(e) => setIsActive(false)}
      >
        {options.map((opt, index) => {
          return (
            <div className="tab" key={index}>
              <div className="menu-header">
                <li
                  className="dropdown__menuItem"
                  key={index}
                  onClick={(e) => handleChange(opt.short)}
                >
                  <Link to={opt.url} className="dropdown__link">
                    {opt.icon} {opt.name}
                  </Link>
                </li>
              </div>
              <div className="sub">
                {opt.hasOwnProperty("subCategories") &&
                  opt.subCategories.map((pro) => <div key={pro.id}>{pro.name}</div>)}
              </div>
            </div>
          );
        })}
      </ul>
    </li>
  );
};

export default Dropdown;
