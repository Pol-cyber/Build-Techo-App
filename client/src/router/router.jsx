import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { HomePage } from "../pages/Home/home"
import { AboutPage } from "../pages/About/about"
import { JobApplyPage } from "../pages/JobApply/job-apply"
import { PortfolioPage } from "../pages/Portfolio"
import { CareerPage } from "../pages/Career"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/jobapply",
        element: <JobApplyPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/career",
        element: <CareerPage />,
      },
    ],
  },
])
