import { useState, useEffect } from "react";
import { HiStatusOnline } from "react-icons/hi";
import { IoCloudOfflineSharp } from "react-icons/io5";

const Online: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [displayStyle, setDisplayStyle] = useState<string>(
    isOnline ? "hidden" : "flex"
  );

  const checkOnline = () => {
    setIsOnline(true);
    setDisplayStyle("flex");

    setTimeout(() => {
      setDisplayStyle("hidden");
    }, 8000);
  };

  const checkOffline = () => {
    setIsOnline(false);
    setDisplayStyle("flex");
  };

  useEffect(() => {
    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

    return () => {
      window.removeEventListener("online", checkOnline);
      window.removeEventListener("offline", checkOffline);
    };
  }, []);

  return (
    <div
      className={`w-full h-30 mb-30 z-[999] fixed top-0 justify-center items-center text-center bg-${
        isOnline ? "white" : "black"
      } text-${
        isOnline ? "#ff5d1b" : "red"
      }   ${displayStyle} text-[white] md:text-lg transition-all duration-600`}
    >
      {isOnline && (
        <div className="flex justify-center items-center text-[green] bg-[white]">
          <HiStatusOnline className="mr-6" />
      Great!!Welcome Back Online!
        </div>
      )}
      {!isOnline && (
        <div className="flex justify-center items-center text-[red]">
          <IoCloudOfflineSharp className="mr-6" />
         Opps!! Looks like You're Currently Offline! 
          again!
        </div>
      )}
    </div>
  );
};

export default Online;
