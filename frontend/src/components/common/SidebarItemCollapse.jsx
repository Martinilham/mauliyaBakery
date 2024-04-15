import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const SidebarItemCollapse = ({ name, icon, url, subLinks }) => {
  const [open, setOpen] = useState(false);
  const currentPath = useLocation().pathname;

  useEffect(() => {
    setOpen(subLinks.some(link => currentPath === link.url));
  }, [currentPath, subLinks]);

  // Fungsi untuk menentukan apakah sublink sedang aktif
  const isSublinkActive = (sublinkUrl) => {
    return currentPath === sublinkUrl;
  };

  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center hover:ml-4 hover:pr-14 hover:bg-gray-300 text-gray-600 my-3 mx-3 py-3 px-8 rounded-md hover:-translate-x-2 hover:transform text-sm ${open ? "bg-blue-50 font-bold hover:bg-none" : " "}`}
      >
        <img src={require(`../../../public/assets/${icon}`)} alt="" className="h-5 w-5 mr-2" />
        <span className="ml-2">{name}</span>
        {open ? <FiChevronUp className="ml-3 mr-10" /> : <FiChevronDown className="ml-3 mr-10" />}
      </button>
      {open && (
        <div className="origin-top-right right-0 w-56 bg-white z-10 top-full">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {subLinks.map(({ name, url }, index) => (
              <NavLink
                to={url}
                key={index}
                className={`block my-1 mx-3 py-3 px-10 text-sm ${isSublinkActive(url) ? 'text-slate-800 font-bold font-monoBold bg-blue-50' : 'font-mono text-gray-600 hover:text-black hover:bg-gray-300'} rounded-md hover:-translate-x-1 hover:transform`}
                role="menuitem"
              >
                • {name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItemCollapse;
