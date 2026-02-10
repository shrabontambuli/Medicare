import { Form } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";
import { MdConnectWithoutContact, MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const LeftSideFindDoctors = ({ setSearch }) => {
  return (
    <div className="w-full">
      <div className="bg-[#1CB5BD] rounded-lg p-2">
        <Form className="form-control">
          <div className="input-group justify-center">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="input input-bordered pe-24"
            />
            <button className="btn btn-ghost border border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </Form>
      </div>
      <div className="bg-[#1CB5BD] rounded-lg p-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiFilter size={24} className="text-white" />
            <h1 className="text-white text-xl">Filter</h1>
          </div>
          <div>
            <GrPowerReset size={24} className="text-white" />
          </div>
        </div>
        <hr className="mt-5 border" />
        <div>
          <div className="mt-5">
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] w-full">
              Opthalmologist
            </button>
          </div>
          <div className="mt-3">
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] w-full">
              Dentician
            </button>
          </div>
          <div className="mt-3">
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] w-full">
              Gastroenterlogist
            </button>
          </div>
          <div className="mt-3">
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] w-full">
              Pediatry Surgeon
            </button>
          </div>
        </div>
        <hr className="mt-5 border" />
        <div className="mt-5">
          <h1 className="text-white text-xl flex items-center gap-2">
            Top Rated Doctors <IoIosStarOutline size={20} />
          </h1>
        </div>
        <hr className="mt-5 border" />
        <div>
          <div className="mt-5">
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-1
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-2
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-3
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-4
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-5
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-6
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-7
            </button>
            <button className="btn bg-[#e5eaeb] hover:bg-[#1CB5BD] px-6 m-1">
              Team-8
            </button>
          </div>
        </div>
        <hr className="mt-5 border" />
        <div className="mt-5">
          <h1 className="text-white text-xl flex items-center gap-3">
            <MdConnectWithoutContact size={24} /> Emergency Contact
          </h1>
          <hr className="mt-5 border" />
          <div className="mt-5">
            <h1 className="text-white text-xl flex items-center gap-3">
              <LuPhoneCall size={20} /> +233554205473
            </h1>
            <h1 className="text-white text-xl flex items-center gap-3 mt-4">
              <MdOutlineMailOutline size={20} /> medicare@gmail.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideFindDoctors;
