import {
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export const menuItems = [
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
        label: "Option 1",
        key: "option-1",
      },
    ],
  },
];
