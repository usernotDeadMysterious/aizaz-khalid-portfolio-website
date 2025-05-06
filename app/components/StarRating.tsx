// components/StarRating.tsx
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button 
        title='Rating Stars'  
        type="button"
          key={star}
          onClick={() => setRating(star)}
          className="focus:outline-none"
        >
          <Star
            size={20}
            className={`transition ${
              star <= rating ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-zinc-400'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
