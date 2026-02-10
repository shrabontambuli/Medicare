const Doctors = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-4">
      <div className="card w-full bg-base-100 shadow-xl border border-[#1CB5BD]">
        <figure className="px-2 pt-4">
          <img
            src="/../../images/Rectangle 33.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dr. Travis Oman</h2>
          <p className="text-[#787878]">Opthalmologist</p>
          <div className="card-actions">
            <button className="btn bg-[#1CB5BD]">Book Now</button>
          </div>
          <p className="text-[#787878] mt-4">120 Reviews</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl border border-[#1CB5BD]">
        <figure className="px-2 pt-4">
          <img
            src="/images/Rectangle 34.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dr. Annah Ray</h2>
          <p className="text-[#787878]">Dentician</p>
          <div className="card-actions">
            <button className="btn bg-[#1CB5BD]">Book Now</button>
          </div>
          <p className="text-[#787878] mt-4">120 Reviews</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl border border-[#1CB5BD]">
        <figure className="px-2 pt-4">
          <img
            src="/../../images/Rectangle 35.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dr. Richard Brook</h2>
          <p className="text-[#787878]">Gastroenterlogist</p>
          <div className="card-actions">
            <button className="btn bg-[#1CB5BD]">Book Now</button>
          </div>
          <p className="text-[#787878] mt-4">120 Reviews</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl border border-[#1CB5BD]">
        <figure className="px-2 pt-4">
          <img
            src="/../../images/Rectangle 36.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dr. Vivian Monroe</h2>
          <p className="text-[#787878]">Pediatry Surgeon</p>
          <div className="card-actions">
            <button className="btn bg-[#1CB5BD]">Book Now</button>
          </div>
          <p className="text-[#787878] mt-4">120 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
