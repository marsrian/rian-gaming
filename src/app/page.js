import CookieBotTest from "@/components/CookieBot";
import HeroSection from "@/components/HeroSection";
import RecentBlogs from "@/components/RecentBlogs";
import RecentGames from "@/components/RecentGames";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="mt-8 mb-6">
      <CookieBotTest />
      <HeroSection />
      <div className="mt-20">
        <RecentGames />
      </div>
      <div className="mt-20">
        <RecentBlogs />
      </div>
      <Image src="/gaming-cover.png" width={600} height={300} alt="" className="mt-8 md:mt-20 w-full md:h-[500px] p-2 md:p-0" />
    </div>
  );
};

export default HomePage;
