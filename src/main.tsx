import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Profile from './pages/profile/Profile.tsx'
import Error from './pages/errors/Error.tsx'
import Settings from './components/Settings/Settings.tsx'
import Messages from './components/Messages/Messages.tsx'
import Analytics from './components/Analytics/Analytics.tsx'
import LoginPage from './components/LoginPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        errorElement: <Error />,
        children: [
            {
                path: '/profile',
                element: <Profile />,        
            },
            {
                path: '/settings',
                element: <Settings />,        
            },{
                path: '/messages',
                element: <Messages />,        
            },
            {
                path: '/analytics',
                element: <Analytics />,        
            }
        ]
    }, {
        path: '/home',
        element: <App />,
    }   
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
      {/* <App /> */}
    {/* <App /> */}
  </StrictMode>,
)
