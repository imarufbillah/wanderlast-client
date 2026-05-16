"use client";

import { useEffect } from "react";
import {
  X,
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
  Trash2,
  Edit,
  Plus,
  Save,
} from "lucide-react";

const Toast = ({ message, type = "success", onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const toastConfig = {
    success: {
      icon: <CheckCircle className="w-5 h-5" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBgColor: "bg-green-500",
      textColor: "text-green-800",
      iconColor: "text-white",
      progressColor: "bg-green-500",
    },
    error: {
      icon: <AlertCircle className="w-5 h-5" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBgColor: "bg-red-500",
      textColor: "text-red-800",
      iconColor: "text-white",
      progressColor: "bg-red-500",
    },
    warning: {
      icon: <AlertTriangle className="w-5 h-5" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconBgColor: "bg-yellow-500",
      textColor: "text-yellow-800",
      iconColor: "text-white",
      progressColor: "bg-yellow-500",
    },
    info: {
      icon: <Info className="w-5 h-5" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBgColor: "bg-blue-500",
      textColor: "text-blue-800",
      iconColor: "text-white",
      progressColor: "bg-blue-500",
    },
    delete: {
      icon: <Trash2 className="w-5 h-5" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBgColor: "bg-red-500",
      textColor: "text-red-800",
      iconColor: "text-white",
      progressColor: "bg-red-500",
    },
    update: {
      icon: <Edit className="w-5 h-5" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBgColor: "bg-blue-500",
      textColor: "text-blue-800",
      iconColor: "text-white",
      progressColor: "bg-blue-500",
    },
    create: {
      icon: <Plus className="w-5 h-5" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBgColor: "bg-green-500",
      textColor: "text-green-800",
      iconColor: "text-white",
      progressColor: "bg-green-500",
    },
    save: {
      icon: <Save className="w-5 h-5" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBgColor: "bg-green-500",
      textColor: "text-green-800",
      iconColor: "text-white",
      progressColor: "bg-green-500",
    },
  };

  const config = toastConfig[type] || toastConfig.info;

  return (
    <div
      className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border ${config.bgColor} ${config.borderColor} shadow-lg backdrop-blur-sm animate-slide-in-right overflow-hidden`}
      role="alert"
    >
      {/* Progress bar */}
      {duration > 0 && (
        <div
          className={`absolute bottom-0 left-0 h-1 ${config.progressColor} animate-toast-progress`}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      )}

      {/* Icon with background */}
      <div
        className={`shrink-0 w-8 h-8 rounded-lg ${config.iconBgColor} ${config.iconColor} flex items-center justify-center`}
      >
        {config.icon}
      </div>

      {/* Message */}
      <p
        className={`flex-1 text-sm font-medium font-body ${config.textColor} wrap-break-word`}
      >
        {message}
      </p>

      {/* Close button */}
      <button
        onClick={onClose}
        className={`shrink-0 p-1.5 ${config.textColor} hover:bg-black/5 rounded-lg transition-colors`}
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
