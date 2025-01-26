import React from "react";
import useFetch from "../hooks/useFetch";

function FetchComponent() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>List of Posts</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchComponent;
