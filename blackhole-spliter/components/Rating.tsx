import React from 'react';

interface RatingProps {
  rating: number;
  maxRating?: number;
  votes?: number;
  showVotes?: boolean;
}

export default function Rating({ rating, maxRating = 5, votes, showVotes = true }: RatingProps) {
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">★</span>
      );
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-xl">
        {stars}
      </div>
      {showVotes && votes && (
        <span className="text-sm text-gray-600">
          out of {votes.toLocaleString()} votes
        </span>
      )}
    </div>
  );
}
