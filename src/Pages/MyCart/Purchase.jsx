import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import PurchaseModal from "../../Components/Dashboard/PuchaseModal";
import axiosSecret from "../../axiosSecret/axiosSecret";
import auth from "../../Firebase-Setup/firebase.init";
import { signOut } from "firebase/auth";
const Purchase = () => {
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    const navigate = useNavigate();

    const { id } = useParams();
    const [purchaseData, setPurchaseData] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [minquantity, setMinQuantity] = useState(0);
    const [availableQnty, setAvailableQnty] = useState(0);
    const [price, setPrice] = useState(0);

    const [subTotal, setSubTotal] = useState(0);
    const [toolData, setToolData] = useState({});
    const increaseQuantiry = () => {
        if (availableQnty === quantity) {
            return toast.error(
                `You can not order more. Available Quantity is- ${availableQnty}`
            );
        } else {
            setSubTotal(price * (quantity + 1));
            setQuantity(quantity + 1);
        }
    };
    const decraseQuantity = () => {
        if (quantity <= minquantity) {
            return toast.error(
                `You have to  order more. Miminmu Quantity is- ${availableQnty}`
            );
        } else {
            setQuantity(quantity - 1);
            setSubTotal(price * quantity);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axiosSecret.get(
                    `https://elctrofy.herokuapp.com/tools/${id}`
                );

                setToolData(data);
            } catch (err) {
                console.log(err.message);
                console.log(err);
                if (
                    err.response.status === 403 ||
                    err.response.status === 401
                ) {
                    handleSignOut();
                    navigate("/login");
                }
            }
        };
        loadData();
        setQuantity(parseInt(toolData.minimumQuntity));
        setSubTotal(
            parseInt(toolData.price) * parseInt(toolData.minimumQuntity)
        );
        setAvailableQnty(parseInt(toolData.availableQunatity));
        setMinQuantity(parseInt(toolData.minimumQuntity));
        setPrice(parseInt(toolData.price));
    }, [
        id,
        toolData.availableQunatity,
        toolData.minQunatity,
        toolData.minimumQuntity,
        toolData.price,

        navigate,
    ]);

    if (!toolData) {
        return (
            <p className="text-center text-xl text-violet-500">Loading....</p>
        );
    }
    const { img, name, description } = toolData;
    // here add later if bed response or data not found then show not found page

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden px-5">
                <div className="container bg-slate-200 px-5 py-24 my-10 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
                            src={img}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                Mobile Repairing Tools
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a href="/" className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="/" className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a href="/" className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex  items-center">
                                    <span className="mr-3">
                                        Your Order Quantity
                                    </span>
                                    <div className="relative">
                                        <div className=" flex justify-between gap-1 items-center">
                                            <button onClick={decraseQuantity}>
                                                <AiFillMinusCircle className="text-yellow-500 text-xl cursor-pointer " />
                                            </button>
                                            <span
                                                className="text-2xl text-teal-500 font-bold"
                                                id="quantity"
                                            >
                                                {!isNaN(quantity) && quantity}
                                            </span>
                                            <button onClick={increaseQuantiry}>
                                                <AiFillPlusCircle className="text-yellow-500 text-xl cursor-pointer " />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    ${subTotal}
                                </span>

                                <label
                                    onClick={() => setPurchaseData(toolData)}
                                    disabled={setToolData.quantity > 0}
                                    htmlFor="purchase-modal"
                                    className="flex ml-auto md:ml-10 text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                                >
                                    Buy Now
                                </label>
                            </div>
                            <p className="leading-relaxed mt-4">
                                <span className="font-semibold">Note:</span>{" "}
                                After placeing order it's can not be cancled or
                                undone. We are using secuire payment sysetm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {purchaseData && (
                <PurchaseModal
                    purchaseData={purchaseData}
                    quantity={quantity}
                    subTotal={subTotal}
                    setPurchaseData={setPurchaseData}
                ></PurchaseModal>
            )}
        </>
    );
};

export default Purchase;
