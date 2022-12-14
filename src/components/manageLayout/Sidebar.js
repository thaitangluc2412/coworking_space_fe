import React from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const items = [
  {
    icon: <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>,
    title: "Spaces",
    path: "/manage/space",
  },
  {
    icon: <HiOutlineUsers></HiOutlineUsers>,
    title: "Users",
    path: "/manage/users",
  },
  {
    icon: <MdOutlineBusinessCenter></MdOutlineBusinessCenter>,
    title: "Request",
    path: "/manage/business",
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="w-[300px] h-full shadow-lg flex flex-col pt-5  items-center  text-slate-500 bg-white">
      {/* <div
        className="font-bungee text-xl text-primary "
        onClick={() => navigate("/")}
      >
        Coworking Space
      </div> */}
      <div className="flex flex-col w-full items-center mt-10 px-3">
        {items.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `w-full h-11 font-semibold cursor-pointer flex flex-row items-center justify-start pl-4 hover:border-primary  border-l-4 gap-5 hover:text-primary  ${
                  isActive
                    ? " hover:text-primary  text-primary border-l-primary"
                    : "text-slate-500 hover:border-l-noColor border-l-noColor "
                }`
              }
            >
              <span className="text-2xl text-primay">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="user mt-auto w-full h-[70px] flex flew-row gap-3 items-center px-1 py-3 border-t-slate-300 border-t">
        <div className="w-11 h-11">
          <img
            src="https://images.unsplash.com/photo-1668086620216-851f13fbce3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col text-slate-600">
          <span className="font-semibold">{user?.customerName || ""}</span>
          <span className="text-sm">{user?.roleName}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
