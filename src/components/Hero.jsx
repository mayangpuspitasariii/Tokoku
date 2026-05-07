import hero from "../assets/logo/hero.png";

function Hero() {
  return (
    <div className="flex items-center justify-between border-b mb-4 ">
      {/* Sisi Kiri */}
      <div className="m-8">
        <p className="font-bold text-4xl  py-8">
          Belanja Lebih Hemat Di
          <h1 className="py-3 font-extrabold text-blue-800 text-5xl">TokoKu</h1>
        </p>
        <button className="bg-blue-700 py-2 px-2 rounded-lg text-white cursor-pointer hover:opacity-80">
          Belanja Sekarang
        </button>
      </div>

      {/* sisi kanan */}
      <img src={hero} alt="Hero" className="object-cover w-200" />
    </div>
  );
}

export default Hero;
