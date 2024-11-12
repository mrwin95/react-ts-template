import { IconType } from "react-icons"
import { NavLink } from "react-router-dom"

type MenuItemProps = {
    icon: IconType,
    name: string,
    link: string,
    isOpen: boolean
}
const MenuItem = ({icon, name, link, isOpen}: MenuItemProps) => {
  return (
    <div className="m-2 flex cursor-pointer items-center space-x-4 rounded-md px-4 py-4 text-gray-400 duration-500 hover:bg-teal-300 hover:text-white">
        {icon({className: "text-xl"})}
        {isOpen && <span className="text-[14px] overflow-hidden">
            <NavLink to={link} key={link}>{name}</NavLink>
            </span>}        
    </div>
  )
}

export default MenuItem