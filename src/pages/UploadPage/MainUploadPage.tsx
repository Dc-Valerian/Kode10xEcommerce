import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

const MainUploadPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const ImageOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

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
              placeholder="Enter Title"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[32%] uploadMainInput"
            />
            <input
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter Price"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[32%] uploadMainInput "
            />
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded px-2 py-[10px]  w-[32%]  uploadMainInput h-[45px]"
            >
              <option value="">select a category</option>
              <option value="Casio">Casio</option>
              <option value="Gshock">G shock </option>
              <option value="Naviforce">Naviforce </option>
              <option value="Skmei">Skmei</option>
              <option value="Cartier">Cartier</option>
              <option value="Rolex">Rolex</option>
              <option
                value="Richard Mille 
"
              >
                Richard Mille
              </option>
              <option value="Audemars piquet">Audemars piquet</option>
              <option value="Tissot">Tissot</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-[10px] uploadInput">
            <textarea
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Summary..."
              className="border border-gray-300 rounded px-2 py-[10px]  w-[100%] h-[130px] resize-none uploadMainInput"
            ></textarea>
          </div>

          {title !== "" &&
          category !== "" &&
          author !== "" &&
          summary !== "" &&
          image !== null ? (
            <Link to={"/"}>
              <button className="mt-4 px-4 py-2 rounded text-white bg-red-500 cursor-pointer transition-all duration-350 hover:scale-95">
                Submit
              </button>
            </Link>
          ) : (
            <button className="mt-4 px-4 py-2 ml-[13px] rounded text-white bg-gray-400 cursor-not-allowed">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainUploadPage;
