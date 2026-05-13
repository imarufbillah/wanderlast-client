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

export const getDestinationById = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch destinations by ID");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching destinations by ID:", error);
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    const data = await res.json();
    const categories = [...new Set(data.map((d) => d.category))].filter(
      Boolean,
    );
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getAllCountries = async () => {
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    const data = await res.json();
    // Extract unique countries from the destinations
    const countries = [...new Set(data.map((d) => d.country))];
    return countries;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};

export const getAllContinents = async () => {
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    const data = await res.json();
    // Extract unique continents from the destinations
    const continents = [...new Set(data.map((d) => d.continent))];
    return continents;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};
