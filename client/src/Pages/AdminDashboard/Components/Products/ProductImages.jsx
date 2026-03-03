import { useState } from "react";

export function ProductImages({ selectedProduct, allProductImages, setAllProductImages }) {
  const [imageAction, setImageAction] = useState(null);
  const [imgLink, setImgLink] = useState("");

  const productImages = selectedProduct?.images || [];
  const productId = selectedProduct?.id;

  console.log(allProductImages)

  const filteredProductImage = allProductImages.filter((img => img.product_id === productId))

  console.log(filteredProductImage)


  // Function to handle image upload
  const handleProductImgUpload = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    if (!imgLink) return alert("Please provide an image link.");

    try {
      const response = await fetch("/api/productimage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          imgLink: imgLink,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const newImage = await response.json();

      // Update the images state locally
      setAllProductImages([...allProductImages, newImage]);

      // Reset form
      setImgLink("");
      setImageAction(null);
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    }
  };

  return (
    <div>
      <h1>{selectedProduct?.name} Images</h1>

      {imageAction === "post" ? (
        <form onSubmit={handleProductImgUpload}>
          <input
            className="border px-2 py-1 w-full"
            placeholder="Enter image URL"
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
          />

          <div className="flex gap-4 justify-center mt-4">
            <button
              type="submit"
              className="bg-green-600/80 text-white rounded px-4 h-10 w-30"
            >
              Submit
            </button>

            <button
              type="button"
              className="bg-red-600/80 text-white rounded px-4 h-10 w-30"
              onClick={() => setImageAction(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setImageAction("post")}
          className="bg-green-600/80 text-white rounded px-4 h-10 w-30 cursor-pointer"
        >
          Add Image
        </button>
      )}

      <div className="mt-6 grid grid-cols-3 gap-4">
        {filteredProductImage.length > 0 ? (
          productImages.map((img, idx) => (
            <img
              key={idx}
              src={img.link} // Depending on how your backend returns the image
              alt={`Product ${selectedProduct?.name} ${idx}`}
              className="border rounded w-full h-40 object-cover"
            />
          ))
        ) : (
          <p>No images</p>
        )}
      </div>
    </div>
  );
}