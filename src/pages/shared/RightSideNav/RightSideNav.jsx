import img1 from "../../../assets/qZone1.png";
import img2 from "../../../assets/qZone2.png";
import img3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="border p-4">
      <div className="text-center">
        <h2 className="font-bold mb-3">Log In with Socila</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-success text-white w-full">
            Log In with Google
          </button>
          <button className="btn btn-success text-white w-full">
            Log In with Github
          </button>
        </div>
      </div>
      {/* find us  */}
      <div className="mt-6">
        <h2 className="font-bold mb-3">Find us</h2>
        <div className="flex flex-col gap-2">
          <a href="#" className="border border-green-300 p-2">
            Facebook
          </a>
          <a href="#" className="border border-green-300 p-2">
            Twitter
          </a>
          <a href="#" className="border border-green-300 p-2">
            Email
          </a>
        </div>
      </div>
      {/* History */}
      <div className=" mt-6">
        <h2 className="font-bold mb-1">Recent History</h2>
        <div className="flex flex-col gap-2">
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={img2} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
