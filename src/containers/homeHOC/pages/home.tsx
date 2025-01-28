import { useEffect, useState } from "react";
import homeHOC from "..";
import { IHomeHOCProps } from "../../../types/home.type";

const Home = (props: IHomeHOCProps) => {
  const { data: userData } = props.getHomeData("1");
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    setHomeData(userData);
  }, [userData]);

  const handleSaveNote = async () => {
    await props.saveNote({ note: "Sample note" });
  };

  return (
    <>
      <h1 className="text-2xl font-bold">This is home</h1>
      <h1>User fetched :</h1>
      <h1>{homeData?.name}</h1>
      <button
        onClick={handleSaveNote}
        className="m-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none cursor-pointer"
      >
        Save note
      </button>
    </>
  );
};

const HomePageComponent = homeHOC(Home);

export default HomePageComponent;
