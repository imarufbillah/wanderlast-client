"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm flex items-center justify-between gap-2 ${
          isOpen
            ? "border-accent ring-2 ring-accent/20"
            : "border-border hover:border-accent/50"
        }`}
      >
        <div className="flex items-center gap-2 flex-1 text-left">
          {Icon && <Icon className="w-4 h-4 text-accent shrink-0" />}
          <span
            className={selectedOption?.value === "all" ? "text-text-muted" : ""}
          >
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-text-muted transition-transform shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-surface border border-border rounded-xl shadow-xl overflow-hidden animate-scale-in">
          <div className="max-h-60 overflow-y-auto py-2">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-2.5 text-left font-body transition-colors flex items-center justify-between gap-2 ${
                    isSelected
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-text hover:bg-background"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-accent shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
