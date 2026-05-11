"use client";

import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

const DeleteDestination = ({ id }) => {
  const handleDeleteDestination = async () => {
    try {
      const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        redirect("/destinations");
      }
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  return (
    <button
      onClick={handleDeleteDestination}
      className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all text-red-500 font-body font-semibold border border-red-500/20 hover:bg-red-500/20"
    >
      <Trash2 className="w-5 h-5" />
      <span className="hidden sm:inline">Delete</span>
    </button>
  );
};

export default DeleteDestination;
