import React, { useState } from "react";

import sellingFishData from "../../../Data/sellingFish";
import FishDeatialsModal from "../../FishDeatilsModal";

const FeaturedProducts = () => {
    const [modalData, setModalData] = useState(null);
    return (
        <>
            <div className="pt-5 pb-20">
                <h1 className="text-center text-gray-600 text-2xl md:text-5xl font-semibold py-10 md:pt-20 ">
                    Selling Fish
                </h1>
                {sellingFishData.length === 0 ? (
                    <div className=" w-full my-10 z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
                        <div
                            className="spinner-border animate-spin inline-block text-teal-600 mb-10 w-14 h-14 border-6 rounded-full"
                            role="status"
                        ></div>
                        <h2 className="text-center text-blue-500 text-xl font-semibold">
                            Loading...
                        </h2>
                    </div>
                ) : (
                    ""
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-10 justify-center   px-[2%] md:px-[3%] lg:px-[4%] xl:px-[10%]">
                    {sellingFishData.map((item) => (
                        <div key={item.id} className="w-full p-2 ">
                            <div className="bg-white px-4 2xl:px-8 shadow-lg hover:shadow-xl rounded-lg relative">
                                <div className="bg-white flex justify-center h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover">
                                    <img
                                        className="h-full"
                                        src={item.img}
                                        alt="feed"
                                    />
                                </div>
                                <div className="flex justify-between items-start px-2 pt-2">
                                    <div className="p-2 flex-grow">
                                        <h1 className="font-medium text-xl font-poppins">
                                            {item.name}
                                        </h1>
                                    </div>

                                    <div className="p-2 text-right">
                                        <div className="text-teal-500 font-semibold text-center text-lg font-poppins">
                                            <span className="text-black mr-1">
                                                ৳
                                            </span>
                                            {item.price}
                                        </div>

                                        <div>
                                            <div className=" flex justify-center items-center font-semibold text-gray-500 text-center text-sm font-poppins">
                                                Unit Price
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <p className="text-gray-500 mt-3 mb-2 font-nunito">
                                        {item.description.slice(0, 150) + "..."}
                                    </p>
                                </div>

                                <div className="flex justify-center items-center px-2 pb-2">
                                    <div className="w-full p-2">
                                        <label
                                            htmlFor="fishdeatils-modal"
                                            onClick={() => setModalData(item)}
                                            className="block w-full text-center bg-teal-500 cursor-pointer hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="inline w-4 h-4"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                                                />
                                            </svg>{" "}
                                            Details
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {modalData && (
                    <FishDeatialsModal
                        modalData={modalData}
                        setModalData={setModalData}
                    />
                )}
            </div>
        </>
    );
};

export default FeaturedProducts;
