import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { routes } from "./constants"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App routes={routes}></App>,
    children: routes,
  },
])
