import React from "react";
import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";
import { images, data } from "../../constants";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine) => {
            
          })}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
