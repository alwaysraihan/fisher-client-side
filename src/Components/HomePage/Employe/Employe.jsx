import React from "react";

const Employe = () => {
    return (
        <>
            <div className="my-10">
                <div class="w-full container mx-auto">
                    <div class="flex  h-[600px]">
                        <div class="flex items-center text-center  lg:text-left px-8 md:px-12 lg:w-1/2">
                            <div>
                                <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                                    Join As A Employee
                                    <span class="text-indigo-600">
                                        Employee
                                    </span>
                                </h2>
                                <p class="mt-2 text-sm text-gray-500 md:text-base">
                                    Our company has about one thousand
                                    employees. Do you want to join and work with
                                    us? Please Get Started Now. Want an unfair
                                    advantage over your competitors? Want a
                                    great benefit to help you attract and keep
                                    the best employees? Call us today to learn
                                    more!
                                </p>
                                <div class="flex justify-center lg:justify-start mt-6">
                                    <button class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">
                                        Get Started
                                    </button>
                                    <button class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden lg:block lg:w-1/2"
                            style={{
                                clipPath:
                                    "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                            }}
                        >
                            <div
                                class="h-full object-cover"
                                style={{
                                    backgroundImage:
                                        "url(https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687)",
                                }}
                            >
                                <div class="h-full bg-black opacity-25"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employe;
