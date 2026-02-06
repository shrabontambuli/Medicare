import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="lg:w-7/12 mx-auto mt-40 lg:mt-10 rounded-ss-full rounded-ee-full" src="\images\404_page_cover.jpg" alt="" />
            <div className="w-40 mx-auto mt-10">
                <Link to='/'>
                    <button className="btn bg-[#1CB5BD] mx-auto text-2xl">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;