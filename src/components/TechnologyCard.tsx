import type { Technology } from "../types/datatype";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`rounded-full px-4 py-2 text-sm font-medium text-white ${
            isAdded ? "cursor-not-allowed bg-gray-400" : "brand-gradient"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;