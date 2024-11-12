import {
  FaHome,
  FaUser,
  FaCog,
  FaEnvelope,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  CiMoneyCheck1,
  CiMoneyBill,
  CiUser,
  CiShoppingCart,
} from "react-icons/ci";

// import user01 from "../assets/images/user01.jpg";
// import user02 from "../assets/images/user02.jpg";
// import user03 from "../assets/images/user03.jpg";
// import user04 from "../assets/images/user04.jpg";

// export menu items

export const menuItems = [
  {
    icon: FaHome,
    name: "Home",
    link: "/"
  },
  {
    icon: FaUser,
    name: "Profile",
    link: "/profile"
  },
  {
    icon: FaCog,
    name: "Settings",
    link: "/settings"
  },
  {
    icon: FaEnvelope,
    name: "Messages",
    link: "/messages"
  },
  {
    icon: FaChartLine,
    name: "Analytics",
    link: "/analytics"
  },
  {
    icon: FaSignOutAlt,
    name: "Logout",
    link: "/",
    isLogout: true,
  },
];

// Card items

export const cardItems = [
  {
    title: "Total earnings",
    value: "$2020.00",
    icon: <CiMoneyCheck1 className="rounded-full bg-teal-500 p-2 text-4xl text-white" />,
  },
  {
    title: "Total Expenses",
    value: "$1020.00",
    icon: <CiMoneyBill className="rounded-full bg-teal-500 p-2 text-4xl text-white" />,
  },
  {
    title: "New Users",
    value: "100",
    icon: <CiUser className="rounded-full bg-teal-500 p-2 text-4xl text-white" />,
  },
  {
    title: "Total Sales",
    value: "300",
    icon: <CiShoppingCart className="rounded-full bg-teal-500 p-2 text-4xl text-white" />,
  },
];

// Table Data
export const TableData = [

]

// Recent Activities

export const recentActivities = [
]

// Chart Data

export const monthData = [

]

// Chart data1

export const chartData1 = []

// Chart data2

export const chartData2 = []
