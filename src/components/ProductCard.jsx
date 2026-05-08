function ProductCard({ name, price, image, onAddToCart }) {
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

      <button onClick={onAddToCart}>Tambah ke Keranjang</button>

      {/* Button */}

      <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:opacity-80 cursor-pointer">
        Beli Sekarang
      </button>
      <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:opacity-80 cursor-pointer">
        Lihat Detail Produk
      </button>
    </div>
  );
}

export default ProductCard;
