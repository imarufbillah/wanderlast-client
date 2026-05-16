"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Toast from "./Toast";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [topOffset, setTopOffset] = useState(80); // Default: navbar height (20 = 80px)

  // Detect navbar visibility by checking scroll position and navbar transform
  useEffect(() => {
    const updateTopOffset = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) {
        setTopOffset(16); // No navbar, use top-4 (16px)
        return;
      }

      const navbarRect = navbar.getBoundingClientRect();
      const isNavbarVisible = navbarRect.top >= -10; // Allow small threshold

      if (isNavbarVisible) {
        // Navbar visible: position below it
        setTopOffset(Math.max(navbarRect.bottom + 16, 80));
      } else {
        // Navbar hidden: position at top
        setTopOffset(16);
      }
    };

    // Initial check
    updateTopOffset();

    // Update on scroll
    window.addEventListener("scroll", updateTopOffset, { passive: true });

    // Update on resize
    window.addEventListener("resize", updateTopOffset, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateTopOffset);
      window.removeEventListener("resize", updateTopOffset);
    };
  }, []);

  const addToast = useCallback((message, type = "success", duration = 5000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = {
    success: (message, duration) => addToast(message, "success", duration),
    error: (message, duration) => addToast(message, "error", duration),
    warning: (message, duration) => addToast(message, "warning", duration),
    info: (message, duration) => addToast(message, "info", duration),
    delete: (message, duration) => addToast(message, "delete", duration),
    update: (message, duration) => addToast(message, "update", duration),
    create: (message, duration) => addToast(message, "create", duration),
    save: (message, duration) => addToast(message, "save", duration),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast Container - dynamically positioned based on navbar visibility */}
      <div
        className="fixed left-4 right-4 sm:left-auto sm:right-4 z-60 flex flex-col gap-3 w-auto sm:max-w-md sm:w-full pointer-events-none transition-all duration-300"
        style={{ top: `${topOffset}px` }}
      >
        <div className="pointer-events-auto space-y-3">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
};
