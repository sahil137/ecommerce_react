import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import { auth } from "../../firebase";

const originalMenuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "login",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/register">Register</Link>,
    key: "register",
    icon: <UserAddOutlined />,
  },
  {
    label: "User",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Logout",
        key: "logout",
        icon: <UserOutlined />,
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");
  const user = useSelector((store) => store?.user?.currentUser);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleClick = (e) => {
    setCurrent(e.key);

    // Check if the clicked item has an onClick function
    if (e.key === "logout") {
      auth
        .signOut()
        .then(() => {
          navigate("/register");
        })
        .catch((error) => console.error("Error in Logout", error));
    }
  };

  // get menu items
  const menuItems = originalMenuItems.map((item) => {
    if (item.key === "SubMenu" && item.label === "User" && user) {
      return {
        ...item,
        label: user.name || "User",
      };
    }
    return item;
  });

  const primaryMenuItems = [menuItems[0]];

  // Dynamic items based on user authentication state
  const dynamicMenuItems = user
    ? menuItems.filter(
        (item) => item.key === "SubMenu" || item.key === "logout"
      )
    : menuItems.filter(
        (item) => item.key === "login" || item.key === "register"
      );

  return (
    <div className="flex justify-between items-center w-full px-4">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={primaryMenuItems}
        className="flex w-full"
      />

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={dynamicMenuItems}
        className="flex w-64"
      />
    </div>
  );
};

export default Header;
