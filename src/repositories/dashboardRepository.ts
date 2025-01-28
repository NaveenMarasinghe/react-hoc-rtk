import { useLazyGetDashboardDataQuery } from "../api/dashboardAPI";
import { IDashboardRepository } from "./interfaces/IDashboardRepository";

export const useDashboardRepository = (): IDashboardRepository => {
  const [getDashboardDataFunction] = useLazyGetDashboardDataQuery();

  const getDashboardData = async (): Promise<any> => {
    const result = getDashboardDataFunction(null);
    return result;
  };

  return {
    getDashboardData
  }
};
