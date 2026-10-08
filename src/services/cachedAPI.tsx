import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

import { HTTPError } from 'ky';

import { api } from './api';

import { WORKER } from '@models/Workers.model';

const kyBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: string;
      data?: unknown;
      params?: Record<string, string | number | boolean>;
      headers?: Record<string, string>;
    },
    unknown,
    { status: number; data: unknown }
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const response = await api(url, {
        method: method || 'get',
        json: data,
        searchParams: params,
        headers,
      });

      return { data: await response.json() };
    } catch (error) {
      if (error instanceof HTTPError) {
        // ky 2 pre-consumes the error body into `error.data`
        return {
          error: {
            status: error.response.status,
            data: error.data ?? error.response.statusText,
          },
        };
      }

      return {
        error: {
          status: 500,
          data: (error as Error).message,
        },
      };
    }
  };

export const cachedAPI = createApi({
  baseQuery: kyBaseQuery(),
  tagTypes: ['Reports', 'Workers', 'AllReports'],
  endpoints: (builder) => ({
    //GET WORKERS

    getWorkers: builder.query<WORKER[], { free?: string }>({
      query: (options) => {
        const queryParams: { [key: string]: string } = {};
        if (options?.free !== undefined) {
          queryParams.free = options.free;
        }

        const queryString = new URLSearchParams(queryParams).toString(),
          url = `workers/${queryString ? `?${queryString}` : ''}`;

        return {
          url,
          method: 'get',
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

        const queryString = new URLSearchParams(queryParams).toString(),
          url = `workers/${queryString ? `?${queryString}` : ''}`;

        return {
          url,
          method: 'get',
        };
      },
      invalidatesTags: (_) => ['Workers'],
    }),
  }),
});

export const { useGetWorkersQuery } = cachedAPI;
