import { RouteObject } from "react-router";
import AppLayout from "../components/layouts/appLayout";
import HomePageComponent from "../containers/homeHOC/pages/Home";
import DashboardPageComponent from "../containers/dashboardHOC/pages/Dashboard";
import { DashboardPropsInit, HomePropsInit } from "../utils/init";

const MainRoutes: RouteObject = {
    path: '/',
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <HomePageComponent {...HomePropsInit}/>
        },
        {
            path: "/dashboard",
            element: <DashboardPageComponent {...DashboardPropsInit}/>
        }
    ]
}

export default MainRoutes;