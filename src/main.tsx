import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Profile from './pages/profile/Profile.tsx'
import Error from './pages/errors/Error.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/profile',
                element: <Profile />,        
            }
        ]
    },    
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
      {/* <App /> */}
    {/* <App /> */}
  </StrictMode>,
)
