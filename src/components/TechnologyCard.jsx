const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <article className="flex min-h-[300px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Top Row */}
      <div className="flex items-start justify-between gap-3">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
          {badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Information */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
        <span className="rounded bg-slate-50 px-2 py-1 text-xs font-medium text-slate-500">
          {category}
        </span>

        <span className="text-xs text-slate-400">{difficulty}</span>

        <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
          <span className="text-yellow-400">★</span>
          {rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;
