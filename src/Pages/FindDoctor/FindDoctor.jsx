const FindDoctor = () => {
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
    </div>
  );
};

export default FindDoctor;
