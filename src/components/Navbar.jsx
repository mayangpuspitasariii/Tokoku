import { useState } from "react";

function Navbar() {
  const menus = ["Home", "Produk", "Keranjang", "Kontak"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-[999] bg-white shadow-md px-8 py-4">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}

        <h1 className="text-2xl font-extrabold text-blue-900">TokoKu</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {menus.map((menu) => (
            <li className="cursor-pointer hover:text-blue-800">{menu}</li>
          ))}
        </ul>

        {/* Humberger Menu */}

        <div className="relative md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Conditional Rendering/ mobile Dropdown */}
      {isOpen && (
        <ul className="absolute right-0 top-10 bg-white shadow-md rounded-lg p-4 flex flex-col gap-3 min-w[150px] font-semibold">
          {menus.map((menu) => (
            <li key={menu} className="cursor-pointer hover:text-blue-800 ">
              {menu}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
