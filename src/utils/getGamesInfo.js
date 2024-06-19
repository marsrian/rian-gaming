export async function getGamesInfo() {
    try {
      const res = await fetch(process.env.NEXTAUTH_URL + "/api/games", {
        next: {
          revalidate: 10
        }
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch game data");
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching Game data:", error);
      return { games: [] };
    }
  }