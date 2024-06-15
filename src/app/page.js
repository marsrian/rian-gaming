import HeroSection from "@/components/HeroSection";
import RecentGames from "@/components/RecentGames";

const HomePage = () => {
  return (
    <div className="mt-8 mb-6">
      <HeroSection />
      <div className="mt-20">
        <RecentGames />
      </div>
      {/* <div className="mt-20">
        <RecentBlogs />
      </div> */}
    </div>
  );
};

export default HomePage;
