import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="lg:w-5/12 mx-auto mt-40 lg:mt-10" src="/public/1_zE2qnVTJehut7B8P2aMn3A.gif" alt="" />
            <h1 className="text-center text-3xl lg:-mt-20 font-medium text-[#1cbd7f]">The page is a work in progress !!!</h1>
            <div className="w-40 mx-auto mt-10">
                <Link to='/'>
                    <button className="btn bg-[#1cbda2] mx-auto text-2xl">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;