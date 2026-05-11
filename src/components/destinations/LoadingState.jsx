import { Loader2 } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto mb-4" />
        <p className="text-text-muted font-body">Loading destinations...</p>
      </div>
    </div>
  );
};

export default LoadingState;
