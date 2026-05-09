import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import footers from "../data/footers";

function HomePage() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const cekProduk = cart.find((item) => item.id === product.id);

    const updatedProduk = cart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
    );

    if (cekProduk) {
      setCart(updatedProduk);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  }

  function removeCart(id) {
    const updateCart = cart.filter((item) => item.id !== id);

    setCart(updateCart);
  }

  return (
    <>
      <div className="m-8">
        <Hero />

        <h1>Keranjang : {cart.length}</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} : {item.qty}
            </p>

            <button
              onClick={() => {
                removeCart(item.id);
              }}
            >
              Hapus
            </button>
          </div>
        ))}

        {/* Judul */}
        <h1 className="text-3xl font-bold my-8">Produk Populer</h1>
      </div>

      {/* Grid Produk */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer
        about={footers.about}
        alamat={footers.alamat}
        noHp={footers.noHp}
        email={footers.email}
      />
    </>
  );
}

export default HomePage;
