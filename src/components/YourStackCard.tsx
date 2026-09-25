import type { Technology } from "../types/datatype";

type YourStackCardProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStackCard = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackCardProps) => {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {stack.length} Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <p className="mt-8 text-center text-sm text-gray-500">
          Your selected technologies will appear here.
        </p>
      ) : (
        <div className="mt-6 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-lg text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-3 w-full rounded-full border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStackCard;