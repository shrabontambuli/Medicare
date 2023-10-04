

const Home = () => {
    return (
        <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                <div>
                    <h1 className="text-5xl font-medium">Your Health Comes First.</h1>
                    <img className="mt-4" src="../../../public/icons/output-onlinepngtools (1) 2.png"
                        alt="" />
                    <p className="mt-2">With Medicare services you will receive the best medical treatment in your home. Our team of skilled medical professionals and aids ensure that you get the care you need and deserve.</p>
                    <button className="bg-[#1CB5BD] text-white px-10 py-3 mt-6">
                        Book Appointment
                    </button>
                </div>
                <div>
                    <img className="w-96" src="../../../public/icons/image 22.png" alt="" />
                </div>
                <div>
                    <img className="lg:py-44" src="../../../public/icons/output-onlinepngtools 2.png" alt="" />
                    <p className="text-xl"><span className="text-[#1CB5BD] text-3xl">“</span> A trusted assistance companion for your health needs. <span className="text-[#1CB5BD] text-3xl">”</span></p>
                </div>
            </div>
        </div>
    );
};

export default Home;