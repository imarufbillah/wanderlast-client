const DescriptionSection = ({ description }) => {
  return (
    <div className="p-6 bg-surface rounded-2xl border border-border shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-3">
        About This <span className="text-accent">Experience</span>
      </h2>
      <p className="text-base text-text font-body leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default DescriptionSection;
