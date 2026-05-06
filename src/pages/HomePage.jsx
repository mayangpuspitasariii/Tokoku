import ProductCard from "../components/ProductCard";
import products from "../data/products";

function HomePage() {
  return (
    <div className="p-8">
      {/* Judul */}
      <h1 className="text-3xl font-bold mb-8">Produk Kami</h1>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
