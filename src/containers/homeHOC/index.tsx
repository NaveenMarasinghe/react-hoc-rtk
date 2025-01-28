import { ComponentType, useState } from "react";
import { IHomeHOCProps, ISaveNoteRequest } from "../../types/home.type";
import { useHomeRepository } from "../../repositories/homeRepository";
import { ApiResponse, IResponse } from "../../types/api.type";

const homeHOC = <P extends IHomeHOCProps>(
  WrappedComponent: ComponentType<IHomeHOCProps>
) => {
  const HomeDataFetching: React.FC<P & IHomeHOCProps> = (props) => {
    const homeRepository = useHomeRepository();
    const [isFetching, setIsFetching] = useState(false);

    const getHomeData = (pageId: any): IResponse => {
      const result = homeRepository.getHomeData(pageId);
      return result;
    };

    const saveNote = async (
      req: ISaveNoteRequest
    ): Promise<ApiResponse | undefined> => {
      try {
        setIsFetching(true);
        const result = await homeRepository.saveNote(req);
        setIsFetching(false);
        return result;
      } catch (apiError) {
        setIsFetching(false);
        return;
      }
    };

    const apiMethods = {
      getHomeData,
      saveNote,
    };

    return (
      <WrappedComponent {...props} {...apiMethods} isFetching={isFetching} />
    );
  };

  return HomeDataFetching;
};

export default homeHOC;
