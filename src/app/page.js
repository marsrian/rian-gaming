import HeroSection from "@/components/HeroSection";
import RecentBlogs from "@/components/RecentBlogs";
import RecentGames from "@/components/RecentGames";

export const metadata = {
  title: "marsriangaming",
  description:
    "Dive into immersive story-based gameplay as I take you on epic adventures through your favorite games! Watch my gaming videos and live streams on Facebook and YouTube, where I share thrilling gameplay, and interactive experiences",
};

const HomePage = () => {
  return (
    <div className="mt-8 mb-6">
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
