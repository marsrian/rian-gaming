import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-white gap-2">
      <h1 className="text-7xl font-extrabold text-red-600">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <button className="px-3 py-2 border rounded-md">← Go back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
