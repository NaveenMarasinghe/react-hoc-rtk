import { RouteObject } from "react-router";
import AppLayout from "../components/layouts/appLayout";
import Home from "../containers/homeHOC/pages/Home";
import Dashboard from "../containers/dashboardHOC/pages/Dashboard";
import { DashboardPropsInit, HomePropsInit } from "../utils/init";


const MainRoutes: RouteObject = {
    path: '/',
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <Home {...HomePropsInit}/>
        },
        {
            path: "/dashboard",
            element: <Dashboard {...DashboardPropsInit}/>
        }
    ]
}

export default MainRoutes;