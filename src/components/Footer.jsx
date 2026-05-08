function Footer({ about, alamat, noHp, email }) {
  return (
    <footer className="bg-slate-100 mt-8">
      {/* isi footer */}
      <div className="max-w-6xl mx-auto px-4 py-6 mt-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* kiri */}
          <div className="md:w-[60%]">
            <h1 className="text-xl font-bold text-blue-800 mb-2">
              Tentang Kami
            </h1>

            <p className="text-gray-700 leading-6">{about}</p>
          </div>

          {/* kanan */}
          <div>
            <h1 className="text-xl font-bold mb-2">Kontak</h1>

            <div className="space-y-1 text-gray-700">
              <p>{alamat}</p>
              <p>{noHp}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t text-center py-4 text-sm text-gray-600">
        © 2026 TokoKu. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
