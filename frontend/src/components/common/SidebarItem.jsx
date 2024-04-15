import { NavLink } from "react-router-dom";

const SidebarItem = ({ name, icon, url }) => {
  return (
    <NavLink
      to={url}
      className={({isActive})=>(isActive? " text-slate-800 font-bold font-monoBold bg-blue-50 block my-3 mx-3 py-3 px-8 rounded-md text-sm dark:text-white":"font-mono text-gray-600 hover:text-black hover:bg-gray-300 block my-3 mx-3 py-3 px-8 rounded-md hover:-translate-x-1 hover:transform text-sm")}
    >
      <div className="flex items-center">
        <img src={require(`../../../public/assets/${icon}`)} alt="" className="h-5 w-5 mr-2" />
        <span className="ml-2 font-monoBold" >{name}</span>
      </div>
    </NavLink>
  );
};

export default SidebarItem;
