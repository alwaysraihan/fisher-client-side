import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase-Setup/firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,

        formState: { errors },
        reset,
    } = useForm();

    const onFormSubmit = async (data) => {
        const rivew = {
            name: user.displayName,
            email: user.email,
            rivew: data.rivew,
            rate: data.rate,
            // user info whe is adding rivew
            addedAdmin: data.adminName,
            adminEmail: data.adminEmail,
        };

        axios
            .post("https://elctrofy.herokuapp.com/rivews", rivew, {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((res) => {
                const data = res.data;
                if (data.success) {
                    toast.success("Thanks for Your Rivew", {
                        toastId: "addRivew",
                    });
                } else {
                    toast.error("Failed to add you rivew!", {
                        toastId: "faildToRivew",
                    });
                }
            });

        reset();
    };

    return (
        <>
            <div className=" my-5 px-4  lg:px-12 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
                <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8  mx-auto flex flex-col">
                    <section className="bg-slate-100 p-4 shadow">
                        <div className="md:flex">
                            <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                                Give us a rivew
                            </h2>
                        </div>
                        <form
                            onSubmit={handleSubmit(onFormSubmit)}
                            autoComplete="off"
                        >
                            <div className="mb-8">
                                <div className="md:flex-1 mt-2 mb:mt-0 ">
                                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                        Your Rivew
                                    </label>
                                    <textarea
                                        className="w-full shadow-inner p-4 border-0"
                                        placeholder="Enter your rivew here..."
                                        rows="6"
                                        name="rivew"
                                        {...register("rivew", {
                                            minLength: 10,
                                            required: true,
                                        })}
                                    ></textarea>
                                    {errors.rivew && (
                                        <span className="text-red-500">
                                            Minimum 10 chracter Rivew is
                                            required
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                                    <div className="md:flex w-full mb-4">
                                        <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Your Rating
                                            </label>

                                            <select
                                                name="rate"
                                                {...register("rate", {
                                                    required: true,
                                                })}
                                                class="select  w-full max-w-xs"
                                            >
                                                <option>5</option>
                                                <option>4</option>
                                                <option>3</option>
                                                <option>2</option>
                                                <option>1</option>
                                            </select>
                                        </div>
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

export default AddReview;
