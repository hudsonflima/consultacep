import React from 'react';

const CepResult = ({ address }) => {
  return (
    <div className="mt-4 border border-gray-300 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2 italic">Resultados:</h2>
      <p>
        <span className="font-medium">CEP:</span> {address.cep}
      </p>
      <p>
        <span className="font-medium">Logradouro:</span> {address.logradouro}
      </p>
      <p>
        <span className="font-medium">Bairro:</span> {address.bairro}
      </p>
      <p>
        <span className="font-medium">Cidade:</span> {address.localidade}
      </p>
      <p>
        <span className="font-medium">Estado:</span> {address.uf}
      </p>
      <p>
        <span className="font-medium">Cód. IBGE:</span> {address.ibge}
      </p>
    </div>
  );
};

export default CepResult;
