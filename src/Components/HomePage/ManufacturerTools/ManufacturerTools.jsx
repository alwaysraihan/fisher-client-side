import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingData from "../../Loading/LoadingData";

const ManufacturerTools = () => {
    const [toolsData, setToolsData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axios.get(
                    `https://elctrofy.herokuapp.com/tools`
                );
                setToolsData(data);
            } catch (err) {
                console.error(err);
            }
        };
        loadData();
    }, []);
    return (
        <>
            <div className="pb-20">
                <h1 className="text-center text-gray-600 text-2xl md:text-5xl font-semibold py-10 md:pt-20 ">
                    Our Tools
                </h1>
                {toolsData.length === 0 ? <LoadingData /> : ""}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-10 justify-center   px-[2%] md:px-[3%] lg:px-[4%] xl:px-[10%]">
                    {toolsData.map((item) => (
                        <div key={item._id} className="w-full p-2 ">
                            <div className="shadow-lg hover:shadow-xl rounded-lg relative">
                                <div
                                    className="bg-white h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-contain"
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                    }}
                                ></div>
                                <div className="flex justify-between items-start px-2 pt-2">
                                    <div className="p-2 flex-grow">
                                        <h1 className="font-medium text-xl font-poppins">
                                            {item.name}
                                        </h1>
                                        <p className="text-gray-500 font-nunito">
                                            {item.description.slice(0, 50) +
                                                "..."}
                                        </p>
                                    </div>

                                    <div className="p-2 text-right">
                                        <div className="text-teal-500 font-bold text-center text-lg font-poppins">
                                            ${item.price}
                                        </div>

                                        <div>
                                            <div className=" flex justify-center items-center font-semibold text-gray-500 text-center text-sm font-poppins">
                                                Price
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex px-4 justify-between items-center">
                                    <h1 className="text-gray-400 text-sm">
                                        Minimum order quantity:
                                        {item.minimumQuntity}
                                    </h1>
                                    <h1>
                                        <span className="font-bold">
                                            Availability:{" "}
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            <span>
                                                {item.availableQunatity}
                                            </span>{" "}
                                            in stock
                                        </span>
                                    </h1>
                                </div>
                                <div className="flex justify-end text-center mt-2 items-center px-2 pb-2">
                                    <div className="w-1/2 p-2">
                                        <Link
                                            to={`purchase/${item._id}`}
                                            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white border-2 border-yellow-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                                        >
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="ribbon ribbon-top-right"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ManufacturerTools;
