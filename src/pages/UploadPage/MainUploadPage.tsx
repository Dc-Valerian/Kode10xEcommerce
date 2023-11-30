import React, { useState, ChangeEvent } from "react";
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
    <div className="flex justify-center items-center flex-col">
      <div className="shadow-md w-96 p-4 mt-12 flex flex-col items-center">
        <div className="rounded-full bg-gray-300 h-40 w-60 flex justify-center items-center">
          {previewImage ? (
            <img src={previewImage} alt="Preview" className="rounded-full" />
          ) : (
            <div className="text-gray-500 text-2xl">
              Upload Image
            </div>
          )}
        </div>
        
        <label htmlFor="pix" className="bg-black text-white mt-4 px-4 py-2 rounded cursor-pointer">
          Upload Cover Image
        </label>
        <input
          onChange={ImageOnchange}
          id="pix"
          type="file"
          className="hidden"
        />
        
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="border border-gray-300 rounded mt-4 px-2 py-1"
        />
        <textarea
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary..."
          className="border border-gray-300 rounded mt-2 px-2 py-1 resize-none"
        ></textarea>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter Author name"
          className="border border-gray-300 rounded mt-2 px-2 py-1"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded mt-2 px-2 py-1"
        >
          <option value="">select a category</option>
          <option value="comedy">Comedy</option>
          <option value="music">Music</option>
          <option value="romance">Romance</option>
        </select>
        
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
          <button className="mt-4 px-4 py-2 rounded text-white bg-gray-400 cursor-not-allowed">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MainUploadPage;
