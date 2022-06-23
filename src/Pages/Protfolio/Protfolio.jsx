import React from "react";
import "./Portfolio.css";

import { AiFillLinkedin, AiOutlineMail, AiFillFacebook } from "react-icons/ai";
const Protfolio = () => {
    return (
        <>
            <div class="bg-dark-gray w-full min-h-screen">
                <div class="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap">
                    <div class="md:w-1/3 w-full">
                        <div>
                            <img
                                src="https://i.ibb.co/Rz6hC87/1-1.jpg "
                                alt="Profile"
                                class="ml-12"
                            />
                        </div>
                        <section class="mt-16">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                Nurul Islam
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>
                            <p class="text-white">Junior Software Engineer</p>
                        </section>

                        <section class="mt-16">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                EDUCATION
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>
                            <div class="text-white list-disc list-inside">
                                <div>
                                    <div className="font-bold">
                                        Matlab Govt. Degree College
                                    </div>{" "}
                                    Higher Secondary Certificate{" "}
                                    <span className="text-xs">(2019-2021)</span>{" "}
                                </div>

                                <div className="mt-3">
                                    <div className="font-bold">
                                        Fatepur High School
                                    </div>{" "}
                                    Secondary School Certificate{" "}
                                    <span className="text-xs">(2014-2019)</span>{" "}
                                </div>
                            </div>
                        </section>

                        <section class="mt-16">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                Contact Info:
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>
                            <div class="text-white">
                                <a
                                    href="https://www.linkedin.com/in/alwaysraihan/"
                                    class="hover:underline flex items-center"
                                >
                                    <AiFillLinkedin class="mr-2"></AiFillLinkedin>
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.facebook.com/alwaysraihan"
                                    class="hover:underline flex items-center mt-1"
                                >
                                    <AiFillFacebook class="mr-2"></AiFillFacebook>
                                    Facbook
                                </a>
                                <a
                                    href="mailto:dev.nurulislam@gmail.com"
                                    class="hover:underline flex items-center mt-1"
                                >
                                    <AiOutlineMail class="mr-2"></AiOutlineMail>
                                    hello@justaashir.com LinkedIn
                                </a>
                            </div>
                        </section>
                    </div>
                    <div class="md:w-2/4 w-full">
                        <section class="mt-16 md:mt-0">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                Career Objectives
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>

                            <div class="mt-8">
                                <p class="text-white">
                                    Looking for a position as a Junior Software
                                    Engineer at Limited, where my skills in
                                    developing clean code, testing, assuring
                                    separation of concerns, and designing for
                                    the specific needs of users will be valuable
                                    to the organization.{" "}
                                </p>
                            </div>
                        </section>
                        <section class="mt-16">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                Specializations
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>
                            <ul class="text-white list-disc list-inside">
                                <li>
                                    <span className="font-bold">
                                        Front End:
                                    </span>{" "}
                                    HTML, CSS, Bootstrap, TailwindCSS,
                                    javascript, react.
                                </li>
                                <li>
                                    <span className="font-bold">Back End:</span>{" "}
                                    Node.JS, MongoDB.
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Tooling & CI:
                                    </span>{" "}
                                    Git, NPM, Yarn, Pnpm.
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Security Practice:
                                    </span>{" "}
                                    Passport Authentication, JSON Web
                                    Token-(JWT), Firebase.
                                </li>
                            </ul>
                        </section>

                        <section class="mt-16">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                Projects
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>

                            <div class="mt-8">
                                <h4 class="font-medium text-green text-2xl">
                                    Perfume Warehouse
                                </h4>
                                <h4 class="font-medium text-white text-xl text-right">
                                    <a href="https://perfume-warehouse-e8a74.web.app/">
                                        Live Site
                                    </a>
                                </h4>
                                <ul class="text-white list-disc list-inside">
                                    <li>
                                        A MERN stack Inventory management
                                        software.
                                    </li>
                                    <li>
                                        Dashboard managing functionality added
                                        for dealers
                                    </li>
                                    <li>Admin Panel page added for admin</li>
                                </ul>
                            </div>

                            <div class="mt-8">
                                <h4 class="font-medium text-green text-2xl">
                                    Recoatch
                                </h4>
                                <h4 class="font-medium text-white text-xl text-right">
                                    <a href="https://health-coatch.web.app/">
                                        Live Site
                                    </a>
                                </h4>
                                <ul class="text-white list-disc list-inside">
                                    <li>
                                        {" "}
                                        Website for Individul service provider.
                                    </li>
                                    <li>
                                        Dashboard managing functionality added
                                        for dealers
                                    </li>
                                    <li>Admin Panel page added for admin</li>
                                </ul>
                            </div>
                            <div class="mt-8">
                                <h4 class="font-medium text-green text-2xl">
                                    Elctrofy
                                </h4>
                                <h4 class="font-medium text-white text-xl text-right">
                                    <a href="https://best-manufacturer.web.app/g">
                                        Live Site
                                    </a>
                                </h4>
                                <ul class="text-white list-disc list-inside">
                                    <li>
                                        A Mern stack website for Manufacturer.
                                    </li>
                                    <li>Stripe secure payment system added.</li>
                                    <li>Admin can handle all orders.</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    div
                </div>
            </div>
        </>
    );
};

export default Protfolio;
