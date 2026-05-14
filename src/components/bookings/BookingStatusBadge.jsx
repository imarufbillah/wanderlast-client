const STATUS_STYLES = {
  upcoming: "bg-accent/10 text-accent border-accent/20",
  completed: "bg-success/10 text-success border-success/20",
  cancelled: "bg-red-100 text-red-500 border-red-200",
};

const STATUS_LABELS = {
  upcoming: "Upcoming",
  completed: "Completed",
  cancelled: "Cancelled",
};

const BookingStatusBadge = ({ status = "upcoming" }) => {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.upcoming;
  const label = STATUS_LABELS[status] ?? "Upcoming";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border ${style}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
};

export default BookingStatusBadge;
