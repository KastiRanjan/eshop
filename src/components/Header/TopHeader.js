import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

export default function TopHeader() {
  const [language, setLanguage] = useState("ENG");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="topHeader flex">
      <div className="container flex flex-jc-sb">
        <div className="topHeader__left">bskfshk</div>
        <div className="topHeader__right ">
          <ul className="topHeader__links  flex  ">
            <li className="topHeader__item">
              <Link to="/">Store</Link>
            </li>
            <li className="topHeader__item">
              <Link to="/">Newsletter</Link>
            </li>
            <li className="topHeader__item">
              <Link to="/">FAQ</Link>
            </li>
            <Dropdown
              value={language}
              onChange={(v) => setLanguage(v)}
              className="topHeader__item"
              options={[
                { name: "English (ENG)", short: "ENG" },
                { name: "Russian (RU)", short: "RU" },
                { name: "French (FR)", short: "FR" },
                { name: "Spanish (ES)", short: "ES" },
              ]}
            />
            <Dropdown
              value={currency}
              className="topHeader__item"
              onChange={(v) => setCurrency(v)}
              options={[
                { name: "USD ($)", short: "USD" },
                { name: "EUR (E)", short: "EUR" },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
