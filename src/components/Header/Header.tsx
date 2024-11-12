import { FaMoon, FaSun } from "react-icons/fa"

type HeaderProps = {
    darkMode: boolean,
    toggleDarkMode: () => void
}
const Header = ({darkMode, toggleDarkMode}: HeaderProps) => {
  return (
    <div className="flex items-center justify-between bg-white px-7 py-3 dark:bg-slate-700 dark:text-gray-300">        
        <h1 className="font-bold">Dashboard</h1>

        <div>
            <button onClick={toggleDarkMode} className="rounded-md bg-gray-200 dark:bg-slate-600 dark:text-slate-300">
                {
                    darkMode ? <FaSun /> : <FaMoon />
                }                
            </button>
        </div>
    </div>
  )
}

export default Header