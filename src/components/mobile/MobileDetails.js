import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addMobileReview, getMobileDetail } from "../../apis/mobileAPIs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "../review/ReviewCard";
import Loader from "../utils/Loader";
import Modal from "../utils/Modal";
import ReviewSection from "../review/ReviewSection";

const MobileDetails = () => {
  const navigate = useNavigate();
  const [mobileDetail, setMobileDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchMobileDetail();
  }, []);

  const fetchMobileDetail = async () => {
    try {
      setLoading(true);
      const data = await getMobileDetail(id);
      setMobileDetail(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching mobile:", error);
    }
  };

  const addReview = async (newReview) => {
    const data = await addMobileReview(id, newReview);
    console.log(data);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Modal
            setIsOpen={setIsOpen}
            title="Add Review"
            addReview={addReview}
            isOpen={isOpen}
          />
          <div className="container mx-auto mt-8">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-8">
              <div className="lg:w-1/2 m-5 p-2 ">
                {/* Carousel for images */}
                <Carousel showArrows={true} infiniteLoop={true}>
                  {mobileDetail.images &&
                    mobileDetail.images.map((image) => (
                      <div key={image._id} className="w-full h-64">
                        <img
                          src={image.url}
                          alt={image.public_id}
                          className="w-full h-full object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
                        />
                      </div>
                    ))}
                </Carousel>
              </div>

              <div className="lg:w-1/2 mt-4 lg:mt-0 text-center text-gray-800 bg-white p-8 rounded-lg shadow-md">
                {/* Mobile details */}
                <h1 className="text-4xl font-bold mb-4 text-blue-600">
                  {mobileDetail.name}
                </h1>
                <p className="text-2xl font-semibold mb-6">
                  ₹{mobileDetail.price}
                </p>
                <div className="grid grid-cols-2 gap-4 text-left mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Type:</p>
                    <p className="text-lg font-medium">{mobileDetail.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Processor:</p>
                    <p className="text-lg font-medium">
                      {mobileDetail.processor}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Memory:</p>
                    <p className="text-lg font-medium">{mobileDetail.memory}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">OS:</p>
                    <p className="text-lg font-medium">{mobileDetail.os}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if (localStorage.getItem("token")) setIsOpen(true);
                      else navigate("/login");
                    }}
                    className="px-6 py-3 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-600 transition-all duration-300"
                  >
                    Add Review
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews section */}

            <ReviewSection mobileDetail={mobileDetail} />
          </div>
        </>
      )}
    </>
  );
};

export default MobileDetails;
