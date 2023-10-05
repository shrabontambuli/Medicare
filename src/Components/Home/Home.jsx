

const Home = () => {
    return (
        <div className="mt-20">

            {/* banner section */}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center px-5 lg:px-0">
                <div>
                    <h1 className="text-5xl font-medium">Your Health Comes First.</h1>
                    <img className="mt-4" src="../../../public/icons/output-onlinepngtools (1) 2.png"
                        alt="" />
                    <p className="mt-2">With Medicare services you will receive the best medical treatment in your home. Our team of skilled medical professionals and aids ensure that you get the care you need and deserve.</p>
                    <button className="bg-[#1CB5BD] text-white px-10 py-3 mt-6 rounded-md">
                        Book Appointment
                    </button>
                </div>
                <div>
                    <img className="w-96" src="../../../public/icons/image 22.png" alt="" />
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <img src="../../../public/icons/Group.png" alt="" />
                        <div className="flex items-center -ms-44">
                            <img src="../../../public/icons/Frame 6.png" alt="" />
                            <p className="text-[#1CB5BD] font-semibold ms-2">TAKE A TOUR</p>
                            <img className="w-3 ms-4" src="../../../public/icons/Ellipse 1.png" alt="" />
                        </div>
                    </div>
                    <img className="lg:py-20" src="../../../public/icons/output-onlinepngtools 2.png" alt="" />
                    <p className="text-xl"><span className="text-[#1CB5BD] text-3xl">“</span> A trusted assistance companion for your <br /> health needs. <span className="text-[#1CB5BD] text-3xl">”</span></p>
                </div>
            </div>
            <div className="bg-[#1CB5BD] grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center py-16 px-10 rounded-lg mt-10 lg:mt-0" >
                <div className="flex items-center justify-between">
                    <div className="bg-[#E9F7F8] w-[75px] h-[120px] rounded-lg">
                        <img className="mx-auto pt-12" src="../../../public/icons/bx_time.png" alt="" />
                    </div>
                    <div className="ms-5">
                        <h2 className="text-[#FFF] text-xl">24 hours services</h2>
                        <p className="text-[#E9F7F8] mt-2">Collaboratively administrate turnkey <br /> channels whereas virtual e-tailers. </p>
                    </div>
                </div>
                <div className="flex items-center justify-between ">
                    <div>
                        <div className="bg-[#E9F7F8] w-[75px] h-[120px] rounded-lg">
                            <img className="mx-auto pt-12" src="../../../public/icons/bx_time.png" alt="" />
                        </div>
                    </div>
                    <div className="ms-5">
                        <h2 className="text-[#FFF] text-xl">10 years of experience</h2>
                        <p className="text-[#E9F7F8] mt-2">Capitalize on low hanging fruit to identify a <br /> ballpark value added activity to beta test.</p>
                    </div>
                </div>
                <div className="flex items-center justify-between ">
                    <div>
                        <div className="bg-[#E9F7F8] w-[75px] h-[120px] rounded-lg">
                            <img className="mx-auto pt-12" src="../../../public/icons/bx_time.png" alt="" />
                        </div>
                    </div>
                    <div className="ms-5">
                        <h2 className="text-[#FFF] text-xl">High quality care</h2>
                        <p className="text-[#E9F7F8] mt-2">Podcasting operational change management <br /> inside of workflows to establish a framework.</p>
                    </div>
                </div>
            </div>

            {/* banner section */}

            
        </div>
    );
};

export default Home;