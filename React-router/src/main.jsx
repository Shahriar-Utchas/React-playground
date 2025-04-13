import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import About from './Components/About/About.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { index: true, element: <h1>Home</h1> },
      { path: 'about', Component: About },
      { path: 'blogs', Component: Blogs },
    ]
  },
  {
    path: '/about',
    element: <h1>About Me</h1>,
  },
  {
    path: '/projects',
    element: <h1>My Projects</h1>,
  },
  {
    path: '/app',
    element: <App />,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
