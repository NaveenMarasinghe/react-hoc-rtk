import { ComponentType, useState } from "react";
import { useDashboardRepository } from "../../repositories/dashboardRepository";
import { IDashboardHOCProps } from "../../types/dashboard.type";

const dashboardHOC = <P extends IDashboardHOCProps>(
  WrappedComponent: ComponentType<IDashboardHOCProps>
) => {
  const DashboardDataFetching: React.FC<P & IDashboardHOCProps> = (props) => {
    const dashboardRepository = useDashboardRepository();
    const [isFetching, setIsFetching] = useState(false);

    const getDashboardData = async (): Promise<any> => {
      setIsFetching(true);
      const result = await dashboardRepository.getDashboardData();
      setIsFetching(false);
      return result;
    };

    const apiMethods = {
      getDashboardData,
    };

    return (
      <WrappedComponent {...props} {...apiMethods} isFetching={isFetching} />
    );
  };

  return DashboardDataFetching;
};

export default dashboardHOC;
