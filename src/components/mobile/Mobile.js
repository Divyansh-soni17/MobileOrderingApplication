import React, { useEffect, useState } from "react";
import { getAllMobile } from "../../apis/mobileAPIs";
import MobileCard from "./MobileCard";
import Loader from "../utils/Loader";
import Filter from "../utils/Filters";

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    name: "",
    type: "",
    processor: "",
    memory: "",
    os: "",
  });
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  useEffect(() => {
    fetchMobile();
  }, []);

  const fetchMobile = async () => {
    try {
      setLoading(true);
      const data = await getAllMobile();
      setMobiles(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching mobile:", error);
    }
  };

  const applyFilters = () => {
    // Filter the mobiles based on the selected filters
    const filteredData = mobiles.filter((mobile) => {
      const priceCondition =
        mobile.price >= filters.priceRange[0] &&
        mobile.price <= filters.priceRange[1];

      const nameCondition = !filters.name || mobile.name === filters.name;
      const typeCondition = !filters.type || mobile.type === filters.type;
      const processorCondition =
        !filters.processor || mobile.processor === filters.processor;
      const memoryCondition =
        !filters.memory || mobile.memory === filters.memory;
      const osCondition = !filters.os || mobile.os === filters.os;

      return (
        priceCondition &&
        nameCondition &&
        typeCondition &&
        processorCondition &&
        memoryCondition &&
        osCondition
      );
    });

    setFilteredMobiles(filteredData);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, mobiles]);

  return (
    <>
      <div className="md:flex mt-5">
        <div className="flex justify-center md:w-1/6">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="flex-1"> 
          {loading ? (
            <Loader />
          ) : (
            <>
            <h2 className="text-center text-3xl font-bold text-blue-700">Mobiles</h2>
            <div className="flex flex-wrap justify-around p-4 m-3">
              {filteredMobiles && filteredMobiles.length > 0 ? (
                filteredMobiles.map((mobile) => (
                  <div
                    key={mobile._id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                  >
                    <MobileCard mobile={mobile} />
                  </div>
                ))
              ) : (
                <div>No Mobiles to show.</div>
              )}
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobile;
