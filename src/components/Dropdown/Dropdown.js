import React, { useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";

const Dropdown = ({ history, value, options, onChange, className, button, link }) => {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleChange = (selectedValue) => {
    selectedValue !== undefined && onChange(selectedValue);
    setIsActive(false);
  };

  const openCategory = (id) => {
    console.log(id);
    history.push("/login");
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
          const imageURL = `https://laxmipujapasal.tk/Categories/${opt.imageUrl}`;
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
                  opt.subCategories.map((pro) => (
                    <div key={pro.id}>
                      <Link
                        onClick={() => openCategory(pro.id)}
                        style={{ color: "#000", padding: "0px" }}
                      >
                        {pro.name}
                      </Link>
                    </div>
                  ))}
              </div>

              {opt.hasOwnProperty("subCategories") && (
                <div>
                  <img style={{ width: "100px", height: "100px" }} src={imageURL} alt="" />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </li>
  );
};

export default withRouter(Dropdown);
