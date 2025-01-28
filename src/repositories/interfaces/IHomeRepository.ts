import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ApiResponse } from "../../types/api.type";
import { SerializedError } from "@reduxjs/toolkit";
import { ISaveNoteRequest } from "../../types/home.type";

export interface IHomeRepository {
    getHomeData(reqParams: string): {
        data: ApiResponse | undefined;
        error: FetchBaseQueryError | SerializedError | undefined;
        isFetching: boolean;
        refetch: () => void;
    };
    saveNote(patientRequest: ISaveNoteRequest): Promise<ApiResponse>;
}