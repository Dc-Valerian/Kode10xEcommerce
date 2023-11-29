import { TbLockCog } from "react-icons/tb";

const AdminLogin = () => {
  return (
    <div className="w-full h-[100vh] bg-white  flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-[#F2F4F6] flex justify-center items-center flex-col rounded-[10px] gap-3 ">
        <div className="w-[370px] h-[100px]   flex  flex-col">
          <p className="font-bold text-black text-medium">EMAIL ADDRESS</p>
          <input
            type="text "
            placeholder="Email"
            className="w-[370px] h-[50px] bg-[#ffff] rounded-[10px] border-solid border-2 border-sky-500 focus:border border-[lightgrey] focus:outline-none"
          />
        </div>

        <div className="w-[370px] h-[90px]  flex flex-col ">
          <p className="font-bold text-black text-medium">PASSWORD</p>
          <input
            type="text "
            placeholder="Enter Password"
            className="w-[370px] h-[50px] bg-[#ffff] rounded-[10px] border-solid border-2 border-sky-500 focus:border border-[lightgrey] focus:outline-none"
          />
          <div className="flex absolute ml-[330px] top-[49%] ">
            <TbLockCog style={{ color: "grey", fontSize: "20px" }} />
          </div>
        </div>

        <div className="w-[380px] h-[50px] flex justify-between items-center">
          <p className="font-bold text-black">Remember Me</p>
          <p className="font-bold text-black">Forget Password</p>
        </div>

        <button className="w-[200px] h-[40px] bg-sky-500 text-white font-bold rounded-[10px] text-center">
          Log in
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
