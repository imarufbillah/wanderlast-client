export const getAllDestinations = async () => {
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store", // Always fetch fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};

export const getFeaturedDestinations = async () => {
  const allDestinations = await getAllDestinations();

  const featuredDestinations = allDestinations.filter(
    (d) => d.featured === true,
  );

  return featuredDestinations;
};
