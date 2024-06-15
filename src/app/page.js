import HeroSection from "@/components/HeroSection";
import RecentGames from "@/components/RecentGames";
import BlogPage from "./blog/page";

const HomePage = () => {
  return (
    <div className="mt-8 mb-6">
      <HeroSection />
      <div className="mt-20">
        <RecentGames />
        <div className="mt-20">
          <BlogPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
