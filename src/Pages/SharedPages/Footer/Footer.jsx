import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container mx-auto bg-gray-800">
                <footer className="footer py-10 px-10 justify-between text-white">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to="/" className="link link-hover">
                            Product
                        </Link>
                        <Link to="/" className="link link-hover">
                            Tools
                        </Link>
                        <Link to="/" className="link link-hover">
                            Employer
                        </Link>
                        <Link to="/" className="link link-hover">
                            Custom Tools
                        </Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to="/" className="link link-hover">
                            About us
                        </Link>
                        <Link to="/" className="link link-hover">
                            Contact
                        </Link>
                        <Link to="/" className="link link-hover">
                            Jobs
                        </Link>
                        <Link to="/" className="link link-hover">
                            Press kit
                        </Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to="/" className="link link-hover">
                            Terms of use
                        </Link>
                        <Link to="/" className="link link-hover">
                            Privacy policy
                        </Link>
                        <Link to="/" className="link link-hover">
                            Cookie policy
                        </Link>
                    </div>
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">
                                    Enter your email address
                                </span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input  text-gray-800 input-bordered w-full pr-16"
                                />
                                <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="border-t border-solid border-gray-900 mt-4 py-4">
                    <div className="container px-4 mx-auto">
                        <div className="md:flex md:-mx-4 md:items-center">
                            <div className="md:flex-1 md:px-4 text-center md:text-left">
                                <p className="text-white">
                                    &copy; {new Date().getFullYear()}{" "}
                                    <strong className="uppercase">
                                        Fisheries Management
                                    </strong>
                                </p>
                            </div>
                            <div className="md:flex-1 md:px-4 text-center md:text-right">
                                <Link
                                    to="/"
                                    className="py-2 px-4 text-white inline-block hover:underline"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    to="/"
                                    className="py-2 px-4 text-white inline-block hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
