import { useState } from "react";
import Doctors from "../../Components/Doctors/Doctors";
import LeftSideFindDoctors from "../LeftSideFindDoctors";
import DoctorsCard from "../../Components/Card/DoctorsCard/DoctorsCard";

const FindDoctor = () => {
  const [search, setSearch] = useState('');

  const doctors = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="mt-32">
      <div
        className="h-80"
        style={{
          backgroundImage: `url("/images/FindDoctor.avif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="bg-black bg-opacity-70 h-full flex justify-center items-center">
            <h1 className="text-[#1CB5BD] text-xl">Find Doctor > Doctor</h1>
        </div>
      </div>
      <div className="mt-14 flex justify-between gap-4">
        <div className="w-4/12 border h-full border-[#1CB5BD] rounded-lg p-4">
        <LeftSideFindDoctors setSearch={setSearch}/>
        </div>
        <div className="w-full">
          {/* { products.filter((item)=>{
           return search.toLocaleLowerCase() === ''?item : item.toy_name.toLowerCase().includes(search)}).map(product => <ShowAllToys key={products._id} product={product} />)} */}
            {/* <Doctors/> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-4">
              { doctors.filter((item)=>{
           return search.toLocaleLowerCase() === ''?item : item.toy_name.toLowerCase().includes(search)}).map(doctor => <DoctorsCard key={doctors._id} />)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
