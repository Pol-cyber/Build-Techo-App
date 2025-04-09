import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import App from "./App.jsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router.jsx"
import "./styles/variables.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
