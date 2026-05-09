function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="w-64 rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      {/* Gambar */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Nama */}
      <h2 className="text-xl font-bold mt-3">{name}</h2>

      {/* Harga */}
      <p className="text-gray-600 mt-1">Rp. {price}</p>

      {/* Button 2 kolom */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-black text-white py-2 rounded-lg hover:opacity-80 cursor-pointer">
          Beli
        </button>

        <button
          onClick={onAddToCart}
          className="flex-1 bg-amber-500 text-white py-2 rounded-lg hover:opacity-80 cursor-pointer"
        >
          Cart
        </button>
      </div>

      {/* Detail */}
      <button className="w-full mt-3 border py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
        Detail Produk
      </button>
    </div>
  );
}
export default ProductCard;
