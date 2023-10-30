import React from "react";

const OrderOption = ({ address, address2, mode, item }) => {
  return (
    <>
      <div className="">
        <a href="#">
          <div className="flex shadow-lg py-1 p-2 mr-40 ml-40 mt-5 text-sm items-center rounded justify-between pr-10">
            <div className="text-sm pr-2 md:pr-24 text-lg">{address}</div>
            <div className="text-sm pr-2 md:pr-24 text-lg m-5">{address2}</div>
            <div className="text-sm pr-2 md:pr-24 text-lg">{mode}</div>
            <div className="text-sm pr-2 md:pr-24 text-lg">{item}</div>
          </div>
        </a>
        {/*           
        <a href="#">
          <div className="flex shadow-lg py-1 p-2 mr-40 ml-40 mt-5 text-sm items-center rounded justify-between pr-10 ">
            <div className="text-sm pr-2 md:pr-24 text-lg">
              
            </div>
            <div className="text-sm pr-2 md:pr-24 text-lg m-5">
              
            </div>
            <div className="text-sm pr-2 md:pr-24 text-lg">Bike</div>
            <div className="text-sm pr-2 md:pr-24 text-lg"></div>
          </div>
        </a> */}
      </div>
    </>
  );
};

export default OrderOption;
