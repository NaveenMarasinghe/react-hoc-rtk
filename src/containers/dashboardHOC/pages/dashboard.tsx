import { useEffect, useState } from "react";
import dashboardHOC from "..";
import { IDashboardHOCProps } from "../../../types/dashboard.type";

const Dashboard = (props: IDashboardHOCProps) => {
  const [dashboardData, setDashboardData] = useState<any[]>([]);

  useEffect(() => {
    const response = props.getDashboardData();
    if (response) {
      response.then((result: any) => {
        setDashboardData(result.data);
      });
    }
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">This is dashboard</h1>
      <h1>Users fetched :</h1>
      <div>
        {dashboardData?.map((data: any) => (
          <h1>{data.name}</h1>
        ))}
      </div>
    </>
  );
};

const DashboardPageComponent = dashboardHOC(Dashboard);

export default DashboardPageComponent;
