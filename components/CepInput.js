import React from 'react';

const CepInput = ({ cep, setCep, handleSearch }) => {
  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={cep}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:border-blue-500"
        placeholder="Digite o CEP..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-600 focus:outline-none"
      >
        Buscar
      </button>
    </div>
  );
};

export default CepInput;
