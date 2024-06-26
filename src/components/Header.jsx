"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { quantico } from "@/utils/fonts";
import useProfile from "./useProfile";

const Header = () => {
  const session = useSession();
  const status = session.status;
  const userData = session?.data?.user;
  let userName = userData?.name || userData?.email;
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { data } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sticky top-0 z-10 ${
        isScrolled ? "bg-[url(/bg-1.jpg)]" : "bg-transparent"
      }`}
    >
      <div
        className={`${quantico.className} flex justify-between items-center py-2 relative`}
      >
        <Link href="/" className="pl-2 md:pl-0">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <Link href="/" className={pathName === "/" ? "text-green-300" : ""}>
            <li>Home</li>
          </Link>
          <Link
            href="/games"
            className={
              pathName === "https://mars-rian-gaming.vercel.app/games" || pathName.includes("https://mars-rian-gaming.vercel.app/games/")
                ? "text-green-300"
                : ""
            }
          >
            <li>Games</li>
          </Link>
          <Link
            href="/blog"
            className={
              pathName === "/blog" || pathName.includes("blog/")
                ? "text-green-300"
                : ""
            }
          >
            <li>Blog</li>
          </Link>

          {data.admin === true && (
            <Link
              href="/dashboard/category"
              className={pathName.includes("dashboard") ? "text-green-300" : ""}
            >
              <li>Dashboard</li>
            </Link>
          )}
        </ul>
        <div className="hidden md:flex gap-6 text-white">
          {status === "loading" && (
            <p>Loading...</p>
          )}
          {status === "authenticated" && (
            <div className="flex items-center">
              <Link href="/profile" className="whitespace-nowrap mr-2">{data.name}</Link>
              <button
                onClick={() => signOut()}
                className="bg-green-600 rounded-full text-white px-8 py-2"
              >
                Logout
              </button>
            </div>
          )}
          {status === "unauthenticated" && (
            <div className={`border px-4 py-2 rounded-md`}>
              <Link
                href="/login"
                className={pathName === "/login" ? "text-green-300" : ""}
              >
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="flex md:hidden">
          {isOpen ? (
            <button
              onClick={handleToggle}
              className="text-xl font-semibold text-green-600 border-0"
            >
              <FaAlignRight />
            </button>
          ) : (
            <>
              <div className="absolute top-[74px] w-60 left-0 h-[600px] p-4 bg-gray-800 text-white font-semibold text-lg duration-1000 md:hidden">
                <ul className="flex flex-col gap-3 mt-12">
                  <Link
                    href="/"
                    className={pathName === "/" ? "text-green-300" : ""}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    href="/games"
                    className={
                      pathName === "/games" || pathName.includes("games/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Games</li>
                  </Link>
                  <Link
                    href="/blog"
                    className={
                      pathName === "/blog" || pathName.includes("blog/")
                        ? "text-green-300"
                        : ""
                    }
                  >
                    <li>Blog</li>
                  </Link>
                  {data.admin === true && (
                    <Link
                      href="/dashboard/category"
                      className={
                        pathName.includes("dashboard") ? "text-green-300" : ""
                      }
                    >
                      <li>Dashboard</li>
                    </Link>
                  )}
                </ul>
                <div className="block md:hidden mt-6">
                  {status === "authenticated" && (
                    <div className="flex flex-col gap-3">
                      {/* <p className="whitespace-nowrap">{userName}</p> */}
                      <Link href="/profile" className="whitespace-nowrap">{data.name}</Link>
                      <button
                        onClick={() => signOut()}
                        className="bg-green-600 rounded-full text-white px-8 py-2"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                  {status === "unauthenticated" && (
                    <>
                      <Link
                        href="/login"
                        className={
                          pathName === "/login" ? "text-green-300" : ""
                        }
                      >
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={handleToggle}
                className="text-xl font-semibold text-green-600 border-0"
              >
                <FaTimes />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;