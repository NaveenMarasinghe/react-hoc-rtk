import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ApiResponse } from "../../types/api.type";
import { IHomeHOCProps, ISaveNoteRequest } from "../../types/home.type";
import { SerializedError } from "@reduxjs/toolkit";
import { IDashboardHOCProps } from "../../types/dashboard.type";

export const HomePropsInit: IHomeHOCProps = {
    isFetching: false,
    getHomeData: function (_pageId: string): {
        data: ApiResponse | undefined;
        error: FetchBaseQueryError | SerializedError | undefined;
        isFetching: boolean;
        refetch: () => void;
    } {
        throw new Error('Function not implemented.');
    },
    saveNote: function (_req: ISaveNoteRequest): Promise<ApiResponse | undefined> {
        throw new Error('Function not implemented.');
    },
}

export const DashboardPropsInit: IDashboardHOCProps = {
    isFetching: false,
    getDashboardData: function (): Promise<ApiResponse | undefined> {
        throw new Error('Function not implemented.');
    }, 
}