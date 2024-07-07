import axios, { AxiosResponse } from "axios";

const baseURL = "https://pokeapi.co/api/v2";

// Define a generic interface for API response
export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

// Define a generic interface for API request parameters
export interface ApiRequestParams<T> {
  query: string;
  variables: T | null;
}

// Axios instance setup
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic method to make API calls
export async function fetchapi<TParams, TResponse>(
  method: string,
  url: string,
  params: ApiRequestParams<TParams>
): Promise<AxiosResponse<ApiResponse<TResponse>>> {
  try {
    return axios.post<TResponse, AxiosResponse<ApiResponse<TResponse>>>(
      "https://graphql-pokeapi.graphcdn.app/",
      params
    );

    // return response.data.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
