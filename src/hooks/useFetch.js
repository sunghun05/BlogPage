import { useEffect, useState } from "react";

function useFetch({ dbId }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!dbId) return;

        let isCancelled = false;

        const fetchData = async () => {
            setLoading(true);

        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [dbId]);

    return { data, loading, error };
}

export default useFetch;
