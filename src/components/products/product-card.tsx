// components/SneakerCard.js
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src="/path/to/your/image.png" // Actualiza esta ruta con la ubicación correcta de tu imagen
          alt="Sneakers #12"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700">Footwear</h2>
        <h1 className="text-xl font-bold text-gray-900">Sneakers #12</h1>
        <p className="mt-2 text-gray-600">Love at the first sight for enthusiasts seeking a fresh and whimsical style.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-gray-900">$149</span>
          <button className="bg-black text-white px-4 py-2 rounded">Buy</button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <label className="mr-2 text-gray-700">Color</label>
            <select className="border rounded p-2">
              <option>Pastel</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-2 text-gray-700">Size</label>
            <select className="border rounded p-2">
              <option>8</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
