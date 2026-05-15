import { auth } from "./auth";
import { headers } from "next/headers";

/**
 * Helper function to get JWT token from Better Auth session
 * Returns the access token if user is authenticated
 */
const getAuthToken = async () => {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });

    return token || null;
  } catch (error) {
    console.error("Error getting auth token:", error);
    return null;
  }
};

export const getBookingsByUserId = async (userId) => {
  try {
    const token = await getAuthToken();

    const res = await fetch(`http://localhost:5000/bookings/${userId}`, {
      cache: "no-store",
      headers: {
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch bookings");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

export const getAllDestinations = async () => {
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
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
  return allDestinations.filter((d) => d.featured === true);
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
    return null;
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
    const continents = [...new Set(data.map((d) => d.continent))];
    return continents;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};
