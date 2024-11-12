import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/Main/Main';

const App = () => {

    const [darkMode, setDarkMode] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className={`flex font-Montserrat bg-slate-500 ${darkMode && 'dark'}`}>
       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}  />
       <MainContent />
    </div>
  )
}

export default App
// import './App.css'
// import LoginPage from './components/LoginPage'

// function App() {
  
//   return (
//     <>
//       <div>    
//         <LoginPage />
//       </div>      
//     </>
//   )
// }

// export default App
