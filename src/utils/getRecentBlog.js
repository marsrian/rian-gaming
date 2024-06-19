export async function getRecentBlog() {
  try {
    const res = await fetch(process.env.NEXTAUTH_URL + "/api/blogs", {
      next: {
        revalidate: 10,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { blogs: [] };
  }
}
