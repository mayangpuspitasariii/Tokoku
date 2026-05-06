function ProductCard({ name, price, image }) {
  return (
    <div className="w-64 rounded-xl shadow-md p-4 hover:shadow-xl transition">
      {/* Gamabr */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Nama Produk */}
      <h2 className="text-xl font-bold mt-3">{name}</h2>

      {/* Harga */}
      <p className="text-gray-600 mt-1">Rp. {price}</p>

      {/* Button */}

      <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:opacity-80 cursor-pointer">
        Beli Sekarang
      </button>
    </div>
  );
}

export default ProductCard;
