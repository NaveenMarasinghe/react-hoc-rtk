import { ApiResponse } from "./api.type";

export interface IDashboardHOCProps {
    isFetching: boolean;
    getDashboardData: () => Promise<ApiResponse | undefined>;
}