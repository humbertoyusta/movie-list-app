import { useEffect, useState } from "react";

interface IUseAsyncReturn<T> {
    loading: boolean;
    data: T | null;
    error: Error | null;
}

export default function useAsync<T>(
    asyncFunction: () => Promise<T>
): IUseAsyncReturn<T> {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        asyncFunction()
            .then((result) => {
                setLoading(false);
                setData(result);
                setError(null);
            })
            .catch((error) => {
                setLoading(false);
                setData(null);
                setError(error);
            });
    }, [asyncFunction]);

    return { loading, data, error };
}
