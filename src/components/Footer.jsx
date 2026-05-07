function Footer({ about, alamat, noHp, email }) {
  return (
    <div className="border-t-2 mt-4 flex justify-between px-8 py-4 shadow-md">
      <div>
        <h1 className="font-bold text-2xl text-blue-800">Tentang Kami</h1>
        <p className="text-left">{about}</p>
      </div>
      <div>
        <p>{alamat}</p>
        <p>{noHp}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Footer;
