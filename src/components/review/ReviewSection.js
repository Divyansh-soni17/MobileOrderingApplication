import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection = ({ mobileDetail }) => {
  return (
    <div className="mt-8 text-center ">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Customer Reviews
      </h2>
      <div className="flex justify-center flex-nowrap space-x-4 p-2 overflow-x-auto">
        {mobileDetail.reviews?.length > 0 ? (
          mobileDetail.reviews.map((review) => (
            <div
              key={review._id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
            >
              <ReviewCard review={review} />
            </div>
          ))
        ) : (
          <p className="text-lg font-semibold mb-4">No reviews to show.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
