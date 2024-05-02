import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-light">Consulta CEP</h1>
      </div>
    </header>
  );
};

export default Header;
