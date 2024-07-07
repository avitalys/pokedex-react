import { useState, useMemo } from "react";

export type FetchFunction<T> = (
  offset?: number,
  limit?: number
) => Promise<T[]>;

function usePagination<T>(
  fetchFunction: FetchFunction<T>,
  limit = 10,
  initoffset = 0
): {
  data: T[];
  isLoading: boolean;
  error: Error | null;
  fetchNextPage: AsyncGenerator<T[], any, void>;
} {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // use of generator function (function*) to yield results with .next(),
  // in infinite 'while(true)' loop.
  async function* GeneratorFetch(
    limit: number
  ): AsyncGenerator<T[], any, void> {
    let offset = initoffset;
    while (true) {
      try {
        setIsLoading(true);
        const moreData = await fetchFunction(limit, offset);

        setData((prevData: T[]) => [...prevData, ...moreData]);
        setIsLoading(false);

        offset = offset + limit;
        yield moreData;
      } catch (err) {
        setError(err);
        break;
      }
    }
  }

  const fetchNextPage = useMemo(() => GeneratorFetch(limit), []);

  return {
    data,
    isLoading,
    error,
    fetchNextPage,
  };
}

export default usePagination;
