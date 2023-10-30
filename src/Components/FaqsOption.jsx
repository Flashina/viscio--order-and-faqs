import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function FaqsOption({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleaccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mr-40 ml-40 mt-5 border border-green-800 rounded-2xl animate__animated animate__fadeInRight">
        <button
          className="flex w-full py-5 px-10 text-left text-sm text-green-700 justify-between font-semibold md:text-lg"
          onClick={toggleaccordion}
        >
          {title}
          {isOpen ? (
            <BsChevronUp className="my-2" />
          ) : (
            <BsChevronDown className="my-2" />
          )}
        </button>
        {isOpen && (
          <div className="p-5 px-10 text-green-700 text-sm md:text-lg">
            {content}
          </div>
        )}
      </div>
    </>
  );
}

export default FaqsOption;
