
import { HomePage } from "../pages/Home/home"
import { AboutPage } from "../pages/About/about"
import { JobApplyPage } from "../pages/JobApply/job-apply"
import { PortfolioPage } from "../pages/Portfolio"
import { ErrorPage } from "../pages/Error/error"

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/jobapply", element: <JobApplyPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "*", element: <ErrorPage /> }
];