import {lazy, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
//import About from './components/About.tsx'
import Dineout from './components/Dineout.jsx'
import Body from './components/Body.tsx'
import RestrauntMenu from './components/RestrauntMenu.tsx'
import Error from './components/Error.tsx' 

const About = lazy(()=>import("./components/About.tsx"))

const Routes = createBrowserRouter([
  {
    path:"/",
    element:  <App/>,
    children:[{
        index: true,
        element: <Body/>,
        
    },
    {
    path:"/about",
    element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
  },
  {
    path:"/dineout",
    element: <Dineout/>,
  },
  {
    path: "/restaurant/:resId",
    element:<RestrauntMenu/>
  },
  {
    path: "*",
    element: <Error/>
  }        
    ]
  },
  
])

createRoot(document.getElementById('root')!).render(
    
    <RouterProvider router={Routes} />
  
  
)
