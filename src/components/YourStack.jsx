const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Heading */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

        <p className="mt-1 text-sm text-slate-400">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology${
                stack.length > 1 ? "ies" : "y"
              } Selected`}
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3"
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-8 w-8 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {technology.name}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-xl leading-none text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;
