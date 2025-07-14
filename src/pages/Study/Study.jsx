import Header from "../../componenets/Header/Header.jsx";
import "./Study.css"
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";

function Study() {
    //https://api.notion.com/v1/databases/{}/query
    const { data, loading, error } = useFetch({ dbId: "22e6c0b1dd2b8065865cc72709b5aa26" });

    useEffect(() => {
        if (data) console.log(data);
    }, [data]);

    if (loading) {
        return (
            <>
                <Header/>
                <div className="study">
                    <h1>loading...</h1>
                </div>
            </>
        );
    }
    if (error) {
        return (
            <>
                <Header/>
                <div className="study">
                    <h1>Error: {error.message}</h1>
                </div>
            </>
        );
    }
    return (
        <>
            <Header/>
            <div className="study">
                <h1>Data Loaded!</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </>
    );
}
export default Study;
