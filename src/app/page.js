import CookieBotTest from "@/components/CookieBot";
import HeroSection from "@/components/HeroSection";
import RecentBlogs from "@/components/RecentBlogs";
import RecentGames from "@/components/RecentGames";

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
    </div>
  );
};

export default HomePage;
