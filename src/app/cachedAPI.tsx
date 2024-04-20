import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { WORKER } from '../models/Workers.model';

const baseURL = `${import.meta.env.VITE_REACT_APP_API_URL}`;

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      baseUrl: string;
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ baseUrl, url, method, data, headers }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, headers });
      return { data: result.data };
    } catch (axiosError) {
      // Error handler
      const err = axiosError as AxiosError;

      return { error: { status: err.response?.status, data: err.response?.data } };
    }
  };

export const cachedAPI = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Reports', 'Workers', 'AllReports'],
  endpoints: (builder) => ({
    //GET WORKERS

    getWorkers: builder.query<WORKER[], { free?: string }>({
      query: (options) => {
        const queryParams: { [key: string]: string } = {};
        if (options?.free !== undefined) {
          queryParams.free = options.free;
        }

        const queryString = new URLSearchParams(queryParams).toString();
        const url = `workers/${queryString ? `?${queryString}` : ''}`;

        return {
          baseUrl: baseURL,
          url,
          method: 'GET',
        };
      },
      providesTags: (_) => ['Workers'],
    }),

    updateWorkers: builder.mutation<WORKER[], { free?: string }>({
      query: (options) => {
        const queryParams: { [key: string]: string } = {};
        if (options?.free !== undefined) {
          queryParams.free = options.free;
        }

        const queryString = new URLSearchParams(queryParams).toString();
        const url = `workers/${queryString ? `?${queryString}` : ''}`;

        return {
          baseUrl: baseURL,
          url,
          method: 'GET',
        };
      },
      invalidatesTags: (_) => ['Workers'],
    }),
  }),
});

export const { useGetWorkersQuery } = cachedAPI;
