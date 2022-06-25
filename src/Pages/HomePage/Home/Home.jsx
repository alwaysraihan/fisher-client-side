import React from "react";
import Banner from "../../../Components/HomePage/Banner/Banner";
import FeaturedProducts from "../../../Components/HomePage/FeaturedProduct/FeaturedProudct";

import Review from "../../../Components/HomePage/Testimonial/Review";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="bg-slate-100">
                <FeaturedProducts />

                <Review />
            </div>
        </>
    );
};

export default Home;
