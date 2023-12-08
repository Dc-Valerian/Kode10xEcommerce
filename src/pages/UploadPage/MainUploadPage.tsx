import { useState, ChangeEvent, useEffect } from "react";
import { api, getAllCategory } from "../../api/Apicall";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";

const MainUploadPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | string>("");
  const [previewImage, setPreviewImage] = useState<string>("");

  const getCategories = useQuery({
    queryKey: ["allcategories"],
    queryFn: getAllCategory,
  });

  const ImageOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const categories = getCategories?.data?.data;

  const uploadData = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("productImage", image);
      formData.append("desc", summary);
      formData.append("price", price);
      formData.append("category", category);

      await axios.post(`${api}/products/new-product`, formData);
      toast.success("Uploaded");
    } catch (error: any) {
      console.error(error);
      toast.error(
        `Upload failed: ${error.message || "Unknown error occurred"}`
      );
    } finally {
      setLoading(false);
    }
  };

  const [toastWidth, setToastWidth] = useState<string>("auto");
  const [toastPosition, setToastPosition] = useState<
    "top-right" | "bottom-left"
  >("top-right");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setToastWidth("300px");
        setToastPosition("top-right");
      } else {
        setToastWidth("auto");
        setToastPosition("bottom-left");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex justify-center items-center flex-col mainUploadHolder">
      <div className="w-[90%] p-4 mt-5 flex h-[400px]  items-center justify-between uploadUploadHolder">
        <div className=" flex flex-col items-center justify-center w-[30%] h-[80%] uploadImageHold">
          <div className="rounded-[10px] bg-gray-300 h-[250px] w-60 flex justify-center items-center uploadImageHolder">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="rounded-[10px] h-[92%] object-cover w-[92%]"
              />
            ) : (
              <div className="text-gray-500 text-2xl">Upload Image</div>
            )}
          </div>

          <label
            htmlFor="pix"
            className="bg-black text-white mt-4 px-4 py-2 rounded cursor-pointer uploadLabel"
          >
            Upload Image
          </label>
          <input
            onChange={ImageOnchange}
            id="pix"
            type="file"
            className="hidden"
          />
        </div>

        <div className="w-[65%] h-[80%] uploadBottom">
          <div className=" flex items-center justify-between p-[10px] uploadInput ">
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Name"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[32%] uploadMainInput"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[32%] uploadMainInput "
            />

            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded px-2 py-[10px]  w-[32%]  uploadMainInput h-[45px]"
            >
              {categories?.map((el: any) => (
                <option>{el?.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between p-[10px] uploadInput">
            <textarea
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Summary..."
              className="border border-gray-300 rounded px-2 py-[10px]  w-[100%] h-[130px] resize-none uploadMainInput"
            ></textarea>
          </div>

          {title !== "" && summary !== "" && price !== "" && image !== "" ? (
            <button
              onClick={uploadData}
              className="mt-4 px-4 py-2 rounded text-white bg-red-500 cursor-pointer transition-all duration-350 hover:scale-95"
            >
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <BeatLoader color="white" />{" "}
                </div>
              ) : (
                "Submit"
              )}
            </button>
          ) : (
            <button className="mt-4 px-4 py-2 ml-[13px] rounded text-white bg-gray-400 cursor-not-allowed">
              Submit
            </button>
          )}
        </div>
      </div>
      <ToastContainer
        position={toastPosition}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ maxWidth: "900px", width: toastWidth }}
      />
    </div>
  );
};

export default MainUploadPage;
