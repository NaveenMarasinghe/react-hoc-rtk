import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ApiResponse } from "./api.type";
import { SerializedError } from "@reduxjs/toolkit";

export interface IHomeHOCProps {
    isFetching: boolean;
    getHomeData: (pageId: string) => {
        data: ApiResponse | undefined;
        error: FetchBaseQueryError | SerializedError | undefined;
        isFetching: boolean;
        refetch: () => void;
    };
    saveNote: (req: ISaveNoteRequest) => Promise<ApiResponse | undefined>;
}

export interface ISaveNoteRequest {
    note: string;
    author?: string;
}