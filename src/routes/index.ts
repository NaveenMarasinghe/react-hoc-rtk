import { useRoutes } from "react-router";
import MainRoutes from "./mainRoutes";

const AppRoutes = () => {
    return useRoutes([MainRoutes]);
}

export default AppRoutes;