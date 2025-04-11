import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { HomePage } from "../pages/Home/home"
import { AboutPage } from "../pages/About/about"
import { JobApplyPage } from "../pages/JobApply/job-apply"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: '/',
                element: <HomePage/>
            }
        ]
    },
    {
        path: "/about",
        element: <AboutPage/>
    },
    {
        path: "/jobapply",
        element: <JobApplyPage/>
    }
])