// app/fetch-post/page.tsx
"use client";
import { useState, useEffect } from "react";

export default function FetchPostPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/external")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setPosts(data.data);
                } else {
                    setError(data.message);
                }
            })
            .catch(() => setError("An unexpected error"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-indigo-100">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-800 drop-shadow-md">
                Latest Posts
            </h1>

            {loading && (
                <p className="text-indigo-600 text-lg font-medium animate-pulse">
                    Loading...
                </p>
            )}

            {error && (
                <p className="text-red-600 text-lg font-semibold">{error}</p>
            )}

            {!loading && !error && (
                <ul className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 space-y-4 divide-y divide-gray-200">
                    {posts.map((post: { id: number; title: string }) => (
                        <li
                            key={post.id}
                            className="py-4 px-6 hover:bg-indigo-50 transition-all duration-200 ease-in-out rounded-lg
                             cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <h2 className="text-lg font-semibold text-gray-700 hover:text-indigo-700 transition duration-300">
                                {post.title}
                            </h2>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
