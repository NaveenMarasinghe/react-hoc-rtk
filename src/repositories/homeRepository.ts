/* eslint-disable react-hooks/rules-of-hooks */
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useGetHomeDataQuery, useSaveNoteMutation } from "../api/homeAPI";
import { IHomeRepository } from "./interfaces/IHomeRepository";
import { SerializedError } from "@reduxjs/toolkit";
import { ApiResponse } from "../types/api.type";
import { ISaveNoteRequest } from "../types/home.type";

export const useHomeRepository = (): IHomeRepository => {
  const [saveNoteFunction] = useSaveNoteMutation();

  const getHomeData = (
    pageId: string
  ): {
    data: ApiResponse | undefined;
    error: FetchBaseQueryError | SerializedError | undefined;
    isFetching: boolean;
    refetch: () => void;
  } => {
    const { data, error, isFetching, refetch } = useGetHomeDataQuery(pageId);
    return { data, error, isFetching, refetch };
  };

  const saveNote = async (challengeReq: ISaveNoteRequest): Promise<any> => {
    try {
      const result = saveNoteFunction(challengeReq);
      if (result) {
        result.then((response) => {
          return response;
        });
      }
      return result;
    } catch (error) {
      console.error("An error occurred during save note:", error);
      throw new Error("An error occurred during save note");
    }
  };

  return {
    getHomeData,
    saveNote,
  };
};
