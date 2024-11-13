import { Outlet } from "react-router-dom";
import Header from "../Header/Header"

type MainContentProps = {
    isOpen: boolean,
    darkMode: boolean,
    toggleDarkMode: () => void
}
const MainContent = ({isOpen, darkMode, toggleDarkMode}: MainContentProps) => {
    console.log("MainContent -> isOpen", isOpen, darkMode);
    
  return (
    <div className={`flex-1 bg-slate-200 ${isOpen ? "md:ml-44" : "ml-16"} transition-all duration-300 dark:bg-slate-800`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />        
        <Outlet />
    </div>
  )
}

export default MainContent