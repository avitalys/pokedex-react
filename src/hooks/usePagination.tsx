import { useState, useEffect } from "react";

export type FetchFunction<T> = (limit: number, offset: number) => Promise<T[]>;

function usePagination<T>(fetchFunction: FetchFunction<T>): {
  data: T[];
  loading: boolean;
  error: Error | null;
  fetchNextPage: () => void;
} {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newData = await fetchFunction(limit, offset);
        setData((prevData) => [...prevData, ...newData]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, offset, limit]);

  const fetchNextPage = () => {
    if (!loading) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  return { data, loading, error, fetchNextPage };
}

export default usePagination;
