import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const FishDeatialsModal = ({ modalData, setModalData }) => {
    return (
        <>
            <input
                type="checkbox"
                id="fishdeatils-modal"
                class="modal-toggle"
            />
            <div class="modal">
                <div class="modal-box w-full m-0 max-w-[90vh] h-[540px]">
                    {/* modal body start */}
                    <div class="pt-[24px] px-5 lg:px-10 relative  w-full h-full ">
                        <div className=" flex justify-center w-full ">
                            <img
                                className="h-[250px]"
                                src={modalData.img}
                                alt="fish"
                            />
                        </div>
                        <h1 className="font-medium text-xl font-poppins">
                            {modalData.name}
                        </h1>
                        <p className="text-gray-500 mt-3 mb-3 font-nunito">
                            {modalData.description}
                        </p>
                    </div>
                    <p
                        onClick={() => setModalData(null)}
                        className="cursor-pointer absolute top-[23px] right-[23px] "
                    >
                        <AiOutlineClose className="text-[15px]" />
                    </p>
                </div>
            </div>
        </>
    );
};

export default FishDeatialsModal;
