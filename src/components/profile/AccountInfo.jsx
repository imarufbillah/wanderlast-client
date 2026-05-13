import { ShieldCheck, ShieldAlert, KeyRound, Trash2 } from "lucide-react";

const AccountInfo = ({ user }) => {
  return (
    <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-5">
      <h2 className="text-lg font-bold font-heading text-text">Account</h2>

      {/* Email verification status */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border">
        {user?.emailVerified ? (
          <ShieldCheck className="w-5 h-5 text-success shrink-0 mt-0.5" />
        ) : (
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        )}
        <div>
          <p className="text-sm font-semibold font-body text-text">
            {user?.emailVerified ? "Email verified" : "Email not verified"}
          </p>
          <p className="text-xs text-text-muted font-body mt-0.5">
            {user?.emailVerified
              ? "Your email address has been confirmed."
              : "Please check your inbox to verify your email."}
          </p>
        </div>
      </div>

      {/* Change password */}
      <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-border bg-background hover:border-accent/40 hover:bg-accent/5 transition-all text-left group">
        <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
          <KeyRound className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
        </div>
        <div>
          <p className="text-sm font-semibold font-body text-text">
            Change Password
          </p>
          <p className="text-xs text-text-muted font-body">
            Update your account password
          </p>
        </div>
      </button>

      {/* Danger zone */}
      <div className="pt-2 border-t border-border">
        <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
          Danger Zone
        </p>
        <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-red-200 bg-red-50/50 hover:bg-red-50 hover:border-red-300 transition-all text-left group">
          <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center shrink-0">
            <Trash2 className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <p className="text-sm font-semibold font-body text-red-500">
              Delete Account
            </p>
            <p className="text-xs text-red-400 font-body">
              Permanently remove your account and data
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
