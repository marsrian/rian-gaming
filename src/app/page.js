import HeroSection from "@/components/HeroSection";
import RecentBlogs from "@/components/RecentBlogs";
import RecentGames from "@/components/RecentGames";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="mt-8 mb-6">
      <HeroSection />
      {/* <div className="mt-20">
        <Suspense fallback={<p>Loading...</p>}>
          <RecentGames />
        </Suspense>
      </div>
      <div className="mt-20">
        <Suspense fallback={<p>Loading...</p>}>
          <RecentBlogs />
        </Suspense>
      </div> */}
    </div>
  );
};

export default HomePage;
