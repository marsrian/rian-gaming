import { quantico, tradeWinds } from "@/utils/fonts";
import { getRecentBlog } from "@/utils/getRecentBlog";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const RecentBlogs = async () => {
  const { blogs } = await getRecentBlog();
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="mt-12">
      <h1
        className={`${tradeWinds.className} text-3xl md:text-4xl font-bold text-center text-white`}
      >
        RECENT Blogs
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-6 px-2 md:px-0">
        {sortedBlogs.length > 0 &&
          sortedBlogs.slice(0, 6).map((blog) => (
            <div key={blog._id} className="border p-2 rounded-md">
              <div className="">
                <Link
                  href={`/blog/${blog._id}`}
                  className={`${quantico.className} text-lg text-blue-400 hover:text-blue-600`}
                >
                  {blog.title}
                </Link>
                <div className="flex justify-between mt-1 text-gray-400">
                  <p className="flex items-center gap-1">
                    <FaRegListAlt /> {blog.category}
                  </p>
                  <p className="flex items-center gap-1">
                    <FaRegCalendarAlt /> {formatDate(blog.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
