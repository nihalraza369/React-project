import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCaption = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 2000));
    setCaption("A cute cat sitting on a sofa."); // AI response (mocked)
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md text-center space-y-4">
      <label className="block">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="cursor-pointer text-blue-600 hover:underline">
          <ImagePlus className="inline mr-2" /> Upload Image
        </div>
      </label>

      {image && <img src={image} alt="preview" className="rounded-md max-h-64 mx-auto" />}

      {image && (
        <button
          onClick={handleCaption}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? <Loader2 className="animate-spin inline" /> : "Generate Caption"}
        </button>
      )}

      {caption && <p className="mt-4 text-lg text-gray-800 italic">📝 {caption}</p>}
    </div>
  );
}
