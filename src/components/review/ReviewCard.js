import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-200 p-4 m-4 b shadow-md rounded-md">
      <p className="text-lg font-semibold mb-2">{review.name}</p>
      <p className="text-gray-600">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
