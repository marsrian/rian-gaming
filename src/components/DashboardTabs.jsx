import { quantico } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";


const DashBoardTabs = ({ isAdmin }) => {
  const pathName = usePathname();
  return (
    <div
      className={`${quantico.className} flex justify-center items-center gap-6 text-white`}
    >
      {isAdmin && (
        <>
          <Link
            className={
              pathName === "/dashboard/category" ? "text-green-400" : ""
            }
            href="/dashboard/category"
          >
            Category
          </Link>
          <Link
            className={
              pathName.includes("https://mars-rian-gaming.vercel.app/dashboard/games") ? "text-green-400" : ""
            }
            href="/dashboard/games"
          >
            Games
          </Link>
          <Link
            className={
              pathName.includes("dashboard/blogs") ? "text-green-400" : ""
            }
            href="/dashboard/blogs"
          >
            Blogs
          </Link>
          <Link
            className={pathName.includes("dashboard/users") ? "text-green-400" : ""}
            href="/dashboard/users"
          >
            Users
          </Link>
        </>
      )}
    </div>
  );
};

export default DashBoardTabs;