import Link from "next/link";
import { X } from "lucide-react";

const FormHeader = ({ title, subtitle, closeHref }) => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-text-muted font-body">
            {subtitle}
          </p>
        </div>
        <Link
          href={closeHref}
          className="shrink-0 p-2.5 text-text-muted hover:text-accent hover:bg-background rounded-xl transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>
    </div>
  );
};

export default FormHeader;
