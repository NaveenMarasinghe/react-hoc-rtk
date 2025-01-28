import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface ApiResponse {
    // Define the structure of your API response here
    data: any;
    error: any;
}

export interface IResponse {
    data: any;
    error: FetchBaseQueryError | SerializedError | undefined;
    isFetching: boolean;
    refetch: () => void;
}