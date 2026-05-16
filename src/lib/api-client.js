/**
 * Client-side API functions for authenticated operations
 * These functions run in the browser and use authClient to get tokens
 */

import { authClient } from "./auth-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Helper to get auth token from client-side session
 */
const getClientToken = async () => {
  try {
    const {
      data: { token },
    } = await authClient.token();
    return token || null;
  } catch (error) {
    console.error("Error getting client token:", error);
    return null;
  }
};

/**
 * Create a new destination (admin only)
 */
export const createDestination = async (destinationData) => {
  const token = await getClientToken();

  if (!token) {
    throw new Error("Authentication required");
  }

  const res = await fetch(`${API_BASE_URL}/destinations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(destinationData),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to create destination");
  }

  return res.json();
};

/**
 * Update a destination by ID (admin only)
 */
export const updateDestination = async (id, destinationData) => {
  const token = await getClientToken();

  if (!token) {
    throw new Error("Authentication required");
  }

  const res = await fetch(`${API_BASE_URL}/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(destinationData),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to update destination");
  }

  return res.json();
};

/**
 * Delete a destination by ID (admin only)
 */
export const deleteDestination = async (id) => {
  const token = await getClientToken();

  if (!token) {
    throw new Error("Authentication required");
  }

  const res = await fetch(`${API_BASE_URL}/destinations/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to delete destination");
  }

  return res.json();
};

/**
 * Create a new booking
 */
export const createBooking = async (bookingData) => {
  const token = await getClientToken();

  if (!token) {
    throw new Error("Authentication required");
  }

  const res = await fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to create booking");
  }

  return res.json();
};

/**
 * Delete a booking by ID
 */
export const deleteBooking = async (id) => {
  const token = await getClientToken();

  if (!token) {
    throw new Error("Authentication required");
  }

  const res = await fetch(`${API_BASE_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to delete booking");
  }

  return res.json();
};

/**
 * Fetch destination by ID (client-side, no auth required)
 */
export const fetchDestinationById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/destinations/${id}`);

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to fetch destination");
  }

  return res.json();
};
