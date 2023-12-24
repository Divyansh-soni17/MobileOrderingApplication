import React, { useState } from 'react';

const Modal = ({ setIsOpen, isOpen, title, addReview }) => {
  const [review, setReview] = useState('');

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddReview = () => {
    addReview(review);
    closeModal();
  };

  return (
    <div
      className={`${
        isOpen
          ? 'fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-brightness-75 transition-all duration-300 z-50'
          : 'hidden'
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-md w-full max-w-md mx-auto p-5 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            {/* Review input field */}
            <div className="mb-4">
              <label
                htmlFor="review"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Review
              </label>
              <textarea
                id="review"
                rows="4"
                value={review}
                onChange={handleReviewChange}
                className="block w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your review here"
              ></textarea>
            </div>
            {/* Add Review button */}
            <button
              type="button"
              onClick={handleAddReview}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-0 pointer-events-none"></div>
    </div>
  );
};

export default Modal;
