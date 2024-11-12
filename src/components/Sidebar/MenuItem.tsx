import { IconType } from "react-icons"

type MenuItemProps = {
    icon: IconType,
    name: string,
    isOpen: boolean
}
const MenuItem = ({icon, name, isOpen}: MenuItemProps) => {
  return (
    <div className="m-2 flex cursor-pointer items-center space-x-4 rounded-md px-4 py-4 text-gray-400 duration-500 hover:bg-teal-300 hover:text-white">
        {icon({className: "text-xl"})}
        {isOpen && <span className="text-[14px] overflow-hidden">{name}</span>}        
    </div>
  )
}

export default MenuItem