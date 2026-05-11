"use client";

import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const Toast = ({ message, type = "success", onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-success" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    info: <Info className="w-5 h-5 text-accent" />,
  };

  const styles = {
    success: "bg-success/10 border-success/30 text-success",
    error: "bg-red-500/10 border-red-500/30 text-red-500",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-500",
    info: "bg-accent/10 border-accent/30 text-accent",
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 shadow-lg backdrop-blur-md ${styles[type]} animate-slide-in-right`}
      role="alert"
    >
      <div className="shrink-0">{icons[type]}</div>
      <p className="flex-1 text-sm font-medium font-body text-text">
        {message}
      </p>
      <button
        onClick={onClose}
        className="shrink-0 p-1 hover:bg-background/20 rounded-lg transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
