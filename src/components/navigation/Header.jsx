import React, { useState } from "react";

import { Menu } from "antd";
import { menuItems } from "../../utils/headerMenuItems";

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="flex justify-between items-center w-full px-4">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={[menuItems[0]]} // Only the "Home" item
        className="flex w-full"
      />

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuItems.slice(1)} // All items except "Home"
        className="flex"
      />
    </div>
  );
};

export default Header;
