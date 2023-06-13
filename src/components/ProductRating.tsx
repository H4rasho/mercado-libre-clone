import { StarIcon } from "./icons/StarIcon";

const MAX_RATING = 5;

export function ProductRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: MAX_RATING }).map((_, index) => (
        <StarIcon key={index} />
      ))}
      <span className="text-sm font-medium text-[#3483fa]"> ({rating})</span>
    </div>
  );
}
