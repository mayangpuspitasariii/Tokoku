import hero from "../assets/logo/hero.png";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 border-b gap-8">
      {/* Sisi kiri */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-3xl md:text-4xl font-bold">Belanja Lebih Hemat Di</p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mt-2 mb-6">
          TokoKu
        </h1>

        <button className="bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-80 transition">
          Belanja Sekarang
        </button>
      </div>

      {/* Sisi kanan */}
      <img src={hero} alt="Hero" className="w-full max-w-md object-cover" />
    </div>
  );
}

export default Hero;
