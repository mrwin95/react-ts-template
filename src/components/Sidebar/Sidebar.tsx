import { LuLayoutDashboard } from "react-icons/lu"
import MenuItem from "./MenuItem"
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri"
import { menuItems } from "../../constants"

type SidebarProps = {
    isOpen: boolean,
    toggleSidebar: () => void
}

const Sidebar = ({isOpen, toggleSidebar}: SidebarProps) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-slate-700 text-white 
    transition-all z-50 flex flex-col duration-300 dark:bg-slate-700 ${isOpen ? 'w-44' : 'w-16 items-center'}`}>
        {/* <!-- Sidebar Logo --> */}
        <div className="flex items-center justify-center py-4">
            <LuLayoutDashboard className={`text-2xl text-teal-700 transition-all ${isOpen ? 'w-12' : "w-8"}`} />
        </div>

        {/* <!-- Sidebar Menu Items --> */}
        <div className="mt-6 flex-1">
            {
                menuItems.map((item, index) => (
                    <MenuItem key={index} icon={item.icon} name={item.name} isOpen={isOpen} />
                ))
            }
        </div>

        {/* <!-- Toggle Button --> */}
        <button onClick={toggleSidebar} className="m-2 flex items-center justify-center rounded-md bg-gray-800 p-1 text-2xl font-bold hover:bg-teal-400 duration-300">
            {isOpen ? <RiArrowLeftWideFill /> : <RiArrowRightWideFill />}
        </button>
    </div>
  )
}

export default Sidebar