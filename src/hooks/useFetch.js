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
            try {
                const response = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ dbId }),
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const result = await response.json();
                if (!isCancelled) {
                    setData(result);
                }
            } catch (err) {
                if (!isCancelled) setError(err);
            } finally {
                if (!isCancelled) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [dbId]);

    return { data, loading, error };
}

export default useFetch;
