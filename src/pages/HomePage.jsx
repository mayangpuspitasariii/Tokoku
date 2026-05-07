import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import footers from "../data/footers";

function HomePage() {
  return (
    <div className="p-8">
      <Hero />

      {/* Judul */}
      <h1 className="text-3xl font-bold mb-8">Produk Populer</h1>

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
      <Footer
        about={footers.about}
        alamat={footers.alamat}
        noHp={footers.noHp}
        email={footers.email}
      />
    </div>
  );
}

export default HomePage;
