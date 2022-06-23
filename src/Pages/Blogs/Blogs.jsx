import React from "react";

const Blogs = () => {
    return (
        <div className="py-16 px-5 md:px-[20%]">
            {/* Question-1 */}
            <h1 className="text-4xl mb-3">
                How will you improve the performance of a React Application?
            </h1>
            <p className="text-xl">
                We can improve response performance through lazy loading.
                Something Content users will not be able to see when they visit
                our website. When they scroll down we should contact the server
                side api and load the data. And when we Call a API, we can save
                the necessary data from the api. We can keep the componet State
                is local. We do not use Heavy files.
            </p>
            {/* Question-2  */}
            <h1 className="text-4xl mt-5 mb-3">
                What are the different ways to manage a state in a React
                application?
            </h1>
            <p className="text-xl">
                There are many different ways to manage react state. First of
                all state is an object that holds information about a specific
                component. Bassically in the React state we mostly use Local
                state, Gloval state , Server State , Url state etc. For example
                We use useState and it's Local state.
            </p>
            {/* Question-3  */}
            <h1 className="text-4xl mt-5 mb-3">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
            </h1>
            <p className="text-xl">
                I never set the state directly becaouse of, If I set the state
                dircetly I can not update or replace when makes any changes. For
                example, I call the server side api and If I set the state
                directly I won't be able to set my api data in the state. For
                the following reasons i nvevr set the state dircetly.
            </p>
            {/* Question-4  */}
            <h1 className="text-4xl mt-5 mb-3">
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
            </h1>
            <p className="text-xl">
                I will create an api on the server side. This api will get
                search text by the query and fillter data from database. If any
                data findout by the query than data will send as a response. And
                From the client side when user search anythin and enter I will
                call the api with search query and if get any data from the api
                data will be show in the client side.
            </p>
            {/* Question-4  */}
            <h1 className="text-4xl mt-5 mb-3">
                What is a unit test? Why should write unit tests?
            </h1>
            <p className="text-xl">
                Unit testing is a software development process where the
                smallest testable part of an application, called a unit, is
                verified individually and independently for proper operation.
                Before deploy our application we should ensuring unit testing of
                the code. Becasue of during the product development life cycle,
                unit testing saves time and money and helps developers write
                better code more efficiently.
            </p>
        </div>
    );
};

export default Blogs;
