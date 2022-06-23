import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../Firebase-Setup/firebase.init";

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,

        formState: { errors },
        reset,
    } = useForm();

    const imgStoreageKey = "85ebb42836677e4ce1eed012d7b355f9";

    const onFormSubmit = async (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);
        const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imgStoreageKey}`;

        fetch(imgUploadUrl, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        price: data.price,
                        img: img,
                        description: data.description,
                        minimumQuntity: data.minimumQuntity,
                        availableQunatity: data.availableQunatity,
                        // admin info
                        adminName: user.displayName,
                        adminEmail: user.email,
                    };
                    // send to your database

                    axios
                        .post("https://elctrofy.herokuapp.com/tools", product, {
                            headers: {
                                "content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                        })
                        .then((res) => {
                            const data = res.data;

                            if (data.insertedId) {
                                toast.success("You add an new Doctor", {
                                    toastId: "addDoctor",
                                });
                            } else {
                                toast.error("Failed to add !", {
                                    toastId: "faildToAddDoctor",
                                });
                            }
                        });

                    reset();
                }
            });
    };

    return (
        <>
            <div className=" my-5 px-4  lg:px-12 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
                <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8  mx-auto flex flex-col">
                    <section className="bg-slate-100 p-4 shadow">
                        <div className="md:flex">
                            <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                                Add a new Product
                            </h2>
                        </div>
                        <form
                            onSubmit={handleSubmit(onFormSubmit)}
                            autoComplete="off"
                        >
                            <div className="md:flex mb-8">
                                <div className="md:w-1/3">
                                    <legend className="uppercase tracking-wide text-sm">
                                        Product Info
                                    </legend>
                                    <p className="text-xs font-light text-red">
                                        All input field is **required**
                                    </p>
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                    <div className="md:flex mb-4">
                                        <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Product Name
                                            </label>

                                            <input
                                                className="w-full shadow-inner p-4 border-0"
                                                type="text"
                                                name="name"
                                                placeholder="Your product name"
                                                {...register("name", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.name && (
                                                <span className="text-red-500">
                                                    Product Name is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="md:flex-1 md:pr-3">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Prodct Price
                                            </label>
                                            <input
                                                className="w-full shadow-inner p-4 border-0"
                                                type="number"
                                                name="price"
                                                placeholder="000"
                                                {...register("price", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.price && (
                                                <span className="text-red-500">
                                                    Price value is required
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="md:flex mb-4">
                                        <div className="md:flex-1 md:pr-3  mb-4 md:mb-0">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Minimum Quntity
                                            </label>
                                            <input
                                                className="w-full shadow-inner p-4 border-0"
                                                type="number"
                                                name="minimumQuntity"
                                                placeholder="000"
                                                {...register("minimumQuntity", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.minimumQuntity && (
                                                <span className="text-red-500">
                                                    Minumum qunatity is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="md:flex-1 md:pr-3">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Avaiable Quntity
                                            </label>
                                            <input
                                                className="w-full shadow-inner p-4 border-0"
                                                type="number"
                                                name="availableQunatity"
                                                placeholder="000"
                                                {...register(
                                                    "availableQunatity",
                                                    {
                                                        required: true,
                                                    }
                                                )}
                                            />
                                            {errors.availableQunatity && (
                                                <span className="text-red-500">
                                                    Available qunatity is
                                                    required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="md:flex mb-4">
                                        <div className="md:flex-1 md:pr-3">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Product Image
                                                <span className="text-xs lowercase text-gray-600">
                                                    {" "}
                                                    (white backgrond*)
                                                </span>
                                            </label>

                                            <input
                                                className="w-full bg-white shadow-inner p-4 border-0"
                                                type="file"
                                                name="img"
                                                {...register("img", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.img && (
                                                <span className="text-red-500">
                                                    Product image is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="md:flex-1 mt-2 mb:mt-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                            Product Description
                                        </label>
                                        <textarea
                                            className="w-full shadow-inner p-4 border-0"
                                            placeholder="Enter Product Description here............."
                                            rows="6"
                                            name="description"
                                            {...register("description", {
                                                minLength: 50,
                                                required: true,
                                            })}
                                        ></textarea>
                                        {errors.description && (
                                            <span className="text-red-500">
                                                Minimum 50 chracter Description
                                                is required
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex mb-8">
                                <div className="md:w-1/3">
                                    <legend className="uppercase tracking-wide text-sm">
                                        Admin Information
                                    </legend>
                                    <p className="text-xs font-light text-red">
                                        Who is adding new products?
                                    </p>
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                    <div className="mb-4">
                                        <label className="block uppercase tracking-wide text-xs font-bold">
                                            Admin Name
                                        </label>
                                        <input
                                            className="w-full shadow-inner bg-gray-300 p-4 border-0"
                                            type="text"
                                            name="adminName"
                                            disabled
                                            readOnly
                                            value={user.displayName}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                            Admin Email
                                        </label>
                                        <input
                                            readOnly
                                            disabled
                                            className="w-full shadow-inner bg-gray-300 p-4 border-0"
                                            type="email"
                                            name="adminEmail"
                                            value={user.email}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                                <div className="md:flex-1 px-3 text-center md:text-right">
                                    <button
                                        type="submit"
                                        className="button mt-1 bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                                    >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
