import PaginationControls from "@/components/Pagination";
import { quantico, tradeWinds } from "@/utils/fonts";
import Link from "next/link";

export const metadata = {
  title: "Gameplay | MarsRianGaming",
  openGraph: {
    title: "Gameplay | MarsRianGaming",
    description: 'Dive into immersive story-based gameplay as I take you on epic adventures through your favorite games! Watch my gaming videos and live streams on Facebook and YouTube, where I share thrilling gameplay, and interactive experience',
  },
}

async function getGameData() {
  try {
    const res = await fetch(process.env.NEXTAUTH_URL + "/api/games", {
      next: {
        revalidate: 10,
      }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch game data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching Game data:", error);
  }
}

const GamesPage = async ({searchParams}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const { games } = await getGameData();
  const sortedGames = games.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const allGames = sortedGames.slice(start, end);
  return (
    <div className="mt-12">
      <h1
        className={`${tradeWinds.className} text-4xl font-bold text-center text-white`}
      >
        ALL GAMES WALKTHROUGH
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-4 md:px-0">
        {allGames.length > 0 &&
          allGames.map((game) => (
            <div
              key={game._id}
              className="relative h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${game.image})` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-0 hover:bg-opacity-75 transition-opacity duration-300">
                <h1
                  className={`${quantico.className} text-white text-center text-lg transition-opacity duration-300`}
                >
                  {game.name}
                </h1>
                <Link
                  href={`/gameplay/${game._id}`}
                  className={`${quantico.className} text-sm font-semibold transition-opacity duration-300 mt-2 py-2  px-3 bg-emerald-600 text-white rounded-lg`}
                >
                  Game Details
                </Link>
              </div>
            </div>
          ))}
      </div>
      <PaginationControls
        hasNextPage={end < games.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
};

export default GamesPage;