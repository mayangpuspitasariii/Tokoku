function Navbar() {
  const menus = ["Home", "Produk", "Keranjang", "Kontak"];
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md font-serif ">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold">TokoKu</h1>

      {/* Menu */}
      <ul className="flex gap-6">
        {menus.map((menu) => (
          <li
            key={menu}
            className="cursor-pointer hover:text-blue-600 font-bold"
          >
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
