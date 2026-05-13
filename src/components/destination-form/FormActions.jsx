import Link from "next/link";
import { Button } from "@heroui/react";
import { X, Plus, Save } from "lucide-react";

const FormActions = ({ isPending, cancelHref, isEdit = false }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 pt-8 mt-8 border-t border-border">
      <Link
        href={cancelHref}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-background text-text font-semibold font-body rounded-xl border-2 border-border hover:border-accent hover:text-accent transition-all text-sm sm:text-base"
      >
        <X className="w-4 h-4" />
        Cancel
      </Link>
      <Button
        type="submit"
        disabled={isPending}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        {isPending ? (
          <>
            <div className="w-4 h-4 border-2 border-surface/30 border-t-surface rounded-full animate-spin" />
            {isEdit ? "Updating..." : "Adding Package..."}
          </>
        ) : (
          <>
            {isEdit ? (
              <>
                <Save className="w-5 h-5" />
                Update Travel Package
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Add Travel Package
              </>
            )}
          </>
        )}
      </Button>
    </div>
  );
};

export default FormActions;
