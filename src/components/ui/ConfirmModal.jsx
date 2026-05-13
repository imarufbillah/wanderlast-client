"use client";

import { useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "danger", // danger, warning, info
  isLoading = false,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen && !isLoading) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, isLoading, onClose]);

  if (!isOpen) return null;

  const typeStyles = {
    danger: {
      icon: "bg-red-500/10 text-red-500",
      button: "bg-red-500 hover:bg-red-600 text-surface",
    },
    warning: {
      icon: "bg-yellow-500/10 text-yellow-500",
      button: "bg-yellow-500 hover:bg-yellow-600 text-surface",
    },
    info: {
      icon: "bg-accent/10 text-accent",
      button: "bg-accent hover:bg-accent-soft text-surface",
    },
  };

  const currentStyle = typeStyles[type] || typeStyles.danger;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoading) {
          onClose();
        }
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-surface rounded-3xl shadow-2xl border border-border max-w-md w-full animate-scale-in">
        {/* Close Button */}
        {!isLoading && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-text-muted hover:text-accent hover:bg-background rounded-xl transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-full ${currentStyle.icon} flex items-center justify-center mb-4`}
          >
            <AlertTriangle className="w-7 h-7" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-3">
            {title}
          </h2>

          {/* Message */}
          <p className="text-base text-text-muted font-body mb-6 leading-relaxed">
            {message}
          </p>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-background text-text font-semibold font-body rounded-xl border-2 border-border hover:border-accent hover:text-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className={`flex-1 px-6 py-3 font-bold font-body rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${currentStyle.button}`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-surface/30 border-t-surface rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
