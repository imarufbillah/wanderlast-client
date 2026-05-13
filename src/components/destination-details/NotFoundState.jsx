import Link from "next/link";

const NotFoundState = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary font-heading mb-4">
          Destination Not Found
        </h1>
        <Link
          href="/destinations"
          className="text-accent hover:text-accent-soft font-body"
        >
          Back to Destinations
        </Link>
      </div>
    </div>
  );
};

export default NotFoundState;
