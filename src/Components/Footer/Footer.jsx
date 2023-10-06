

const Footer = () => {
    return (
        <div className="bg-[#E9F7F8] mt-12 py-28 relative">
            <img className="absolute w-2/6 lg:-top-36 " src="/icons/Oval.png" alt="" />
            <img className="absolute w-2/5 lg:-top-60 left-0" src="/icons/Oval2.png" alt="" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 justify-items-center items-center px-5 lg:px-14">
                <div className="text-[#5E5E5E]">
                    <div className="flex items-center">
                        <img className="lg:w-16 w-10" src="/icons/image 21.png" alt="" />
                        <div>
                            <h2 className="lg:text-3xl text-2xl font-semibold">Medi<span className="text-[#1CB5BD]">care</span></h2>
                        </div>
                    </div>
                    <p className="mt-4">Nam posuere accumsan porta. Integer id tincidunt sit amet sed libero.</p>
                    <p className="mt-10">© Skyrev Theme 2021</p>
                </div>
                <div className="text-[#5E5E5E]">
                    <h3 className="text-[#1CB5BD] font-medium text-xl">Company</h3>
                    <p className="mt-4">Donec dignissim</p>
                    <p className="mt-2">Curabitur egestas</p>
                    <p className="mt-2">Nam posuere</p>
                    <p className="mt-2">Aenean facilisis</p>
                </div>
                <div className="text-[#5E5E5E]">
                    <h3 className="text-[#1CB5BD] font-medium text-xl">Services</h3>
                    <p className="mt-4">Cras convallis</p>
                    <p className="mt-2">Vestibulum faucibus</p>
                    <p className="mt-2">Quisque lacinia purus</p>
                    <p className="mt-2">Aliquam nec ex</p>
                </div>
                <div className="text-[#5E5E5E]">
                    <h3 className="text-[#1CB5BD] font-medium text-xl">Resources</h3>
                    <p className="mt-6">Suspendisse porttitor</p>
                    <p className="mt-4">Nam posuere</p>
                    <p className="mt-4">Curabitur egestas </p>
                </div>
                <div>
                    <div className="flex">
                        <img className="me-2" src="/icons/Group 9.png" alt="" />
                        <img className="me-2" src="/icons/Group 9 Copy.png" alt="" />
                        <img className="me-2" src="/icons/Group 9 Copy 2.png" alt="" />
                        <img className="ms-2" src="/icons/Group 9 Copy 3.png" alt="" />
                    </div>
                    <div className="border border-[#03ACF2] flex justify-center items-center mt-8 py-2">
                        <img className="me-2" src="/icons/android-globe.png" alt="" />
                        <p className="font-medium">English - En</p>
                        <img className="ms-4 w-4 h-2" src="/icons/chevron-down.png" alt="" />
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg font-medium mt-20 flex justify-center items-center">Copyright  <img className="w-8" src="/icons/icons8-copyright-96.png" alt="" />  2023.All rights reserved by Shrabon Tambuli</p>
        </div>
    );
};

export default Footer;