import { useState } from "react";

export function ProductImages({ productImages, productName }) {
  const firstImg = productImages[0];
  const [selectedImg, setSelectedImg] = useState(
    productImages.length > 0 ? firstImg.link : `ProductPics/${productName}.png`
  );

  return (
    <div>
      <img src={selectedImg} className="w-full" />

      <div className="mt-2 flex gap-4">
        {productImages?.map((img, index) => (
          <img
            key={index}
            src={img?.link}
            className="h-25 cursor-pointer"
            onClick={() => setSelectedImg(img.link)} // <-- use .link
          />
        ))}
      </div>
    </div>
  );
}