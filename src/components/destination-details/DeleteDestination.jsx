"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteDestination } from "@/lib/api-client";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { useToast } from "@/components/ui/ToastContainer";

const DeleteDestination = ({ id, destinationName }) => {
  const router = useRouter();
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteDestination = async () => {
    setIsDeleting(true);

    try {
      await deleteDestination(id);
      toast.success("Destination deleted successfully!");
      setIsModalOpen(false);
      // Small delay to show toast before redirect
      setTimeout(() => {
        router.push("/destinations");
        router.refresh();
      }, 500);
    } catch (error) {
      console.error("Error deleting destination:", error);
      toast.error(
        error.message || "Failed to delete destination. Please try again.",
      );
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-xl shadow-sm hover:shadow-md transition-all text-red-500 font-body font-semibold border border-red-500/20 hover:bg-red-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
      >
        <Trash2 className="w-5 h-5" />
        <span className="hidden sm:inline">Delete</span>
      </button>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => !isDeleting && setIsModalOpen(false)}
        onConfirm={handleDeleteDestination}
        title="Delete Destination"
        message={`Are you sure you want to delete "${destinationName || "this destination"}"? This action cannot be undone and all associated data will be permanently removed.`}
        confirmText="Delete Destination"
        cancelText="Cancel"
        type="danger"
        isLoading={isDeleting}
      />
    </>
  );
};

export default DeleteDestination;
