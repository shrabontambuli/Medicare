const DoctorsCard = () => {
  return (
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
  );
};

export default DoctorsCard;
