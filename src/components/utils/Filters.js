import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import {
  nameOptions,
  typeOptions,
  processorOptions,
  memoryOptions,
  osOptions,
} from "../../constants/mobileConstant";

const Filter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [os, setOS] = useState("");

  const handleFilterChange = () => {
    const filters = {
      priceRange,
      name,
      type,
      processor,
      memory,
      os,
    };
    console.log(filters);
    onFilterChange(filters);
  };
  const handleInput = (e) => {
    setPriceRange([e.minValue, e.maxValue]);
  };

  return (
    <div className="mb-4 border border-black p-2 m-1 h-fit md:w-full rounded-xl">
      <label
        htmlFor="price-range"
        className="block mb- text-sm font-medium text-gray-900 "
      >
        Price Range
      </label>
      <MultiRangeSlider
        min={0}
        max={100000}
        step={1000}
        ruler={false}
        label={true}
        minValue={priceRange[0]}
        maxValue={priceRange[1]}
        value={priceRange}
        onInput={(e) => {
          handleInput(e);
        }}
        className="!border-none !shadow-none"
      />

      <label
        htmlFor="name"
        className="block mt-4 mb-1 text-sm font-medium text-gray-900 "
      >
        Name
      </label>
      <select
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-0.5 border border-gray-300 rounded-md"
      >
        {nameOptions.map((option, index) => (
          <option className="" key={index} value={option}>
            {option || "Select Name"}
          </option>
        ))}
      </select>

      <label
        htmlFor="type"
        className="block mt-4 mb-1 text-sm font-medium text-gray-900 "
      >
        Type
      </label>
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-0.5 border border-gray-300 rounded-md"
      >
        {typeOptions.map((option, index) => (
          <option key={index} value={option}>
            {option || "Select Type"}
          </option>
        ))}
      </select>

      <label
        htmlFor="processor"
        className="block mt-4 mb-1 text-sm font-medium text-gray-900 "
      >
        Processor
      </label>
      <select
        id="processor"
        value={processor}
        onChange={(e) => setProcessor(e.target.value)}
        className="w-full p-0.5 border border-gray-300 rounded-md"
      >
        {processorOptions.map((option, index) => (
          <option key={index} value={option}>
            {option || "Select Processor"}
          </option>
        ))}
      </select>

      <label
        htmlFor="memory"
        className="block mt-4 mb-1 text-sm font-medium text-gray-900 "
      >
        Memory
      </label>
      <select
        id="memory"
        value={memory}
        onChange={(e) => setMemory(e.target.value)}
        className="w-full p-0.5 border border-gray-300 rounded-md"
      >
        {memoryOptions.map((option, index) => (
          <option key={index} value={option}>
            {option || "Select Memory"}
          </option>
        ))}
      </select>

      <label
        htmlFor="os"
        className="block mt-4 mb-1 text-sm font-medium text-gray-900 "
      >
        Operating System (OS)
      </label>
      <select
        id="operatingsystem"
        value={os}
        onChange={(e) => setOS(e.target.value)}
        className="w-full p-0.5 border border-gray-300 rounded-md"
      >
        {osOptions.map((option, index) => (
          <option key={index} value={option}>
            {option || "Select OS"}
          </option>
        ))}
      </select>

      <button
        onClick={handleFilterChange}
        className="mt-4 bg-blue-500 text-white px-2 py-2 rounded-lg"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
